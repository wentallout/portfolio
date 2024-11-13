import { sveltekit } from '@sveltejs/kit/vite';
import { visualizer } from 'rollup-plugin-visualizer';

import Icons from 'unplugin-icons/vite';
import { imagetools } from 'vite-imagetools';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),

		Icons({ compiler: 'svelte', defaultClass: 'icon' }),
		imagetools({
			defaultDirectives: () => {
				return new URLSearchParams({
					format: 'webp'
				});
			}
		}),
		visualizer({
			emitFile: true,
			filename: 'stats.html'
		})
	],

	server: {
		port: '3000'
	},

	preview: {
		port: '4000'
	},
	css: {
		transformer: 'lightningcss',
		devSourcemap: true
	},
	build: {
		cssMinify: 'lightningcss'
	}
};

export default config;
