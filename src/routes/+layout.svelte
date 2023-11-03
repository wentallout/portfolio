<script>
	import ProgressBar from '$components/loading/ProgressBar.svelte';
	import HeaderCover from '$components/layout/header/HeaderCover.svelte';
	import SkipLink from '$components/button/SkipLink.svelte';
	import PWA from '$components/pwa/PWA.svelte';
	import BackToTop from '$components/button/BackToTop.svelte';
	import Footer from '$components/layout/footer/Footer.svelte';
	import Header from '$components/layout/header/Header.svelte';
	import Breadcrumb from '$components/layout/other/Breadcrumb.svelte';

	import '$lib/styles/global.css';
	import Analytics from '$components/analytics/Analytics.svelte';
	import { onNavigate } from '$app/navigation';
	import ThemeSwitcher from '$components/button/ThemeSwitcher.svelte';

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

<ProgressBar />

<PWA />
<BackToTop />

<ThemeSwitcher />

<HeaderCover />
<Header />

<main class="main-content global-container" id="main-content">
	<Breadcrumb />
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
