// @ts-nocheck
import adapter from '@sveltejs/adapter-netlify';
import { mdsvex } from 'mdsvex';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeSlug from 'rehype-slug';
import rehypeUnwrapImages from 'rehype-unwrap-images';
import remarkGfm from 'remark-gfm';
import remarkSectionize from 'remark-sectionize';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import sequence from 'svelte-sequential-preprocessor';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import Icons from 'unplugin-icons/vite';
import { imagetools } from 'vite-imagetools';
import { playwright } from '@vitest/browser-playwright';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	build: {
		rollupOptions: { external: ['@resvg/resvg-js'] }
	},
	plugins: [
		tailwindcss(),
		sveltekit({
			extensions: ['.svelte', '.svx'],
			// @ts-expect-error mdsvex plugin types mismatch with unified versions
			preprocess: sequence([
				vitePreprocess(),
				mdsvex({
					extensions: ['.svelte.md', '.md', '.svx'],
					rehypePlugins: [
						rehypeSlug,
						rehypeUnwrapImages,
						[
							// @ts-ignore
							rehypeExternalLinks,
							{
								rel: ['nofollow', 'noopener', 'noreferrer', 'external'],
								target: '_blank'
							} as unknown as Record<string, unknown>
						],
						[rehypeAutolinkHeadings as unknown as never, { behavior: 'wrap' } as unknown as Record<string, unknown>]
					],
					remarkPlugins: [remarkGfm as unknown as never, remarkSectionize as unknown as never]
				})
			]) as never,
			adapter: adapter({ edge: false }),
			env: { dir: '.' }
		}),
		Icons({ compiler: 'svelte', defaultClass: 'icon' }),
		imagetools({
			defaultDirectives: () => {
				return new URLSearchParams({ format: 'webp' });
			}
		})
	],
	server: { port: 1111 },
	optimizeDeps: {
		exclude: ['mode-watcher', '@giscus/svelte', 'svelte-toc', 'sveltekit-embed', 'saos']
	},
	ssr: { noExternal: ['cookie', 'set-cookie-parser', 'gsap', 'split-type', 'motion', /@arcjet\/.*/, 'arcjet'] },
	test: {
		projects: [
			{
				extends: './vite.config.ts',
				test: {
					name: 'client',
					testTimeout: 10000,
					browser: {
						enabled: true,
						provider: playwright(),
						instances: [{ browser: 'chromium' }]
					},
					include: ['src/**/*.svelte.{test,spec}.{js,ts}'],
					exclude: ['src/lib/server/**', 'src/**/*.ssr.{test,spec}.{js,ts}'],
					setupFiles: ['vitest-browser-svelte']
				}
			},
			{
				extends: './vite.config.ts',
				test: {
					name: 'ssr',
					environment: 'node',
					include: ['src/**/*.ssr.{test,spec}.{js,ts}']
				}
			},
			{
				extends: './vite.config.ts',
				test: {
					name: 'server',
					environment: 'node',
					include: ['src/**/*.{test,spec}.{js,ts}'],
					exclude: ['src/**/*.svelte.{test,spec}.{js,ts}', 'src/**/*.ssr.{test,spec}.{js,ts}']
				}
			}
		]
	}
});
