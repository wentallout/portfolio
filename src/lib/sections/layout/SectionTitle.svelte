<script lang="ts">
	import BlurText from '#lib/components/BlurText.svelte';

/**
 * `as` lets a page promote its leading section title to the page-level <h1>.
 */
/** @type {{sectionTitle?: string, sectionDesc?: string, as?: 'h1' | 'h2'}} */
let { sectionDesc = '', sectionTitle = '', as = 'h2' } = $props();
</script>

<div
	class="w-full signature-padding pt-12 md:pt-16 pb-6 md:pb-8 flex flex-col justify-center bg-background relative overflow-hidden">
	<div class="flex items-center gap-6 relative text-4xl">
		<svelte:element
			this={as}
			id={sectionTitle.toLowerCase()}
			class="font-medium tracking-tight text-foreground font-fancy">
			<BlurText class="font-fancy" animateBy="words" direction="top" text={sectionTitle} />
		</svelte:element>
	</div>

	{#if sectionDesc !== ''}
		<p
			class="mt-3 max-w-xl text-sm md:text-base text-muted-foreground font-normal leading-relaxed relative z-10">
			{sectionDesc}
		</p>
	{/if}
</div>
