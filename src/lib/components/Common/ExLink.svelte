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
	<div class="tooltip" style="top: {tooltipY}px; left: {tooltipX}px">{href}</div>

	<slot />
</a>

<style>
	a {
		position: relative;
		transition: 0.3s;
	}
	.tooltip {
		display: block;
		opacity: 0;
		position: fixed;
		background: var(--black);
		padding: 1rem;
		z-index: 99;
		transition: opacity 0.3s;
		border-radius: var(--border-radius-light);
		color: var(--text);
	}

	a:hover .tooltip {
		opacity: 1;
	}
</style>
