<script>
	import '$styles/global.css';
	import '$styles/splash.css';
	import { onNavigate } from '$app/navigation';
	import AdGoogle from '$components/common/AdGoogle.svelte';
	import BgDeco from '$components/common/BgDeco.svelte';
	import Footer from '$components/layout/footer/Footer.svelte';
	import NavBar from '$lib/components/layout/header/NavBar.svelte';
	import VideoCover from '$lib/components/layout/header/VideoCover.svelte';
	import Misc from '$sections/Misc.svelte';
	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();

	import { onMount } from 'svelte';
	import { setupViewTransition } from 'sveltekit-view-transition';

	setupViewTransition();

	let soundEle = $state();

	onMount(() => {
		document.addEventListener('click', (e) => {
			if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A') {
				soundEle.currentTime = 0; // Restart sound
				soundEle.play();
			}
		});
	});
</script>

<!-- <svelte:head>
	<meta name="view-transition" content="same-origin" />
</svelte:head> -->

<!-- <script nonce="%sveltekit.nonce%" async crossorigin="anonymous"
		src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2238795577080818"></script> -->

<audio bind:this={soundEle} id="clickSound" class="websound" src="/sounds/click.mp3"></audio>

<BgDeco />
<Misc />
<VideoCover />
<NavBar />

<main id="main-content" class="main-content g-container">
	{@render children?.()}
</main>

<Footer />

<!-- <AdGoogle /> -->

<style lang="postcss">
	.websound {
		display: none;
	}

	.main-content {
		position: relative;
		display: flex;
		flex-direction: column;
		min-height: 100dvh;
		z-index: 1;
	}
</style>
