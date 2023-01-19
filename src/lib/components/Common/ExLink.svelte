<script>
	export let href;
	export let ariaLabel;

	let tooltipX = 0;
	let tooltipY = 0;

	function updateTooltipPosition(event) {
		tooltipX = event.clientX + 30;
		tooltipY = event.clientY + 30;
	}
</script>

<a
	on:mousemove={updateTooltipPosition}
	on:focus={updateTooltipPosition}
	aria-label={ariaLabel}
	{href}
	rel="external nofollow noopener noreferrer"
	target="_blank">
	<div class="tooltip small-text" style="top: {tooltipY}px; left: {tooltipX}px">{href}</div>

	<slot />
</a>

<style>
	a {
		position: relative;
		transition: var(--transition);
	}
	.tooltip {
		opacity: 0;
		display: none;

		position: fixed;
		background: rgba(0, 0, 0, 0.9);
		backdrop-filter: blur(5px);
		padding: var(--space-xs);
		z-index: 99;
		transition: var(--transition);
		border-radius: var(--border-radius-light);
		color: var(--text);
		font-weight: 300;
	}
	a:hover .tooltip {
		display: none;
	}
	@media (min-width: 768px) {
		a:hover .tooltip {
			opacity: 1;
			display: block;
		}
	}
</style>
