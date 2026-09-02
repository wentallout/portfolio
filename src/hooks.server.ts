import type { Handle, HandleServerError } from '@sveltejs/kit/hooks';
import { error, type RequestEvent } from '@sveltejs/kit';
import { building, dev } from '$app/env';
// @ts-ignore
import { NEON_AUTH_BASE_URL } from '$app/env/private';
import type { Config } from 'web-sentinel';

import { createHandler } from 'web-sentinel/hooks';
import { getTokenFromRequest, verifyToken, isAdminEmail } from './lib/server/auth.js';
import { createLogger } from './lib/server/logger.js';
import { ajGlobal, ajStudio, ajLogin, ajCmsWrite } from './lib/server/arcjet.js';

// dev from $app/env — per https://next.svelte.dev/docs/kit/$app-env
// dev=true on `vite dev`, false in production builds. Use it to allow permissive
// access in dev but enforce maximal bot/probe blocking in production.

const prodConfig: Config = {
	log: true,
	preview: false,
	stats_path: undefined,
	http_status: 404,
	country: {
		header: 'x-client-country',
		codes: ['CN', 'IR', 'RU']
	},
	user_agent: {
		exact: ['fasthttp'],
		prefix: [
			'python-requests/',
			'Go-http-client/',
			'curl/',
			'Wget/',
			'Scrapy/',
			'Python-urllib/',
			'axios/'
		],
		contain: ['HeadlessChrome', 'aiohttp']
	},
	pathname: {
		prefix: [
			'/.env',
			'/.git',
			'/.ssh',
			'/.map',
			'/.yml',
			'/.yaml',
			'/.npmrc',
			'/.well-known/security.txt',
			'/.aws/credentials',
			'/wp-admin',
			'/wp-config',
			'/wp-content',
			'/wp-includes',
			'/cgi-bin',
			'/bash_history',
			'/etc/passwd'
		],
		suffix: [
			'.env',
			'.bak',
			'.cgi',
			'.php',
			'.dat',
			'.rar',
			'.tar',
			'.zip',
			'.gz',
			'.sql',
			'/wlwmanifest.xml',
			'/credentials.txt',
			'/package.json'
		]
	},
	search_params: {
		contain: ['../']
	},
	hostname: {
		suffix: ['.bc.googleusercontent.com', '.appspot.com', '.google.com']
	},
	rule_order: ['country', 'user_agent', 'pathname', 'search_params', 'hostname']
};

// In dev: allow everything so `curl`, headless tests, and local probes are not blocked
const devConfig: Config = {
	log: false,
	preview: true,
	stats_path: undefined,
	http_status: 404,
	country: { header: 'x-client-country', codes: [] },
	user_agent: { exact: [], prefix: [], contain: [] },
	pathname: { prefix: [], suffix: [] },
	search_params: { contain: [] },
	hostname: { suffix: [] },
	rule_order: ['country', 'user_agent', 'pathname', 'search_params', 'hostname']
};

const prodSentinel = createHandler(prodConfig);
const devSentinel = createHandler(devConfig);

