<script>
	import ArrowLineUp from '~icons/ph/arrow-line-up';

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
	<ArrowLineUp width="24" height="24" />
	<div class="bck2top__text">Top</div>
</button>

<style>
	.bck2top {
		aspect-ratio: 1/1;
		padding: var(--space2XS);

		/* FLEX */
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: var(--space2XS);
		/* --- */

		/* POSITION FIXED ON SCREEN */
		position: fixed;
		right: 8px;
		bottom: 8px;
		z-index: var(--zIndexMax);
		/*  */

		/* OTHER */
		opacity: 1;
		transition:
			opacity 0.3s,
			visibility 0.3s;
		user-select: none;
		line-height: normal;
		border-radius: 16px;
		/*  */

		box-shadow: var(--boxShadow);
		color: var(--colorText);
		background-color: var(--colorBgElevated);
	}

	@media (min-width: 768px) {
		.bck2top {
			padding: var(--spaceXS);
			aspect-ratio: 1/1;
		}
	}

	.bck2top:active {
		color: var(--colorPrimaryActive);
	}

	.bck2top.hidden {
		opacity: 0;
		visibility: hidden;
	}

	.bck2top__text {
		font-family: var(--fontFancy);
		font-weight: 600;
	}
</style>
