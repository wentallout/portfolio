<script>
	import FigmaCard from '$components/resource/FigmaCard.svelte';

	import iOSThumbnail from '$lib/assets/images/resource/ios-design.png';

	import UXDeli from '$lib/assets/images/resource/ux-deli.png';

	import FluentDesign from '$lib/assets/images/resource/fluent-design.png';
	import CardListContainer from '$components/layout/container/CardListContainer.svelte';
</script>

<CardListContainer>
	<FigmaCard
		desc="Apple"
		href="https://www.figma.com/community/file/1248375255495415511"
		thumbnailUrl={iOSThumbnail}
		title="Apple Design Resources - iOS 17 and iPadOS 17" />
	<FigmaCard
		desc="BB Agency"
		href="https://www.figma.com/community/file/1249989452135952332/UX-Templates"
		thumbnailUrl={UXDeli}
		title="UX Templates" />
	<FigmaCard
		desc="Microsoft"
		href="https://www.figma.com/community/file/836828295772957889/Microsoft-Fluent-2-Web"
		thumbnailUrl={FluentDesign}
		title="Microsoft Fluent 2 Web" />
</CardListContainer>
