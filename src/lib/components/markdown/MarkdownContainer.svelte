<script>
	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();
</script>

<div class="prose prose-invert max-w-none">
	{@render children?.()}
</div>

