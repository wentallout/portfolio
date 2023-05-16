<script>
	import SEO from '$components/SEO/SEO.svelte';
	import TextInput from '$components/Input/TextInput.svelte';
	import BlogListContainer from '$components/Blog/BlogListContainer.svelte';
	import BlogCard from '$components/Blog/BlogCard.svelte';
	import PageTitle from '$components/Common/PageTitle.svelte';
	import BlogTagsList from '$components/Blog/BlogTagsList.svelte';

	import MiniSearch from 'minisearch';
	import { paginate, DarkPaginationNav } from 'svelte-paginate';

	import { fade, slide } from 'svelte/transition';

	export let data;

	let allBlogs = data.blogs;

	import { onMount } from 'svelte';

	let searchTerm = '';
	let filteredBlogs = [];
	let items = [];
	let currentPage = 1;
	let pageSize = 16;

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

		items = [...allBlogs];
		miniSearch.addAll(filteredBlogs);
	});

	function handleSearchInput(event) {
		// SEARCH
		searchTerm = event.target.value.toLowerCase();
		filteredBlogs = miniSearch.search(searchTerm);

		if (searchTerm === '') {
			filteredBlogs = [...allBlogs];
		}
		currentPage = 1;
		// ---

		// AUTO SUGGEST
		let suggestData = miniSearch.autoSuggest(searchTerm, { fuzzy: 0.2 });
		autoSuggest = suggestData.map((item) => item.suggestion);
		// ---
	}

	$: items = filteredBlogs;
	$: paginatedItems = paginate({ items, pageSize, currentPage });
</script>

<SEO title="Blog" />

<PageTitle pageTitle="Blog" decoImageUrl="/images/blog.svg" />

<section class="blog-list">
	<TextInput
		autoSuggestList={autoSuggest}
		list="search"
		bind:value={searchTerm}
		placeholder="Search blogs..."
		on:input={handleSearchInput} />
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
			<div transition:slide|local class="not-found small-text">No blogs found.</div>
		{:else}
			{#each paginatedItems as item}
				{#key item}
					<BlogCard
						blogTitle={item.meta.title}
						blogLink={item.path}
						blogDate={item.meta.date}
						blogTags={item.meta.categories} />
				{/key}
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
		color: var(--colorTextSecondary) !important;
	}

	:global(.dark-pagination-nav .option.active) {
		color: var(--colorPrimary) !important;
	}

	.blog-list {
		margin-top: var(--spaceM);
		min-height: 100vh;
	}

	.not-found {
		padding: var(--spaceSmall) 0;
		color: var(--colorTextSecondary);
	}
</style>
