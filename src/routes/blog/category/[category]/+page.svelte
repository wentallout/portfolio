<script>
	import BlogCard from '$components/blog/BlogCard.svelte';
	import BlogListContainer from '$sections/blog/BlogListContainer.svelte';
	import Breadcrumb from '$components/other/Breadcrumb.svelte';

	/** @type {{data: any}} */
	let { data } = $props();
</script>

<div class="extra-margin">
	<Breadcrumb />
</div>

<div class="result text-large">
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
	.extra-margin {
		margin-top: var(--space-mid);
	}

	.result {
		margin-top: 0;
		margin-bottom: var(--space-mid);
		color: var(--neutral-900);
		font-family: var(--font-fancy);
	}

	.result__title {
		color: var(--color-text-secondary);
	}

	.result__category {
		color: var(--color-primary);
	}
</style>
