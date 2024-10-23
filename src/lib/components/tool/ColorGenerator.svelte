<script>
	import Wrench from '~icons/ph/wrench';
	import SectionTitle from '$sections/SectionTitle.svelte';

	import Palette from '~icons/ph/palette';

	let hue;
	let saturation;
	let brightness;

	function genRandomHSB() {}
</script>

<section>
	<SectionTitle sectionTitle="Color Generator" >
		{#snippet children({ sectionIcon })}
				<Palette {...sectionIcon} />
					{/snippet}
		</SectionTitle>
</section>

<style>
</style>
