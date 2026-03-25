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

<div class="copy-container">
	<button class="copy" type="button" onclick={copyToClipboard} aria-label="Copy to clipboard">
		<span class="copy-content">
			{@render children?.()}
			<CopySimple class="copy-icon" height="18" width="18" />
		</span>
	</button>
	
	{#if show}
		<div 
			in:fly={{ y: 10, duration: 400, easing: quintOut }} 
			out:fade={{ duration: 200 }} 
			class="indicator text-xs"
		>
			Copied!
		</div>
	{/if}
</div>

<style lang="postcss">
	.copy-container {
		--ease-out-custom: cubic-bezier(0.23, 1, 0.32, 1);
		display: inline-flex;
		align-items: center;
		gap: var(--space-xs);
		position: relative;
	}

	.copy {
		display: flex;
		align-items: center;
		background: none;
		border: none;
		padding: 4px 8px;
		border-radius: var(--border-radius-lighter);
		color: var(--color-text-secondary);
		cursor: pointer;
		transition: 
			color 200ms var(--ease-out-custom),
			background-color 200ms var(--ease-out-custom),
			transform 160ms var(--ease-out-custom);
		outline: none;

		&:hover {
			color: var(--color-primary-hover);
			background-color: rgba(var(--color-primary-rgb), 0.05);
		}

		&:active {
			transform: scale(0.92);
		}
		
		&:focus-visible {
			box-shadow: 0 0 0 2px var(--color-primary);
		}
	}

	.copy-content {
		display: flex;
		align-items: center;
		gap: var(--space-3xs);
	}

	.indicator {
		position: absolute;
		left: 100%;
		white-space: nowrap;
		color: var(--color-primary-active);
		font-weight: 600;
		pointer-events: none;
	}
</style>
