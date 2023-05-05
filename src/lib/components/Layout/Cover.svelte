<script>
	import YinYang from '~icons/ph/yin-yang-fill';

	import { fly } from 'svelte/transition';
	import { theme } from '$lib/stores/themeStore.js';
</script>

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
		<YinYang class="yinyang" width="100%" height="100%" color="var(--colorText)" />
	</a>

	<div class="logo__alter">{'[' + 'wentallout' + ']'}</div>
</div>

<style>
	.cover {
		display: flex;
		position: relative;
		width: 100%;
		height: 240px;
		background-color: var(--colorBgLayout);
	}
	.logo__alter {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		transition: var(--transition);
		font-weight: 600;
		line-height: normal;
		font-size: var(--font-size-mid);
		color: var(--colorWhite);
		user-select: none;
	}

	:global(.yinyang) {
		filter: drop-shadow(0px 0px 10px var(--colorText));
		animation: rotate 3s linear infinite;
		opacity: 0.3;
		transition: var(--transition);
	}

	:global(.yinyang:hover) {
		color: var(--colorPrimary);
		filter: drop-shadow(0px 0px 10px var(--colorPrimary));
		opacity: 1;
	}

	.cover__logo:hover + .logo__alter {
		opacity: 0;
	}

	@keyframes rotate {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	.cover__logo {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 3;
		transition: var(--transition);
		width: var(--space-2xl);
		aspect-ratio: 1/1;
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
		filter: brightness(50%);
		transition: var(--transition);
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
