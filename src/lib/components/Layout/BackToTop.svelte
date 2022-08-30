<script>
	import CaretCircleUp from '~icons/ph/caret-circle-up';

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

<div class="bck2top" on:click={goTop} class:hidden>
	<CaretCircleUp color="var(--primary)" width="48" height="48" />
</div>

<style>
	.bck2top {
		/* COLOR */
		background-color: var(--black);
		width: 48px;
		height: 48px;
		border-radius: 100%;
		/*  */

		/* POSITION */
		position: fixed;
		right: 30px;
		bottom: 30px;
		z-index: 99;
		/*  */

		/* OTHER */
		opacity: 1;
		transition: opacity 0.3s, visibility 0.3s;
		user-select: none;
		line-height: normal;
		/*  */
	}

	.bck2top:hover {
		cursor: pointer;
		transform: scale(1.5);
		transition: transform 0.3s;
		filter: brightness(1.5);
	}

	.bck2top.hidden {
		opacity: 0;
		visibility: hidden;
	}
</style>
