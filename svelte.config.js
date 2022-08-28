import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
	},
	vitePlugin: {
		experimental: {
			prebundleSvelteLibraries: true,
		},
	},
};

export default config;
