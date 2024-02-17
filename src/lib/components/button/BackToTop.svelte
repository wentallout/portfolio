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

<button class="bck2top text-xs" class:hidden type="button" on:click={goTop} on:keyup={goTop}>
	<UpIcon />
	<div class="bck2top__text">Top</div>
</button>

<style>
	.bck2top {
		width: 48px;
		aspect-ratio: 1/1;

		/* FLEX */
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		/* --- */

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

	.bck2top:active {
		color: var(--colorPrimaryActive);
	}

	@media (min-width: 768px) {
		.bck2top {
			width: 56px;
			aspect-ratio: 1/1;
		}
	}

	.bck2top.hidden {
		opacity: 0;
		visibility: hidden;
	}

	.bck2top__text {
		font-weight: 600;
	}
</style>
