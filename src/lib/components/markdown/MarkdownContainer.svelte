<script lang="ts">
	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();
</script>

<div class="prose dark:prose-invert max-w-none">
	{@render children?.()}
</div>
