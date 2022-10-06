<script>
	import BlogCard from '$lib/components/Blog/BlogCard.svelte';
	import BlogListContainer from '$lib/components/Blog/BlogListContainer.svelte';

	export let data;
</script>

<BlogListContainer>
	{#each data.blogs as blog}
		<BlogCard blogTitle={blog.meta.title} blogLink={blog.path} blogDate={blog.meta.date} />
	{/each}
</BlogListContainer>
