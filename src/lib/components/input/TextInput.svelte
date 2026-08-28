<script>
	import { X } from '$lib/assets/icons/icons';

	let {
		autoSuggestList = [],
		handleOnInput,
		handleClear,
		icon,
		inputValue = '',
		label,
		list = '',
		name = '',
		onkeydown,
		placeholder = '',
		type = 'text',
		dropdown
	} = $props();

	let isFocused = $state(false);
</script>

<div class="w-full space-y-2 mb-5 font-sans group">
	{#if label}
		<label class="block text-sm font-medium text-muted-foreground uppercase tracking-wider font-sans" for={label}>
			{label}
		</label>
	{/if}

	<div class="relative w-full">
		<div
			class="flex items-center w-full border-grid-all bg-[var(--background)] relative transition-all duration-200 focus-within:border-[var(--foreground)] group-hover:border-muted-foreground"
			class:ring-1={isFocused}
			class:ring-[var(--foreground)]={isFocused}
		>
			{#if isFocused}
			{/if}

			{#if icon}
				<div class="pl-4 pr-1 flex items-center text-muted-foreground group-focus-within:text-foreground transition-colors">
					{@render icon?.()}
				</div>
			{/if}

			<input
				id={label}
				{name}
				class="w-full h-12 px-3 bg-transparent border-0 border-none outline-none text-sm text-[var(--foreground)] placeholder:text-muted-foreground focus:outline-none focus:ring-0 focus:border-none shadow-none font-sans"
				list={list || null}
				onblur={() => (isFocused = false)}
				onfocus={() => (isFocused = true)}
				oninput={handleOnInput}
				{onkeydown}
				{placeholder}
				required
				{type}
				value={inputValue}
			/>

			{#if inputValue && handleClear}
				<button
					class="pr-4 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
					onclick={handleClear}
					type="button"
					aria-label="Clear input"
				>
					<X height="16" width="16" />
				</button>
			{/if}

			{#if list}
				<datalist id={list}>
					{#each autoSuggestList as item (item)}
						<option>{item}</option>
					{/each}
				</datalist>
			{/if}
		</div>

		{#if dropdown}
			<div class="absolute top-full left-0 right-0 z-50 mt-1">
				{@render dropdown()}
			</div>
		{/if}
	</div>
</div>



