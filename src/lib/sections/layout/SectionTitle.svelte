<script lang="ts">
	import BlurText from '#lib/components/BlurText.svelte';

	/** @type {{sectionTitle?: string, sectionDesc?: string, unsplitAfter?: number}} */
	let { sectionDesc = '', sectionTitle = '', unsplitAfter = 0 } = $props();
</script>

<div
	class="w-full signature-padding flex flex-col justify-center bg-background relative overflow-hidden">
	<div class="flex items-center gap-6 relative text-4xl">
		<h2
			id={sectionTitle.toLowerCase()}
			class="font-medium tracking-tight text-foreground font-fancy">
			<BlurText class="font-fancy" animateBy="words" direction="top" text={sectionTitle} />
		</h2>
	</div>

	{#if sectionDesc !== ''}
		<div
			class="mt-3 max-w-xl text-sm md:text-base text-muted-foreground font-normal leading-relaxed relative z-10">
			<SectionDesc text={sectionDesc} {unsplitAfter} />
		</div>
	{/if}
</div>
