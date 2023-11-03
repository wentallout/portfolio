<script>
	import LoadingBarSpinner from '$lib/assets/images/other/LoadingBarSpinner.svelte';
	import TextInput from '$components/input/TextInput.svelte';
	import BlogListContainer from '$components/sections/blog/BlogListContainer.svelte';
	import BlogCard from '$components/blog/BlogCard.svelte';
	import PageTitle from '$components/common/PageTitle.svelte';
	import BlogTagsList from '$components/sections/blog/BlogTagsList.svelte';
	import MiniSearch from 'minisearch';
	import { paginate, DarkPaginationNav } from 'svelte-paginate';
	import { onMount } from 'svelte';
	import { allBlogStore } from '$lib/stores/blogStore.js';

	export let data;

	let allBlogs = data.blogs;
	allBlogStore.set(data.blogs);

	let searchTerm = '';
	let filteredBlogs = [];
	let currentPage = 1;
	let pageSize = 24;
	let autoSuggest;
	let miniSearch = new MiniSearch({
		fields: ['meta.title'],
		storeFields: ['meta', 'path'],
		idField: 'meta.title',
		extractField: (document, fieldName) => {
			return fieldName.split('.').reduce((doc, key) => doc && doc[key], document);
		},
		searchOptions: {
			fuzzy: 3
		}
	});

	onMount(() => {
		filteredBlogs = [...allBlogs];
		miniSearch.addAll(filteredBlogs);
	});

	function handleSearchInput(event) {
		searchTerm = event.target.value.toLowerCase();
		filteredBlogs = miniSearch.search(searchTerm, { prefix: true });
		if (searchTerm === '') {
			filteredBlogs = [...allBlogs];
		}
		currentPage = 1;

		let suggestData = miniSearch.autoSuggest(searchTerm, { fuzzy: 0.2 });

		autoSuggest = suggestData.map((item) => item.suggestion);
	}

	$: paginatedItems = paginate({ items: filteredBlogs, pageSize, currentPage });
</script>

<PageTitle pageTitle="Blog" />

<section class="blog-list">
	<search>
		<TextInput
			autoSuggestList={autoSuggest}
			list="search"
			bind:value={searchTerm}
			placeholder="Search blogs..."
			on:input={handleSearchInput} />
	</search>
	<BlogTagsList {data} />

	{#if filteredBlogs.length != 0}
		<DarkPaginationNav
			totalItems={filteredBlogs.length}
			{pageSize}
			{currentPage}
			limit={1}
			showStepOptions={true}
			on:setPage={(e) => (currentPage = e.detail.page)} />
	{/if}

	<BlogListContainer>
		{#if filteredBlogs.length === 0}
			<LoadingBarSpinner />
		{:else}
			{#each paginatedItems as paginatedItem}
				{#key paginatedItem}
					<BlogCard
						blogTitle={paginatedItem.meta.title}
						blogLink={paginatedItem.path}
						blogDate={paginatedItem.meta.date}
						blogTags={paginatedItem.meta.categories} />
				{/key}
			{/each}
		{/if}
	</BlogListContainer>

	{#if filteredBlogs.length != 0}
		<DarkPaginationNav
			totalItems={filteredBlogs.length}
			{pageSize}
			{currentPage}
			limit={1}
			showStepOptions={true}
			on:setPage={(e) => (currentPage = e.detail.page)} />
	{/if}
</section>

<style>
	:global(.dark-pagination-nav .option:hover) {
		background: var(--colorBgElevated) !important;
	}

	:global(.pagination-nav) {
		background-color: transparent !important;
		border-radius: var(--borderRadiusLight) !important;
		box-shadow: none !important;
	}

	:global(.dark-pagination-nav .option) {
		color: var(--colorTextSecondary) !important;
	}

	:global(.dark-pagination-nav .option.active) {
		color: var(--colorPrimary) !important;
	}

	.blog-list {
		margin-top: var(--spaceM);
		min-height: 100vh;
	}
</style>
