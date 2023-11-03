<script>
	import ScrollBar from '$components/Layout/Other/ScrollBar.svelte';
	import ProgressBar from '$components/transition/ProgressBar.svelte';
	import PageTransition from '$components/transition/PageTransition.svelte';

	import HeaderCover from '$components/layout/Header/HeaderCover.svelte';
	import SkipLink from '$components/button/SkipLink.svelte';
	import PWA from '$components/pwa/PWA.svelte';
	import BackToTop from '$components/button/BackToTop.svelte';
	import Footer from '$components/layout/Footer/Footer.svelte';
	import Header from '$components/layout/Header/Header.svelte';
	import Breadcrumb from '$components/layout/Other/Breadcrumb.svelte';

	import '$lib/styles/global.css';
	import Analytics from '$components/analytics/Analytics.svelte';
	import { onNavigate } from '$app/navigation';
	import ThemeSwitcher from '$components/button/ThemeSwitcher.svelte';
	export let data;

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

<!-- MISC START -->

<Analytics />
<SkipLink />

<ProgressBar />
<ScrollBar />
<PWA />
<BackToTop />

<ThemeSwitcher />
<!-- MISC END  -->

<HeaderCover />
<Header />

<PageTransition {data}>
	<main class="main-content global-container" id="main-content">
		<Breadcrumb />
		<slot />
	</main>
</PageTransition>

<Footer />

<style lang="postcss">
	.main-content {
		position: relative;
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		z-index: 1;
		/* background-color: var(--colorBgLayout); */
	}

	/* .main-content:after {
		z-index: -1;
		content: '';
		position: absolute;
		bottom: 0;
		right: 0;
		width: 100%;
		height: 100%;
		background: url('/images/bg_decor_line_l.png'), url('/images/bg_decor_line_r.png');
		background-position: bottom var(--spaceXL) left 0, bottom var(--spaceXL) right 0;
		background-repeat: no-repeat;
	} */
</style>
