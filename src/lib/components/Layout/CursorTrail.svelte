<script>
	import { onMount } from 'svelte';

	let blob;

	let container;

	onMount(() => {
		container.onpointermove = (event) => {
			const { clientX, clientY } = event;

			blob.animate(
				{
					left: `${clientX}px`,
					top: `${clientY}px`
				},
				{ duration: 500, fill: 'forwards' }
			);
		};
	});
</script>

<div bind:this={container} class="blob-container">
	<div bind:this={blob} id="blob" />
	<slot />
</div>

<style>
	/* @keyframes rotate {
		from {
			rotate: 0deg;
		}

		50% {
			scale: 1 1.5;
		}

		to {
			rotate: 360deg;
		}
	} */

	#blob {
		display: none;
		/* background-color: var(--neutral-100); */
		mix-blend-mode: difference;
		pointer-events: none;
		height: 44px;
		aspect-ratio: 1;
		position: fixed;
		left: 50%;
		top: 50%;
		translate: -50% -50%;
		border-radius: 50%;
		border: 0.1px solid var(--neutral-100);

		/* animation: rotate 20s infinite; */
		opacity: 1;

		/* filter: blur(16px); */
		z-index: 99;
	}

	@media (min-width: 992px) {
		#blob {
			display: block;
		}
	}
</style>
