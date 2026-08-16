<script>
	import { CaretDown } from '$lib/assets/icons/icons';
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { haptic } from '$lib/actions/haptics';

	/** @type {{accordionSection?: string, accordionText?: string, isOpened?: boolean}} */
	let { accordionSection = '', accordionText = '', isOpened = $bindable(false) } = $props();

	function handleToggle() {
		isOpened = !isOpened;
	}
</script>

<div class="border-grid-b w-full relative bg-black">
	<button 
		class="w-full py-5 px-6 md:px-8 flex items-center justify-between text-left hover:bg-neutral-950/40 transition-colors group cursor-pointer" 
		onclick={handleToggle} 
		use:haptic={'selection'}
		type="button"
		aria-expanded={isOpened}
	>
		<span class="text-sm sm:text-base font-semibold text-neutral-200 group-hover:text-white transition-colors font-sans">
			{accordionSection}
		</span>
		<div class="text-neutral-400 group-hover:text-white transition-transform duration-300 shrink-0 ml-4 {isOpened ? 'rotate-180 text-rose-400' : ''}">
			<CaretDown height="16" width="16" />
		</div>
	</button>

	{#if isOpened}
		<div
			class="px-6 md:px-8 pb-6 text-sm text-neutral-400 leading-relaxed font-sans border-grid-t pt-4 bg-neutral-950/30"
			transition:slide={{ duration: 250, easing: quintOut }}>
			{accordionText}
		</div>
	{/if}
</div>

