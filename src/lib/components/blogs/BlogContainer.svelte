<script>
	import CustomBlogToc from '$components/blogs/CustomBlogToc.svelte';
	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();
</script>

<div class="post-container">
	<div class="post-content">
		{@render children?.()}
	</div>

	<CustomBlogToc />
</div>

<style>
	.post-container {
		margin-top: var(--space-3xl);
		gap: var(--space-mid);
		display: grid;
		grid-template-columns: 1fr auto;
	}
	.post-content {
		display: flex;
		flex-direction: column;
		width: 100%;
	}
</style>
