import type { Handle } from '@sveltejs/kit';

import { error, type RequestEvent } from '@sveltejs/kit';
import { aj } from './lib/server/arcjet';

// export const handle: Handle = async ({ event: RequestEvent, resolve: }) => {
// 	const { url, request, locals } = event;

// 	const referer = request.headers.get('Referer');
// 	if (referer) {
// 		const urlReferer = new URL(referer);
// 		if (urlReferer.origin === url.origin) {
// 			locals.internalReferer = urlReferer;
// 		}
// 	}

// 	const filteredRoutes = ['/api/rate-limited', '/rate-limited'];
// 	if (filteredRoutes.includes(event.url.pathname)) {

// 		return resolve(event);
// 	}

// 	const decision = await aj.protect(event);
// 	if (decision.isDenied()) {
// 		return error(403, 'Forbidden');
// 	}

// 	return resolve(event, {
// 		transformPageChunk: ({ html }) =>
// 			html.replace('%splash-skip%', String(!!locals.internalReferer))
// 	});
// };

export const handle: Handle = async ({ event, resolve }) => {
	// Ignore routes that extend the Arcjet rules - they will call `.protect` themselves
	const filteredRoutes = ['/api/rate-limited', '/rate-limited'];
	if (filteredRoutes.includes(event.url.pathname)) {
		// return - route will handle protection
		return resolve(event);
	}

	// Ensure every other route is protected with shield
	const decision = await aj.protect(event);
	if (decision.isDenied()) {
		return error(403, 'Forbidden');
	}

	const response = await resolve(event, {
		preload: ({ type }) => {
			return type === 'font' || type === 'js' || type === 'css';
		}
	});

	// Continue with the route
	return response;
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
