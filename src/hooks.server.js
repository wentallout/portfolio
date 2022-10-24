const PUBLIC_DOMAIN = 'wentallout.tech';

const directives = {
	'base-uri': ["'self'"],
	'child-src': ["'self'"],
	'connect-src': ["'self'", 'ws://localhost:*', 'wss://socket.tidio.co'],
	// 'connect-src': ["'self'", 'ws://localhost:*', 'https://hcaptcha.com', 'https://*.hcaptcha.com'],
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
	'frame-src': [
		"'self'",
		'https://www.youtube-nocookie.com'
		// "https://*.stripe.com",
		// "https://*.facebook.com",
		// "https://*.facebook.net",
		// 'https://hcaptcha.com',
		// 'https://*.hcaptcha.com',
	],
	'manifest-src': ["'self'"],
	'media-src': ["'self'", 'data:', 'https://*.cloudfront.net', 'https://*.tidiochat.com'],
	'object-src': ["'none'"],
	'style-src': ["'self'", "'unsafe-inline'", 'https://*.cloudfront.net'],
	// 'style-src': ["'self'", "'unsafe-inline'", 'https://hcaptcha.com', 'https://*.hcaptcha.com'],
	'default-src': [
		"'self'",
		PUBLIC_DOMAIN,
		`ws://${PUBLIC_DOMAIN}`
		// 'https://*.google.com',
		// 'https://*.googleapis.com',
		// 'https://*.firebase.com',
		// 'https://*.gstatic.com',
		// 'https://*.cloudfunctions.net',
		// 'https://*.algolia.net',
		// 'https://*.facebook.com',
		// 'https://*.facebook.net',
		// 'https://*.stripe.com',
	],
	'script-src': [
		"'self'",
		"'unsafe-inline'",
		'http://code.tidio.co',
		'https://widget-v4.tidiochat.com'
		// 'https://*.stripe.com',
		// 'https://*.facebook.com',
		// 'https://*.facebook.net',
		// 'https://hcaptcha.com',
		// 'https://*.hcaptcha.com',

		// 'https://polyfill.io',
	],
	'worker-src': ["'self'"],
	'report-to': ["'csp-endpoint'"]
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

	/* Switch from Content-Security-Policy-Report-Only to Content-Security-Policy once you are satisifed policy is what you want
	 * on switch comment out the Report-Only line
	 */
	// response.headers.set('Content-Security-Policy-Report-Only', csp);
	response.headers.set('Content-Security-Policy', csp);
	response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');

	return response;
}
