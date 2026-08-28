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
	class="relative bg-background hover:bg-card signature-padding flex flex-col justify-between transition-all duration-300 group min-h-[220px]"
	href={blogLink}
	use:haptic={'selection'}>

	<div>
		{#if hasTags && blogTags && blogTags.length > 0}
			<div class="flex flex-wrap items-center gap-1.5 mb-4">
				{#each blogTags as tag (tag)}
					<span
						class="text-sm uppercase tracking-wider text-muted-foreground bg-card border border-border px-2 py-0.5 font-medium">
						{tag}
					</span>
				{/each}
			</div>
		{/if}

		<h3
			class="text-base md:text-base font-medium text-foreground group-hover:text-rose-400 transition-colors leading-snug line-clamp-3">
			{blogTitle}
		</h3>
	</div>
</a>
