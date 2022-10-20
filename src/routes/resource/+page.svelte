<script>
	import BookGallery from '$lib/components/Resource/BookGallery.svelte';
	import ToolCardList from '$lib/components/Resource/ToolCardList.svelte';
	import Books from '~icons/ph/books';
	import HardDrives from '~icons/ph/hard-drives';
	import Flask from '~icons/ph/flask';

	import SectionTitle from '$lib/components/Common/SectionTitle.svelte';
</script>

<svelte:head>
	<title>Resource</title>
</svelte:head>

<section>
	<SectionTitle sectionTitle="Book" let:sectionIcon>
		<Books {...sectionIcon} />
	</SectionTitle>

	<BookGallery />
</section>

<section>
	<SectionTitle sectionTitle="User Research" let:sectionIcon>
		<Flask {...sectionIcon} />
	</SectionTitle>
	<p class="section-description small-text">
		User research helps you understand user behaviors, needs, and motivations through various
		qualitative and quantitative methods (interviews, observation, forms, etc).
	</p>

	<ToolCardList />
</section>

<section>
	<SectionTitle sectionTitle="Other" let:sectionIcon>
		<HardDrives {...sectionIcon} />
	</SectionTitle>

	<div class="other-container">
		<a class="other" href="/resource/music">
			<div class="other__title large-text">Music</div>
		</a>
	</div>
</section>

<style>
	.section-description {
		max-width: 60ch;
		text-align: left;
		margin-bottom: var(--space-s);
		color: var(--text);
	}

	.other-container {
		display: flex;
		flex-direction: column;
	}

	.other {
		display: flex;
		justify-content: center;
		align-items: center;

		padding: var(--space-m);
		box-shadow: var(--box-shadow);
		border-radius: var(--border-radius);
		width: 300px;
		height: 300px;
	}
	.other__title {
		font-weight: 600;
	}
</style>
