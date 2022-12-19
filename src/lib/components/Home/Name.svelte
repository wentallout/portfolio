<section class="name">
	<img height="200" width="200" class="portrait" src="images/portrait.png" alt="Khoa's face" />

	<div class="info">
		<h1 class="info__fullname xxl-text rainbow">Nguyen Dang Khoa</h1>
		<div class="info__job small-text">
			23 y.o, love tinkering frontends and learning new design techniques
		</div>
		<div class="info__job small-text">📱 UI/UX Designer (Figma)</div>
		<div class="info__job small-text">👨‍💻 Web Developer (JS/React/Svelte + .NET)</div>
	</div>
</section>

<style>
	.name {
		/* FLEX */
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		flex-wrap: wrap;
		/* FLEX END */

		gap: var(--space-l);
		background: var(--bg);
		border-radius: var(--border-radius-light);
		padding: var(--space-l);
		box-shadow: var(--box-shadow);
	}

	@media (min-width: 768px) {
		.name {
			flex-direction: row;
			justify-content: flex-start;
		}
	}

	.info__fullname {
		color: var(--primary-500);
		font-family: var(--fancy-font);
		margin-bottom: var(--space-s);
	}

	.info__job {
		font-weight: 400;
		color: var(--text);
	}

	.portrait {
		object-fit: cover;
		height: 100%;
		filter: grayscale(100);
	}
</style>
