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

		<div class="info__section small-text">
			<div class="info__title">What</div>
			<div class="info__description">{what}</div>
		</div>

		<div class="info__section small-text">
			<div class="info__title">Who</div>
			<div class="info__description">{who}</div>
		</div>

		<div class="info__section small-text">
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

			<a class="btn__anchor" rel="external noreferrer noopener" target="_blank" href={linkToFigma}>
				<Button labelColor="var(--text-color)" label="Figma" border="1px solid var(--text-color)">
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

		border-radius: var(--border-radius-light);
		overflow-y: hidden;

		background-color: var(--bg);
	}

	.project__thumbnail {
		width: 100%;
		height: auto;
		overflow: hidden;
	}

	.info__project-name {
		font-weight: 600;
		color: var(--primary-500);
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
		width: fit-content;
		margin-right: auto;
		font-weight: 500;
		height: 60px;
		max-width: 200px;
	}

	.info__description {
		margin-left: var(--space-s);
		display: flex;
		width: 70%;
		color: var(--text-color-low);
	}

	.info__btn {
		margin-top: var(--space-m);
		display: flex;
		width: 100%;
		flex-direction: row;
		flex-wrap: wrap;
		gap: var(--space-s);
	}

	.btn__anchor {
		width: 100%;
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

		.btn__anchor {
			width: 250px;
		}
	}
</style>
