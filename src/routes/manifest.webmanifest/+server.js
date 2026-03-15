import website from '$lib/config.js';

export const GET = function get({ setHeaders }) {
	const { backgroundColor, description, siteShortTitle, siteTitle, themeColor } = website;
	const manifest = {
		background_color: backgroundColor,
		description,
		display: 'standalone',
		icons: [
			{ purpose: 'any', sizes: '192x192', src: '/icon-192-any.png', type: 'image/png' },
			{ purpose: 'any', sizes: '512x512', src: '/icon-512-any.png', type: 'image/png' },
			{ purpose: 'maskable', sizes: '192x192', src: '/icon-192-maskable.png', type: 'image/png' },
			{ purpose: 'maskable', sizes: '512x512', src: '/icon-512-maskable.png', type: 'image/png' }
		],
		name: siteTitle,
		short_name: siteShortTitle,
		start_url: '/',
		theme_color: themeColor
	};
	setHeaders({
		'content-type': 'application/json'
	});
	return new Response(JSON.stringify(manifest));
};
