const cspDirectives = {
	'connect-src': [
		"'self'",
		'https://ep1.adtrafficquality.google',
		'https://pagead2.googlesyndication.com'
	],
	'default-src': ["'self'", "'unsafe-inline'", 'https://ep1.adtrafficquality.google'],
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
		'https://api.producthunt.com'
	],
	'manifest-src': ["'self'"],
	'media-src': ["'self'", 'data:'],
	'object-src': ["'none'"],
	'report-to': ["'csp-endpoint'"],
	'script-src': [
		"'self'",
		"'unsafe-inline'",
		'https://pagead2.googlesyndication.com',
		'https://ep2.adtrafficquality.google'
	],
	'style-src': ["'self'", "'unsafe-inline'"],
	'worker-src': ["'self'"]
};

export default cspDirectives;
