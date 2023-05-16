<script>
	import { fly } from 'svelte/transition';
	import { theme } from '$lib/stores/themeStore.js';

	import { page } from '$app/stores';
	let path = $page.url.pathname;

	let isBlogOrProject;

	$: if ($page.url.pathname.includes('/blog') || $page.url.pathname.includes('/project')) {
		isBlogOrProject = true;
	} else {
		isBlogOrProject = false;
	}
</script>

{#if !isBlogOrProject}
	<div class="cover">
		{#if $theme === 'dark'}
			<video in:fly={{ y: 10, duration: 500 }} class="video" autoplay muted loop>
				<source src="/videos/city.webm" type="video/webm" />
			</video>
		{/if}

		{#if $theme === 'light'}
			<video in:fly={{ y: -10, duration: 500 }} class="video" autoplay muted loop>
				<source src="/videos/mountains.webm" type="video/webm" />
			</video>
		{/if}

		<a aria-label="home" href="/" class="cover__logo">
			<!-- <official-logo class="official-logo" width="100%" height="100%" color="var(--colorText)" /> -->

			<img
				class="official-logo rotate"
				width="300px"
				height="300px"
				src="/images/coolLogo.svg"
				alt="2nd logo" />
		</a>

		<!-- <div class="logo__alter">{'[' + 'wentallout' + ']'}</div> -->
	</div>
{/if}

<style>
	.cover {
		display: flex;
		position: relative;
		width: 100%;
		height: 240px;
		background-color: var(--colorBgLayout);
	}

	.official-logo {
		filter: drop-shadow(0px 0px 10px var(--colorText));

		transition: var(--transition);
	}

	.official-logo:hover {
		color: var(--colorPrimary);
		filter: drop-shadow(0px 0px 10px var(--colorPrimary));
	}

	.cover__logo {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 3;
		transition: var(--transition);

		aspect-ratio: 1/1;
		width: 200px;
	}

	.cover__logo:hover {
		filter: brightness(1.2);
	}

	@media (min-width: 768px) {
		.cover {
			height: 300px;
		}
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
