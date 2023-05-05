<script>
	// CREDIT: kudadam/svelte-scrollprogress

	import { createEventDispatcher } from 'svelte';

	/**@type {string}*/
	let width = '0%';
	/**@type {number}*/
	export let zIndex = 99999;

	export let color = 'var(--colorPrimary)';
	export let background = 'transparent';

	export let height = '4px';
	export let position = 'bottom';

	const dispatch = createEventDispatcher();

	/**
	 * Debounce function based on window, doesn't require you to set
	 * a wait timer
	 * @param {Function} func - Function to debounce
	 * @returns
	 */
	export const debounce = (func) => {
		let timeout;

		return function () {
			let context = this;
			let args = arguments;

			if (timeout) {
				window.cancelAnimationFrame(timeout);
			}

			timeout = window.requestAnimationFrame(function () {
				func.apply(context, args);
			});
		};
	};

	const watchScrolling = () => {
		const { scrollHeight, clientHeight, scrollTop } = document.documentElement;
		const winScroll = document.body.scrollTop || scrollTop;
		const winHeight = scrollHeight - clientHeight;
		const scrolled = `${(winScroll / winHeight) * 100}%`;
		if (winHeight > 0) {
			width = scrolled;
		} else {
			width = '0%';
		}
		dispatch('change', {
			width: width
		});
	};
</script>

<div class="svelte-scrollprogress-container {position}" style:--ssp-background={background}>
	<div
		class="svelte-scrollprogress {position}"
		style:--ssp-color={color}
		style:--ssp-height={height}
		style:--ssp-width={width}
		style:--ssp-z-index={zIndex} />
</div>
<svelte:window on:scroll={debounce(watchScrolling)} on:load={debounce(watchScrolling)} />

<style>
	.svelte-scrollprogress-container {
		position: fixed;
		background: var(--ssp-background);
		width: 100%;
		margin: 0;
		padding: 0;
		left: 0;
		z-index: var(--ssp-z-index);
	}

	.top {
		top: 0;
	}

	.bottom {
		bottom: 0;
	}

	.left {
		height: var(--ssp-width) !important;
		width: var(--ssp-height) !important;
		left: 0;
		bottom: 0;
		top: 0;
	}

	.right {
		top: 0;
		height: var(--ssp-width) !important;
		width: var(--ssp-height) !important;
		right: 0;
		bottom: 0;
		left: initial !important;
	}

	.svelte-scrollprogress {
		z-index: var(--ssp-z-index);
		background: var(--ssp-color);
		height: var(--ssp-height);
		width: var(--ssp-width);
		transition: width 100ms ease-out;
	}
</style>
