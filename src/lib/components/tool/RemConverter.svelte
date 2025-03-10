<script>
	import Breadcrumb from '$components/other/Breadcrumb.svelte';
	import { Copy, Wrench } from '$lib/assets/icons/icons';
	import SectionTitle from '$sections/SectionTitle.svelte';
	let baseFontSize = 16;
	let pxInput = $state();
	let remInput = $state();

	$effect(() => {
		remInput = pxInput / baseFontSize;
	});

	//add a copy to clipboard function for remInput
	const copyToClipboard = (value) => {
		navigator.clipboard
			.writeText(value.toString())
			.then(() => {
				console.log('Text copied to clipboard');
			})
			.catch((error) => {
				console.error('Failed to copy text to clipboard:', error);
			});
	};
</script>

<Breadcrumb />

<section>
	<SectionTitle sectionTitle="PX to REM Converter">
		{#snippet children({ sectionIcon })}
			<Wrench {...sectionIcon} />
		{/snippet}
	</SectionTitle>
	<div class="converter">
		<div class="input-group">
			<button
				class="converter__copy"
				disabled={!pxInput}
				onclick={copyToClipboard(pxInput)}
				type="button">
				<Copy height="24" width="24" />
			</button>
			<input id="px" name="px" class="converter__input" type="number" bind:value={pxInput} />
			<label class="converter__label" for="px">PX</label>
		</div>

		<div class="input-group">
			<button
				class="converter__copy"
				disabled={!remInput}
				onclick={copyToClipboard(remInput)}
				type="button">
				<Copy height="24" width="24" />
			</button>
			<input
				id="rem"
				name="rem"
				style="color:var(--color-primary);"
				class="converter__input"
				oninput={() => {
					pxInput = remInput * baseFontSize;
				}}
				type="number"
				bind:value={remInput} />
			<label class="converter__label" for="rem">REM</label>
		</div>
	</div>
</section>

<style>
	.converter__copy {
		background-color: var(--color-primary);
		align-self: stretch;
		color: var(--color-black);
		min-width: 40px;

		display: flex;
		justify-content: center;
		align-items: center;

		&:hover {
			cursor: pointer;
			background-color: var(--color-primary-hover);
		}

		&:disabled {
			opacity: 0;
		}
	}

	.input-group {
		border: 1px solid var(--color-border);
		min-height: 160px;
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: var(--space-small);
	}

	.converter__input {
		width: 100%;
		height: 100%;
		font-size: var(--font-size-3xl);
		appearance: none;

		&:focus-visible {
			outline: 0;
		}
	}

	.converter {
		display: flex;
		flex-direction: column;
		gap: var(--space-large);
	}

	.converter__label {
		font-size: var(--font-size-3xl);
		font-weight: 600;
		color: var(--color-text-secondary);
	}
</style>
