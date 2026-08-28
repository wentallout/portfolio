<script>
	import './layout.css';
	import { goto } from '$app/navigation';
	import Footer from '$components/layout/footer/Footer.svelte';
	import BottomNav from '$lib/components/layout/bottom/BottomNav.svelte';
import DarkVeil from '$lib/components/DarkVeil.svelte';
import NavBar from '$lib/components/layout/header/NavBar.svelte';
import TargetCursor from '$lib/components/TargetCursor.svelte';
import Misc from '$sections/layout/Misc.svelte';
	import { attachGlyphnav } from 'glyphnav/sveltekit';
	import { ModeWatcher } from 'mode-watcher';
	import { onMount } from 'svelte';

	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();

	// Random hue per page load — set on client to avoid hydration mismatch
	let veilHue = $state(0);

	onMount(() => {
		veilHue = Math.floor(Math.random() * 360);
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
<TargetCursor targetSelector=".cursor-target" spinDuration={2} hideDefaultCursor={true} hoverDuration={0.2} parallaxOn={true} />
<Misc />

<div
	class="min-h-screen bg-background text-foreground antialiased selection:bg-primary/25 selection:text-primary transition-colors duration-200">
	<div
		class="max-w-6xl mx-auto border-grid-l border-grid-r min-h-screen flex flex-col bg-background relative mb-16 md:mb-0 transition-colors duration-200">
		<NavBar />

		<!-- Layout-scoped DarkVeil — background decor, absolute, doesn't take space or cover text -->
		<div
			class="pointer-events-none absolute inset-x-0 top-0 h-[380px] overflow-hidden opacity-30 dark:opacity-22"
			style="mask-image: linear-gradient(to bottom, black 0%, black 62%, transparent 100%); -webkit-mask-image: linear-gradient(to bottom, black 0%, black 62%, transparent 100%);"
			aria-hidden="true">
			<DarkVeil
				hueShift={veilHue}
				speed={0.35}
				warpAmount={0.6}
				noiseIntensity={0.02}
				scanlineIntensity={0}
				scanlineFrequency={0}
				resolutionScale={1} />
			<!-- contrast protection: veil stays behind content (z-0 vs main z-10) + washes keep text AAA -->
			<div class="absolute inset-0 bg-background/22 dark:bg-background/38 pointer-events-none" aria-hidden="true"></div>
			<div
				class="absolute inset-0 bg-gradient-to-b from-background/0 via-background/12 to-background pointer-events-none"
				aria-hidden="true">
			</div>
		</div>

		<main id="main-content" class="grow w-full relative z-10">
			{@render children?.()}
		</main>

		<Footer />
	</div>

	<BottomNav />
</div>
