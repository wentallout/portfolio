<script>
	import MarkdownContainer from '$components/markdown/MarkdownContainer.svelte';
	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();
</script>

<MarkdownContainer>
	{@render children?.()}
</MarkdownContainer>

<style>
</style>
