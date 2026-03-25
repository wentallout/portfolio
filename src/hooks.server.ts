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

	return sentinel({ event, resolve });
};
