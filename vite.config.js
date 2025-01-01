// import { enhancedImages } from '@sveltejs/enhanced-img';
import { sveltekit } from '@sveltejs/kit/vite';
// import { visualizer } from 'rollup-plugin-visualizer';
import Icons from 'unplugin-icons/vite';
import { imagetools } from 'vite-imagetools';

/** @type {import('vite').UserConfig} */
const config = {
	build: {
		cssMinify: 'lightningcss'
	},
	css: {
		transformer: 'lightningcss'
	},

	plugins: [
		// enhancedImages(),
		sveltekit(),

		Icons({ compiler: 'svelte', defaultClass: 'icon' }),
		imagetools({
			defaultDirectives: () => {
				return new URLSearchParams({
					format: 'webp'
				});
			}
		})

		// ,
		// visualizer({
		// 	emitFile: true,
		// 	filename: 'stats.html'
		// })
	],

	preview: {
		port: '4000'
	},
	server: {
		port: '3000'
	}
};

export default config;
