<div class="other-container">
	<a class="other" href="/resource/music">
		<img class="other__image" src="images/music.webp" alt="music" />
		<div class="other__title large-text">Music</div>
	</a>
	<a class="other" href="/resource/tool">
		<img class="other__image" src="images/tool.webp" alt="tool" />
		<div class="other__title large-text">Tool</div>
	</a>

	<a class="other" href="/resource/exp">
		<img class="other__image" src="images/exp.webp" alt="experiment" />
		<div class="other__title large-text">Experiment</div>
	</a>
</div>

<style>
	.other-container {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;

		overflow: hidden;
		gap: 1rem;
	}

	.other-container > * {
		flex: 1 1 20ch;
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

	.other {
		/* FLEX */
		display: flex;
		justify-content: center;
		align-items: center;

		position: relative;
		padding: var(--space-m);

		height: 300px;
		overflow: hidden;

		border: 1px solid var(--colorBorder);
	}

	.other:before {
		position: absolute;
		display: block;
		content: '';
		background-repeat: repeat;
		background-image: url(/images/ptn1.svg);
		background-color: rgba(0, 0, 0, 0.2);
		background-size: 4px;
		width: 100%;
		height: 100%;
		opacity: 0.3;

		z-index: 2;
	}

	.other:hover .other__image {
		scale: 1.1;
	}

	.other:hover .other__title {
		color: var(--colorPrimary);
	}

	.other__title {
		z-index: 3;
		font-weight: 600;
		color: var(--colorWhite);
	}
</style>
