<script>
	import CustomToc from '$components/blog/BlogToc.svelte';
	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();
</script>

<div class="post-container">
	<div class="post-content">
		{@render children?.()}
	</div>

	<CustomToc />
</div>

<style>
	.post-container {
		margin-top: var(--space3XL);

		gap: var(--spaceM);

		display: grid;
		grid-template-columns: 1fr auto;
	}
	.post-content {
		display: flex;
		flex-direction: column;
		width: 100%;
	}
</style>
