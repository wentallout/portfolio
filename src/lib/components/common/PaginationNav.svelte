<script lang="ts">
	import { generateNavigationOptions } from '../../utils/generateNavigationOptions';
	import { ArrowLeft, ArrowRight } from '#lib/assets/icons/icons.js';

	/** Enum for symbol types */
	const SymbolType = {
		ELLIPSIS: 'ELLIPSIS',
		NEXT_PAGE: 'NEXT_PAGE',
		PREVIOUS_PAGE: 'PREVIOUS_PAGE'
	};

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

<div class="flex justify-center items-center bg-card border border-border overflow-hidden">
	{#each options as option}
		{@const isActive = option.type === 'number' && option.value === currentPage}
		{@const isDisabled =
			(option.type === 'symbol' &&
				option.symbol === SymbolType.NEXT_PAGE &&
				currentPage >= totalPages) ||
			(option.type === 'symbol' && option.symbol === SymbolType.PREVIOUS_PAGE && currentPage <= 1)}
		<span
			class="inline-flex items-center justify-center min-w-10 h-10 px-3.5 text-sm leading-none border-r border-border shrink-0 select-none transition-colors duration-200 last:border-r-0 {isActive
				? 'bg-primary text-primary-foreground font-medium'
				: 'text-muted-foreground hover:bg-muted hover:text-foreground cursor-pointer'} {isDisabled
				? 'opacity-40 pointer-events-none'
				: ''} {(option.type === 'symbol' && option.symbol === SymbolType.ELLIPSIS) ||
			option.type === 'number'
				? 'px-4'
				: ''}"
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
