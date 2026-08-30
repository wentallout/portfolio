<script lang="ts">
	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();
</script>

<div class="grid grid-cols-1 md:grid-cols-3 grid-cols-gapless-3 gap-0 relative items-stretch">
	{@render children?.()}
</div>
