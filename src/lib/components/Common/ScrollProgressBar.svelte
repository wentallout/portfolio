<script>
	import { createEventDispatcher } from 'svelte';

	/**@type {string}*/
	let width = '0%';
	/**@type {number}*/
	export let zIndex = 999;
	/**@type {string}*/
	export let color = 'tomato';

	/**@type {string}*/
	export let height = '5px';

	export let position = 'bottom';

	const dispatch = createEventDispatcher();

	/**
	 * Debounce function based on window, doesn't require you to set
	 * a wait timer
	 * @param {Function} func - Function to debounce
	 * @returns
	 */
	export const debounce = (func) => {
		/** @type {Number} */
		let timeout;

		/** @return @this {any} */
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

<div class="svelte-scrollprogress-container {position}">
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
		background: transparent;
		width: 100%;
		margin: 0;
		padding: 0;
		left: 0;
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
		z-index: 9999;
		height: var(--ssp-height);
		width: var(--ssp-width);
		transition: width 100ms ease-out;
	}
</style>
