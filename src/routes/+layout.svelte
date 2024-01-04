<script>
	import ProgressBar from '$components/loading/ProgressBar.svelte';

	import SkipLink from '$components/button/SkipLink.svelte';
	import PWA from '$components/pwa/PWA.svelte';
	import BackToTop from '$components/button/BackToTop.svelte';
	import Footer from '$components/layout/footer/Footer.svelte';
	import NavBar from '$lib/components/layout/header/NavBar.svelte';

	import '$lib/styles/global.css';
	import Analytics from '$components/analytics/Analytics.svelte';
	import { onNavigate } from '$app/navigation';

	import SparkleMouseTrail from '$components/layout/other/SparkleMouseTrail.svelte';
	import ScrollProgressBar from '$components/layout/other/ScrollProgressBar.svelte';
	import VideoCover from '$lib/components/layout/header/VideoCover.svelte';

	// import { snowflakeCursor } from '$lib/utils/cursorTrail.js';

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

<Analytics />
<SkipLink />

<ScrollProgressBar />
<ProgressBar />

<PWA />
<BackToTop />

<VideoCover />
<NavBar />

<main class="main-content pad" id="main-content">
	<SparkleMouseTrail />
	<slot />
</main>

<Footer />

<style lang="postcss">
	.main-content {
		position: relative;
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		z-index: 1;
	}
</style>
