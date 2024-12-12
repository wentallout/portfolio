<script>
	import { ArrowLineUp } from '$lib/assets/icons/icons';

	/** @type {{showOnPx?: number}} */
	let { showOnPx = 150 } = $props();
	let hidden = $state(true);

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

<svelte:window onscroll={handleOnScroll} />

<button class="bck2top text-xs" class:hidden onclick={goTop} onkeyup={goTop} type="button">
	<ArrowLineUp />
</button>

<style>
	.bck2top {
		aspect-ratio: 1/1;
		padding: var(--space2XS);
		width: 40px;
		height: 40px;

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

		/*  */

		box-shadow: var(--boxShadow);
		color: var(--colorText);
		background: color-mix(in srgb, var(--colorBgElevated) 50%, transparent);
		backdrop-filter: blur(5px);

		border-radius: var(--borderRadius);

		&:hover {
			background: color-mix(in srgb, var(--colorBgElevated) 100%, transparent);
		}
	}

	@media (min-width: 768px) {
		.bck2top {
			padding: var(--spaceXS);
		}
	}

	.bck2top:active {
		color: var(--colorPrimaryActive);
	}

	.bck2top.hidden {
		opacity: 0;
		visibility: hidden;
	}
</style>
