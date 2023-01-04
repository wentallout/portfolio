import adapter from '@sveltejs/adapter-netlify';
import sveltePreprocess from 'svelte-preprocess';

import { mdsvex } from 'mdsvex';

import rehypeToc from '@jsdevtools/rehype-toc';
import rehypeSlug from 'rehype-slug';
import sequence from 'svelte-sequential-preprocessor';
import { preprocessThrelte } from '@threlte/preprocess';

// const autoprefixer = require("autoprefixer");
// import cssnanoPlugin from 'cssnano';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sequence([
		sveltePreprocess({
			postcss: true
		}),
		mdsvex({
			extensions: ['.svelte.md', '.md', '.svx'],
			rehypePlugins: [rehypeSlug, rehypeToc]
		}),
		preprocessThrelte()
	]),
	extensions: ['.svelte', '.svx'],
	kit: {
		adapter: adapter(),
		prerender: {
			crawl: true,
			handleHttpError: 'warn',
			entries: ['*']
		},
		alias: {
			$blogImages: 'src/lib/assets/images/blog'
		}
		// csp: {
		// 	mode: 'auto',
		// 	directives: { 'script-src': ['self'] }
		// }
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
