<script>
	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();
</script>

<div class="grid-container">
	{@render children?.()}
</div>

<style>
	.grid-container {
		--min: 25ch;
		--gap: var(--space-mid);

		display: grid;
		grid-gap: var(--gap);
		/* min() with 100% prevents overflow
  in extra narrow spaces */
		grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));

		grid-auto-rows: 1fr;
	}
</style>
