<script>
	import FigmaLogo from '~icons/ph/figma-logo';
	import Button from '$lib/components/Button/Button.svelte';
	export let projectName = 'insert project name here';
	// export let projectImage;
	export let linkToDetail = '';
	export let linkToFigma = '';

	export let who = '';
	export let what = '';
	export let result = '';
</script>

<div class="project">
	<div class="project__thumbnail">
		<slot name="atropos"><!-- optional fallback --></slot>
	</div>
	<div class="project__info">
		<div class="project__name large-text">{projectName}</div>
		<div class="project__description small-text">
			<div class="description-section">
				<p class="section-title">◆ What</p>
				<p class="section-info">{what}</p>
			</div>

			<div class="description-section">
				<p class="section-title">◆ Who</p>
				<p class="section-info">{who}</p>
			</div>

			<div class="description-section">
				<p class="section-title">◆ Result</p>
				<p class="section-info">{result}</p>
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
</div>

<style>
	.description-section {
		display: flex;
		flex-direction: row;
		gap: var(--space-xs);
	}

	.section-title {
		min-width: 30%;
		font-weight: 500;
		color: var(--primary-600);
	}

	.section-info {
		text-align: left;
		margin-right: auto;
	}

	.project {
		width: 100%;
		max-width: 80rem;
		/* FLEX */
		display: flex;
		flex-direction: column;

		color: var(--text);

		/* SPACING */
		margin-bottom: var(--space-l);

		/* SHADOW */
		box-shadow: var(--box-shadow);
		border-radius: var(--border-radius);
		border: var(--border);
		overflow: hidden;
	}

	.project__btn {
		margin-top: auto;
		display: flex;
		flex-wrap: wrap;
		justify-content: left;
		gap: var(--space-xs);
	}

	.project:hover {
		box-shadow: var(--box-shadow-hover);
	}

	.project__thumbnail {
		width: 100%;
		overflow: visible;
		height: 100%;
	}

	/* .thumbnail {
		display: none;
		width: 100%;
		height: 100%;
		border-radius: var(--border-radius);
	} */

	.project__info {
		display: flex;
		flex-direction: column;
		padding: var(--space-l);
	}

	.project__name {
		font-weight: 600;
		color: var(--text);
		margin-bottom: var(--space-xs);
	}

	.project__description {
		color: var(--neutral-800);
		font-weight: 400;
		margin-bottom: var(--space-s);
	}

	@media (min-width: 992px) {
		.project {
			flex-direction: row;
		}

		.project__thumbnail {
			width: 60%;
			height: auto;
		}
	}
</style>
