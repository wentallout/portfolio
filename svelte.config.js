import adapter from '@sveltejs/adapter-netlify';
import { mdsvex } from 'mdsvex';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeSlug from 'rehype-slug';
import rehypeUnwrapImages from 'rehype-unwrap-images';
import remarkGfm from 'remark-gfm';
import remarkSectionize from 'remark-sectionize';
import { sveltePreprocess } from 'svelte-preprocess';
import sequence from 'svelte-sequential-preprocessor';

// import cspDirectives from './csp-directives.mjs';

// torch_eYAF6gD0idBcJcmEPVyxVRVmuAHTrcP9mV8s7vTl

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svx'],
	kit: {
		adapter: adapter({ edge: false }),
		alias: {
			$blogImages: './src/lib/assets/images/blogs',
			$components: './src/lib/components',
			$projectImages: './src/lib/assets/images/projects',
			$sections: './src/lib/sections',
			$styles: './src/styles'
		},

		env: {
			dir: '.'
		}
	},
	preprocess: sequence([
		sveltePreprocess(),
		mdsvex({
			extensions: ['.svelte.md', '.md', '.svx'],
			rehypePlugins: [
				rehypeSlug,
				rehypeUnwrapImages,
				[
					rehypeExternalLinks,
					{ rel: ['nofollow', 'noopener', 'noreferrer', 'external'], target: '_blank' }
				],
				[rehypeAutolinkHeadings, { behavior: 'wrap' }]
			],
			remarkPlugins: [remarkGfm, remarkSectionize]
		})
	]),
	vitePlugin: {
		inspector: {
			showToggleButton: 'always',
			toggleButtonPos: 'top-left',
			toggleKeyCombo: 'shift-x'
		}
	}
};

export default config;
