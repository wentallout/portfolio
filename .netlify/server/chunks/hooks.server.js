const PUBLIC_DOMAIN = 'wentallout.tech';
const directives = {
	'base-uri': ["'self'"],
	'child-src': ["'self'"],
	'connect-src': [
		"'self'",
		'ws://localhost:*',
		'wss://socket.tidio.co',
		'https://api.countapi.xyz/hit/:HOST:/:PATHNAME'
	],
	'img-src': [
		"'self'",
		'data:',
		'https://*.cloudfront.net',
		'https://*.amazonaws.com',
		'https://twemoji.maxcdn.com'
	],
	'font-src': ["'self'", 'data:', 'https://widget-v4.tidiochat.com', 'https://*.cloudfront.net'],
	'form-action': ["'self'"],
	'frame-ancestors': ["'self'"],
	'frame-src': ["'self'", 'https://www.youtube-nocookie.com', 'https://open.spotify.com'],
	'manifest-src': ["'self'"],
	'media-src': ["'self'", 'data:', 'https://*.cloudfront.net', 'https://*.tidiochat.com'],
	'object-src': ["'none'"],
	'style-src': ["'self'", "'unsafe-inline'", 'https://*.cloudfront.net'],
	'default-src': ["'self'", PUBLIC_DOMAIN, `ws://${PUBLIC_DOMAIN}`],
	'script-src': [
		"'self'",
		"'unsafe-inline'",
		'http://code.tidio.co',
		'https://widget-v4.tidiochat.com'
	],
	'worker-src': ["'self'"],
	'report-to': ["'csp-endpoint'"]
};
const csp = Object.entries(directives)
	.map(([key, arr]) => key + ' ' + arr.join(' '))
	.join('; ');
async function handle({ event, resolve }) {
	const response = await resolve(event);
	response.headers.set('X-Frame-Options', 'SAMEORIGIN');
	response.headers.set('Referrer-Policy', 'no-referrer');
	response.headers.set(
		'Permissions-Policy',
		'accelerometer=(), autoplay=(), camera=(), document-domain=(), encrypted-media=(), fullscreen=(), gyroscope=(), interest-cohort=(), magnetometer=(), microphone=(), midi=(), payment=(), picture-in-picture=(), publickey-credentials-get=(), sync-xhr=(), usb=(), xr-spatial-tracking=(), geolocation=()'
	);
	response.headers.set('X-Content-Type-Options', 'nosniff');
	response.headers.set('Content-Security-Policy', csp);
	response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
	return response;
}
export { handle };
