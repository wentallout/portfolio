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

<div class="w-full bg-black relative">
	<PageTitle pageTitle="Blogs" />

	<section
		class="border-grid-b w-full relative"
		onclick={() => (showDropdown = false)}
		onkeydown={() => (showDropdown = false)}
		role="presentation">
		<SectionTitle
			sectionDesc="Articles on frontend architecture, Svelte 5, modern CSS, UI/UX design, and tech insights."
			sectionTitle="Thoughts, Tutorials & Guides">
			{#snippet children({ sectionIcon })}
				<Article {...sectionIcon} />
			{/snippet}
		</SectionTitle>

		<!-- Searonclick={(e) => e.stopPropagation()} role="presentation"
		<div class="p-6 md:p-8 border-grid-b bg-black relative">
			<span class="grid-plus grid-plus-tl">+</span>
			<span class="grid-plus grid-plus-tr">+</span>
			<search
				role="presentation"
				onclick={(e) => e.stopPropagation()}
				onkeydown={(e) => e.stopPropagation()}>
				<TextInput
					{handleClear}
					handleOnInput={handleSearchInput}
					inputValue={searchTerm}
					onkeydown={handleKeyDown}
					placeholder="Search articles by title or topic...">
					{#snippet icon()}
						<span>
							<MagnifyingGlass />
						</span>
					{/snippet}
					{#snippet dropdown()}
						{#if showDropdown && searchTerm !== ''}
							<div
								class="absolute top-full left-0 z-50 w-full mt-1 bg-neutral-950 border border-neutral-800 shadow-2xl overflow-hidden max-h-96 overflow-y-auto font-sans">
								{#if isSearching}
									<div class="flex items-center justify-center p-4 gap-2 text-sm text-neutral-400">
										<LoadingBarSpinner />
										<span>Searching articles...</span>
									</div>
								{:else if suggestions.length === 0}
									<div class="flex items-center justify-center p-4 gap-2 text-sm text-neutral-400">
										<span>No articles matching "{searchTerm}"</span>
									</div>
								{:else}
									<ul class="p-1 m-0 list-none">
										{#each suggestions.slice(0, 8) as blog, i (blog.path)}
											<li>
												<button
													class="w-full flex items-center p-2.5 gap-2.5 border-none bg-transparent hover:bg-neutral-900 focus:bg-neutral-900 cursor-pointer text-left transition-colors font-sans text-sm rounded-none {i ===
													selectedIndex
														? 'bg-neutral-900'
														: ''}"
													onclick={() => handleSelect(blog)}
													type="button">
													<div class="text-neutral-400 flex items-center justify-center shrink-0">
														<MagnifyingGlass height="14" width="14" />
													</div>
													<div class="flex flex-col overflow-hidden min-w-0">
														<span class="text-white text-sm font-medium truncate"
															>{blog.meta.title}</span>
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
		</div>

		<!-- Tags Blueprint Row -->
		<div class="p-6 md:p-8 border-grid-b bg-black relative">
			<span class="grid-plus grid-plus-tl">+</span>
			<span class="grid-plus grid-plus-tr">+</span>
			<BlogTagsList {data} />
		</div>

		{#if filteredBlogs.length != 0}
			<div class="p-4 border-grid-b bg-black flex justify-center relative">
				<DarkPaginationNav
					{currentPage}
					limit={1}
					onsetPage={(e) => (currentPage = e.detail.page)}
					{pageSize}
					showStepOptions={true}
					totalItems={filteredBlogs.length} />
			</div>
		{/if}

		<BlogListContainer>
			{#if isInitialLoading}
				<div
					class="col-span-full flex flex-col items-center justify-center p-12 text-center text-sm text-neutral-400 font-sans gap-2">
					<LoadingBarSpinner />
					<p>Gathering articles...</p>
				</div>
			{:else if isSearching}
				<div
					class="col-span-full flex flex-col items-center justify-center p-12 text-center text-sm text-neutral-400 font-sans gap-2">
					<LoadingBarSpinner />
					<p>Searching articles...</p>
				</div>
			{:else if filteredBlogs.length === 0 && searchTerm !== ''}
				<div
					class="col-span-full flex flex-col items-center justify-center p-12 text-center text-sm text-neutral-400 font-sans gap-1">
					<p class="text-white font-medium">No matching articles found</p>
					<p class="text-neutral-400">
						We couldn't find any articles matching "{searchTerm}". Try searching another topic!
					</p>
				</div>
			{:else if filteredBlogs.length === 0}
				<div
					class="col-span-full flex flex-col items-center justify-center p-12 text-center text-sm text-neutral-400 font-sans">
					<p>No articles available at the moment.</p>
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
			<div class="p-4 border-grid-b bg-black flex justify-center relative">
				<DarkPaginationNav
					{currentPage}
					limit={1}
					onsetPage={(e) => (currentPage = e.detail.page)}
					{pageSize}
					showStepOptions={true}
					totalItems={filteredBlogs.length} />
			</div>
		{/if}
	</section>

	<ResourceList />
</div>

<style>
	:global(.dark-pagination-nav .option:hover) {
		background: var(--popover) !important;
	}

	:global(.pagination-nav) {
		background-color: transparent !important;
		border-radius: 0 !important;
		box-shadow: none !important;
	}

	:global(.dark-pagination-nav .option) {
		color: var(--muted-foreground) !important;
	}

	:global(.dark-pagination-nav .option.active) {
		color: var(--foreground) !important;
	}
</style>
