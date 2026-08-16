<script>
	/** @type {{label?: string, placeholder?: string, name?: string}} */
	let {
		label = 'message',
		name = '',
		placeholder = 'Something you want to tell me. Ex: jobs, ideas'
	} = $props();

	let isFocused = $state(false);
</script>

<div class="w-full space-y-2 mb-5 font-sans group">
	{#if label}
		<label class="block text-sm font-semibold text-neutral-400 uppercase tracking-wider font-sans" for={label}>
			{label}
		</label>
	{/if}

	<div class="relative w-full">
		<div
			class="relative w-full border-grid-all bg-[var(--background)] transition-all duration-200 focus-within:border-[var(--foreground)] group-hover:border-neutral-500"
			class:ring-1={isFocused}
			class:ring-[var(--foreground)]={isFocused}
		>
			{#if isFocused}
				<span class="grid-plus grid-plus-tl">+</span>
				<span class="grid-plus grid-plus-tr">+</span>
				<span class="grid-plus grid-plus-bl">+</span>
				<span class="grid-plus grid-plus-br">+</span>
			{/if}

			<textarea
				id={label}
				{name}
				class="w-full h-36 p-4 bg-transparent border-0 border-none outline-none text-sm text-[var(--foreground)] placeholder:text-neutral-500 focus:outline-none focus:ring-0 focus:border-none shadow-none font-sans resize-y block"
				onblur={() => (isFocused = false)}
				onfocus={() => (isFocused = true)}
				{placeholder}
				required
			></textarea>
		</div>
	</div>
</div>



