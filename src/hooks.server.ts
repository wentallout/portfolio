import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const { url, request, locals } = event;

	// check for Referer header to know where the user is navigating from
	const referer = request.headers.get('Referer');
	if (referer) {
		const urlReferer = new URL(referer);
		if (urlReferer.origin === url.origin) {
			locals.internalReferer = urlReferer;
		}
	}

	return resolve(event, {
		transformPageChunk: ({ html }) =>
			html.replace('%splash-skip%', String(!!locals.internalReferer))
	});
};

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
