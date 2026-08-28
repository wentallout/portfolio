<script>
	/** @type {{items?: any}} */
	let {
		items = [
			'E-commerce',
			'Landing page',
			'Usability',
			'Accessibility',
			'Information Architecture',
			'Responsive Design',
			'Design Systems',
			'Performance Optimization'
		]
	} = $props();
</script>

<div class="w-full border-grid-b bg-background py-4 overflow-hidden relative select-none text-sm text-muted-foreground">
	<div class="flex overflow-hidden relative gap-12 group">
		<ul class="flex shrink-0 items-center justify-around gap-12 min-w-full">
			{#each items as item (item)}
				<li class="flex items-center gap-4 whitespace-nowrap font-medium text-muted-foreground hover:text-foreground transition-colors font-sans">
					<span>{item}</span>
					<span class="text-muted-foreground/60 text-sm">•</span>
				</li>
			{/each}
		</ul>

		<ul class="flex shrink-0 items-center justify-around gap-12 min-w-full" aria-hidden="true">
			{#each items as item (item)}
				<li class="flex items-center gap-4 whitespace-nowrap font-medium text-muted-foreground hover:text-foreground transition-colors font-sans">
					<span>{item}</span>
					<span class="text-muted-foreground/60 text-sm">•</span>
				</li>
			{/each}
		</ul>
	</div>
</div>

