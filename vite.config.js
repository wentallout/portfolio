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

						// by default svgo removes the viewBox which prevents svg icons from scaling
						// not a good idea! https://github.com/svg/svgo/pull/1461
						params: { overrides: { removeViewBox: false } }
					},
					{ name: 'removeAttrs', params: { attrs: '(fill|stroke)' } }
				]
			}
		}),
		Icons({ compiler: 'svelte' }),
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
	ssr: {
		noExternal: ['three', 'troika-three-text']
	}
};

export default config;
