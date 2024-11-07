import { sequence } from '@sveltejs/kit/hooks';

import { env } from '$env/dynamic/private';
import arcjet, { shield } from '@arcjet/sveltekit';
import { error, type RequestEvent } from '@sveltejs/kit';

import { i18n } from '$lib/i18n.js';
export const handle = i18n.handle(async (event, resolve) => {
	const { url, request, locals } = event;

	const decision = await aj.protect(event);

	if (decision.isDenied()) {
		return error(403, 'Forbidden');
	}

	// check for Referer header to know where the user is navigating from
	const referer = request.headers.get('Referer');
	if (referer) {
		const urlReferer = new URL(referer);
		if (urlReferer.origin === url.origin) {
			locals.internalReferer = urlReferer;
		}
	}

	await resolve(event, {
		transformPageChunk: ({ html }) =>
			html.replace('%splash-skip%', String(!!locals.internalReferer))
	});
	return resolve(event);
});

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

// arcjet
const aj = arcjet({
	key: env.ARCJET_KEY!, // Get your site key from https://app.arcjet.com
	rules: [
		// Protect against common attacks with Arcjet Shield
		shield({
			mode: 'LIVE' // will block requests. Use "DRY_RUN" to log only
		})
	]
});
