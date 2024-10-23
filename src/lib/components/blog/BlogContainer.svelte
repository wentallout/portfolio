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
		display: flex;
		flex-direction: row;

		align-items: flex-start;
		margin-top: var(--space3XL);
		justify-content: space-between;
		gap: var(--spaceM);
	}
	.post-content {
		display: flex;
		flex-direction: column;
		width: 100%;
	}
</style>
