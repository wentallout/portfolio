<script>
	import { Toolbox } from '$lib/assets/icons/icons';
	import SectionTitle from '$sections/layout/SectionTitle.svelte';

	const categories = [
		{
			items: ['Design Thinking', 'Double Diamond', 'UX Honeycomb', 'Atomic Design'],
			title: 'Frameworks & UX'
		},
		{
			items: ['Figma', 'Adobe XD', 'Penpot', 'Canva', 'Illustrator'],
			title: 'Prototyping & UI'
		},
		{
			items: ['HTML/CSS/JS', 'Svelte', 'Tailwind', 'React', 'GSAP'],
			title: 'Frontend & Tech'
		}
	];
</script>

<section class="border-grid-b w-full relative">
	<SectionTitle sectionTitle="Tech & Stack">
		{#snippet children({ sectionIcon })}
			<Toolbox {...sectionIcon} />
		{/snippet}
	</SectionTitle>

	<div class="grid grid-cols-1 md:grid-cols-3 gap-0 relative items-stretch">
		{#each categories as category, i (category.title)}
			<div
				class="relative border-grid-r last:border-r-0 bg-black p-6 md:p-8 hover:bg-neutral-950/40 transition-all duration-300 flex flex-col justify-between h-full">
				<span class="grid-plus grid-plus-tl">+</span>
				<span class="grid-plus grid-plus-tr">+</span>
				<span class="grid-plus grid-plus-bl">+</span>
				<span class="grid-plus grid-plus-br">+</span>

				<div>
					<div class="flex items-center justify-between text-sm mb-4">
						<span class="uppercase tracking-widest text-[10px] text-neutral-400 font-semibold"
							>STACK</span>
						<span class="text-neutral-500">00{i + 1}</span>
					</div>
					<h3 class="text-xl font-semibold text-white mb-4 tracking-tight">{category.title}</h3>
				</div>

				<div class="flex flex-wrap gap-2 mt-4">
					{#each category.items as item (item)}
						<span
							class="px-3 py-1 text-sm rounded-full border-grid-all bg-neutral-950 text-white font-medium hover:bg-neutral-900 transition-colors">
							{item}
						</span>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</section>
