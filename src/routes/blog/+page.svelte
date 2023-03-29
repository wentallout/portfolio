<script>
	import TextInput from '$lib/components/Input/TextInput.svelte';
	import BlogListContainer from '$lib/components/Blog/BlogListContainer.svelte';
	import BlogCard from '$lib/components/Blog/BlogCard.svelte';
	import PageTitle from '$lib/components/Common/PageTitle.svelte';
	import BlogTagsList from '$lib/components/Blog/BlogTagsList.svelte';

	import { paginate, DarkPaginationNav } from 'svelte-paginate';

	export let data;

	let allBlogs = data.blogs;

	import { onMount } from 'svelte';

	let searchTerm = '';
	let filteredBlogs = [];
	let items = [];

	onMount(() => {
		filteredBlogs = [...allBlogs];
		items = [...allBlogs];
	});

	function handleSearchInput(event) {
		searchTerm = event.target.value.toLowerCase();
		filteredBlogs = allBlogs.filter((blog) => blog.meta.title.toLowerCase().includes(searchTerm));
	}

	let currentPage = 1;
	let pageSize = 8;
	$: paginatedItems = paginate({ items, pageSize, currentPage });
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<PageTitle pageTitle="Blog" decoImageUrl="/images/blog.svg" />

<TextInput bind:value={searchTerm} placeholder="Search blogs..." on:input={handleSearchInput} />

<section class="blog-list">
	<BlogTagsList {data} />
	{#if filteredBlogs.length != 0}
		<DarkPaginationNav
			totalItems={items.length}
			{pageSize}
			{currentPage}
			limit={1}
			showStepOptions={true}
			on:setPage={(e) => (currentPage = e.detail.page)} />
	{/if}
	<BlogListContainer>
		{#if filteredBlogs.length === 0}
			<div class="not-found small-text">No blogs found.</div>
		{:else}
			{#each paginatedItems as item}
				<BlogCard blogTitle={item.meta.title} blogLink={item.path} blogDate={item.meta.date} />
			{/each}
		{/if}
	</BlogListContainer>
	{#if filteredBlogs.length != 0}
		<DarkPaginationNav
			totalItems={items.length}
			{pageSize}
			{currentPage}
			limit={1}
			showStepOptions={true}
			on:setPage={(e) => (currentPage = e.detail.page)} />
	{/if}
</section>

<style>
	:global(.pagination-nav) {
		background-color: transparent !important;
		border-radius: var(--border-radius-light) !important;
		box-shadow: none !important;
	}

	:global(.dark-pagination-nav .option) {
		color: var(--text-color-low) !important;
	}

	:global(.dark-pagination-nav .option.active) {
		color: var(--primary-500) !important;
	}

	.blog-list {
		margin-top: var(--space-m);
		min-height: 100vh;
	}

	.not-found {
		padding: var(--space-s) 0;
		color: var(--text-color-low);
	}
</style>
