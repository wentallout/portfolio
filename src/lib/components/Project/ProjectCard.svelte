<script>
	import Button from '$lib/components/Button/Button.svelte';
	import FigmaLogo from '~icons/ph/figma-logo';
	export let linkToDetail = '';
	export let linkToFigma = '';

	export let projectName = '';

	export let what = '';
	export let who = '';
	export let result = '';
</script>

<div class="project">
	<div class="project__thumbnail">
		<slot />
	</div>

	<div class="project__info">
		<div class="info__project-name large-text">{projectName}</div>

		<div class="info__section">
			<div class="info__title">What</div>
			<div class="info__description">{what}</div>
		</div>

		<div class="info__section">
			<div class="info__title">Who</div>
			<div class="info__description">{who}</div>
		</div>

		<div class="info__section">
			<div class="info__title">Result</div>
			<div class="info__description">{result}</div>
		</div>

		<div class="info__btn">
			<a class="btn__anchor" href={linkToDetail}>
				<Button
					label="Read"
					border="1px solid var(--primary-500)"
					backgroundColor="var(--primary-500)" />
			</a>

			<a rel="external noreferrer noopener" target="_blank" href={linkToFigma}>
				<Button label="Figma" border="1px solid var(--text)">
					<FigmaLogo />
				</Button>
			</a>
		</div>
	</div>
</div>

<style>
	.project {
		display: flex;
		width: 100%;

		flex-direction: column;

		background-color: var(--bg);
		border-radius: var(--border-radius);
		overflow-y: hidden;

		box-shadow: var(--box-shadow);
	}

	.project__thumbnail {
		width: 100%;
		height: auto;
		overflow: hidden;
		outline: 1px solid var(--neutral-300);
	}

	.info__project-name {
		font-weight: 600;
		color: var(--primary-700);
		line-height: normal;
		margin-bottom: var(--space-m);
	}

	.project__info {
		padding: var(--space-l) var(--space-xl);
	}

	.info__section {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		margin-bottom: var(--space-s);
	}

	.info__title {
		width: 30%;
		font-weight: 500;
		height: 60px;
		max-width: 200px;
		color: var(--primary-600);
	}

	.info__description {
		display: flex;
		width: 70%;
		color: var(--neutral-800);
	}

	.info__btn {
		margin-top: var(--space-m);
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: var(--space-s);
	}

	@media (min-width: 992px) {
		.project {
			flex-direction: row;
		}

		.project__thumbnail {
			width: 40%;
		}

		.project__info {
			width: 60%;
		}
	}
</style>
