<script>
	import MouseGlow from '$components/common/MouseGlow.svelte';

	let {
		desc = '',
		linkToDetail = '',
		output = '',
		projectName = '',
		role = '',
		thumbnail,
		what = ''
	} = $props();
</script>

<a class="project-container fancy-border" href={linkToDetail}>
	<MouseGlow />
	<article class="project">
		<div class="project__thumbnail">
			<img alt={projectName} loading="lazy" src={thumbnail} title={projectName} />
		</div>
		<div class="project__info">
			<h2 class="project__title text-large text-trim">
				{projectName}
			</h2>

			<div class="info text-small">
				<p class="section__label">Role</p>
				<p class="section__desc">{role}</p>

				<p class="section__label">Description</p>
				<p class="section__desc">{desc}</p>

				<p class="section__label">Result</p>
				<p class="section__desc">{output}</p>
			</div>
		</div>
	</article>
</a>

<style lang="postcss">
	.project {
		display: flex;

		display: grid;
		grid-template-columns: 1fr;

		position: relative;
		width: 100%;
		flex-direction: column;
		transition: var(--transition);
		box-shadow: var(--boxShadow);
		overflow: hidden;

		position: relative;
		border-radius: var(--border-radius-light);
	}

	.project:hover .project__thumbnail img {
		transform: var(--transition);
	}

	.project:hover .project__title {
		color: var(--color-primary-hover);
	}

	@media (min-width: 992px) {
		.project {
			grid-template-columns: 400px 1fr;
		}
	}

	.project__thumbnail {
		width: 100%;
		height: 100%;

		margin-bottom: auto;

		background-color: transparent;
		position: relative;
		overflow: hidden;
		border-radius: var(--border-radius-light);
		z-index: 0;
	}

	.project__thumbnail img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: var(--transition);
	}

	.project-container {
		position: relative;
	}

	@media (min-width: 992px) {
		.project {
			flex-direction: row;
		}
	}

	.project__title {
		display: flex;
		justify-content: flex-start;
		flex-direction: column;

		font-weight: var(--fontWeightLarge);
		font-family: var(--font-fancy);
	}

	.info {
		display: grid;
		gap: var(--space-small);
		grid-template-rows: 1fr 1fr 1fr;
		grid-template-columns: auto 1fr;
	}

	.project__info {
		display: flex;
		flex-grow: 2;
		flex-direction: column;
		position: relative;
		padding: var(--space-card);
		gap: var(--space-mid);
		color: var(--color-text);
		background: var(--color-bg-gradient-subtle);
	}

	@media (min-width: 992px) {
		.project {
			flex-direction: row;
		}
	}

	.section__label {
		color: var(--color-text);
		min-width: 10%;
		font-weight: 600;
	}

	.section__desc {
		max-width: var(--text-width);
	}

	@keyframes article-appear {
		from {
			transform: translateX(-10vw);
			opacity: 0;
		}
		to {
			transform: translateX(0);
			opacity: 1;
		}
	}

	.project-container {
		view-timeline-name: --articleAppear;
		animation-timeline: --articleAppear;
		animation-name: article-appear;
		animation-fill-mode: both;
		animation-range: entry 0% entry 50%;
		animation-duration: 100ms;
	}
</style>
