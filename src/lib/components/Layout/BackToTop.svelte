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
	<CaretUp color="var(--primary-900)" width="32" height="32" />
</div>

<style>
	.bck2top {
		/* FLEX */
		display: flex;
		justify-content: center;
		align-items: center;
		/*  */

		/* SIZE */
		width: 48px;
		height: 48px;
		/*  */

		/* COLOR */
		background-color: var(--primary-500);
		/*  */

		/* POSITION FIXED ON SCREEN */
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

		backdrop-filter: blur(5px);

		clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
	}
	@media (min-width: 768px) {
		.bck2top {
			width: 64px;
			height: 64px;
		}
	}

	@media (hover: hover) {
		.bck2top:hover {
			cursor: pointer;
			transform: scale(1.2);
			transition: transform 0.3s;
			filter: brightness(1.2);
		}
	}

	.bck2top.hidden {
		opacity: 0;
		visibility: hidden;
	}
</style>
