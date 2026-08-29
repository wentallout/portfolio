<script>
	import BlurText from '$lib/components/BlurText.svelte';
	

	/** @type {{sectionTitle?: string, sectionDesc?: string, unsplitAfter?: number, children?: import('svelte').Snippet<[any]>}} */
	let { children, sectionDesc = '', sectionTitle = '', unsplitAfter = 0 } = $props();

	let sectionIcon = {
		color: '#9ca3af'
	};
</script>

<div
	class="w-full signature-padding flex flex-col justify-center bg-background relative overflow-hidden">
	<div class="flex items-center gap-6 relative text-4xl">
		<h2
			id={sectionTitle.toLowerCase()}
			class="font-medium tracking-tight text-foreground font-fancy">
			<BlurText animateBy="words" direction="top" text={sectionTitle} class="font-fancy" />
		</h2>
		{#if children}
			<div class="text-muted-foreground shrink-0 flex items-center justify-center">
				{@render children?.({ sectionIcon })}
			</div>
		{/if}
	</div>

	{#if sectionDesc !== ''}
		<div
			class="mt-3 max-w-xl text-sm md:text-base text-muted-foreground font-normal leading-relaxed font-sans relative z-10">
			<SectionDesc text={sectionDesc} {unsplitAfter} />
		</div>
	{/if}
</div>
