<script lang="ts">
	import MarkdownContainer from '#lib/components/markdown/MarkdownContainer.svelte';
	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();
</script>

<MarkdownContainer>
	{@render children?.()}
</MarkdownContainer>
