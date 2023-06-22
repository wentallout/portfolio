<script>
	import FigmaCard from '$components/Resource/Card/FigmaCard.svelte';

	import iOSThumbnail from '$lib/assets/images/resource/iOSDesign.png';

	import UXDeli from '$lib/assets/images/resource/UXDeli.png';

	import FluentDesign from '$lib/assets/images/resource/FluentDesign.png';
	import CardListContainer from '$lib/components/Layout/Container/CardListContainer.svelte';
</script>

<CardListContainer>
	<FigmaCard
		href="https://www.figma.com/community/file/1248375255495415511"
		title="Apple Design Resources - iOS 17 and iPadOS 17"
		desc="Apple"
		thumbnailUrl={iOSThumbnail} />
	<FigmaCard
		title="UX Templates"
		desc="BB Agency"
		thumbnailUrl={UXDeli}
		href="https://www.figma.com/community/file/1249989452135952332/UX-Templates" />
	<FigmaCard
		title="Microsoft Fluent 2 Web"
		desc="Microsoft"
		thumbnailUrl={FluentDesign}
		href="https://www.figma.com/community/file/836828295772957889/Microsoft-Fluent-2-Web" />
</CardListContainer>
