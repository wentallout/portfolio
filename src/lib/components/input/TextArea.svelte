<script lang="ts">
	import { Textarea } from '#lib/components/ui/textarea/index.js';
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
		<label
			class="block text-sm font-medium text-muted-foreground uppercase tracking-wider font-sans"
			for={label}>
			{label}
		</label>
	{/if}

	<div class="relative w-full">
		<div
			class="relative w-full border-grid-all bg-[var(--background)] transition-all duration-200 focus-within:border-[var(--foreground)] group-hover:border-muted-foreground has-[[data-slot=textarea]:focus-visible]:border-[var(--foreground)] has-[[data-slot=textarea]:focus-visible]:ring-1 has-[[data-slot=textarea]:focus-visible]:ring-[var(--foreground)]"
			class:ring-1={isFocused}
			class:ring-[var(--foreground)]={isFocused}>
			<Textarea
				id={label}
				{name}
				class="min-h-36 w-full border-0 rounded-none bg-transparent p-4 text-sm text-[var(--foreground)] shadow-none focus-visible:border-0 focus-visible:ring-0 focus-visible:ring-offset-0 font-sans resize-y placeholder:text-muted-foreground"
				onblur={() => (isFocused = false)}
				onfocus={() => (isFocused = true)}
				{placeholder}
				required />
		</div>
	</div>
</div>
