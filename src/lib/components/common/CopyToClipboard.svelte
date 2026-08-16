<script>
	import { CopySimple } from '$lib/assets/icons/icons';
	import { fly, fade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { haptics, hapticPatterns } from '$lib/actions/haptics';

	let show = $state(false);
	let timeoutId;

	/** @type {{textToCopy: any, children?: import('svelte').Snippet}} */
	let { textToCopy, children } = $props();

	async function copyToClipboard() {
		try {
			await navigator.clipboard.writeText(textToCopy);
			haptics.trigger(hapticPatterns.success);
			
			if (timeoutId) clearTimeout(timeoutId);
			
			show = true;
			timeoutId = setTimeout(() => {
				show = false;
			}, 2000);
		} catch (err) {
			console.error('Failed to copy: ', err);
		}
	}
</script>

<div class="inline-flex items-center gap-2 relative">
	<button
		class="inline-flex items-center gap-1.5 text-neutral-300 hover:text-white transition-colors text-xs font-medium group cursor-pointer"
		type="button"
		onclick={copyToClipboard}
		aria-label="Copy to clipboard"
	>
		<span class="inline-flex items-center gap-1.5">
			{@render children?.()}
			<CopySimple class="shrink-0 text-neutral-400 group-hover:text-rose-400 transition-colors" height="14" width="14" />
		</span>
	</button>
	
	{#if show}
		<div 
			in:fly={{ y: 6, duration: 250, easing: quintOut }} 
			out:fade={{ duration: 150 }} 
			class="absolute left-full ml-2 px-2 py-0.5 bg-neutral-900 text-rose-300 text-[10px] font-medium border-grid-all whitespace-nowrap pointer-events-none"
		>
			Copied!
		</div>
	{/if}
</div>


