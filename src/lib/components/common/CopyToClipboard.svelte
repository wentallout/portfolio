<script>
	import { fade } from 'svelte/transition';

	let show = $state(false);

	import CopySimple from '~icons/ph/copy-simple';
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
	<div transition:fade class="indicator text-xs">Copied</div>
{/if}

<style>
	.copy {
		display: flex;
		flex-direction: row;
		text-align: initial;
		align-items: center;
		color: var(--colorTextSecondary);
		gap: var(--space3XS);

		&:hover {
			cursor: pointer;
			color: var(--colorPrimaryHover) !important;
		}
	}

	.indicator {
		transition: 0.3s;
		color: var(--colorPrimary);
	}
</style>
