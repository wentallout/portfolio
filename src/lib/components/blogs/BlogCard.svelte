<script>
	import { haptic } from '$lib/actions/haptics';

	let {
		blogDate = '',
		blogLink = '',
		blogTags = [],
		blogTitle = 'blogTitle',
		hasTags = true
	} = $props();
</script>

<a
	class="border-grid-r border-grid-b relative bg-background hover:bg-card p-6 md:p-8 flex flex-col justify-between transition-all duration-300 group min-h-[220px]"
	href={blogLink}
	use:haptic={'selection'}>
	<span class="grid-plus grid-plus-tl">+</span>
	<span class="grid-plus grid-plus-tr">+</span>
	<span class="grid-plus grid-plus-bl">+</span>
	<span class="grid-plus grid-plus-br">+</span>

	<div>
		{#if hasTags && blogTags && blogTags.length > 0}
			<div class="flex flex-wrap items-center gap-1.5 mb-4">
				{#each blogTags as tag (tag)}
					<span
						class="text-[10px] uppercase tracking-wider text-muted-foreground bg-card border-grid-all px-2 py-0.5 font-medium">
						{tag}
					</span>
				{/each}
			</div>
		{/if}

		<h3
			class="text-base md:text-lg font-semibold text-foreground group-hover:text-rose-400 transition-colors leading-snug line-clamp-3">
			{blogTitle}
		</h3>
	</div>
</a>
