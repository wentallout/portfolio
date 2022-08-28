<script>
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

	import IconContext from 'phosphor-svelte/lib/IconContext';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

	<link
		href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<IconContext values={{ color: 'var(--black)', size: 32, mirrored: false, weight: 'regular' }}>
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
</IconContext>

<style>
	.page-container {
		background-color: var(--white);

		display: flex;
		flex-direction: column;
	}
	.main-content {
		min-height: calc(100vh - 70px);
		padding: 2rem 10vw;
	}

	@media (min-width: 768px) {
		.main-content {
			padding: 2rem 17vw;
		}
	}
</style>
