import adapter from '@sveltejs/adapter-netlify';
import sveltePreprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';

import { mdsvex } from 'mdsvex';

import rehypeToc from '@jsdevtools/rehype-toc';
import rehypeSlug from 'rehype-slug';
import cssnanoPlugin from 'cssnano';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		sveltePreprocess({
			postcss: {
				plugins: [autoprefixer, cssnanoPlugin]
			}
			/* Other sveltePreprocess options here, like SCSS */
		}),
		mdsvex({
			extensions: ['.svelte.md', '.md', '.svx'],
			rehypePlugins: [rehypeSlug, rehypeToc]
		})
	],
	extensions: ['.svelte', '.svx'],
	kit: {
		adapter: adapter(),
		prerender: {
			crawl: true,
			enabled: true,
			handleHttpError: 'warn',
			entries: ['*']
		},
		alias: {
			// this will match a file
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
