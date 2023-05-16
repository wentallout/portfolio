<script>
	import ThemeToggle from '$components/Theme/ThemeToggle.svelte';
	import ScrollBar from '$components/Layout/ScrollBar.svelte';
	import ProgressBar from '$components/Transition/ProgressBar.svelte';
	import PageTransition from '$components/Transition/PageTransition.svelte';
	import ScrollProgressBar from '$components/Common/ScrollProgressBar.svelte';
	import Cover from '$components/Layout/Cover.svelte';
	import SkipLink from '$components/Layout/SkipLink.svelte';
	import PWA from '$components/PWA/PWA.svelte';
	import BackToTop from '$components/Layout/BackToTop.svelte';
	import Footer from '$components/Layout/Footer.svelte';
	import Header from '$components/Layout/Header.svelte';
	import Breadcrumb from '$components/Layout/Breadcrumb.svelte';

	import '$lib/styles/global.css';
	export let data;
</script>

<!-- MISC -->
<SkipLink />
<ScrollProgressBar color="var(--colorPrimary)" />
<ProgressBar />
<ScrollBar />
<ThemeToggle />
<!--  -->

<PWA />
<Cover />
<div class="page-container">
	<BackToTop />
	<Header />

	<PageTransition {data}>
		<main class="main-content" id="main-content">
			<Breadcrumb />
			<slot />
		</main>
	</PageTransition>

	<Footer />
</div>

<style>
	.main-content {
		position: relative;
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		padding: 0 var(--page-padding);
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
