<script>
	import '$styles/global.css';
	import '$styles/splash.css';

	import Footer from '$components/layout/footer/Footer.svelte';
	import NavBar from '$lib/components/layout/header/NavBar.svelte';
	import { onNavigate } from '$app/navigation';
	import { browser } from '$app/environment';

	import VideoCover from '$lib/components/layout/header/VideoCover.svelte';
	import { ParaglideJS } from '@inlang/paraglide-js-adapter-sveltekit';
	import { i18n } from '$lib/i18n.js';
	import Misc from '$sections/Misc.svelte';

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

<svelte:head>
	<meta name="view-transition" content="same-origin" />
</svelte:head>

<ParaglideJS {i18n}>
	<Misc />
	<VideoCover />
	<NavBar />

	<main id="main-content" class="main-content pad">
		<slot />
	</main>

	<Footer />
</ParaglideJS>

<style lang="postcss">
	.main-content {
		position: relative;
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		z-index: 1;
	}
</style>
