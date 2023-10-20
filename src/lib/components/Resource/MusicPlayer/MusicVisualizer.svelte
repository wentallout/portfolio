<script>
	import { onMount } from 'svelte';
	import AudioMotionAnalyzer from 'audiomotion-analyzer';
	let visualizerEl;

	let energy;
	let energyHeight;

	$: energyHeight = 120 + energy * 150;

	export let audioEleProp;

	onMount(() => {
		function drawCallback(i) {
			energy = i.getEnergy();
		}

		let analyzer = new AudioMotionAnalyzer(visualizerEl, {
			source: audioEleProp,
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
</script>

<audio bind:this={audioEleProp}></audio>

<div class="visualizer" bind:this={visualizerEl}>
	<img
		style="--energyHeight:{energyHeight}px;"
		class="visualizer__logo"
		src="/images/coolLogo.svg"
		alt="music visualizer logo" />
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
		background: url(/images/dancing.webp);
		background-size: contain;
		background-position-x: center;
		background-repeat: no-repeat;
	}
</style>
