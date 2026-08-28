<script>
	import SectionDesc from '$sections/layout/SectionDesc.svelte';

	/** @type {{sectionTitle?: string, sectionDesc?: string, unsplitAfter?: number, children?: import('svelte').Snippet<[any]>}} */
	let { children, sectionDesc = '', sectionTitle = '', unsplitAfter = 0 } = $props();

	let sectionIcon = {
		color: '#9ca3af'
	};
</script>

<div
	class="w-full signature-padding flex flex-col justify-center bg-background relative overflow-hidden">
	<div class="flex items-center gap-4 relative z-10">
		{#if children}
			<div class="text-muted-foreground shrink-0 flex items-center justify-center">
				{@render children?.({ sectionIcon })}
			</div>
		{/if}
		<h2
			id={sectionTitle.toLowerCase()}
			class="text-2xl md:text-2xl font-medium tracking-tight text-foreground">
			{sectionTitle}
		</h2>
	</div>

	{#if sectionDesc !== ''}
		<div
			class="mt-3 max-w-xl text-sm md:text-base text-muted-foreground font-normal leading-relaxed font-sans relative z-10">
			<SectionDesc text={sectionDesc} {unsplitAfter} />
		</div>
	{/if}
</div>
