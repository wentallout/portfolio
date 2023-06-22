<script>
	import UIDesignPrinciples from '$lib/assets/images/book/UIDesignPrinciples.png?w=200&h=300';
	import DesignManual from '$lib/assets/images/book/DesignManual.png?w=200&h=300';
	import NoBSGuideUX from '$lib/assets/images/book/NoBSGuideUX.png?w=200&h=300';
	import Sprint from '$lib/assets/images/book/Sprint.png?w=200&h=300';
	import JustEnoughResearch from '$lib/assets/images/book/JustEnoughResearch.png?w=200&h=300';
	import Book3D from '$lib/components/Resource/Card/Book3D.svelte';

	let books = [
		{
			name: 'Just Enough Research',
			imgUrl: JustEnoughResearch,
			bookUrl: 'https://terabox.com/s/1BXO6sku01d2yUm-IGH1l-A'
		},
		{
			name: 'UI Design Principles',
			imgUrl: UIDesignPrinciples,
			bookUrl: 'https://matix.li/56ca135e203d'
		},
		{
			name: 'Design Manual',
			imgUrl: DesignManual,
			bookUrl: 'https://matix.li/92ee7d7f4bad'
		},
		{
			name: 'NoBSGuideUX',
			imgUrl: NoBSGuideUX,
			bookUrl: 'https://matix.li/0794035223cd'
		},
		{ name: 'Sprint', imgUrl: Sprint, bookUrl: 'https://matix.li/92648755b3ce' }
	];

	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';

	import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

	const options = {
		rewind: true,

		autoplay: false,
		arrows: false,
		height: 'fit-content',
		perPage: 2,
		perMove: 2,
		pagination: true,
		autoScroll: {
			speed: 2,
			rewind: true
		}
	};

	const extensions = {
		AutoScroll
	};
</script>

<Splide hasTrack={false} class="splide" {options} {extensions} aria-label="My Favorite Images">
	<SplideTrack>
		{#each books as book}
			<SplideSlide>
				<Book3D imgUrl={book.imgUrl} alt={book.name} />
			</SplideSlide>
		{/each}
	</SplideTrack>
</Splide>
