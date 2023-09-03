<script>
	import LangSwitcher from '$lib/components/Button/LangSwitcher.svelte';
	import ThemeSwitcher from '$lib/components/Button/ThemeSwitcher.svelte';
	import ScrollBar from '$lib/components/Layout/Other/ScrollBar.svelte';
	import ProgressBar from '$components/Transition/ProgressBar.svelte';
	import PageTransition from '$components/Transition/PageTransition.svelte';
	import ScrollProgressBar from '$lib/components/Layout/Other/ScrollProgressBar.svelte';
	import Cover from '$lib/components/Layout/Header/Cover.svelte';
	import SkipLink from '$lib/components/Button/SkipLink.svelte';
	import PWA from '$components/PWA/PWA.svelte';
	import BackToTop from '$lib/components/Button/BackToTop.svelte';
	import Footer from '$components/Layout/Footer/Footer.svelte';
	import Header from '$lib/components/Layout/Header/Header.svelte';
	import Breadcrumb from '$lib/components/Layout/Other/Breadcrumb.svelte';

	import '$lib/styles/global.css';
	import Analytics from '$lib/components/Analytics/Analytics.svelte';
	import { onNavigate } from '$app/navigation';
	export let data;

	onNavigate(() => {
		if (!document.startViewTransition) return;

		return new Promise((fulfil) => {
			document.startViewTransition(() => new Promise(fulfil));
		});
	});
</script>

<!-- MISC START -->
<Analytics />
<SkipLink />
<ScrollProgressBar color="var(--colorPrimary)" />
<ProgressBar />
<ScrollBar />
<PWA />
<BackToTop />
<LangSwitcher />
<ThemeSwitcher />
<!-- MISC END  -->

<Cover />
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
