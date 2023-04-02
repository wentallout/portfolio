<script>
	import Button from '$lib/components/Button/Button.svelte';
	import FigmaLogo from '~icons/ph/figma-logo';
	export let linkToDetail = '';

	export let projectName = '';

	export let what = '';

	export let result = '';

	export let thumbnail;
</script>

<a href={linkToDetail} class="project">
	<img class="project__thumbnail" src={thumbnail} alt="" />

	<div class="project__info">
		<div class="name mid-text">{projectName}</div>

		<div class="info">
			<div class="info__section">
				<div class="section__label">What</div>
				<div class="section__desc">{what}</div>
			</div>

			<div class="info__section">
				<div class="section__label">Output</div>
				<div class="section__desc">{result}</div>
			</div>

			<!-- <div class="info__btn">
				<a href={linkToDetail}>
					<Button backgroundColor="var(--primary-500)" label="Read Case Study" />
				</a>
			</div> -->
		</div>
	</div>
</a>

<style>
	.info__btn {
		display: flex;
		flex-direction: row;
		gap: var(--space-s);
		margin-top: auto;
	}

	.info {
		display: flex;
		flex-direction: column;
		gap: var(--space-m);
		height: auto;
	}

	.project {
		width: 100%;
		display: flex;
		flex-direction: column;
		border-radius: var(--border-radius);
		background-color: var(--bg-400);

		transition: var(--transition);
		overflow: hidden;
	}

	.project:hover .name {
		color: var(--primary-500);
	}

	.project__info {
		display: flex;
		flex-grow: 2;

		flex-direction: column;

		padding: var(--space-m) var(--space-xl);
		gap: var(--space-m);
		color: var(--text-color-low);
	}

	.project:hover {
		outline: 1px solid var(--primary-500);
		filter: drop-shadow(0px 0px 4px var(--primary-500));
	}

	.name {
		color: var(--text-color);
		font-weight: 600;
	}

	.project__thumbnail {
		height: 300px;
		aspect-ratio: 1/1;
		margin-bottom: auto;
		object-fit: cover;
		background-color: var(--bg-500);
	}

	.info__section {
		display: flex;
		flex-direction: column;
		gap: var(--space-xs);
	}

	@media (min-width: 768px) {
		.project {
			flex-direction: row;
		}

		.info__section {
			flex-direction: row;
			gap: var(--space-m);
		}
	}

	.section__label {
		font-weight: 600;
		min-width: 10%;
	}

	.section__desc {
		max-width: var(--text-width);
	}
</style>
