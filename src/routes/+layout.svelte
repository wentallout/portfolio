<script>
	import ScrollBar from '$lib/components/Layout/ScrollBar.svelte';
	import ProgressBar from '$lib/components/Transition/ProgressBar.svelte';
	import PageTransition from '$lib/components/Transition/PageTransition.svelte';
	import ScrollProgressBar from '$lib/components/Common/ScrollProgressBar.svelte';
	import Cover from '$lib/components/Layout/Cover.svelte';
	import SkipLink from '$lib/components/Layout/SkipLink.svelte';
	import PWA from '$lib/components/PWA/PWA.svelte';
	import BackToTop from '$lib/components/Layout/BackToTop.svelte';
	import Footer from '$lib/components/Layout/Footer.svelte';
	import Header from '$lib/components/Layout/Header.svelte';
	import Breadcrumb from '$lib/components/Layout/Breadcrumb.svelte';

	import '$lib/styles/global.css';

	import { page } from '$app/stores';
	import ThemeToggle from '$lib/components/Theme/ThemeToggle.svelte';

	export let data;
</script>

<!-- MISC -->
<ProgressBar />
<ScrollBar />
<ScrollProgressBar />
<ThemeToggle />
<!--  -->

<SkipLink />
<PWA />
<Cover />
<div class="page-container">
	<BackToTop />
	<Header />

	<PageTransition {data}>
		<main class="main-content" id="main-content">
			<Breadcrumb path={$page.url.pathname} id={$page.route.id} />
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
		background-position: bottom var(--space-xl) left 0, bottom var(--space-xl) right 0;
		background-repeat: no-repeat;
	} */
</style>
