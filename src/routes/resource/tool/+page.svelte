<script>
	import SectionTitle from '$lib/components/Common/Section/SectionTitle.svelte';

	// import { resourceData, getResource } from '$lib/stores/resourceStore.js';
	import Wrench from '~icons/ph/wrench';

	let baseFontSize = 16;
	let pxValue;
	let remValue;

	$: remValue = pxValue / baseFontSize;

	//add a copy to clipboard function for remValue
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

<SectionTitle sectionTitle="Tool" let:sectionIcon>
	<Wrench {...sectionIcon} />
</SectionTitle>

<section>
	<h3 class="tool__title">PX ~ REM converter</h3>

	<div class="converter">
		<div class="input-group">
			<input bind:value={pxValue} type="number" name="px" id="px" />
			<label class="converter__label" for="px">PX</label>
			<button class="converter__copy" type="button" on:click={copyToClipboard(pxValue)}
				>Copy</button>
		</div>

		<div class="input-group">
			<input
				style="color:var(--colorPrimary);"
				bind:value={remValue}
				on:input={() => {
					pxValue = remValue * baseFontSize;
				}}
				type="number"
				name="rem"
				id="rem" />
			<label class="converter__label" for="rem">REM</label>
			<button class="converter__copy" type="button" on:click={copyToClipboard(remValue)}
				>Copy</button>
		</div>
	</div>
</section>

<!-- <div>
	{#await getResource()}
		{#each $resourceData as resource (resource.id)}
			<div>
				{resource.title}
				{resource.type}
				{resource.description}
			</div>
		{/each}
	{:catch error}
		<p>Something went wrong while fetching the data</p>
		<pre>{error}</pre>
	{/await}
</div> -->

<style>
	.tool__title {
		font-size: var(--fontSizeLarge);
	}

	.converter__copy {
		background-color: var(--colorPrimary);
		align-self: stretch;
		color: var(--colorBlack);

		&:hover {
			cursor: pointer;
			background-color: var(--colorPrimaryHover);
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

	.input-group input {
		width: 100%;
		height: 100%;
		font-size: var(--fontSize3XL);
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
