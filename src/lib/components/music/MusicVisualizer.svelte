<script>
	import AudioMotionAnalyzer from 'audiomotion-analyzer';
	import { onMount } from 'svelte';
	let visualizerEl;
	import { audioPlayerEl, isPlaying } from '$lib/stores/musicStore.js';
	let energy = $state();
	let energyHeight = $derived(90 + energy * 150);
	let audioMotion;

	function drawCallback(i) {
		energy = i.getEnergy();
	}

	function initializeVisualizer() {
		if (audioPlayerEl && !audioMotion) {
			audioMotion = new AudioMotionAnalyzer(visualizerEl, {
				barSpace: 0,
				colorMode: 'gradient',
				gradient: 'rainbow',
				ledBars: true,
				mirror: 1,
				mode: 4,
				onCanvasDraw: drawCallback,
				overlay: true,
				roundBars: true,
				showBgColor: false,
				showPeaks: false,
				showScaleX: false,
				source: $audioPlayerEl
			});
		}
	}

	onMount(() => {
		// We'll initialize the visualizer when the play button is clicked
		return () => {
			if (audioMotion) {
				audioMotion.destroy();
			}
		};
	});

	$effect(() => {
		if ($isPlaying) {
			initializeVisualizer();
		}
	});
</script>

<div bind:this={visualizerEl} class="visualizer" class:visualizer--playing={$isPlaying}>
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
	.visualizer {
		display: none;
		position: relative;
		height: 100px;
	}

	.visualizer--playing {
		display: block;
	}

	@media (min-width: 768px) {
		.visualizer {
			position: relative;
			height: 300px;
		}
	}
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
