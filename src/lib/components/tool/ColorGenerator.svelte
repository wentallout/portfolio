<script>
	import { Palette, Wrench } from '$lib/assets/icons/icons';
	import SectionTitle from '$sections/layout/SectionTitle.svelte';

	let hue;
	let saturation;
	let brightness;

	function genRandomHSB() {}
</script>

<section>
	<SectionTitle sectionTitle="Color Generator">
		{#snippet children({ sectionIcon })}
			<Palette {...sectionIcon} />
		{/snippet}
	</SectionTitle>
</section>

<style>
</style>
