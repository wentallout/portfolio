<script>
	import Wrench from '~icons/ph/wrench';
	import SectionTitle from '$components/common/Section/SectionTitle.svelte';

	import Palette from '~icons/ph/palette';

	let hue;
	let saturation;
	let brightness;

	function genRandomHSB()
	{
		
	}
</script>

<section>
	<SectionTitle sectionTitle="Color Generator" let:sectionIcon>
		<Palette {...sectionIcon} />
	</SectionTitle>
</section>

<style>
</style>
