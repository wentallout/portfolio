<script>
	export let projectName = 'name';
	export let projectImage = 'http://fakeimg.pl/500x500';
	export let projectDesc = 'desc';
	export let linkToDetail = 'google.com';

	export let linkToFigma = '';
</script>

<div class="project">
	<img
		width="100%"
		height="auto"
		loading="lazy"
		decoding="async"
		class="project__thumbnail"
		src={projectImage}
		alt="project thumbnail"
	/>
	<div class="project__info">
		<div class="project__name mid-text">{projectName}</div>
		<div class="project__description small-text">{projectDesc}</div>

		<div class="project__btn">
			<a class="btn btn-view" href={linkToDetail}>View</a>
			<a class="btn" href={linkToFigma}>Figma</a>
		</div>
	</div>
</div>

<style>
	.project__btn {
		margin-top: auto;
		display: flex;
		justify-content: left;
	}

	.btn-view {
		background-color: var(--primary-500);
		color: var(--neutral-900);
		margin-right: var(--space-s);
	}

	.btn-view:hover {
		background-color: var(--primary-600);
	}

	.project {
		width: 100%;
		max-width: 80rem;
		/* FLEX */
		display: flex;
		flex-direction: column;

		/* COLOR */
		background-color: var(--neutral-200);
		color: var(--text);

		/* SPACING */
		margin-bottom: var(--space-l);

		/* SHADOW */
		box-shadow: var(--box-shadow);
		border-radius: var(--border-radius);
		border: var(--border);
		overflow: hidden;
	}

	.project:hover {
		box-shadow: var(--box-shadow-hover);
	}

	.project__thumbnail {
		width: 100%;
		height: 200px;
	}

	.project__info {
		display: flex;
		flex-direction: column;
		padding: var(--space-m);
	}

	.project__name {
		font-weight: 600;
		color: var(--neutral-900);
	}

	.project__description {
		color: var(--neutral-800);
		font-weight: 400;
	}

	@media (min-width: 992px) {
		.project__thumbnail {
			width: 60%;
			height: 422px;
		}

		.project__info {
			width: 40%;
		}

		.project {
			flex-direction: row;
		}
	}
</style>
