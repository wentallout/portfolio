import { sequence } from '@sveltejs/kit/hooks';

import { i18n } from '$lib/i18n.js';
export const handle = i18n.handle();

const PUBLIC_DOMAIN = 'wentallout.io.vn';

const directives = {
	'base-uri': ["'self'"],
	'child-src': ["'self'"],
	'font-src': ["'self'", 'data:', 'https://*.cloudfront.net'],
	'form-action': ["'self'"],
	'frame-ancestors': ["'self'"],
	'frame-src': [
		"'self'",
		'https://w.soundcloud.com',
		'https://www.youtube-nocookie.com',
		'https://open.spotify.com',
		'https://my.spline.design',
		'https://giscus.app'
	],
	'manifest-src': ["'self'"],
	'media-src': ['*'],
	'object-src': ["'none'"],
	'style-src': ["'self'", "'unsafe-inline'", 'https://*.cloudfront.net'],
	'worker-src': ["'self'"]
};

// const csp = Object.entries(directives)
// 	.map(([key, arr]) => key + ' ' + arr.join(' '))
// 	.join('; ');
