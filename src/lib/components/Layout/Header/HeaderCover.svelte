<script>
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

	import Logo from '$lib/components/Layout/Header/Logo.svelte';
	import { fade } from 'svelte/transition';
	import { theme } from '$lib/stores/themeStore.js';

	import { page } from '$app/stores';
	import Marquee from '$components/Layout/Other/Marquee.svelte';
	import { onMount } from 'svelte';

	let showCover;

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
		{#if $theme === 'dark'}
			<video transition:fade={{ duration: 300 }} class="video" autoplay muted loop>
				<source src="/videos/city.webm" type="video/webm" />
			</video>
		{:else if $theme === 'light'}
			<video transition:fade={{ duration: 300 }} class="video" autoplay muted loop>
				<source src="/videos/mountains.webm" type="video/webm" />
			</video>
		{/if}

		<Logo />
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

	/* .cover__deco {
		background: url('/images/sonic.svg');
		background-repeat: repeat-x;

		width: 100%;
		height: 14px;
	} */

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

		/* transition: var(--transition); */
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
