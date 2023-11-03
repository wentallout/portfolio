<script>
	import HeaderLogo from '$components/layout/Header/HeaderLogo.svelte';
	import { fade } from 'svelte/transition';
	import { theme } from '$lib/stores/themeStore.js';
	import { page } from '$app/stores';
	import Marquee from '$components/layout/Other/Marquee.svelte';
	import { onMount } from 'svelte';
	let latestBlog = 'Loading...';

	onMount(async () => {
		try {
			const response = await fetch(`/api/blog`);
			const allBlogs = await response.json();
			if (allBlogs && allBlogs.length > 0) {
				latestBlog = allBlogs[0].meta.title;
			} else {
				latestBlog = 'No blogs found';
			}
		} catch (error) {
			console.error('Error fetching blog:', error);
			latestBlog = 'Error fetching blog';
		}
	});

	let showCover = true;
	let videoUrl;

	$: if ($theme === 'dark') {
		videoUrl = '/videos/dark.webm';
	} else {
		videoUrl = '/videos/light.webm';
	}

	$: if ($page.url.pathname === '/') {
		showCover = true;
	} else {
		showCover = false;
	}

	let marqueeItems;

	$: marqueeItems = [
		'Mirr Design',
		'Current FE Project: Zen Garden',
		'Current UI/UX Project: Slick Store',
		`Latest Blog: ${latestBlog}`
	];
</script>

{#if showCover}
	<div class="cover">
		{#key videoUrl}
			<video transition:fade={{ duration: 300 }} class="video" autoplay muted loop>
				<source src={videoUrl} type="video/webm" />
			</video>
		{/key}

		<HeaderLogo />
	</div>

	{#if marqueeItems}
		<Marquee items={marqueeItems} />
	{/if}
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

	:global([color-scheme='dark'] .video) {
		/* filter: brightness(50%); */
	}

	/* :global([color-scheme='light'] .video) {
		filter: invert();
	} */

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
