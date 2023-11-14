<script>
	export let linkToDetail = '';
	export let projectName = '';
	export let what = '';
	export let output = '';
	export let role = '';

	export let thumbnail;

	import ArrowRight from '~icons/ph/arrow-right';
</script>

<a href={linkToDetail}>
	<article class="project">
		<img class="project__thumbnail" src={thumbnail} alt="" />

		<div class="project__info">
			<div class="title">
				<div class="name text-mid">{projectName}</div>
			</div>

			<div class="info text-small">
				<div class="info__section">
					<div class="section__label">Goal</div>
					<div class="section__desc">{what}</div>
				</div>
				<div class="info__section">
					<div class="section__label">Role</div>
					<div class="section__desc">{role}</div>
				</div>

				<div class="info__section">
					<div class="section__label">Output</div>
					<div class="section__desc">{output}</div>
				</div>
			</div>

			<div class="indicator text-small">
				<ArrowRight color="inherit" width="24" height="24" />
				Read Case Study
			</div>
		</div>
	</article>
</a>

<style lang="postcss">
	.project {
		display: flex;
		position: relative;
		width: 100%;
		flex-direction: column;
		transition: var(--transition);
		overflow: hidden;
		box-shadow: var(--boxShadow);
		border-radius: var(--borderRadius);

		background-color: var(--colorBgContainer);

		&:hover {
			background-color: var(--colorBgElevated);
			box-shadow: -5px 5px var(--colorPrimaryHover);
			transform: translate(5px, -5px);
		}
		&:active {
			box-shadow: -1px 1px var(--colorPrimaryActive);
			transform: translate(1px, -1px);
		}
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
		padding: var(--spaceM) var(--spaceL);
		gap: var(--spaceM);
		color: var(--colorTextSecondary);
	}

	@media (min-width: 768px) {
		.project__info {
			padding: var(--spaceM) var(--spaceXL);
		}
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
		border-radius: var(--borderRadius);
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
