<script>
	import PageTitle from '$components/common/PageTitle.svelte';
	import { debounce } from '$lib/utils/debounce.js';
	
	// Sample data for demonstration
	const sampleData = Array.from({ length: 1000 }, (_, i) => ({
		id: i + 1,
		title: `Item ${i + 1}`,
		category: ['A', 'B', 'C'][Math.floor(Math.random() * 3)]
	}));
	
	// State variables
	let searchTerm = $state('');
	let filteredResults = $state(sampleData.slice(0, 20));
	let isSearching = $state(false);
	let searchCount = $state(0);
	let normalSearchCount = $state(0);
	
	// Regular search function (no debounce)
	function normalSearch(query) {
		normalSearchCount++;
		return sampleData.filter(item => 
			item.title.toLowerCase().includes(query.toLowerCase()) ||
			item.category.toLowerCase().includes(query.toLowerCase())
		).slice(0, 20);
	}
	
	// Function to perform the actual search with debounce
	function performSearch(query) {
		isSearching = true;
		searchCount++;
		
		// Simulate a delay for the search operation
		setTimeout(() => {
			filteredResults = sampleData.filter(item => 
				item.title.toLowerCase().includes(query.toLowerCase()) ||
				item.category.toLowerCase().includes(query.toLowerCase())
			).slice(0, 20);
			
			isSearching = false;
		}, 100);
	}
	
	// Create a debounced version of the search function (300ms delay)
	const debouncedSearch = debounce(performSearch, 300);
	
	// Handle input events
	function handleSearchInput(event) {
		const query = event.target.value;
		searchTerm = query;
		
		// Show what would happen without debounce
		normalSearch(query);
		
		// Use debounced search
		debouncedSearch(query);
	}
</script>

<PageTitle pageTitle="Debounce Example" />

<div class="container">
	<h1>Debounce Example</h1>
	
	<div class="example-container">
		<p class="description">
			This example demonstrates how debouncing works. Type in the search box below and notice how the debounced search function is called much less frequently than a normal search function would be.
		</p>
		
		<div class="search-box">
			<label for="search">Search:</label>
			<input 
				type="text" 
				id="search" 
				bind:value={searchTerm} 
				on:input={handleSearchInput} 
				placeholder="Type to search..." 
			/>
			{#if isSearching}
				<span class="searching">Searching...</span>
			{/if}
		</div>
		
		<div class="stats">
			<div class="stat-item">
				<span class="stat-label">Without debounce:</span>
				<span class="stat-value">{normalSearchCount} searches</span>
			</div>
			<div class="stat-item">
				<span class="stat-label">With debounce:</span>
				<span class="stat-value">{searchCount} searches</span>
			</div>
			<div class="stat-item">
				<span class="stat-label">Results:</span>
				<span class="stat-value">{filteredResults.length} items</span>
			</div>
		</div>
		
		<div class="results">
			<h2>Search Results</h2>
			{#if isSearching}
				<div class="loading">Loading results...</div>
			{:else if filteredResults.length === 0}
				<div class="no-results">No results found</div>
			{:else}
				<ul class="result-list">
					{#each filteredResults as result}
						<li class="result-item">
							<span class="result-title">{result.title}</span>
							<span class="result-category">Category: {result.category}</span>
						</li>
					{/each}
				</ul>
			{/if}
		</div>
	</div>
</div>

<style>
	.container {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem;
	}
	
	h1 {
		margin-bottom: 2rem;
		text-align: center;
	}
	
	.example-container {
		background-color: var(--color-bg-container);
		border-radius: var(--border-radius-light);
		padding: 2rem;
		box-shadow: var(--boxShadow);
	}
	
	.description {
		margin-bottom: 2rem;
		color: var(--color-text-secondary);
		line-height: 1.6;
	}
	
	.search-box {
		margin-bottom: 2rem;
		position: relative;
	}
	
	.search-box label {
		display: block;
		margin-bottom: 0.5rem;
		font-weight: bold;
	}
	
	.search-box input {
		width: 100%;
		padding: 0.75rem;
		border: 1px solid var(--color-border);
		border-radius: var(--border-radius-lighter);
		font-size: 1rem;
		background-color: var(--color-bg-layout);
		color: var(--color-text);
	}
	
	.search-box input:focus {
		outline: none;
		border-color: var(--color-primary);
		box-shadow: 0 0 0 2px var(--color-primary-active);
	}
	
	.searching {
		position: absolute;
		right: 1rem;
		top: 2.75rem;
		color: var(--color-text-secondary);
		font-size: 0.875rem;
	}
	
	.stats {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		margin-bottom: 2rem;
		padding: 1rem;
		background-color: var(--color-bg-layout);
		border-radius: var(--border-radius-lighter);
	}
	
	.stat-item {
		flex: 1;
		min-width: 150px;
	}
	
	.stat-label {
		display: block;
		font-size: 0.875rem;
		color: var(--color-text-secondary);
		margin-bottom: 0.25rem;
	}
	
	.stat-value {
		font-weight: bold;
		color: var(--color-primary);
	}
	
	.results {
		margin-top: 2rem;
	}
	
	.results h2 {
		margin-bottom: 1rem;
		font-size: 1.25rem;
	}
	
	.loading, .no-results {
		padding: 2rem;
		text-align: center;
		color: var(--color-text-secondary);
	}
	
	.result-list {
		list-style: none;
		padding: 0;
	}
	
	.result-item {
		padding: 1rem;
		border-bottom: 1px solid var(--color-border);
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.result-item:last-child {
		border-bottom: none;
	}
	
	.result-title {
		font-weight: bold;
	}
	
	.result-category {
		font-size: 0.875rem;
		color: var(--color-text-secondary);
	}
</style>
