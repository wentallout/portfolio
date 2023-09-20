const PUBLIC_DOMAIN = 'wentallout.io.vn';

const directives = {
	'base-uri': ["'self'"],
	'child-src': ["'self'"],
	'font-src': ["'self'", 'data:', 'https://*.cloudfront.net'],
	'form-action': ["'self'"],
	'frame-ancestors': ["'self'"],
	'frame-src': [
		"'self'",
		'https://www.youtube-nocookie.com',
		'https://open.spotify.com',
		'https://my.spline.design',
		'https://giscus.app'
	],
	'manifest-src': ["'self'"],
	'media-src': ["'self'", 'data:', 'https://*.cloudfront.net'],
	'object-src': ["'none'"],
	'style-src': ["'self'", "'unsafe-inline'", 'https://*.cloudfront.net'],
	'worker-src': ["'self'"]
};

const csp = Object.entries(directives)
	.map(([key, arr]) => key + ' ' + arr.join(' '))
	.join('; ');

export async function handle({ event, resolve }) {
	const response = await resolve(event);
	response.headers.set('X-Frame-Options', 'SAMEORIGIN');
	response.headers.set('Referrer-Policy', 'no-referrer');
	response.headers.set(
		'Permissions-Policy',
		'accelerometer=(), autoplay=(), camera=(), document-domain=(), encrypted-media=(), fullscreen=(), gyroscope=(), interest-cohort=(), magnetometer=(), microphone=(), midi=(), payment=(), picture-in-picture=(), publickey-credentials-get=(), sync-xhr=(), usb=(), xr-spatial-tracking=(), geolocation=()'
	);
	response.headers.set('X-Content-Type-Options', 'nosniff');

	response.headers.set('Content-Security-Policy-Report-Only', csp);

	response.headers.set('Content-Security-Policy', csp);
	response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');

	return response;
}
