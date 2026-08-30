<script lang="ts">
	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();
</script>

<div
	class="inline-flex items-center px-2.5 py-1 text-sm text-muted-foreground bg-card border-grid-all hover:bg-accent hover:text-foreground transition-colors cursor-pointer select-none font-medium">
	<span class="before:content-['#']">
		{@render children?.()}
	</span>
</div>
