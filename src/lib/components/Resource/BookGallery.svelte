<script>
	import UIDesignPrinciples from '$lib/assets/images/book/UIDesignPrinciples.png?w=200&h=300&webp';
	import DesignManual from '$lib/assets/images/book/DesignManual.png?w=200&h=300&webp';
	import NoBSGuideUX from '$lib/assets/images/book/NoBSGuideUX.png?w=200&h=300&webp';
	import Sprint from '$lib/assets/images/book/Sprint.png?w=300&webp';
	import CoolBook from '$lib/components/Resource/CoolBook.svelte';

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
	{#each books as book}
		<div class="book__block">
			<CoolBook imgUrl={book.imgUrl} alt={book.name} bookUrl={book.bookUrl} />
		</div>
	{/each}
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
