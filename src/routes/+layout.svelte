<script>
	import SkipLink from '$lib/components/Layout/SkipLink.svelte';
	import PWA from '$lib/components/PWA/PWA.svelte';
	import BackToTop from '$lib/components/Layout/BackToTop.svelte';
	import Footer from '$lib/components/Layout/Footer.svelte';
	import Header from '$lib/components/Layout/Header.svelte';
	import Breadcrumb from '$lib/components/Layout/Breadcrumb.svelte';

	// FONTS //
	import '$lib/styles/fonts.css';
	import '@fontsource/inter/latin-300.css';
	import '@fontsource/inter/latin-400.css';
	import '@fontsource/inter/latin-500.css';
	import '@fontsource/inter/latin-600.css';
	// FONTS END //

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

	import { fade } from 'svelte/transition';
	export let data;

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

	import lazyload from 'vanilla-lazyload';
	import { browser } from '$app/environment';

	if (browser && !document.lazyloadInstance) {
		document.lazyloadInstance = new lazyload();
	}
</script>

<svelte:head>
	<meta name="google-site-verification" content="jDcuv7ulyNCJGJg0K24h9h6T_YqP9l5TBbv2DWOHh-w" />
	<!-- <script
		nonce="3101c99666"
		src="//code.tidio.co/aokpqeqijw1qs1ai7dld0svb4eag53ns.js"
		async></script> -->
</svelte:head>

<SkipLink />
<PWA />
<div class="page-container" data-sveltekit-prefetch>
	<BackToTop />

	<Header />

	{#key data.currentRoute}
		<main
			class="main-content"
			id="main-content"
			in:fade={{ duration: 150, delay: 150 }}
			out:fade={{ duration: 150 }}>
			<Breadcrumb path={$page.url.pathname} />
			<slot />
		</main>
	{/key}

	<Footer />
</div>

<style>
	.page-container {
		background: var(--page-bg);
	}

	.main-content {
		display: flex;
		flex-direction: column;
		min-height: calc(100vh - 70px);

		/* Mobile padding */
		padding: var(--space-l) 1rem;
	}

	@media (min-width: 768px) {
		.main-content {
			/* Desktop padding */
			padding: var(--space-l) 17vw;
		}
	}
</style>
