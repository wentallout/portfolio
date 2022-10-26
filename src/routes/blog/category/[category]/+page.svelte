<script>
	import BlogCard from '$lib/components/Blog/BlogCard.svelte';
	import BlogListContainer from '$lib/components/Blog/BlogListContainer.svelte';

	export let data;

	console.log(data);
</script>

<p class="result large-text">Posts about <strong>{data.category}</strong> :</p>
<BlogListContainer>
	{#each data.blogs as blog}
		<BlogCard blogTitle={blog.meta.title} blogLink={blog.path} blogDate={blog.meta.date} />
	{/each}
</BlogListContainer>

<style>
	.result {
		margin-bottom: var(--space-m);
		font-weight: 300;
		color: var(--neutral-700);
		font-family: var(--fancy-font);
	}
</style>
