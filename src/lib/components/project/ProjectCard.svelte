<script>
	export let linkToDetail = '';
	export let projectName = '';
	export let what = '';
	export let role = '';
	export let output = '';

	export let thumbnail;
</script>

<a class="project-link" href={linkToDetail}>
	<article class="project custom-border">
		<div class="project__thumbnail">
			<img class="" alt="" loading="lazy" src={thumbnail} />
		</div>
		<div class="project__info">
			<div class="project__title">
				<div class="name text-mid">{projectName}</div>
			</div>

			<div class="info text-small">
				<div class="info__section">
					<div class="section__label">About</div>
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
		box-shadow: var(--boxShadow);

		overflow: hidden;

		&:hover {
			box-shadow: -6px 6px var(--colorPrimaryHover);
			transform: translate(6px, -6px);
		}
		&:active {
			box-shadow: -1px 1px var(--colorPrimaryActive);
			transform: translate(1px, -1px);
		}
	}

	.project__title {
		display: flex;
		justify-content: flex-start;
		flex-direction: column;
	}

	.info {
		display: grid;
		gap: var(--spaceXS);
		grid-template-rows: 1fr 1fr 1fr;
	}

	.project__info {
		display: flex;
		flex-grow: 2;
		flex-direction: column;
		position: relative;
		padding: var(--spaceM) var(--spaceL);
		gap: var(--spaceM);
		color: var(--colorTextSecondary);
		background: var(--colorBgGradientSubtle);
	}

	@media (min-width: 768px) {
		.project__info {
			padding: var(--spaceM) var(--spaceXL);
		}
	}

	.name {
		color: var(--colorText);
		font-weight: var(--fontWeightLarge);
		font-family: var(--fontFancy);
	}

	.project__thumbnail {
		height: 30dvh; /* Fill the card vertically */
		width: auto; /* Maintain aspect ratio */
		object-fit: cover; /* Fill the box, covering any empty space */
		aspect-ratio: 1/1;

		margin-bottom: auto;
		object-fit: cover;
		background-color: transparent;
		position: relative;
		border: 1px dotted var(--colorBorderSecondary);
		overflow: hidden;
	}

	@media (min-width: 992px) {
		.project__thumbnail {
			height: 100%;
			max-width: 400px;
		}
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
</style>
