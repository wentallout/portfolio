<script>
	import SocialButtons from '$lib/components/Contact/SocialButtons.svelte';
	import { onMount } from 'svelte';
	import YinYang from '~icons/ph/yin-yang-fill';

	let videoEle;
</script>

<div class="cover">
	<video bind:this={videoEle} class="video" autoplay muted loop>
		<source src="/videos/city.mp4" type="video/mp4" />
	</video>

	<a href="/" class="cover__logo">
		<YinYang class="yinyang" width="72" height="72" color="var(--primary-500)" />
	</a>

	<div class="cover__btn">
		<SocialButtons />
	</div>
</div>

<style>
	:global(.yinyang) {
		filter: drop-shadow(0px 0px 10px var(--primary-500));
		animation: rotate 3s linear infinite;
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
		z-index: 1;
		transition: var(--transition);
	}

	.cover__logo:hover {
		filter: brightness(1.2);
	}

	.cover {
		display: flex;
		position: relative;
		width: 100%;
		height: 300px;
		background-color: var(--bg-500);
	}

	.cover__btn {
		width: 100%;
		position: absolute;
		display: flex;
		justify-content: center;
		bottom: var(--space-s);
		padding-right: 1rem;
		left: 0;
		z-index: 2;
	}

	.cover::after {
		pointer-events: none;
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;

		background: linear-gradient(
			0deg,
			var(--page-bg) 0%,
			rgba(0, 0, 0, 0.5) 12%,
			rgba(0, 0, 0, 0.1) 30%,
			rgba(0, 0, 0, 0) 40%
		);
	}

	.video {
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		width: 100%;
		object-fit: cover;
		filter: brightness(50%);
		transition: var(--transition);
	}
</style>
