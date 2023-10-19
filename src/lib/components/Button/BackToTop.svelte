<script>
	import UpIcon from '$lib/assets/images/common/UpIcon.svelte';

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

<button type="button" class="bck2top" on:click={goTop} on:keyup={goTop} class:hidden>
	<UpIcon size="24" />
</button>

<style>
	.bck2top {
		/* FLEX */
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		/* --- */

		/* SIZE */
		aspect-ratio: 1/1;
		padding: var(--spaceXS);
		border-radius: 50%;

		width: 48px;
		height: 48px;
		/* --- */

		/* COLOR */

		border: 1px solid var(--colorBorder);
		/* --- */

		/* POSITION FIXED ON SCREEN */
		position: fixed;
		right: var(--spaceS);
		bottom: var(--spaceS);
		z-index: var(--zIndexMax);
		/*  */

		/* OTHER */
		opacity: 1;
		transition:
			opacity 0.3s,
			visibility 0.3s;
		user-select: none;
		line-height: normal;
		/*  */

		box-shadow: var(--boxShadow);
		color: var(--colorText);

		background-color: var(--colorBgElevated);
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
