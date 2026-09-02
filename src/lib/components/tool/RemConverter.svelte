<script lang="ts">
	import Breadcrumb from '#lib/components/other/Breadcrumb.svelte';
	import { Copy } from '#lib/assets/icons/icons.js';
	import SectionTitle from '#lib/sections/layout/SectionTitle.svelte';
	import { Button } from '#lib/components/ui/button/index.js';
	import { Input } from '#lib/components/ui/input/index.js';
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
	<SectionTitle sectionTitle="PX to REM Converter" />
	<div class="flex flex-col gap-8">
		<div class="flex flex-row items-center gap-4 border border-border min-h-40">
			<Button
				variant="default"
				size="icon"
				class="min-w-10 self-stretch rounded-none flex justify-center items-center disabled:opacity-0"
				disabled={!pxInput}
				onclick={() => copyToClipboard(pxInput)}
				type="button">
				<Copy height="24" width="24" />
			</Button>
			<Input
				id="px"
				name="px"
				class="h-full flex-1 border-0 rounded-none bg-transparent text-2xl shadow-none focus-visible:ring-0 focus-visible:border-0 px-2"
				type="number"
				bind:value={pxInput} />
			<label class="text-2xl font-medium text-muted-foreground pr-4" for="px">PX</label>
		</div>

		<div class="flex flex-row items-center gap-4 border border-border min-h-40">
			<Button
				variant="default"
				size="icon"
				class="min-w-10 self-stretch rounded-none flex justify-center items-center disabled:opacity-0"
				disabled={!remInput}
				onclick={() => copyToClipboard(remInput)}
				type="button">
				<Copy height="24" width="24" />
			</Button>
			<Input
				id="rem"
				name="rem"
				class="h-full flex-1 border-0 rounded-none bg-transparent text-2xl shadow-none focus-visible:ring-0 focus-visible:border-0 px-2 text-primary"
				oninput={() => {
					pxInput = remInput * baseFontSize;
				}}
				type="number"
				bind:value={remInput} />
			<label class="text-2xl font-medium text-muted-foreground pr-4" for="rem">REM</label>
		</div>
	</div>
</section>
