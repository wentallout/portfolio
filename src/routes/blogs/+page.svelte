<script>
	import BlogCard from '$components/blogs/BlogCard.svelte';
	import DarkPaginationNav from '$components/common/DarkPaginationNav.svelte';
	import PageTitle from '$components/common/PageTitle.svelte';
	import TextInput from '$components/input/TextInput.svelte';
	import { Article, MagnifyingGlass } from '$lib/assets/icons/icons';
	import LoadingBarSpinner from '$lib/assets/icons/LoadingBarSpinner.svelte';
	import { blogs } from '$lib/stores/blogStore.svelte.js';
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

	let allBlogs = $derived(data.blogs);

	$effect(() => {
		blogs.all = allBlogs;
	});

	let searchTerm = $state('');
	let filteredBlogs = $state([]);
	let suggestions = $state([]); // For dropdown suggestions
	let currentPage = $state(1);
	let pageSize = 42;
	let isSearching = $state(false);
	let isInitialLoading = $state(true); // Track initial data loading
	let selectedIndex = $state(-1); // For keyboard navigation
	let showDropdown = $state(false);

	let miniSearch = new MiniSearch({
		extractField: (document, fieldName) => {
			return fieldName.split('.').reduce((doc, key) => doc && doc[key], document);
		},
		fields: ['meta.title', 'meta.categories'],
		idField: 'path', // Use path as unique ID
		searchOptions: {
			boost: { 'meta.title': 2 },
			fuzzy: 0.2,
			prefix: true
		},
		storeFields: ['meta', 'path']
	});

	onMount(() => {
		// Initialize data
		filteredBlogs = [...allBlogs];
		miniSearch.addAll(allBlogs);

		// Mark initial loading as complete
		isInitialLoading = false;
	});

	// Simple debounce implementation directly in the component
	let searchTimeout;

	function handleSearchInput(event) {
		// Update the search term immediately for UI responsiveness
		searchTerm = event.target.value;

		if (searchTerm === '') {
			showDropdown = false;
			suggestions = [];
			filteredBlogs = [...allBlogs];
			isSearching = false;
			clearTimeout(searchTimeout);
			currentPage = 1;
			return;
		}

		// Show searching indicator
		isSearching = true;
		showDropdown = true;
		selectedIndex = -1;

		// Clear any existing timeout
		clearTimeout(searchTimeout);

		// Set a new timeout to perform the search after 200ms for suggestions
		searchTimeout = setTimeout(() => {
			// Perform the search for suggestions
			suggestions = miniSearch.search(searchTerm);

			// Hide searching indicator
			isSearching = false;
		}, 200);
	}

	function handleClear() {
		searchTerm = '';
		filteredBlogs = [...allBlogs];
		suggestions = [];
		showDropdown = false;
		selectedIndex = -1;
		currentPage = 1;
		isSearching = false;
		clearTimeout(searchTimeout);
	}

	function handleKeyDown(event) {
		const results = suggestions.slice(0, 8); // Limit dropdown results

		if (event.key === 'ArrowDown') {
			event.preventDefault();
			if (results.length > 0) {
				selectedIndex = (selectedIndex + 1) % results.length;
			}
		} else if (event.key === 'ArrowUp') {
			event.preventDefault();
			if (results.length > 0) {
				selectedIndex = (selectedIndex - 1 + results.length) % results.length;
			}
		} else if (event.key === 'Enter') {
			if (selectedIndex >= 0 && selectedIndex < results.length) {
				event.preventDefault();
				const selected = results[selectedIndex];
				handleSelect(selected);
			} else {
				// Commit current search term to main list
				filteredBlogs = suggestions.length > 0 || searchTerm === '' ? [...suggestions] : [];
				if (searchTerm === '') filteredBlogs = [...allBlogs];
				showDropdown = false;
				currentPage = 1;
				isSearching = false;
				clearTimeout(searchTimeout);
			}
		} else if (event.key === 'Escape') {
			showDropdown = false;
			isSearching = false;
			clearTimeout(searchTimeout);
		}
	}

	function handleSelect(blog) {
		window.location.href = blog.path;
	}

	let paginatedItems = $derived(paginate({ currentPage, items: filteredBlogs, pageSize }));
