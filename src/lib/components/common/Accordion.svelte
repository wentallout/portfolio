<script>
	import { haptic } from '$lib/actions/haptics';
	import { CaretDown } from '$lib/assets/icons/icons';
	import { quintOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';

	/** @type {{accordionSection?: string, accordionText?: string, isOpened?: boolean}} */
	let { accordionSection = '', accordionText = '', isOpened = $bindable(false) } = $props();

	function handleToggle() {
		isOpened = !isOpened;
	}
</script>

<div class="border-grid-b last:!border-b-0 w-full relative bg-background">
	<button
		class="w-full signature-padding flex items-center justify-between text-left hover:bg-accent transition-colors group cursor-pointer"
		onclick={handleToggle}
		use:haptic={'selection'}
		type="button"
		aria-expanded={isOpened}>
		<span
			class="text-sm sm:text-base font-medium text-foreground group-hover:text-foreground transition-colors font-sans">
			{accordionSection}
		</span>
		<div
			class="text-muted-foreground group-hover:text-foreground transition-transform duration-300 shrink-0 ml-4 {isOpened
				? 'rotate-180 text-primary'
				: ''}">
			<CaretDown height="16" width="16" />
		</div>
	</button>

	{#if isOpened}
		<div
			class="signature-padding !pt-4 !pb-6 text-sm text-muted-foreground leading-relaxed font-sans border-grid-t bg-muted/30"
			transition:slide={{ duration: 250, easing: quintOut }}>
			{accordionText}
		</div>
	{/if}
</div>
