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
	<div class="bck2top__text text-xs">Top</div>
</button>

<style>
	.bck2top {
		aspect-ratio: 1/1;
		width: 48px;

		/* FLEX */
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		/* --- */

		padding: var(--spaceXS);

		/* POSITION FIXED ON SCREEN */
		position: fixed;
		right: 0;
		bottom: 0;
		z-index: var(--zIndexMax);
		/*  */

		/* OTHER */
		opacity: 1;
		transition:
			opacity 0.3s,
			visibility 0.3s;
		user-select: none;
		line-height: normal;
		border-radius: 16px 0 0;
		/*  */

		box-shadow: var(--boxShadow);
		color: var(--colorText);
		background-color: var(--colorBgElevated);
	}

	@media (min-width: 768px) {
		.bck2top {
			width: 64px;
		}
	}

	@media (hover: hover) {
		.bck2top:hover {
			cursor: pointer;
			transform: scale(1.1);
			transition: var(--transition);
			filter: brightness(1.2);
		}
	}

	.bck2top.hidden {
		opacity: 0;
		visibility: hidden;
	}
</style>
