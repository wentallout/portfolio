<div class="other-container">
	<a class="other" href="/resource/music">
		<img class="other__image" src="images/music.webp" alt="music" />
		<div class="other__title large-text">Music</div>
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
		gap: var(--space-m);
		overflow: hidden;
	}

	.other-container > * {
		flex: 1 1 10ch;
	}

	.other__image {
		width: 100%;
		height: 100%;
		position: absolute;
		z-index: 0;
		filter: brightness(40%);
		transition: 0.3s;
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
		border: 1px solid #000;
	}

	.other:hover {
		border: 1px solid var(--primary-500);
	}

	.other:hover .other__image {
		scale: 1.15;
	}

	.other:hover .other__title {
		color: var(--primary-500);
	}

	.other__title {
		z-index: 1;
		font-weight: 600;
		color: var(--neutral-100);
	}
</style>
