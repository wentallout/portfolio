<script lang="ts">
	import { haptic } from '#lib/actions/haptics.js';
	import { CaretDown } from '#lib/assets/icons/icons.js';
	import { quintOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';
	import { Button } from '#lib/components/ui/button/index.js';

	/** @type {{accordionSection?: string, accordionText?: string, isOpened?: boolean}} */
	let { accordionSection = '', accordionText = '', isOpened = $bindable(false) } = $props();

	function handleToggle() {
		isOpened = !isOpened;
	}
</script>

<div class="border-grid-b last:!border-b-0 w-full relative bg-background">
	<Button
		variant="ghost"
		class="w-full p-6 flex items-center justify-between text-left hover:bg-accent group h-auto justify-between rounded-none font-normal"
		aria-expanded={isOpened}
		onclick={handleToggle}
		type="button">
		<span
			class="text-sm sm:text-base font-medium text-foreground group-hover:text-foreground transition-colors">
			{accordionSection}
		</span>
		<div
			class="text-muted-foreground group-hover:text-foreground transition-transform duration-300 shrink-0 ml-4 {isOpened
				? 'rotate-180 text-primary'
				: ''}">
			<CaretDown height="16" width="16" />
		</div>
	</Button>

	{#if isOpened}
		<div
			class="signature-padding !pt-4 !pb-6 text-sm text-muted-foreground leading-relaxed border-grid-t bg-muted/30"
			transition:slide={{ duration: 250, easing: quintOut }}>
			{accordionText}
		</div>
	{/if}
</div>
