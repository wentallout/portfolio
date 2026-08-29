import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import Icons from 'unplugin-icons/vite';
import { imagetools } from 'vite-imagetools';

// import devtoolsJson from 'vite-plugin-devtools-json';
/** @type {import('vite').UserConfig} */
const config = {
	build: {
		rollupOptions: { external: ['@resvg/resvg-js'] }
	},

	plugins: [
		tailwindcss(),
		sveltekit(),
		Icons({ compiler: 'svelte', defaultClass: 'icon' }),
		imagetools({
			defaultDirectives: () => {
				return new URLSearchParams({ format: 'webp' });
			}
		})

		// devtoolsJson()
	],
	server: { port: 1111 },
	optimizeDeps: {
		exclude: ['mode-watcher', '@giscus/svelte', 'svelte-toc', 'sveltekit-embed', 'saos']
	},
	ssr: { noExternal: ['gsap', 'split-type', 'motion', /@arcjet\/.*/, 'arcjet'] }
};

export default config;
