<script>
	import CaretUp from '~icons/ph/caret-up';

	export let showOnPx = 150;
	let hidden = true;

	function goTop() {
		document.body.scrollIntoView();
	}

	function scrollContainer() {
		return document.documentElement || document.body;
	}

	function handleOnScroll() {
		if (!scrollContainer()) {
			return;
		}

		if (scrollContainer().scrollTop > showOnPx) {
			hidden = false;
		} else {
			hidden = true;
		}
	}
</script>

<svelte:window on:scroll={handleOnScroll} />

<div class="bck2top" on:click={goTop} on:keyup={goTop} class:hidden>
	<CaretUp width="24" height="24" color="var(--colorBgElevated)" />
</div>

<style>
	.bck2top {
		/* FLEX */
		display: flex;
		justify-content: center;
		align-items: center;
		/* --- */

		/* SIZE */
		width: 40px;
		height: 40px;
		/* --- */

		/* COLOR */
		background-color: var(--colorPrimary);
		/* --- */

		/* POSITION FIXED ON SCREEN */
		position: fixed;
		right: var(--space-s);
		bottom: var(--space-s);
		z-index: var(--z-index-max);
		/*  */

		/* OTHER */
		opacity: 1;
		transition: opacity 0.3s, visibility 0.3s;
		user-select: none;
		line-height: normal;
		/*  */

		border-radius: 100%;

		box-shadow: var(--boxShadow);
	}
	@media (min-width: 768px) {
		.bck2top {
			width: 56px;
			height: 56px;
		}
	}

	@media (hover: hover) {
		.bck2top:hover {
			cursor: pointer;
			transform: scale(1.1);
			transition: transform 0.3s;
			filter: brightness(1.2);
		}
	}

	.bck2top.hidden {
		opacity: 0;
		visibility: hidden;
	}
</style>
