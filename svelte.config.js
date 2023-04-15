import adapter from '@sveltejs/adapter-netlify';
import sveltePreprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

import sequence from 'svelte-sequential-preprocessor';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sequence([
		sveltePreprocess({
			postcss: true
		}),
		mdsvex({
			extensions: ['.svelte.md', '.md', '.svx'],
			rehypePlugins: [
				rehypeSlug,
				[
					rehypeExternalLinks,
					{ rel: ['nofollow', 'noopener', 'noreferrer', 'external'], target: '_blank' }
				],
				[rehypeAutolinkHeadings, { behavior: 'wrap' }]
			]
		})
	]),
	extensions: ['.svelte', '.svx'],
	kit: {
		adapter: adapter({ edge: false }),
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
