<script>
	import Breadcrumb from '$components/other/Breadcrumb.svelte';
	import { Copy, Wrench } from '$lib/assets/icons/icons';
	import SectionTitle from '$sections/layout/SectionTitle.svelte';
	SectionTitle;
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
	<div class="flex flex-col gap-8">
		<div class="flex flex-row items-center gap-4 border border-border min-h-40">
			<button
				class="bg-primary text-primary-foreground min-w-10 self-stretch flex justify-center items-center hover:bg-[var(--brand-yellow-hover)] disabled:opacity-0 cursor-pointer"
				disabled={!pxInput}
				onclick={copyToClipboard(pxInput)}
				type="button">
				<Copy height="24" width="24" />
			</button>
			<input id="px" name="px" class="w-full h-full text-2xl appearance-none bg-transparent outline-none focus:outline-none px-2" type="number" bind:value={pxInput} />
			<label class="text-2xl font-medium text-muted-foreground pr-4" for="px">PX</label>
		</div>

		<div class="flex flex-row items-center gap-4 border border-border min-h-40">
			<button
				class="bg-primary text-primary-foreground min-w-10 self-stretch flex justify-center items-center hover:bg-[var(--brand-yellow-hover)] disabled:opacity-0 cursor-pointer"
				disabled={!remInput}
				onclick={copyToClipboard(remInput)}
				type="button">
				<Copy height="24" width="24" />
			</button>
			<input
				id="rem"
				name="rem"
				class="w-full h-full text-2xl appearance-none bg-transparent outline-none focus:outline-none px-2 text-primary"
				oninput={() => {
					pxInput = remInput * baseFontSize;
				}}
				type="number"
				bind:value={remInput} />
			<label class="text-2xl font-medium text-muted-foreground pr-4" for="rem">REM</label>
		</div>
	</div>
</section>
