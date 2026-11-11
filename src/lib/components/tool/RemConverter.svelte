<script lang="ts">
	import Breadcrumb from '#lib/components/other/Breadcrumb.svelte';
	import { Copy } from '#lib/assets/icons/icons.js';
	import SectionTitle from '#lib/sections/layout/SectionTitle.svelte';
	import { Button } from '#lib/components/ui/button/index.js';
	import { Input } from '#lib/components/ui/input/index.js';

	const baseFontSize = 16;
	let pxInput = $state(16);
	let remInput = $state(1);

	// Keep both fields in sync from the field the user is actually editing,
	// so we never need a $state/$effect pair feeding back into itself.
	function handlePxInput(event: Event) {
		pxInput = Number((event.currentTarget as HTMLInputElement).value);
		remInput = pxInput / baseFontSize;
	}

	function handleRemInput(event: Event) {
		remInput = Number((event.currentTarget as HTMLInputElement).value);
		pxInput = remInput * baseFontSize;
	}

	function copyToClipboard(value: number) {
		if (!Number.isFinite(value)) return;
		void navigator.clipboard.writeText(value.toString()).catch((error) => {
			console.error('Failed to copy text to clipboard:', error);
		});
	}
</script>

<Breadcrumb />

<section>
	<SectionTitle as="h1" sectionTitle="PX to REM Converter" />
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
				oninput={handlePxInput}
				value={pxInput} />
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
				type="number"
				oninput={handleRemInput}
				value={remInput} />
			<label class="text-2xl font-medium text-muted-foreground pr-4" for="rem">REM</label>
		</div>
	</div>
</section>
