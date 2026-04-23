<script>
	import '$styles/global.css';
	import { onNavigate } from '$app/navigation';
	import BgDeco from '$components/common/BgDeco.svelte';
	import Footer from '$components/layout/footer/Footer.svelte';
	import NavBar from '$lib/components/layout/header/NavBar.svelte';
	import VideoCover from '$lib/components/layout/header/VideoCover.svelte';
	import Misc from '$sections/layout/Misc.svelte';
	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();

	import WaterRipple from '$lib/components/common/WaterRipple.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		if (typeof navigator !== 'undefined' && 'modelContext' in navigator) {
			// @ts-ignore - WebMCP is a new API
			navigator.modelContext.provideContext({
				tools: [
					{
						name: 'get_portfolio_info',
						description: 'Get information about the portfolio projects and skills',
						inputSchema: {
							type: 'object',
							properties: {}
						},
						execute: async () => {
							return {
								projects: 'Check /projects for a list of my work',
								skills: 'Check /about for my technical stack',
								contact: 'Use /contact to reach out'
							};
						}
					}
				]
			});
		}
	});
</script>

<Misc />
<BgDeco />
<VideoCover />
<NavBar />

<WaterRipple>
	<main id="main-content" class="main-content g-container">
		{@render children?.()}
	</main>
</WaterRipple>
<Footer />

<style lang="postcss">
	.main-content {
		position: relative;
		display: flex;
		flex-direction: column;
		min-height: 100dvh;
		z-index: 1;
	}
</style>
