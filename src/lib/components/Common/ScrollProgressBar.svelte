<script>
	let progress = 0;

	import { onMount } from 'svelte';
	let scrollY;
	let innerHeight;

	const updateProgressBar = () => {
		const scrollPosition = scrollY;
		const windowHeight = innerHeight;
		const documentHeight = document.body.clientHeight;
		const progressPercent = Math.round((scrollPosition / (documentHeight - windowHeight)) * 100);
		progress = Math.min(progressPercent, 100);

		if (!isGlowing) {
			startGlowing();
			setTimeout(() => {
				stopGlowing();
			}, 300);
		}
	};

	let isGlowing = false;
	const startGlowing = () => {
		isGlowing = true;
	};

	const stopGlowing = () => {
		isGlowing = false;
	};

	onMount(() => {
		updateProgressBar();
	});
</script>

<svelte:window on:scroll={updateProgressBar} bind:scrollY bind:innerHeight />

<div class="scroll-progress-bar">
	<div class="progress {isGlowing ? 'glowing' : ''}" style="width: {progress}%" />
</div>

<style>
	.glowing {
		animation: glow 0.3s ease-in-out;
	}

	@keyframes glow {
		from {
			box-shadow: 0 0 8px var(--primary-500);
		}
		to {
			box-shadow: 0 0 4px var(--primary-700);
		}
	}

	.scroll-progress-bar {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 2px;

		z-index: var(--z-index-max);
	}

	.progress {
		height: 100%;
		background: linear-gradient(
			90deg,
			#3664e3,
			#a057d8,
			#dd48c0,
			#ff419e,
			#ff5278,
			#ff7353,
			#ff982e,
			#ffbb00
		);
		position: relative;
	}
</style>
