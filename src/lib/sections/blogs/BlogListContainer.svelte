<script>
	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();
</script>

<div class="blogs">
	{@render children?.()}
</div>

<style>
	.blogs {
		/* CUSTOM VALUE */
		--min: 36ch;
		--gap: var(--space-small);
		/* --- */

		/* SPACING */
		margin-top: var(--space-large);
		margin-bottom: var(--space-large);
		/* --- */

		/* GRID */
		display: grid;
		grid-gap: var(--gap);
		grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));
		/* --- */
	}
</style>
