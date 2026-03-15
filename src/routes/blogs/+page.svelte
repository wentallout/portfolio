<script>
	import BlogCard from '$components/blogs/BlogCard.svelte';
	import DarkPaginationNav from '$components/common/DarkPaginationNav.svelte';
	import PageTitle from '$components/common/PageTitle.svelte';
	import TextInput from '$components/input/TextInput.svelte';
	import { Article, MagnifyingGlass } from '$lib/assets/icons/icons';
	import LoadingBarSpinner from '$lib/assets/icons/LoadingBarSpinner.svelte';
	import { allBlogStore } from '$lib/stores/blogStore';
	import BlogListContainer from '$sections/blogs/BlogListContainer.svelte';
	import BlogTagsList from '$sections/blogs/BlogTagsList.svelte';
	import ResourceList from '$sections/blogs/ResourceList.svelte';
	import SectionTitle from '$sections/layout/SectionTitle.svelte';
	import MiniSearch from 'minisearch';
	import { onMount } from 'svelte';

	const paginate = ({ currentPage, items, pageSize }) => {
		return items.slice((currentPage - 1) * pageSize, (currentPage - 1) * pageSize + pageSize);
	};

	let { data } = $props();

	let allBlogs = data.blogs;
	allBlogStore.set(allBlogs);

	let searchTerm = $state('');
	let filteredBlogs = $state([]);
	let currentPage = $state(1);
	let pageSize = 42;
	let autoSuggest = $state();
	let isSearching = $state(false);
	let isInitialLoading = $state(true); // Track initial data loading
	let miniSearch = new MiniSearch({
		extractField: (document, fieldName) => {
			return fieldName.split('.').reduce((doc, key) => doc && doc[key], document);
		},
		fields: ['meta.title'],
		idField: 'meta.title',
		searchOptions: {
			fuzzy: 3
		},
		storeFields: ['meta', 'path']
	});

	onMount(() => {
		// Initialize data
		filteredBlogs = [...allBlogs];
		miniSearch.addAll(filteredBlogs);

		// Mark initial loading as complete
		isInitialLoading = false;
	});

	// Simple debounce implementation directly in the component
	let searchTimeout;

	function handleSearchInput(event) {
		// Update the search term immediately for UI responsiveness
		searchTerm = event.target.value.toLowerCase();

		// Show searching indicator
		isSearching = true;

		// Clear any existing timeout
		clearTimeout(searchTimeout);

		// Set a new timeout to perform the search after 300ms
		searchTimeout = setTimeout(() => {
			// Perform the search
			if (searchTerm === '') {
				filteredBlogs = [...allBlogs];
			} else {
				filteredBlogs = miniSearch.search(searchTerm, { prefix: true });
			}

			// Reset to first page
			currentPage = 1;

			// Update auto-suggestions
			let suggestData = miniSearch.autoSuggest(searchTerm, { fuzzy: 0.2 });
			autoSuggest = suggestData.map((item) => item.suggestion);

			// Hide searching indicator
			isSearching = false;
		}, 300); // 300ms debounce delay
	}

	let paginatedItems = $derived(paginate({ currentPage, items: filteredBlogs, pageSize }));
</script>

<PageTitle pageTitle="Blogs" />

<section class="blog-list">
	<SectionTitle
		sectionDesc="I love web design, A.I and the things we can build to make our lives better."
		sectionTitle="Thoughts and guides">
		{#snippet children({ sectionIcon })}
			<Article {...sectionIcon} />
		{/snippet}
	</SectionTitle>

	<search>
		<TextInput
			autoSuggestList={autoSuggest}
			handleOnInput={handleSearchInput}
			inputValue={searchTerm}
			list="search"
			placeholder="Search blogs...">
			{#snippet icon()}
				<span>
					<MagnifyingGlass />
				</span>
			{/snippet}
		</TextInput>
	</search>
	<BlogTagsList {data} />

	{#if filteredBlogs.length != 0}
		<DarkPaginationNav
			{currentPage}
			limit={1}
			{pageSize}
			showStepOptions={true}
			totalItems={filteredBlogs.length}
			on:setPage={(e) => (currentPage = e.detail.page)} />
	{/if}

	<BlogListContainer>
		{#if isInitialLoading}
			<div class="search-status">
				<LoadingBarSpinner />
				<p>Loading blogs...</p>
			</div>
		{:else if isSearching}
			<div class="search-status">
				<LoadingBarSpinner />
				<p>Searching...</p>
			</div>
		{:else if filteredBlogs.length === 0 && searchTerm !== ''}
			<div class="search-status">
				<p>No results found for "{searchTerm}"</p>
			</div>
		{:else if filteredBlogs.length === 0}
			<div class="search-status">
				<p>No blogs available</p>
			</div>
		{:else}
			{#each paginatedItems as paginatedItem}
				{#key paginatedItem}
					<BlogCard
						blogDate={paginatedItem.meta.date}
						blogLink={paginatedItem.path}
						blogTags={paginatedItem.meta.categories}
						blogTitle={paginatedItem.meta.title} />
				{/key}
			{/each}
		{/if}
	</BlogListContainer>

	{#if filteredBlogs.length != 0}
		<DarkPaginationNav
			{currentPage}
			limit={1}
			{pageSize}
			showStepOptions={true}
			totalItems={filteredBlogs.length}
			on:setPage={(e) => (currentPage = e.detail.page)} />
	{/if}
</section>

<ResourceList />

<style>
	:global(.dark-pagination-nav .option:hover) {
		background: var(--color-bg-elevated) !important;
	}

	:global(.pagination-nav) {
		background-color: transparent !important;
		border-radius: var(--border-radius-light) !important;
		box-shadow: none !important;
	}

	:global(.dark-pagination-nav .option) {
		color: var(--color-text-secondary) !important;
	}

	:global(.dark-pagination-nav .option.active) {
		color: var(--color-primary) !important;
	}

	.search-status {
		grid-column: 1 / -1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: var(--space-large);
		text-align: center;
		color: var(--color-text-secondary);
	}

	.search-status p {
		margin-top: var(--space-s);
	}
</style>
