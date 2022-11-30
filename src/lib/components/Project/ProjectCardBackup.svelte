<script>
	import FigmaLogo from '~icons/ph/figma-logo';
	import Button from '$lib/components/Button/Button.svelte';
	export let projectName = 'projectName';
	export let linkToDetail = '';
	export let linkToFigma = '';

	export let who = 'who';
	export let what = 'what';
	export let result = 'result';
</script>

<a href={linkToDetail} class="project">
	<div class="project__thumbnail">
		<slot name="thumbnail"><!-- optional fallback --></slot>
	</div>
	<div class="project__info">
		<div class="info__name large-text">{projectName}</div>
		<div class="info_description small-text">
			<div class="description__section">
				<div class="section__title">What</div>
				<div class="section__info">{what}</div>
			</div>

			<div class="description__section">
				<div class="section__title">Who</div>
				<div class="section__info">{who}</div>
			</div>

			<div class="description__section">
				<div class="section__title">Result</div>
				<div class="section__info">{result}</div>
			</div>
		</div>

		<div class="project__btn">
			<a href={linkToDetail}>
				<Button
					label="Read"
					border="1px solid var(--primary-500)"
					backgroundColor="var(--primary-500)" />
			</a>

			<a rel="external noreferrer noopener" target="_blank" href={linkToFigma}>
				<Button label="Figma" border="1px solid var(--neutral-900)">
					<FigmaLogo />
				</Button>
			</a>
		</div>
	</div>
</a>

<style>
	.project {
		/* FLEX */
		display: flex;
		flex-direction: column;

		width: 100%;
		max-width: 80rem;

		color: var(--text);
		background-color: var(--bg);

		/* SPACING */
		margin-bottom: var(--space-l);

		transition: 0.3s;

		
		overflow: hidden;
	}

	.project__thumbnail {
		width: 100%;
		overflow: hidden;
		height: auto;
	}

	.project__info {
		display: flex;
		flex-direction: column;
		
		overflow: hidden;
	}

	.description__section {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: var(--space-s);
		margin-bottom: var(--space-s);
		width: 100%;
		overflow: hidden;
	}

	.section__title {
		width: 30%;
		font-weight: 500;
		color: var(--primary-600);

		height: 100%;
	}

	.section__info {
		margin-right: auto;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
		width: 100%;
	}

	.project:hover {
		box-shadow: var(--box-shadow-hover);
	}

	.project__btn {
		margin-top: auto;
		display: flex;
		flex-wrap: wrap;
		justify-content: left;
		gap: var(--space-xs);
		padding: var(--space-s) var(--space-l);
	}

	.info__name {
		font-weight: 600;
		color: var(--text);

		padding: var(--space-s) var(--space-l);
		
	}

	.info_description {
		color: var(--neutral-800);
		font-weight: 400;
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: var(--space-s);
		padding: var(--space-s) var(--space-l);

		width: 100%;
	}

	@media (min-width: 992px) {
		.project {
			display: flex;
			flex-direction: row;
		}

		.project__thumbnail {
			width: 50%;
			height: auto;
		}

		.project__info {
			width: 50%;
		}

		.info_description {
			width: 100%;
		}
	}
</style>
