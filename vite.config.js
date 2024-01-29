import { sveltekit } from '@sveltejs/kit/vite';

import Icons from 'unplugin-icons/vite';
import browserslist from 'browserslist';
import { imagetools } from 'vite-imagetools';
import svg from '@poppanator/sveltekit-svg';
import { browserslistToTargets } from 'lightningcss';

import { pagefind } from 'vite-plugin-pagefind';

const pagefindConfig = {
	publicDir: 'static',
	buildDir: 'build'
};

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
		}),
		pagefind(pagefindConfig)
	],

	ssr: {
		noExternal: ['three', 'troika-three-text']
	},

	server: {
		port: '3000'
	},

	preview: {
		port: '4000'
	},
	css: {
		transformer: 'lightningcss',
		lightningcss: {
			targets: browserslistToTargets(browserslist('>= 0.25%'))
		},
		devSourcemap: true
	},
	build: {
		cssMinify: 'lightningcss'
	}
};

export default config;
