<script>
	import Button from '$lib/components/Button/Button.svelte';
	import FigmaLogo from '~icons/ph/figma-logo';
	export let linkToDetail = '';

	import Atropos from 'atropos/svelte';
	export let projectName = '';

	export let what = '';
	export let who = '';
	export let result = '';

	export let thumbnail;
</script>

<Atropos rotateTouch="scroll-y" rotateXMax="5" rotateYMax="5">
	<a href={linkToDetail} class="project">
		<img class="project__thumbnail" src={thumbnail} alt="" />

		<div class="project__info">
			<div class="name mid-text">{projectName}</div>

			<div class="info">
				<div class="info__section">
					<div class="section__label">What</div>
					<div class="setion__desc">{what}</div>
				</div>

				<div class="info__section">
					<div class="section__label">Who</div>
					<div class="setion__desc">{who}</div>
				</div>

				<div class="info__section">
					<div class="section__label">Result</div>
					<div class="setion__desc">{result}</div>
				</div>
			</div>
		</div>
	</a>
</Atropos>

<style>
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
		border: 1px solid transparent;
		transition: var(--transition);
		overflow: hidden;
	}

	.project__info {
		display: flex;
		flex-grow: 2;

		flex-direction: column;

		padding: var(--space-m) var(--space-l);
		gap: var(--space-m);
		color: var(--text-color-low);
	}

	.project:hover {
		border: 1px solid var(--primary-500);
	}

	.name {
		color: var(--primary-500);
		font-weight: 600;
	}

	.project__thumbnail {
		height: 300px;
		aspect-ratio: 1/1;
		margin-bottom: auto;
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
