<script>
	import BlogCard from '$components/Blog/BlogCard.svelte';
	import BlogListContainer from '$components/Blog/BlogListContainer.svelte';

	export let data;
</script>

<div class="result large-text">
	<span class="result__title">Posts about </span>
	<span class="result__category">#{data.category}</span>
</div>
<BlogListContainer>
	{#each data.blogs as blog}
		<BlogCard
			blogTitle={blog.meta.title}
			blogLink={blog.path}
			blogDate={blog.meta.date}
			hasTags={false} />
	{/each}
</BlogListContainer>

<style>
	.result {
		margin-top: 0;
		margin-bottom: var(--space-m);
		color: var(--neutral-900);
		font-family: var(--fancy-font);
	}

	.result__title {
		color: var(--colorTextSecondary);
	}

	.result__category {
		color: var(--colorPrimary);
	}
</style>
