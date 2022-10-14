<script>
	import SwiperContainer from '$lib/components/Swiper/SwiperContainer.svelte';
	import UIDesignPrinciples from '$lib/assets/images/book/UIDesignPrinciples.png?w=200&h=300';
	import DesignManual from '$lib/assets/images/book/DesignManual.png?w=200&h=300';
	import NoBSGuideUX from '$lib/assets/images/book/NoBSGuideUX.png?w=200&h=300';
	import Sprint from '$lib/assets/images/book/Sprint.png?w=200&h=300';
	import CoolBook from '$lib/components/Resource/CoolBook.svelte';
	import { SwiperSlide } from 'swiper/svelte';

	let books = [
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
</script>

<div class="books">
	<SwiperContainer>
		{#each books as book}
			<SwiperSlide>
				<CoolBook imgUrl={book.imgUrl} alt={book.name} bookUrl={book.bookUrl} />
			</SwiperSlide>
		{/each}
	</SwiperContainer>
</div>

<style>
	.books {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: row;
		flex-wrap: wrap;
	}

	@media (min-width: 768px) {
		.books {
			gap: var(--space-xl);
		}
	}
</style>
