<script lang="ts">
	import './layout.css';
	import { goto } from '$app/navigation';
	import Footer from '#lib/components/layout/footer/Footer.svelte';
	import BottomNav from '#lib/components/layout/bottom/BottomNav.svelte';
	import NavBar from '#lib/components/layout/header/NavBar.svelte';
	import GlassShatter from '#lib/components/GlassShatter.svelte';
	import Revolver from '#lib/components/Revolver.svelte';
	import TargetCursor from '#lib/components/TargetCursor.svelte';
	import Misc from '#lib/sections/layout/Misc.svelte';
	import { attachGlyphnav } from 'glyphnav/sveltekit';
	import { ModeWatcher } from 'mode-watcher';
	import { onMount } from 'svelte';

	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();

	onMount(() => {
		document.documentElement.toggleAttribute('hydrated', true);
		attachGlyphnav(goto, { animatePopState: true, commit: 'before', duration: 250 }).detach;

		// WebMCP: expose site tools to AI agents via browser
		// @ts-expect-error - WebMCP is experimental
		const modelContext = navigator.modelContext ?? document.modelContext;
		const registerTool = modelContext?.registerTool ?? modelContext?.provideContext;

		if (typeof modelContext?.registerTool === 'function') {
			const controller = new AbortController();
			const signal = controller.signal;

			modelContext.registerTool(
				{
					name: 'search_blogs',
					description: 'Search blog posts by keyword. Returns matching titles and URLs.',
					inputSchema: {
						type: 'object',
						properties: {
							query: { type: 'string', description: 'Search keyword' }
						},
						required: ['query']
					}
				},
				async ({ query }) => {
					try {
						const res = await fetch(`/api/blogs`);
						const blogs = await res.json();
						const q = query.toLowerCase();
						const matches = blogs
							.filter((b) => `${b.meta.title} ${b.meta.description || ''}`.toLowerCase().includes(q))
							.slice(0, 5)
							.map((b) => ({ title: b.meta.title, path: b.path }));
						return { query, results: matches };
					} catch (e) {
						return { error: String(e) };
					}
				},
				{ signal }
			);

			modelContext.registerTool(
				{
					name: 'get_projects',
					description: 'List portfolio projects with links',
					inputSchema: { type: 'object', properties: {}, required: [] }
				},
				async () => {
					return {
						projects: [
							{ name: 'NVault', path: '/projects/nvault' },
							{ name: 'Reza', path: '/projects/reza' },
							{ name: 'Stock Grabber', path: '/projects/stock-grabber' },
							{ name: 'Super Tab Manager', path: '/projects/super-tab-manager' }
						]
					};
				},
				{ signal }
			);

			modelContext.registerTool(
				{
					name: 'navigate',
					description: 'Navigate to a site section',
					inputSchema: {
						type: 'object',
						properties: {
							path: {
								type: 'string',
								description: 'Path to navigate to',
								enum: ['/', '/about', '/projects', '/blogs', '/contact', '/design-system']
							}
						},
						required: ['path']
					}
				},
				async ({ path }) => {
					await goto(path);
					return { navigated: path };
				},
				{ signal }
			);

			modelContext.registerTool(
				{
					name: 'get_contact_info',
					description: 'Get contact information for Khoa Nguyen',
					inputSchema: { type: 'object', properties: {}, required: [] }
				},
				async () => {
					return {
						email: 'wentallout@gmail.com',
						booking: 'https://cal.com/wentallout/web',
						linkedin: 'https://linkedin.com/in/wentallout',
						github: 'https://github.com/wentallout'
					};
				},
				{ signal }
			);

			return () => controller.abort();
		} else if (typeof registerTool === 'function') {
			// Fallback for older EPP provideContext API
			// @ts-expect-error - legacy API
			registerTool({
				tools: [
					{
						name: 'get_portfolio_info',
						description: 'Get information about the portfolio projects and skills',
						inputSchema: { type: 'object', properties: {} },
						execute: async () => ({
							contact: 'Use /contact to reach out',
							projects: 'Check /projects for a list of my work',
							skills: 'Check /about for my technical stack'
						})
					},
					{
						name: 'search_blogs',
						description: 'Search blogs',
						inputSchema: {
							type: 'object',
							properties: { query: { type: 'string' } },
							required: ['query']
						},
						execute: async ({ query }) => {
							const res = await fetch('/api/blogs');
							const blogs = await res.json();
							return blogs.filter((b) => b.meta.title.toLowerCase().includes(query.toLowerCase())).slice(0, 5);
						}
					}
				]
			});
		}
	});
</script>

<ModeWatcher defaultMode="system" />
<TargetCursor
	hideDefaultCursor={false}
	hoverDuration={0.2}
	parallaxOn={true}
	spinDuration={2}
	targetSelector=".cursor-target" />
<GlassShatter />
<Revolver />
<Misc />

<div
	class="min-h-screen layout-gutter-bg antialiased selection:bg-primary/25 selection:text-primary transition-colors duration-200">
	<div
		class="max-w-6xl mx-auto border-grid-l border-grid-r min-h-screen flex flex-col bg-background text-foreground relative mb-16 md:mb-0 transition-colors duration-200">
		<NavBar />

		<main id="main-content" class="grow w-full relative z-10">
			{@render children?.()}
		</main>

		<Footer />
	</div>

	<BottomNav />
</div>
