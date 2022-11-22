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
		<div class="project__name large-text">{projectName}</div>
		<div class="project__description small-text">
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
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		width: 100%;
	}

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

		overflow: hidden;
		transition: 0.3s;

		outline: var(--border);
		overflow: hidden;
		text-overflow: ellipsis;
		overflow: hidden;
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

	.project__thumbnail {
		width: 100%;
		overflow: hidden;
		height: 100%;
	}

	.project__info {
		display: flex;
		flex-direction: column;
		outline: var(--border);
		overflow: hidden;
	}

	.project__name {
		font-weight: 600;
		color: var(--text);

		padding: var(--space-s) var(--space-l);
	}

	.project__description {
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
			flex-direction: row;
		}

		.project__thumbnail {
			width: 50%;
			height: auto;
		}

		.project__info {
			width: 50%;
		}

		.project__description {
			width: 100%;
		}
	}
</style>
