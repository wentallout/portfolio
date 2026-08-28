<script>
	import BlurText from '$lib/components/BlurText.svelte';

	/** @type {{text?: string, unsplitAfter?: number}} */
	let { text = '', unsplitAfter = 0 } = $props();
</script>

{#if text !== ''}
	<BlurText
		{text}
		animateBy="words"
		delay={40}
		direction="top"
		threshold={0.2}
		stepDuration={0.25}
		class="text-sm text-muted-foreground font-normal leading-relaxed max-w-xl text-left"
	/>
{/if}
