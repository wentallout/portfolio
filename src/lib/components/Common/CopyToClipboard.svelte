<script>
	export let textToCopy;
	let show = false;

	import CopySimple from '~icons/ph/copy-simple';

	async function copyToClipboard() {
		await navigator.clipboard.writeText(textToCopy);
		show = true;
		setTimeout(() => {
			show = false;
		}, 1000);
	}
</script>

<button class="copy" type="button" on:click={copyToClipboard}>
	<slot />
	<CopySimple style="color:inherit" />
</button>
{#if textToCopy}
	<div class="indicator text-xs" class:indicator--show={show}>Copied</div>
{/if}

<style>
	.copy {
		display: flex;
		flex-direction: row;
		text-align: initial;
		align-items: center;
		color: var(--colorTextSecondary);
		width: fit-content;
		gap: var(--space3XS);

		&:hover {
			cursor: pointer;
			color: var(--colorPrimaryHover);
			scale: 1.1;
			transition: var(--transition);
		}
	}

	.indicator {
		display: none;
		opacity: 0;
		transition: 0.3s;
		color: var(--colorPrimary);
	}
	.indicator--show {
		display: block;
		opacity: 1;
	}
</style>
