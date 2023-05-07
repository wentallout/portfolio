<script>
	import UIDesignPrinciples from '$lib/assets/images/book/UIDesignPrinciples.png?w=200&h=300';
	import DesignManual from '$lib/assets/images/book/DesignManual.png?w=200&h=300';
	import NoBSGuideUX from '$lib/assets/images/book/NoBSGuideUX.png?w=200&h=300';
	import Sprint from '$lib/assets/images/book/Sprint.png?w=200&h=300';
	import JustEnoughResearch from '$lib/assets/images/book/JustEnoughResearch.png?w=200&h=300';
	import CoolBook from '$components/Resource/CoolBook.svelte';

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
</script>

<div class="books">
	{#each books as book}
		<CoolBook imgUrl={book.imgUrl} alt={book.name} />
	{/each}
</div>

<style>
	.books {
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	@media (min-width: 768px) {
		.books {
			gap: var(--space-m);
		}
	}
</style>
