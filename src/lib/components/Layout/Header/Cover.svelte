<script>
	import Logo from '$lib/components/Layout/Header/Logo.svelte';
	import { fly } from 'svelte/transition';
	import { theme } from '$lib/stores/themeStore.js';

	import { page } from '$app/stores';

	let showCover;

	$: if ($page.url.pathname === '/') {
		showCover = true;
	} else {
		showCover = false;
	}
</script>

{#if showCover}
	<div class="cover">
		{#if $theme === 'dark'}
			<video in:fly|global={{ y: 10 }} class="video" autoplay muted loop>
				<source src="/videos/city.webm" type="video/webm" />
			</video>
		{/if}

		{#if $theme === 'light'}
			<video in:fly|global={{ y: -10 }} class="video" autoplay muted loop>
				<source src="/videos/mountains.webm" type="video/webm" />
			</video>
		{/if}

		<Logo />
	</div>
{/if}

<style>
	.cover {
		display: flex;
		position: relative;
		width: 100%;
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

		transition: var(--transition);
	}

	:global([color-scheme='dark'] .video) {
		filter: brightness(50%);
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
