<script>
	import SkipLink from '$lib/components/Layout/SkipLink.svelte';
	import PWA from '$lib/components/PWA/PWA.svelte';
	import BackToTop from './../lib/components/Layout/BackToTop.svelte';
	import Footer from '$lib/components/Layout/Footer.svelte';
	import Header from '$lib/components/Layout/Header.svelte';
	import Breadcrumb from '$lib/components/Layout/Breadcrumb.svelte';
	import CoolFrame from '$lib/components/Layout/CoolFrame.svelte';
	import LogoContainer from '$lib/components/Layout/LogoContainer.svelte';
	import '$lib/styles/normalize.css';
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
		speed: 500,
	});

	$: {
		if ($navigating) {
			NProgress.start();
		}
		if (!$navigating) {
			NProgress.done();
		}
	}

	import '@fontsource/poppins/300.css';
	import '@fontsource/poppins/400.css';
	import '@fontsource/poppins/500.css';
	import '@fontsource/poppins/600.css';
</script>

<svelte:head>
	<meta name="google-site-verification" content="jDcuv7ulyNCJGJg0K24h9h6T_YqP9l5TBbv2DWOHh-w" />
</svelte:head>

<SkipLink />
<PWA />
<div class="page-container">
	<CoolFrame />

	<BackToTop />
	<LogoContainer />
	<Header />

	<main id="#main-content" class="main-content">
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
			margin: var(--space-m) 17vw;
		}
	}
</style>
