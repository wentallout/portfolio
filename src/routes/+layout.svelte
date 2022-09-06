<script>
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

<PWA />
<div class="page-container">
	<CoolFrame />
	<BackToTop />
	<LogoContainer />
	<Header />

	<main class="main-content">
		<Breadcrumb path={$page.url.pathname} />
		<slot />
	</main>

	<Footer />
</div>

<style>
	.page-container {
		background-color: var(--background);
		display: flex;
		flex-direction: column;
	}
	.main-content {
		min-height: calc(100vh - 70px);
		padding: var(--space-m) 1rem;
	}

	@media (min-width: 768px) {
		.main-content {
			padding: var(--space-m) 17vw;
		}
	}
</style>
