import adapter from '@sveltejs/adapter-netlify';
import sveltePreprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';
import path from 'path';

import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		sveltePreprocess({
			postcss: {
				plugins: [autoprefixer]
			}
			/* Other sveltePreprocess options here, like SCSS */
		}),
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
		},
		alias: {
			// this will match a file
			$blogImages: 'src/lib/assets/images/blog'
		}
	},
	vitePlugin: {
		experimental: {
			inspector: true,
			toggleKeyCombo: 'meta-shift',
			holdMode: true,
			showToggleButton: 'always',
			toggleButtonPos: 'top-right'
		}
	}
};

export default config;
