<script>
	import { CopySimple } from '$lib/assets/icons/icons';
	import { slide, scale } from 'svelte/transition';

	let show = $state(false);

	/** @type {{textToCopy: any, children?: import('svelte').Snippet}} */
	let { textToCopy, children } = $props();

	async function copyToClipboard() {
		await navigator.clipboard.writeText(textToCopy);
		show = true;
		setTimeout(() => {
			show = false;
		}, 3000);
	}
</script>

<button class="copy" type="button" onclick={copyToClipboard}>
	{@render children?.()}
	<CopySimple style="color:inherit" />
</button>
{#if show === true}
	<div in:scale={{ duration: 300 }} out:scale={{ duration: 300 }} class="indicator text-xs">
		Copied {textToCopy}
	</div>
{/if}

<style>
	.copy {
		display: flex;
		flex-direction: row;
		text-align: initial;
		align-items: center;
		color: var(--color-text-secondary);
		gap: var(--space-3xs);

		&:hover {
			cursor: pointer;
			color: var(--color-primary-hover) !important;
		}
	}

	.indicator {
		color: var(--color-primary);
	}
</style>
