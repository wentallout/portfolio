import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess(),
		mdsvex({
			extensions: ['.svx'],
		}),
	],
	extensions: ['.svelte', '.svx'],
	kit: {
		adapter: adapter(),
		prerender: {
			crawl: true,
			enabled: true,
			onError: 'continue',
			entries: ['*'],
		},
	},
};

export default config;
