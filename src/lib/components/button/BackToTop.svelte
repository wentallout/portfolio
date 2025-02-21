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

<button class="bck2top" class:hidden onclick={goTop} onkeyup={goTop} type="button">
	<ArrowLineUp />
</button>

<style>
	@keyframes progress {
		0% {
			--progress: 0%;
		}

		100% {
			--progress: 100%;
		}
	}

	@property --progress {
		syntax: '<length-percentage>';
		inherits: false;
		initial-value: 0%;
	}
	.bck2top {
		aspect-ratio: 1/1;
		width: 40px;

		/* FLEX */
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		/* --- */

		/* POSITION FIXED ON SCREEN */
		position: fixed;
		right: 12px;
		bottom: 12px;
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

		border-radius: var(--borderRadius);

		background-image: linear-gradient(
			var(--colorPrimary) 0% var(--progress),
			var(--colorBgElevated) var(--progress) 100%
		);

		animation: progress linear;
		animation-timeline: scroll();

		&:hover {
			filter: brightness(1.2);
		}

		&:active {
			color: var(--colorPrimaryActive);
		}

		&.hidden {
			opacity: 0;
			visibility: hidden;
		}
	}

	@media (min-width: 768px) {
		.bck2top {
			padding: var(--spaceXS);
			width: 56px;
		}
	}
</style>
