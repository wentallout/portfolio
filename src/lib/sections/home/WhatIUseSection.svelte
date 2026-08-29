<script>
	import { Toolbox } from '$lib/assets/icons/icons';
	import { SECTION_TITLES } from '$lib/constants/labels';
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
	<SectionTitle sectionTitle={SECTION_TITLES.techStack}>
		{#snippet children({ sectionIcon })}
			<Toolbox {...sectionIcon} />
		{/snippet}
	</SectionTitle>

	<div class="grid grid-cols-1 md:grid-cols-3 gap-0 relative items-stretch">
		{#each categories as category, i (category.title)}
			<div
				class="relative bg-background signature-padding hover:bg-card transition-all duration-300 flex flex-col justify-between h-full">
				<h3 class="text-2xl font-medium text-foreground mb-4 tracking-tight">{category.title}</h3>

				<div class="flex flex-wrap gap-2 mt-4">
					{#each category.items as item (item)}
						<span
							class="px-3 py-1 text-sm rounded-full border border-border bg-card text-foreground font-medium hover:bg-accent transition-colors">
							{item}
						</span>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</section>
