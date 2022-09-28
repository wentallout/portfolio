import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';

import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess(),
		mdsvex({
			extensions: ['.svx']
		})
	],
	extensions: ['.svelte', '.svx'],
	kit: {
		adapter: adapter(),
		prerender: {
			crawl: true,
			enabled: true,
			onError: 'continue',
			entries: ['*']
		}
	},
	vitePlugin: {
		experimental: {
			inspector: true,
			toggleKeyCombo: 'meta-shift',
			// hold and release key to toggle inspector mode
			holdMode: true,
			// show or hide the inspector option
			showToggleButton: 'always',
			// inspector position
			toggleButtonPos: 'top-right'
		}
	}
};

export default config;
