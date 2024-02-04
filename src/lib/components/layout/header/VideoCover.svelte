<script>
	import HeaderLogo from '$components/layout/header/HeaderLogo.svelte';
	import { fade } from 'svelte/transition';
	import { theme } from '$lib/stores/themeStore.js';
	import { page } from '$app/stores';

	let showCover = true;

	$: if (
		$page.url.pathname === '/' ||
		$page.url.pathname === '/de' ||
		$page.url.pathname === '/vi'
	) {
		showCover = true;
	} else {
		showCover = false;
	}
</script>

{#if showCover}
	<div class="cover">
		{#if $theme === 'dark'}
			<video playsinline transition:fade={{ duration: 300 }} class="video" autoplay muted loop>
				<source src="/videos/dark.webm" type="video/webm" />
			</video>
		{/if}

		{#if $theme === 'light'}
			<video playsinline transition:fade={{ duration: 300 }} class="video" autoplay muted loop>
				<source src="/videos/light.webm" type="video/webm" />
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

		height: 300px;
		background-color: var(--colorBgLayout);
	}

	.cover::after {
		pointer-events: none;
		content: '';
		position: absolute;
		inset: 0;
		background: var(--smooth-border);
		z-index: 4;
	}

	.video {
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		width: 100%;
		object-fit: cover;
		object-position: top;
	}

	@media (min-width: 768px) {
		.video {
			animation: updown 30s ease-in-out;
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
