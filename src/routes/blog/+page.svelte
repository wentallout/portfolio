<script>
	import BlogCard from '$components/blog/BlogCard.svelte';
	import DarkPaginationNav from '$components/common/DarkPaginationNav.svelte';
	import PageTitle from '$components/common/PageTitle.svelte';
	import TextInput from '$components/input/TextInput.svelte';
	import { Article, MagnifyingGlass } from '$lib/assets/icons/icons';
	import LoadingBarSpinner from '$lib/assets/icons/LoadingBarSpinner.svelte';
	import { allBlogStore } from '$lib/stores/blogStore';
	import BlogListContainer from '$sections/blog/BlogListContainer.svelte';
	import BlogTagsList from '$sections/blog/BlogTagsList.svelte';
	import SectionTitle from '$sections/SectionTitle.svelte';
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

	let paginatedItems = $derived(paginate({ currentPage, items: filteredBlogs, pageSize }));
</script>

<PageTitle pageTitle="Blogs" />

<section class="blog-list">
	<SectionTitle sectionTitle="Blogs">
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
		{#if filteredBlogs.length === 0}
			<LoadingBarSpinner />
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
</style>
