<script>
	import '$styles/markdown/markdown.css';
	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();
</script>

<div class="markdown">
	{@render children?.()}
</div>
