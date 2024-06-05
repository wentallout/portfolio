import { sveltekit } from '@sveltejs/kit/vite';
import { FontaineTransform } from 'fontaine';
import Icons from 'unplugin-icons/vite';
import { imagetools } from 'vite-imagetools';

import { paraglide } from '@inlang/paraglide-js-adapter-sveltekit/vite';

const fontaineOptions = {
	fallbacks: ['BlinkMacSystemFont', 'Segoe UI', 'Helvetica Neue', 'Arial', 'Roboto', 'Noto Sans']
};

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		FontaineTransform.vite(fontaineOptions),
		paraglide({
			project: './project.inlang',
			outdir: './src/paraglide'
		}),
		sveltekit(),

		Icons({ compiler: 'svelte', defaultClass: 'icon' }),
		imagetools({
			defaultDirectives: () => {
				return new URLSearchParams({
					format: 'webp'
				});
			}
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
