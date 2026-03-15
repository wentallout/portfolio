const cspDirectives = {
	'base-uri': ["'self'"],
	'connect-src': [
		"'self'",
		'https://ep1.adtrafficquality.google',
		'https://pagead2.googlesyndication.com'
	],
	'default-src': ["'self'", 'https://ep1.adtrafficquality.google'],
	'form-action': ["'self'"],
	'frame-ancestors': ["'self'"],
	'frame-src': [
		"'self'",
		'https://googleads.g.doubleclick.net',
		'https://www.google.com',
		'https://ep2.adtrafficquality.google',
		'https://w.soundcloud.com',
		'https://giscus.app'
	],
	'img-src': [
		"'self'",
		'data:',
		'https://app.greenweb.org',
		'https://pagead2.googlesyndication.com',
		'https://ep1.adtrafficquality.google',
		'https://shots.codepen.io',
		'https://images.dmca.com',
		'https://api.producthunt.com',
		'https://i.imgur.com'
	],
	'manifest-src': ["'self'"],
	'media-src': ["'self'", 'data:'],
	'object-src': ["'none'"],
	// 'report-to': ["'csp-endpoint'"], // 'csp-endpoint' is not a valid keyword. Use with a Report-To header.
	'script-src': [
		"'self'",
		// SvelteKit's nonce mechanism handles inline scripts
		'https://pagead2.googlesyndication.com',
		'https://ep2.adtrafficquality.google'
	],
	'style-src': ["'self'"], // SvelteKit's nonce mechanism should handle inline styles from components
	'worker-src': ["'self'"]
};

export default cspDirectives;
