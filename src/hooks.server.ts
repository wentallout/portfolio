import type { Handle, HandleServerError } from '@sveltejs/kit/hooks';
import { error, type RequestEvent } from '@sveltejs/kit';
import { building, dev } from '$app/env';
// @ts-ignore
import { NEON_AUTH_BASE_URL } from '$app/env/private';
import type { Config } from 'web-sentinel';

import { createHandler } from 'web-sentinel/hooks';
import { getTokenFromRequest, verifyToken, isAdminEmail } from './lib/server/auth.js';
import { createLogger } from './lib/server/logger.js';

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

	let response: Response;
	try {
		const sentinel = dev ? devSentinel : prodSentinel;
		response = await sentinel({ event, resolve });

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
