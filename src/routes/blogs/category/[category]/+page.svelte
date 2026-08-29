<script>
	import BlogCard from '$components/blogs/BlogCard.svelte';
	import Breadcrumb from '$components/other/Breadcrumb.svelte';
	import BlogListContainer from '$sections/blogs/BlogListContainer.svelte';

	/** @type {{data: any}} */
	let { data } = $props();
</script>

<div class="w-full bg-background relative">
	<div class="px-6 py-4 border-grid-b bg-background flex flex-col gap-2">
		<Breadcrumb minDepth={1} />
		{#if data.category}
			<h1 class="text-2xl font-medium text-foreground capitalize">#{data.category}</h1>
		{/if}
	</div>

	<BlogListContainer>
		{#each data.blogs as blog (blog.path)}
			<BlogCard
				blogLink={blog.path}
				blogTitle={blog.meta.title}
				hasTags={false} />
		{/each}
	</BlogListContainer>
</div>
