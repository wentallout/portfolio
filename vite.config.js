// import { enhancedImages } from '@sveltejs/enhanced-img';
import { sveltekit } from '@sveltejs/kit/vite';
import Icons from 'unplugin-icons/vite';
import { imagetools } from 'vite-imagetools';
import devtoolsJson from 'vite-plugin-devtools-json';

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
		}),
		devtoolsJson()
	]
};

export default config;
