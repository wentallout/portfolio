<script>
	import '$styles/global.css';
	import '$styles/splash.css';

	import Footer from '$components/layout/footer/Footer.svelte';
	import NavBar from '$lib/components/layout/header/NavBar.svelte';

	import VideoCover from '$lib/components/layout/header/VideoCover.svelte';

	import Misc from '$sections/Misc.svelte';

	import { onNavigate } from '$app/navigation';
	import BgDeco from '$components/common/BgDeco.svelte';
	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();

	onNavigate(() => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<svelte:head>
	<meta name="view-transition" content="same-origin" />
</svelte:head>

<BgDeco />
<Misc />
<VideoCover />
<NavBar />

<main id="main-content" class="main-content pad">
	{@render children?.()}
</main>

<Footer />

<style lang="postcss">
	.main-content {
		position: relative;
		display: flex;
		flex-direction: column;
		min-height: 100dvh;
		z-index: 1;
	}

	.main-content:before {
		
	}
</style>
