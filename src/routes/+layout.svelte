<script>
	import Rain from '$lib/components/Layout/Rain.svelte';
	import SkipLink from '$lib/components/Layout/SkipLink.svelte';
	import PWA from '$lib/components/PWA/PWA.svelte';
	import BackToTop from '$lib/components/Layout/BackToTop.svelte';
	import Footer from '$lib/components/Layout/Footer.svelte';
	import Header from '$lib/components/Layout/Header.svelte';
	import Breadcrumb from '$lib/components/Layout/Breadcrumb.svelte';

	import '$lib/styles/sanitize.css';
	import '$lib/styles/global.css';
	import '$lib/styles/weird.css';
	import 'atropos/css/min';

	import { page } from '$app/stores';
	// loader
	import NProgress from 'nprogress';
	import { navigating } from '$app/stores';

	import 'nprogress/nprogress.css';

	import { fade } from 'svelte/transition';

	export let data;

	NProgress.configure({
		minimum: 0.1,
		showSpinner: true,
		trickle: true,
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

<div class="page-container">
	<BackToTop />
	<Header />

	{#key data.currentRoute}
		<main
			class="main-content"
			id="main-content"
			in:fade={{ duration: 150, delay: 150 }}
			out:fade={{ duration: 150 }}>
			<Rain />
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
		position: relative;
		display: flex;
		flex-direction: column;

		min-height: 100vh;

		/* Mobile padding */
		padding: var(--space-l) 1rem;
		z-index: 1;
	}

	.main-content:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: url('/images/bg_decor_flower_l.png'), url('/images/bg_decor_flower_r.png');
		z-index: -1;
		background-position: top var(--space-3xl) left 0, top var(--space-3xl) right 0;
		background-repeat: no-repeat;
	}

	.main-content:after {
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
	}

	/* TARGET MOBILE SCREENS TO HIDE DECORATIONS */
	@media (max-width: 991px) {
		.main-content:after,
		.main-content:before {
			display: none;
		}
	}

	@media (min-width: 768px) {
		.main-content {
			padding: var(--space-l) var(--page-padding);
		}
	}
</style>
