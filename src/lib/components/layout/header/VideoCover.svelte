<script>
	import { page } from '$app/state';
	import HeaderLogo from '$components/layout/header/HeaderLogo.svelte';
	import { theme } from '$lib/stores/themeStore.js';
	import { fade } from 'svelte/transition';

	let showCover = $state(false);

	$effect(() => {
		if (page.url.pathname === '/') {
			showCover = true;
		} else {
			showCover = false;
		}
	});
</script>

{#if showCover}
	<div class="cover">
		{#if $theme === 'dark'}
			<video
				class="video"
				autoplay
				fetchpriority="high"
				loop
				muted
				playsinline
				transition:fade={{ duration: 300 }}>
				<source src="/videos/night-waves.mp4" type="video/mp4" />
			</video>
		{/if}

		{#if $theme === 'light'}
			<video
				class="video"
				autoplay
				fetchpriority="high"
				loop
				muted
				playsinline
				transition:fade={{ duration: 300 }}>
				<source src="/videos/light-waves.webm" type="video/webm" />
			</video>
		{/if}

		<HeaderLogo />
	</div>
{/if}

<style>
	.cover {
		display: flex;
		position: relative;
		width: 100%;

		padding-top: var(--scroll-padding);
		padding-bottom: var(--scroll-padding);

		height: 30dvh;
		background-color: var(--color-bg-layout);

		overflow: hidden;
		box-shadow: var(--boxShadow);
	}

	.video {
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		width: 100%;
		object-fit: cover;
		object-position: top;
		filter: brightness(0.6);
	}

	:global([color-scheme='dark'] .video) {
		filter: brightness(0.5);
	}

	:global([color-scheme='dark'] .video__deco) {
		filter: invert(1);
	}

	@media (min-width: 768px) {
		.video {
			animation: updown 50s infinite ease-in-out;
		}
	}

	@keyframes updown {
		0% {
			object-position: top;
		}

		50% {
			object-position: bottom;
		}

		100% {
			object-position: top;
		}
	}
</style>
