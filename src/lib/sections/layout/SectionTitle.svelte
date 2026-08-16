<script>
	import SectionDesc from '$sections/layout/SectionDesc.svelte';
	import DottedBackground from '$lib/components/ui/DottedBackground.svelte';

	/** @type {{sectionTitle?: string, sectionDesc?: string, unsplitAfter?: number, children?: import('svelte').Snippet<[any]>}} */
	let { children, sectionDesc = '', sectionTitle = '', unsplitAfter = 0 } = $props();

	let sectionIcon = {
		color: '#9ca3af'
	};
</script>

<div class="w-full border-grid-b p-8 md:p-10 flex flex-col justify-center bg-black relative overflow-hidden">
	<div class="absolute inset-0 z-0 opacity-30 pointer-events-none">
		<DottedBackground
			bgColor="transparent"
			colors={["#000000", "#FB7185", "#FFBB00"]}
			cellSize={2}
			frequency={2}
			speed={4}
		/>
	</div>
	<span class="grid-plus grid-plus-tl z-10">+</span>
	<span class="grid-plus grid-plus-tr z-10">+</span>

	<div class="flex items-center gap-4 relative z-10">
		{#if children}
			<div class="text-neutral-400 shrink-0 flex items-center justify-center">
				{@render children?.({ sectionIcon })}
			</div>
		{/if}
		<h2
			id={sectionTitle.toLowerCase()}
			class="text-2xl md:text-3xl font-semibold tracking-tight text-white"
		>
			{sectionTitle}
		</h2>
	</div>

	{#if sectionDesc !== ''}
		<div class="mt-3 max-w-xl text-sm md:text-base text-neutral-400 font-normal leading-relaxed font-sans relative z-10">
			<SectionDesc text={sectionDesc} {unsplitAfter} />
		</div>
	{/if}
</div>




