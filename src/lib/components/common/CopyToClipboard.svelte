<script lang="ts">
	import { CopySimple } from '#lib/assets/icons/icons.js';
	import { fly, fade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { haptics, hapticPatterns } from '#lib/actions/haptics.js';

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
		class="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium group cursor-pointer"
		aria-label="Copy to clipboard"
		onclick={copyToClipboard}
		type="button">
		<span class="inline-flex items-center gap-1.5">
			{@render children?.()}
			<CopySimple
				class="shrink-0 text-muted-foreground group-hover:text-primary transition-colors"
				height="14"
				width="14" />
		</span>
	</button>

	{#if show}
		<div
			class="absolute left-full ml-2 px-2 py-0.5 bg-primary text-primary-foreground text-sm font-medium border-grid-all whitespace-nowrap pointer-events-none"
			in:fly={{ y: 6, duration: 250, easing: quintOut }}
			out:fade={{ duration: 150 }}>
			Copied!
		</div>
	{/if}
</div>
