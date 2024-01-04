<script>
	import Copy from '~icons/ph/copy';
	import SectionTitle from '$sections/SectionTitle.svelte';
	import Wrench from '~icons/ph/wrench';
	let baseFontSize = 16;
	let pxInput;
	let remInput;

	$: remInput = pxInput / baseFontSize;

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

<section>
	<SectionTitle sectionTitle="PX - REM Converter" let:sectionIcon>
		<Wrench {...sectionIcon} />
	</SectionTitle>
	<div class="converter">
		<div class="input-group">
			<button
				disabled={!pxInput}
				class="converter__copy"
				type="button"
				on:click={copyToClipboard(pxInput)}>
				<Copy width="24" height="24" />
			</button>
			<input class="converter__input" bind:value={pxInput} type="number" name="px" id="px" />
			<label class="converter__label" for="px">PX</label>
		</div>

		<div class="input-group">
			<button
				disabled={!remInput}
				class="converter__copy"
				type="button"
				on:click={copyToClipboard(remInput)}>
				<Copy width="24" height="24" />
			</button>
			<input
				class="converter__input"
				style="color:var(--colorPrimary);"
				bind:value={remInput}
				on:input={() => {
					pxInput = remInput * baseFontSize;
				}}
				type="number"
				name="rem"
				id="rem" />
			<label class="converter__label" for="rem">REM</label>
		</div>
	</div>
</section>

<style>
	.converter__copy {
		background-color: var(--colorPrimary);
		align-self: stretch;
		color: var(--colorBlack);
		min-width: 40px;

		&:hover {
			cursor: pointer;
			background-color: var(--colorPrimaryHover);
		}

		&:disabled {
			opacity: 0;
		}
	}

	.input-group {
		border: 1px solid var(--colorBorder);
		min-height: 160px;
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: var(--spaceS);
	}

	.converter__input {
		width: 100%;
		height: 100%;
		font-size: var(--fontSize3XL);
		appearance: none;

		&:focus-visible {
			outline: 0;
		}
	}

	.converter {
		display: flex;
		flex-direction: column;
		gap: var(--spaceL);
	}

	.converter__label {
		font-size: var(--fontSize3XL);
		font-weight: 600;
		color: var(--colorTextSecondary);
	}
</style>
