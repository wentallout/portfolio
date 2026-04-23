import type { Handle } from '@sveltejs/kit';

import { building } from '$app/environment';
import { error, type RequestEvent } from '@sveltejs/kit';
import type { Config } from 'web-sentinel';

import { createHandler } from 'web-sentinel/hooks';

const config: Config = {
	log: true,
	preview: true,
	stats_path: undefined,
	http_status: 404,
	country: {
		header: 'x-client-country',
		codes: ['CN', 'IR', 'RU']
	},
	user_agent: {
		exact: ['', 'fasthttp'],
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

const sentinel = createHandler(config);

export const handle: Handle = async ({ event, resolve }) => {
	if (building) {
		return resolve(event);
	}

	const response = await sentinel({ event, resolve });

	// Agent discovery Link headers (RFC 8288)
	const links = [
		'</.well-known/api-catalog>; rel="api-catalog"',
		'</.well-known/agent-skills/index.json>; rel="agent-skills"',
		'</.well-known/mcp/server-card.json>; rel="mcp-server-card"',
		'</about>; rel="service-doc"'
	];

	const currentLink = response.headers.get('Link');
	response.headers.set('Link', currentLink ? `${currentLink}, ${links.join(', ')}` : links.join(', '));

	// Markdown for Agents (Content Negotiation)
	const accept = event.request.headers.get('accept') || '';
	if (accept.includes('text/markdown') && response.headers.get('content-type')?.includes('text/html')) {
		const html = await response.text();

		// Basic HTML to Markdown conversion
		const markdown = html
			.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
			.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
			.replace(/<header\b[^<]*(?:(?!<\/header>)<[^<]*)*<\/header>/gi, '')
			.replace(/<footer\b[^<]*(?:(?!<\/footer>)<[^<]*)*<\/footer>/gi, '')
			.replace(/<nav\b[^<]*(?:(?!<\/nav>)<[^<]*)*<\/nav>/gi, '')
			.replace(/<(h[1-6])[^>]*>(.*?)<\/\1>/gi, (_, tag, content) => {
				const level = tag[1];
				return `\n${'#'.repeat(parseInt(level))} ${content.replace(/<[^>]+>/g, '').trim()}\n`;
			})
			.replace(/<p[^>]*>(.*?)<\/p>/gi, '\n$1\n')
			.replace(/<li[^>]*>(.*?)<\/li>/gi, '\n* $1')
			.replace(/<[^>]+>/g, '')
			.replace(/&nbsp;/g, ' ')
			.replace(/&amp;/g, '&')
			.replace(/&lt;/g, '<')
			.replace(/&gt;/g, '>')
			.replace(/\n\s*\n/g, '\n\n')
			.trim();

		return new Response(markdown, {
			status: response.status,
			headers: {
				...Object.fromEntries(response.headers.entries()),
				'Content-Type': 'text/markdown; charset=utf-8',
				'x-markdown-tokens': 'true'
			}
		});
	}

	return response;
};
