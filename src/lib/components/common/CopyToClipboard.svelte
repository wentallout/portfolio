<script>
	import { fade } from 'svelte/transition';

	export let textToCopy;
	let show = false;

	import CopySimple from '~icons/ph/copy-simple';

	async function copyToClipboard() {
		await navigator.clipboard.writeText(textToCopy);
		show = true;
		setTimeout(() => {
			show = false;
		}, 3000);
	}
</script>

<button class="copy" type="button" on:click={copyToClipboard}>
	<slot />
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