export const handle: Handle = async ({ event, resolve }) => {
	if (building) {
		return resolve(event);
	}

	// --- structured logging: requestId + timing ---
	const requestId = crypto.randomUUID();
	event.locals.requestId = requestId;
	const start = performance.now();
	const logger = createLogger(requestId);

	// CMS auth: verify Neon Auth (sets locals.user for Navbar CMS button + /studio guard)
	// Run on all routes so NavBar can show CMS link when admin is logged in
	{
		const token = getTokenFromRequest(event.request);
		let u = null as Awaited<ReturnType<typeof verifyToken>>;
		if (token) u = await verifyToken(token);
		// Fallback: try full cookie header via Better Auth get-session (handles opaque tokens)
		if (!u) {
			const cookie = event.request.headers.get('cookie');
			if (cookie) {
				const base = NEON_AUTH_BASE_URL;
				if (base) {
					try {
						const res = await fetch(`${base.replace(/\/$/, '')}/api/auth/get-session`, {
							headers: { cookie },
							cache: 'no-store'
						});
						if (res.ok) {
							const j = (await res.json()) as { user?: { id: string; email: string; name?: string } };
							if (j?.user?.email) u = { id: j.user.id, email: j.user.email.toLowerCase(), name: j.user.name ?? '' };
						}
					} catch {}
				}
			}
		}
		if (u) {
			event.locals.user = {
				id: u.id,
				email: u.email,
				name: u.name ?? '',
				role: isAdminEmail(u.email) ? 'admin' : 'none'
			};
		} else {
			event.locals.user = null;
		}
	}

	// --- Arcjet: DDoS / brute-force / bot protection (only in prod when key set) ---
	if (!dev && process.env.ARCJET_KEY) {
		const pathname = event.url.pathname;
		let aj: typeof ajGlobal | null = null;
		let requested = 1;
		if (pathname.startsWith('/studio/login')) {
			aj = ajLogin;
		} else if (pathname.startsWith('/studio') || pathname.startsWith('/api/cms')) {
			// mutation endpoints get stricter token bucket
			if (event.request.method !== 'GET' && pathname.startsWith('/api/cms')) {
				aj = ajCmsWrite;
				requested = 5;
			} else {
				aj = ajStudio;
			}
		} else {
			aj = ajGlobal;
		}
		if (aj) {
			try {
				// @ts-ignore Arcjet protect overload includes { requested } for tokenBucket
				const decision = await aj.protect(event, requested !== 1 ? { requested } : undefined);
				// Log Arcjet errors but fail open for availability
				for (const r of decision.results) {
					// @ts-ignore isError exists on reason
					if ((r.reason as unknown as { isError?: () => boolean })?.isError?.()) {
						logger.warn('arcjet_error', {
							type: 'arcjet_error',
							path: pathname,
							reason: (r.reason as unknown as { message?: string }).message
						});
					}
				}
				if (decision.isDenied()) {
					const reason = decision.reason as unknown as {
						isRateLimit: () => boolean;
						isBot: () => boolean;
						isShield: () => boolean;
					};
					let status = 403;
					let message = 'Forbidden';
					if (reason.isRateLimit()) {
						status = 429;
						message = 'Too Many Requests — rate limit exceeded. Try again later.';
					} else if (reason.isBot()) {
						status = 403;
						message = 'Forbidden — automated clients not allowed on this endpoint.';
					} else if (reason.isShield()) {
						status = 403;
						message = 'Forbidden — request blocked by security shield.';
					}
					logger.warn('arcjet_block', {
						type: 'arcjet_block',
						path: pathname,
						method: event.request.method,
						status,
						reason: message,
						ip: event.getClientAddress?.() ?? 'unknown'
					});
					// Return early with security headers for studio
					const headers: Record<string, string> = {
						'content-type': 'text/plain; charset=utf-8',
						'x-request-id': requestId,
						'cache-control': 'no-store',
						'retry-after': status === 429 ? '60' : '0'
					};
					if (pathname.startsWith('/studio') || pathname.startsWith('/api/cms')) {
						headers['x-robots-tag'] = 'noindex, nofollow, noarchive, nosnippet';
						headers['x-frame-options'] = 'DENY';
					}
					return new Response(message, { status, headers });
				}
			} catch (e) {
				// Fail open on Arcjet internal errors — log and continue
				logger.warn('arcjet_exception', {
					type: 'arcjet_exception',
					path: event.url.pathname,
					error: String((e as Error).message ?? e)
				});
			}
		}
	}

	// --- Optional IP allowlist for secret CMS (CMS_ALLOWED_IPS comma-separated) ---
	{
		const allowIps = (process.env.CMS_ALLOWED_IPS ?? '').trim();
		if (allowIps && (event.url.pathname.startsWith('/studio') || event.url.pathname.startsWith('/api/cms'))) {
			const list = allowIps
				.split(',')
				.map((s) => s.trim())
				.filter(Boolean);
			if (list.length > 0) {
				const ip = event.getClientAddress?.() ?? event.request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? '';
				// Allow localhost in dev implicitly even if allowlist set
				const isLocalhost = ip === '127.0.0.1' || ip === '::1' || ip === '::ffff:127.0.0.1';
				if (!list.includes(ip) && !(dev && isLocalhost)) {
					logger.warn('cms_ip_block', {
						type: 'cms_ip_block',
						path: event.url.pathname,
						ip,
						allowlist: list
					});
					return new Response('Not Found', {
						status: 404,
						headers: {
							'content-type': 'text/plain; charset=utf-8',
							'x-request-id': requestId,
							'x-robots-tag': 'noindex, nofollow',
							'cache-control': 'no-store'
						}
					});
				}
			}
		}
	}

	let response: Response;
	try {
		const sentinel = dev ? devSentinel : prodSentinel;
		response = await sentinel({ event, resolve });

		// --- Hardening headers for secret CMS ---
		if (event.url.pathname.startsWith('/studio') || event.url.pathname.startsWith('/api/cms')) {
			// Never index, never cache, deny framing
			response.headers.set('x-robots-tag', 'noindex, nofollow, noarchive, nosnippet, noimageindex');
			response.headers.set('cache-control', 'no-store, no-cache, must-revalidate, private');
			response.headers.set('pragma', 'no-cache');
			response.headers.set('x-frame-options', 'DENY');
			response.headers.set('referrer-policy', 'same-origin');
			// Prevent MIME sniffing
			if (!response.headers.has('x-content-type-options')) {
				response.headers.set('x-content-type-options', 'nosniff');
			}
		}

		// Agent discovery Link headers (RFC 8288) - Only for HTML documents
		if (response.headers.get('content-type')?.includes('text/html')) {
			const links = [
				'</.well-known/api-catalog>; rel="api-catalog"',
				'</.well-known/agent-skills/index.json>; rel="agent-skills"',
				'</.well-known/mcp/server-card.json>; rel="mcp-server-card"',
				'</about>; rel="service-doc"'
			];

			const currentLink = response.headers.get('Link');
			response.headers.set(
				'Link',
				currentLink ? `${currentLink}, ${links.join(', ')}` : links.join(', ')
			);
		}

		// Markdown for Agents (Content Negotiation)
		const accept = event.request.headers.get('accept') || '';
		const isHtml = response.headers.get('content-type')?.includes('text/html');

		if (isHtml) {
			response.headers.append('Vary', 'Accept');
		}

		if (accept.includes('text/markdown') && isHtml) {
			const html = await response.text();

			// Basic HTML to Markdown conversion
			const markdown = html
				.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
				.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
				.replace(/<header\b[^<]*(?:(?!<\/header>)<[^<]*)*<\/header>/gi, '')
				.replace(/<footer\b[^<]*(?:(?!<\/footer>)<[^<]*)*<\/footer>/gi, '')
				.replace(/<nav\b[^<]*(?:(?!<\/nav>)<[^<]*)*<\/nav>/gi, '')
				.replace(/<(h[1-6])[^>]*>(.*?)<\/\1>/gi, (_: string, tag: string, content: string) => {
					const level = tag[1];

					return `\n${'#'.repeat(parseInt(level))} ${content.replace(/<[^>]+>/g, '').trim()}\n`;
				})
				.replace(/<a[^>]+href="([^"]+)"[^>]*>(.*?)<\/a>/gi, '[$2]($1)')
				.replace(/<img[^>]+src="([^"]+)"[^>]+alt="([^"]*)"[^>]*>/gi, '![$2]($1)')
				.replace(/<p[^>]*>(.*?)<\/p>/gi, '\n$1\n')
				.replace(/<li[^>]*>(.*?)<\/li>/gi, '\n* $1')
				.replace(/<[^>]+>/g, '')
				.replace(/&nbsp;/g, ' ')
				.replace(/&amp;/g, '&')
				.replace(/&lt;/g, '<')
				.replace(/&gt;/g, '>')
				.replace(/\n\s*\n/g, '\n\n')
				.trim();

			const headers = new Headers(response.headers);
			headers.delete('content-length');
			headers.delete('content-encoding');
			headers.delete('etag');
			headers.delete('last-modified');
			headers.set('content-type', 'text/markdown; charset=utf-8');
			headers.set('x-markdown-tokens', 'true');

			response = new Response(markdown, {
				status: response.status,
				headers
			});
		}
	} catch (err) {
		// Let handleError log; rethrow so SvelteKit invokes it
		throw err;
	} finally {
		// Attach requestId to response for correlation
		// This runs even if sentinel throws — response may be undefined in that path
	}

	// Structured request log (JSON line). Skip noisy assets in dev if desired — here we log all.
	const duration = Math.round(performance.now() - start);
	// Don't log 404 probe blocks as errors — just as requests; handleError covers real 5xx
	logger.info('request', {
		type: 'request',
		method: event.request.method,
		path: event.url.pathname + event.url.search,
		status: response!.status,
		duration_ms: duration,
		userId: event.locals.user?.id ?? null
	});

	// Expose requestId to client/proxies for tracing — not sensitive
	response!.headers.set('x-request-id', requestId);

	return response!;
};

export const handleError: HandleServerError = async ({ error, event }) => {
	const requestId = (event?.locals as App.Locals | undefined)?.requestId ?? crypto.randomUUID();
	// Normalize error for logging (SvelteKit wraps in { kind, error } )
	const raw = error as unknown;
	const err = raw instanceof Error ? raw : new Error(String((raw as { message?: string })?.message ?? raw ?? 'Unknown error'));
	const status =
		typeof (raw as { status?: unknown })?.status === 'number'
			? (raw as { status: number }).status
			: 500;

	createLogger(requestId).error(err.message, {
		type: 'error',
		path: event?.url?.pathname ?? 'unknown',
		status,
		stack: err.stack,
		cause: (err as Error & { cause?: unknown }).cause
	});

	return {
		message: 'Internal server error',
		requestId
	};
};
