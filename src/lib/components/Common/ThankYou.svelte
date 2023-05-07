<script>
	import Line from '$components/Common/Line.svelte';
</script>

<div class="end">
	<Line />
	<div class="end__text xl-text rainbow">Thanks for reading.</div>
</div>

<style>
	.end {
		margin-top: var(--space-3xl);
		margin-bottom: var(--space-3xl);
	}

	.end__text {
		display: flex;
		font-family: var(--fancy-font);
		color: var(--colorText);
		padding: var(--space-s) 0;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 100%;
	}
</style>
