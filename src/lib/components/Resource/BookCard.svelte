<script>
	import ButtonWithIcon from './../Button/ButtonWithIcon.svelte';
	export let url = '';
	export let thumbnailUrl = '';
	export let authorName = 'author';
	export let bookTitle = 'title';
	export let bookDescription = 'description';

	import DownloadSimple from '~icons/ph/download-simple';
</script>

<div class="book">
	<img
		loading="lazy"
		decoding="async"
		height="250"
		width="175"
		class="book__thumbnail"
		alt="book cover"
		src={thumbnailUrl} />

	<div class="book__info">
		<div class="book-title base-text">{bookTitle}</div>
		<div class="book-author small-text">{authorName}</div>
		<p title={bookDescription} class="book-description small-text">
			{bookDescription}
		</p>
		<a target="_blank" href={url}>
			<ButtonWithIcon
				label="Download"
				backgroundColor="var(--neutral-200)"
				labelColor="var(--primary-500)"
				border="1px solid var(--primary-500)">
				<DownloadSimple size="24px" color="var(--primary-500)" />
			</ButtonWithIcon>
		</a>
	</div>
</div>

<style>
	.btn--download {
		background-color: transparent;
		border: 1px solid var(--primary-500);
		margin-top: auto;
	}

	.btn--download:hover {
		background-color: var(--neutral-900);
		transition: 0.3s ease;
	}

	.book {
		width: 100%;

		/* FLEX */
		display: flex;
		flex-direction: column;
		justify-content: center;

		margin-bottom: var(--space-l);
		padding: var(--space-m);

		text-align: left;
		color: var(--neutral-900);

		/* BOXSHADOW */
		box-shadow: var(--box-shadow);

		border: var(--border);
		border-radius: var(--border-radius);
	}

	.book:hover {
		box-shadow: var(--box-shadow-hover);
		border: var(--border-hover);
		transition: 0.3s;
	}

	.book__thumbnail {
		width: 50%;
		height: 50%;
		margin-bottom: var(--space-m);
		border-radius: var(--border-radius);
	}

	.book-title {
		font-weight: 600;
		color: var(--neutral-900);
	}

	.book-author {
		color: var(--neutral-800);
		font-weight: 300;
	}

	.book__info {
		display: flex;
		flex-direction: column;
	}

	.book-description {
		margin-top: var(--space-xs);
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
		color: var(--neutral-700);
	}

	@media (min-width: 768px) {
		.book-description {
			max-width: 39ch;
			min-height: 4rem;
		}

		.book__info {
			height: 250px;
		}

		.book {
			flex-direction: row;
			align-items: flex-start;
			justify-content: left;
		}
		.book__thumbnail {
			width: auto;
			height: 250px;
			margin-bottom: 0;
			margin-right: var(--space-m);
		}
	}

	@media (min-width: 992px) {
	}
</style>
