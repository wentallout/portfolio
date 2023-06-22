<script>
	import CardListContainer from '$lib/components/Layout/Container/CardListContainer.svelte';
	import FigmaCard from '$lib/components/Resource/Card/FigmaCard.svelte';
</script>

<!--  -->

<CardListContainer>
	<FigmaCard
		title="Panoramic Animation"
		href="https://codepen.io/wentallout/pen/xxQEOzq"
		thumbnailUrl="https://shots.codepen.io/username/pen/xxQEOzq-800.jpg?version=1687348377"
		desc="animate an img from left to right when it's wider than its container" />
	<FigmaCard
		title="Smooth Scroll"
		href="https://codepen.io/wentallout/pen/ExNNvzR"
		thumbnailUrl="https://shots.codepen.io/username/pen/ExNNvzR-800.jpg?version=1687435881"
		desc="smooth scroll with vanilla JS" />

	<FigmaCard
		title="Glitchy Text Animation"
		href="https://codepen.io/wentallout/pen/rNzBQOQ"
		thumbnailUrl="https://shots.codepen.io/username/pen/rNzBQOQ-800.jpg?version=1687436295"
		desc="make futuristic glitchy text 100% CSS" />
</CardListContainer>
