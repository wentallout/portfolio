<div class="container">
	<a class="other" href="/music">
		<img class="other__image" alt="music" src="images/music.webp" />
		<div class="other__title text-large">Music</div>
	</a>
	<a class="other" href="/resource/tool">
		<img class="other__image" alt="tool" src="images/tool.webp" />
		<div class="other__title text-large">Tool</div>
	</a>

	<a class="other" href="/resource/exp">
		<img class="other__image" alt="experiment" src="images/exp.webp" />
		<div class="other__title text-large">Experiment</div>
	</a>
</div>

<style>
	.container {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;

		overflow: hidden;
		gap: var(--space-mid);
	}

	.container > * {
		flex: 1 1 20ch;
	}

	.other {
		/* FLEX */
		display: flex;
		justify-content: center;
		align-items: center;

		position: relative;
		padding: var(--space-mid);

		height: 24dvh;
		overflow: hidden;

		border-radius: var(--border-radius-light);
		box-shadow: var(--boxShadow);
	}

	.other__image {
		width: 100%;
		height: 100%;
		position: absolute;
		z-index: 0;
		filter: brightness(40%);
		transition: var(--transition);
		object-fit: cover;
	}

	.other:before {
		position: absolute;
		display: block;
		content: '';
		background-repeat: repeat;
		background-image: url(/images/pattern.svg);
		background-color: rgba(0, 0, 0, 0.2);
		background-size: 4px;
		width: 100%;
		height: 100%;
		opacity: 0.3;

		z-index: 2;
	}

	.other:hover .other__image {
		scale: 1.2;
	}

	.other:hover .other__title {
		color: var(--color-primary);
	}

	.other__title {
		z-index: 3;
		font-weight: var(--fontWeightLarge);
		color: var(--color-white);
	}
</style>
