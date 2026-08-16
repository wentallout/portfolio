<script>
	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();
</script>

<div class="inline-flex items-center px-2.5 py-1 text-sm text-neutral-400 bg-neutral-950 border-grid-all hover:bg-neutral-900 hover:text-white transition-colors cursor-pointer select-none font-medium">
	<span class="before:content-['#']">
		{@render children?.()}
	</span>
</div>


