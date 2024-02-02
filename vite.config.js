import { sveltekit } from '@sveltejs/kit/vite';
import { FontaineTransform } from 'fontaine';
import Icons from 'unplugin-icons/vite';
import browserslist from 'browserslist';
import { imagetools } from 'vite-imagetools';
import svg from '@poppanator/sveltekit-svg';
import { browserslistToTargets } from 'lightningcss';
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
		})
	],

	ssr: {
		// noExternal: ['three', 'troika-three-text']
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
