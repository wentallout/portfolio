<script>
	export let linkToDetail = '';
	export let projectName = '';
	export let what = '';
	export let result = '';

	export let year = '';
	export let thumbnail;

	import ArrowRight from '~icons/ph/arrow-right';
</script>

<a href={linkToDetail}>
	<article class="project">
		<div class="project__year text-xs">{year}</div>
		<img class="project__thumbnail" src={thumbnail} alt="" />

		<div class="project__info">
			<div class="title">
				<div class="name text-mid">{projectName}</div>
			</div>

			<div class="info text-small">
				<div class="info__section">
					<div class="section__label">About</div>
					<div class="section__desc">{what}</div>
				</div>

				<div class="info__section">
					<div class="section__label">Output</div>
					<div class="section__desc">{result}</div>
				</div>
			</div>

			<div class="indicator text-small">
				<ArrowRight color="inherit" width="24" height="24" />Read Case Study
			</div>
		</div>
	</article>
</a>

<style>
	.project {
		position: relative;
		width: 100%;
		display: flex;
		flex-direction: column;

		transition: var(--transition);
		overflow: hidden;

		box-shadow: var(--boxShadow);
		outline: 1px solid var(--colorBorder);
	}
	.project:hover {
		background-color: var(--colorBgElevated);
		box-shadow: -5px 5px var(--colorPrimaryHover);
		transform: translate(5px, -5px);
	}

	.title {
		display: flex;
		justify-content: flex-start;
		flex-direction: column;
	}

	.info {
		display: flex;
		flex-direction: column;
		gap: var(--spaceXS);
		height: auto;
	}

	.project__info {
		display: flex;
		flex-grow: 2;

		flex-direction: column;
		position: relative;
		padding: var(--spaceM) var(--spaceXL);
		gap: var(--spaceM);
		color: var(--colorTextSecondary);
	}

	.name {
		color: var(--colorText);
		font-weight: var(--fontWeightLarge);
	}

	.project__thumbnail {
		height: 300px;
		aspect-ratio: 1/1;
		margin-bottom: auto;
		object-fit: cover;
		background-color: transparent;
		position: relative;
		padding: 8px;

		border-radius: var(--border-radius);
	}

	.info__section {
		display: flex;
		flex-direction: column;
		gap: var(--spaceXS);
	}

	@media (min-width: 992px) {
		.project {
			flex-direction: row;
		}

		.info__section {
			flex-direction: row;
			gap: var(--spaceM);
		}
	}

	.section__label {
		color: var(--colorText);
		min-width: 10%;
	}

	.section__desc {
		max-width: var(--text-width);
	}

	.project__year {
		position: absolute;
		top: 0;
		left: 0;
		width: fit-content;

		line-height: normal;
		color: var(--colorWhite);
		font-weight: var(--fontWeightXS);

		background-color: rgba(0, 0, 0, 0.8);
		backdrop-filter: blur(5px);

		padding: 8px;
		z-index: 3;

		flex-direction: column;
	}

	.indicator {
		margin-top: auto;
		font-weight: var(--fontWeightSmall);
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: var(--spaceXS);
		color: var(--colorText);
		transition: var(--transition);
		opacity: 0;
	}

	.project:hover .indicator {
		padding-left: 0.5rem;
		color: var(--colorPrimary);
		opacity: 1;
	}
</style>
