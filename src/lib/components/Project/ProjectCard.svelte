<script>
	export let projectName = '';
	export let projectImage = 'http://fakeimg.pl/500x500';
	export let projectDesc = 'desc';
	export let linkToDetail = 'google.com';
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
		<div class="project__name">{projectName}</div>
		<div class="project__description small-text">{projectDesc}</div>
		<a class="btn btn-view" href={linkToDetail}>View</a>
	</div>
</div>

<style>
	.btn-view {
		background-color: var(--primary);
		color: var(--black);
		margin-top: auto;
	}

	.btn-view:hover {
		background-color: var(--primary-hover);
	}

	.project {
		max-width: 78rem;
		/* FLEX */
		display: flex;
		flex-direction: column;

		/* COLOR */
		background-color: var(--black);
		color: var(--white);

		/* SPACING */
		margin-bottom: 2.5rem;

		/* SHADOW */
		box-shadow: var(--box-shadow);
	}

	.project:hover {
		box-shadow: var(--box-shadow-hover);
	}

	.project__thumbnail {
		width: 100%;
		height: 200px;
		object-fit: cover;
	}

	.project__info {
		display: flex;
		flex-direction: column;
		padding: 2rem;
	}

	.project__name {
		font-weight: 600;
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
