<script>
	import Book3D from '$components/resource/Book3D.svelte';
	import DesignManual from '$lib/assets/images/book/DesignManual.png?w=200&h=300';
	import JustEnoughResearch from '$lib/assets/images/book/JustEnoughResearch.png?w=200&h=300';
	import NoBSGuideUX from '$lib/assets/images/book/NoBSGuideUX.png?w=200&h=300';
	import Sprint from '$lib/assets/images/book/Sprint.png?w=200&h=300';
	import UIDesignPrinciples from '$lib/assets/images/book/UIDesignPrinciples.png?w=200&h=300';

	let books = [
		{
			bookUrl: 'https://terabox.com/s/1BXO6sku01d2yUm-IGH1l-A',
			imgUrl: JustEnoughResearch,
			name: 'Just Enough Research'
		},
		{
			bookUrl: 'https://matix.li/56ca135e203d',
			imgUrl: UIDesignPrinciples,
			name: 'UI Design Principles'
		},
		{
			bookUrl: 'https://matix.li/92ee7d7f4bad',
			imgUrl: DesignManual,
			name: 'Design Manual'
		},
		{
			bookUrl: 'https://matix.li/0794035223cd',
			imgUrl: NoBSGuideUX,
			name: 'NoBSGuideUX'
		},
		{ bookUrl: 'https://matix.li/92648755b3ce', imgUrl: Sprint, name: 'Sprint' }
	];

	import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
	import '@splidejs/svelte-splide/css';
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';

	const options = {
		arrows: false,
		autoplay: false,
		autoScroll: {
			rewind: true,
			speed: 2
		},
		height: 'fit-content',
		pagination: true,
		perMove: 2,
		perPage: 3,
		rewind: true
	};

	const extensions = {
		AutoScroll
	};
</script>

<Splide class="splide" aria-label="My Favorite Images" {extensions} hasTrack={false} {options}>
	<SplideTrack>
		{#each books as book}
			<SplideSlide>
				<Book3D alt={book.name} imgUrl={book.imgUrl} />
			</SplideSlide>
		{/each}
	</SplideTrack>
</Splide>