</script>

<PageTitle pageTitle="Blogs" />

<section class="blog-list" onclick={() => (showDropdown = false)}>
	<SectionTitle
		sectionDesc="I love web design, A.I and the things we can build to make our lives easier."
		sectionTitle="Thoughts and guides">
		{#snippet children({ sectionIcon })}
			<Article {...sectionIcon} />
		{/snippet}
	</SectionTitle>

	<search onclick={(e) => e.stopPropagation()}>
		<TextInput
			{handleClear}
			handleOnInput={handleSearchInput}
			inputValue={searchTerm}
			onkeydown={handleKeyDown}
			placeholder="Search blogs...">
			{#snippet icon()}
				<span>
					<MagnifyingGlass />
				</span>
			{/snippet}
			{#snippet dropdown()}
				{#if showDropdown && searchTerm !== ''}
					<div class="search-dropdown">
						{#if isSearching}
							<div class="dropdown-status">
								<LoadingBarSpinner />
								<span>Searching...</span>
							</div>
						{:else if suggestions.length === 0}
							<div class="dropdown-status">
								<span>No results found for "{searchTerm}"</span>
							</div>
						{:else}
							<ul class="dropdown-list">
								{#each suggestions.slice(0, 8) as blog, i (blog.path)}
									<li>
										<button
											class="dropdown-item"
											class:selected={i === selectedIndex}
											onclick={() => handleSelect(blog)}>
											<div class="item-icon">
												<MagnifyingGlass height="14" width="14" />
											</div>
											<div class="item-content">
												<span class="item-title">{blog.meta.title}</span>
											</div>
										</button>
									</li>
								{/each}
							</ul>
						{/if}
					</div>
				{/if}
			{/snippet}
		</TextInput>
	</search>
	<BlogTagsList {data} />

	{#if filteredBlogs.length != 0}
		<DarkPaginationNav
			{currentPage}
			limit={1}
			onsetPage={(e) => (currentPage = e.detail.page)}
			{pageSize}
			showStepOptions={true}
			totalItems={filteredBlogs.length} />
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
			{#each paginatedItems as paginatedItem (paginatedItem.path)}
				<BlogCard
					blogDate={paginatedItem.meta.date}
					blogLink={paginatedItem.path}
					blogTags={paginatedItem.meta.categories}
					blogTitle={paginatedItem.meta.title} />
			{/each}
		{/if}
	</BlogListContainer>

	{#if filteredBlogs.length != 0}
		<DarkPaginationNav
			{currentPage}
			limit={1}
			onsetPage={(e) => (currentPage = e.detail.page)}
			{pageSize}
			showStepOptions={true}
			totalItems={filteredBlogs.length} />
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

	.search-dropdown {
		background: var(--color-bg-elevated);
		border-radius: var(--border-radius-light);
		box-shadow: var(--boxShadow);
		overflow: hidden;
		width: 100%;
		max-height: 400px;
		overflow-y: auto;
		animation: slideDown 0.2s ease-out;
	}

	@keyframes slideDown {
		from {
			opacity: 0;
			transform: translateY(-10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.dropdown-status {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: var(--space-mid);
		gap: var(--space-s);
		color: var(--color-text-secondary);
	}

	.dropdown-list {
		list-style: none;
		padding: var(--space-3xs);
		margin: 0;
	}

	.dropdown-item {
		width: 100%;
		display: flex;
		align-items: center;
		padding: var(--space-3xs);
		gap: var(--space-s);
		border: none;
		background: transparent;
		cursor: pointer;
		text-align: left;
		transition: var(--transition);
		border-radius: var(--border-radius-light);
	}

	.dropdown-item:hover,
	.dropdown-item.selected {
		background: var(--color-bg-layout);
	}

	.item-icon {
		color: var(--color-text-secondary);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.item-content {
		display: flex;
		flex-direction: column;
		overflow: hidden;
	}

	.item-title {
		color: var(--color-text);
		font-weight: var(--fontWeightMid);
		font-size: var(--font-size-small);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.item-desc {
		color: var(--color-text-secondary);
		font-size: var(--font-size-2xs);
		text-transform: capitalize;
	}
</style>
