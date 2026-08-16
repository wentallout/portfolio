<script>
	import './layout.css';
	import { goto } from '$app/navigation';
	import Footer from '$components/layout/footer/Footer.svelte';
	import BottomNav from '$lib/components/layout/bottom/BottomNav.svelte';
	import NavBar from '$lib/components/layout/header/NavBar.svelte';
	import Misc from '$sections/layout/Misc.svelte';
	import { attachGlyphnav } from 'glyphnav/sveltekit';
	import { ModeWatcher } from 'mode-watcher';
	import { onMount } from 'svelte';

	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();

	onMount(() => {
		attachGlyphnav(goto, { animatePopState: true, commit: 'before', duration: 250 }).detach;

		// @ts-expect-error - WebMCP is a new API
		const provideContext = document.modelContext?.provideContext;

		if (typeof provideContext === 'function') {
			provideContext({
				tools: [
					{
						description: 'Get information about the portfolio projects and skills',
						execute: async () => {
							return {
								contact: 'Use /contact to reach out',
								projects: 'Check /projects for a list of my work',
								skills: 'Check /about for my technical stack'
							};
						},
						inputSchema: { properties: {}, type: 'object' },
						name: 'get_portfolio_info'
					}
				]
			});
		}
	});
</script>

<ModeWatcher defaultMode="system" />
<Misc />

<div
	class="min-h-screen bg-background text-foreground antialiased selection:bg-primary/25 selection:text-primary transition-colors duration-200">
	<div
		class="max-w-6xl mx-auto border-grid-l border-grid-r min-h-screen flex flex-col bg-background relative mb-16 md:mb-0 transition-colors duration-200">
		<NavBar />

		<main id="main-content" class="grow w-full relative z-10">
			{@render children?.()}
		</main>

		<Footer />
	</div>

	<BottomNav />
</div>
