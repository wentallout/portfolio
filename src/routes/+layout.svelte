<script>
	import SkipLink from '$lib/components/Layout/SkipLink.svelte';
	import PWA from '$lib/components/PWA/PWA.svelte';
	import BackToTop from './../lib/components/Layout/BackToTop.svelte';
	import Footer from '$lib/components/Layout/Footer.svelte';
	import Header from '$lib/components/Layout/Header.svelte';
	import Breadcrumb from '$lib/components/Layout/Breadcrumb.svelte';

	import LogoContainer from '$lib/components/Layout/LogoContainer.svelte';
	import '$lib/styles/sanitize.css';
	import '$lib/styles/global.css';
	import '$lib/styles/weird.css';
	import 'atropos/css/min';

	import { page } from '$app/stores';
	// loader
	import NProgress from 'nprogress';
	import { navigating } from '$app/stores';
	// NProgress css
	import 'nprogress/nprogress.css';

	NProgress.configure({
		minimum: 0.1,
		showSpinner: false,
		trickle: false,
		easing: 'ease',
		speed: 500
	});

	$: {
		if ($navigating) {
			NProgress.start();
		}
		if (!$navigating) {
			NProgress.done();
		}
	}

	import '@fontsource/lexend/300.css';
	import '@fontsource/lexend/400.css';
	import '@fontsource/lexend/500.css';
	import '@fontsource/lexend/600.css';
	
</script>

<svelte:head>
	<meta name="google-site-verification" content="jDcuv7ulyNCJGJg0K24h9h6T_YqP9l5TBbv2DWOHh-w" />
	<script src="https://js.linkz.ai/?key=6335a0730c2bfd453404a973"></script>
</svelte:head>

<SkipLink />
<PWA />
<div class="page-container">
	<BackToTop />
	<LogoContainer />
	<Header />

	<main id="main-content" class="main-content">
		<Breadcrumb path={$page.url.pathname} />
		<slot />
	</main>

	<Footer />
</div>

<style>
	.page-container {
		background: var(--neutral-100);
		display: flex;
		flex-direction: column;
		scroll-snap-type: y mandatory;
	}
	.main-content {
		background: var(--neutral-100);
		min-height: calc(100vh - 70px);
		margin: var(--space-m) 1rem;
	}

	@media (min-width: 768px) {
		.main-content {
			padding: var(--space-m) 17vw;
		}
	}
</style>
