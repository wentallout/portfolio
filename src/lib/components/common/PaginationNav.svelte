<script>
	import { ArrowLeft, ArrowRight } from '$lib/assets/icons/icons.js';

	/** Enum for symbol types */
	const SymbolType = {
		ELLIPSIS: 'ELLIPSIS',
		NEXT_PAGE: 'NEXT_PAGE',
		PREVIOUS_PAGE: 'PREVIOUS_PAGE'
	};

	import { generateNavigationOptions } from '../../utils/generateNavigationOptions';

	// Declare props using $props rune
	let {
		currentPage = 1,
		limit = undefined,
		pageSize = 1,
		showStepOptions = false,
		totalItems = 0,
		onsetPage
	} = $props();

	// Reactive variables using $state rune
	let options = $state([]);
	let totalPages = $state(1);

	// Update options and totalPages reactively
	$effect(() => {
		totalPages = Math.ceil(totalItems / pageSize);
		options = generateNavigationOptions({
			currentPage,
			limit,
			pageSize,
			showStepOptions,
			totalItems
		});
	});

	function handleOptionClick(option) {
		onsetPage?.({ detail: { page: option.value } });
	}
</script>

<div class="pagination-nav">
	{#each options as option}
		<span
			class="option"
			class:active={option.type === 'number' && option.value === currentPage}
			class:disabled={(option.type === 'symbol' &&
				option.symbol === SymbolType.NEXT_PAGE &&
				currentPage >= totalPages) ||
				(option.type === 'symbol' &&
					option.symbol === SymbolType.PREVIOUS_PAGE &&
					currentPage <= 1)}
			class:ellipsis={option.type === 'symbol' && option.symbol === SymbolType.ELLIPSIS}
			class:next={option.type === 'symbol' && option.symbol === SymbolType.NEXT_PAGE}
			class:number={option.type === 'number'}
			class:prev={option.type === 'symbol' && option.symbol === SymbolType.PREVIOUS_PAGE}
			onclick={() => handleOptionClick(option)}
			role="presentation">
			{#if option.type === 'number'}
				{#key option.value}
					<span>{option.value}</span>
				{/key}
			{:else if option.type === 'symbol' && option.symbol === SymbolType.ELLIPSIS}
				{#key SymbolType.ELLIPSIS}
					<span>...</span>
				{/key}
			{:else if option.type === 'symbol' && option.symbol === SymbolType.PREVIOUS_PAGE}
				{#key SymbolType.PREVIOUS_PAGE}
					<ArrowLeft height="1em" width="1em" />
				{/key}
			{:else if option.type === 'symbol' && option.symbol === SymbolType.NEXT_PAGE}
				{#key SymbolType.NEXT_PAGE}
					<ArrowRight height="1em" width="1em" />
				{/key}
			{/if}
		</span>
	{/each}
</div>
