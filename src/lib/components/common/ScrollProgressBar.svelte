<div id="progress"></div>

<style>
	:root {
		scroll-timeline: --page-scroll block;
	}

	@keyframes grow-progress {
		from {
			transform: scaleX(0);
		}
		to {
			transform: scaleX(1);
		}
	}

	#progress {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 1px;
		background: var(--colorPrimary);
		z-index: var(--zIndexMax);
		transform-origin: 0 50%;
		animation: grow-progress auto linear;
		animation-timeline: --page-scroll;
	}
</style>
