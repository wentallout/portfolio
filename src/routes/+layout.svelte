<script>
	import '$styles/global.css';
	import { onNavigate } from '$app/navigation';
	import AdGoogle from '$components/common/AdGoogle.svelte';
	import BgDeco from '$components/common/BgDeco.svelte';
	import Footer from '$components/layout/footer/Footer.svelte';
	import NavBar from '$lib/components/layout/header/NavBar.svelte';
	import VideoCover from '$lib/components/layout/header/VideoCover.svelte';
	import Misc from '$sections/layout/Misc.svelte';
	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();

	import WaterRipple from '$lib/components/common/WaterRipple.svelte';
	import { onMount } from 'svelte';
</script>

<svelte:head>
	<meta name="view-transition" content="same-origin" />
</svelte:head>

<!-- <script nonce="%sveltekit.nonce%" async crossorigin="anonymous"
		src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2238795577080818"></script> -->

<BgDeco />
<Misc />
<VideoCover />
<NavBar />

<WaterRipple>
	<main id="main-content" class="main-content g-container">
		{@render children?.()}
	</main>
</WaterRipple>
<Footer />

<style lang="postcss">
	.main-content {
		position: relative;
		display: flex;
		flex-direction: column;
		min-height: 100dvh;
		z-index: 1;
	}
</style>
