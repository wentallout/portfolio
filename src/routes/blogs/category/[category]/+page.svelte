<script>
	import BlogCard from '$components/blogs/BlogCard.svelte';
	import PageTitle from '$components/common/PageTitle.svelte';
	import BlogListContainer from '$sections/blogs/BlogListContainer.svelte';

	/** @type {{data: any}} */
	let { data } = $props();
</script>

<div class="w-full bg-black relative">
	<PageTitle pageTitle={`Category: #${data.category}`} />

	<BlogListContainer>
		{#each data.blogs as blog (blog.path)}
			<BlogCard
				blogDate={blog.meta.date}
				blogLink={blog.path}
				blogTitle={blog.meta.title}
				hasTags={false} />
		{/each}
	</BlogListContainer>
</div>
