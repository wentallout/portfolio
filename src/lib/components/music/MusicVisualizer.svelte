<script>
	import { onMount } from 'svelte';
	import AudioMotionAnalyzer from 'audiomotion-analyzer';
	let visualizerEl;
	import { audioPlayerEl, isPlaying } from '$lib/stores/musicStore.js';
	let energy;
	let energyHeight;

	onMount(() => {
		new AudioMotionAnalyzer(visualizerEl, {
			source: $audioPlayerEl,
			height: 300,
			mode: 4,
			barSpace: 0,
			ledBars: true,
			colorMode: 'gradient',
			showBgColor: false,
			overlay: true,
			roundBars: true,
			mirror: 1,
			gradient: 'rainbow',
			showPeaks: false,
			showScaleX: false,
			onCanvasDraw: drawCallback
		});
	});

	$: energyHeight = 120 + energy * 150;
	function drawCallback(i) {
		energy = i.getEnergy();
	}
</script>

<div bind:this={visualizerEl} class="visualizer">
	<img
		style="--energyHeight:{energyHeight}px;"
		class="visualizer__logo"
		alt="music visualizer logo"
		src="/images/brand-logo.svg" />

	<img
		class="visualizer__dancer"
		class:dancer-active={$isPlaying}
		alt="gojo"
		src="/images/dancing.webp" />
</div>

<style>
	.visualizer__logo {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto;
		height: var(--energyHeight);
		--shadow: calc(var(--energyHeight) - 100px);
		filter: drop-shadow(0 0 var(--shadow) var(--colorPrimaryHover));
		z-index: -1;
	}

	.visualizer {
		position: relative;
		height: 300px;
	}

	.visualizer__dancer {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		height: 100%;
		width: auto;
		object-fit: contain;
		margin: auto;
		opacity: 0;
		z-index: -1;
		transition: var(--transition);
	}

	.dancer-active {
		opacity: 1;
		z-index: -1;
	}
</style>
