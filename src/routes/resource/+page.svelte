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
			<img class="other__image" src="images/music.webp" alt="music" />
			<div class="other__title large-text">Music</div>
		</a>

		<a class="other" href="/resource/exp">
			<img class="other__image" src="images/exp.webp" alt="experiment" />
			<div class="other__title large-text">Experiment</div>
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
		flex-direction: row;
		flex-wrap: wrap;
		gap: var(--space-m);
		overflow: hidden;
	}

	.other-container > * {
		flex: 1 1 10ch;
	}

	.other__image {
		width: 100%;
		height: 100%;
		position: absolute;
		z-index: 0;
		filter: brightness(40%);
		transition: 0.3s;
	}

	.other {
		display: flex;
		justify-content: center;
		align-items: center;

		position: relative;

		padding: var(--space-m);

		border-radius: var(--border-radius);
		height: 300px;
		overflow: hidden;

		box-shadow: var(--box-shadow);
	}

	.other:hover {
		box-shadow: var(--box-shadow-hover);
	}

	.other:hover .other__image {
		scale: 1.15;
	}

	.other:hover .other__title {
		background: var(--gradient);
		background-clip: text;
		color: transparent;
	}

	.other__title {
		z-index: 1;
		font-weight: 600;
		color: var(--neutral-100);
	}
</style>
