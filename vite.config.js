import { sveltekit } from '@sveltejs/kit/vite';
import Icons from 'unplugin-icons/vite';
import { imagetools } from 'vite-imagetools';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
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
		port: '6969'
	},
	preview: {
		port: '4000'
	},
	ssr: {
		noExternal: ['three', 'troika-three-text']
	}
};

export default config;
