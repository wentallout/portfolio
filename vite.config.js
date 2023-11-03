import { sveltekit } from '@sveltejs/kit/vite';

import Icons from 'unplugin-icons/vite';

import { imagetools } from 'vite-imagetools';
import svg from '@poppanator/sveltekit-svg';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		svg({
			includePaths: ['./src/lib/assets/images/'],
			svgoOptions: {
				multipass: true,
				plugins: [
					{
						name: 'preset-default',
						params: { overrides: { removeViewBox: false } }
					}
					// { name: 'removeAttrs', params: { attrs: '(fill|stroke)' } }
				]
			}
		}),
		Icons({ compiler: 'svelte', defaultClass: 'icon' }),
		imagetools({
			defaultDirectives: () => {
				return new URLSearchParams({
					format: 'webp'
				});
			}
		})
	],

	ssr: {
		noExternal: ['three', 'troika-three-text']
	},

	server: {
		port: '3000'
	},

	preview: {
		port: '4000'
	}
};

export default config;
