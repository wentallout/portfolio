<script>
	import Faq from '$lib/components/Faq/Faq.svelte';
	import FaqContainer from '$lib/components/Faq/FaqContainer.svelte';

	import Books from '~icons/ph/books';

	import BookCard from '$lib/components/Book/BookCard.svelte';
	import SectionTitle from '$lib/components/Common/SectionTitle.svelte';

	import pic1 from '$lib/assets/images/UI Design Principles.png?h=250&webp';
	import pic2 from '$lib/assets/images/DesignManual.png?h=250&webp';
	import pic3 from '$lib/assets/images/NoBSGuideUX.png?h=250&webp';
	import pic4 from '$lib/assets/images/Sprint.png?h=250&webp';
</script>

<svelte:head>
	<title>Resource</title>
</svelte:head>

<SectionTitle sectionTitle="Must-read">
	<Books color="var(--black)" />
</SectionTitle>

<FaqContainer>
	<Faq summary="UI">
		<div class="books">
			<BookCard
				url="https://1drv.ms/b/s!Ahis-4qg6dsEdTm7ECJXBuoqoxw"
				thumbnailUrl={pic1}
				bookTitle="UI Design Principles"
				authorName="Michael Filipiuk"
				bookDescription="I was making my first steps into the world of UI design, and this book has helped me tremendously."
			/>

			<BookCard
				url="https://drive.google.com/uc?export=download&id=1A1UAg2p_91GjEPWk--iHzX2yf37yhXtJ"
				thumbnailUrl={pic2}
				bookTitle="Design Manual"
				authorName="AdrianK"
				bookDescription="This one has a real project inside and taught me a lot about auto-layout and responsive constraints in Figma."
			/>
		</div>
	</Faq>
	<Faq summary="UX">
		<div class="books">
			<BookCard
				url="https://1drv.ms/b/s!Ahis-4qg6dsEdpmKJyycIRPpPlA"
				thumbnailUrl={pic3}
				bookTitle="No Bullshit Guide To UX"
				authorName="Michal Malewicz"
				bookDescription="This book clears up a lot of my problems. Companies almost never have the same UX process so people like me struggle to learn the basics."
			/>
		</div>
	</Faq>

	<Faq summary="Process">
		<div class="books">
			<BookCard
				url="https://1drv.ms/b/s!Ahis-4qg6dsEd0lfpvdH9cTtzRk"
				thumbnailUrl={pic4}
				bookTitle="Sprint"
				authorName="Jake Knapp"
				bookDescription="Amazing book that should be read by every UX designer."
			/>
		</div>
	</Faq>
</FaqContainer>

<style>
	/* start here */

	.books {
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		max-width: 50rem;
		flex-direction: column;
	}

	/* @media (min-width: 992px) {
		.books {
			width: 70%;
			
		}
	} */
</style>
