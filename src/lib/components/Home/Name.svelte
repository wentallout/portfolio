<section class="name">
	<img height="100" width="100" class="portrait" src="images/portrait.png" alt="Khoa's face" />

	<div class="info">
		<h1 class="info__fullname xxl-text">Nguyen Dang Khoa</h1>
		<div class="info__job small-text">
			23 y.o, love tinkering websites and learning new techniques
		</div>
		<div class="info__job small-text">📱 UI/UX Designer (Figma)</div>
		<div class="info__job small-text">👨‍💻 Web Developer (JS/React/Svelte + .NET)</div>
	</div>
</section>

<style>
	.name {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		flex-wrap: wrap;
		gap: var(--space-l);

		background: var(--bg);
		border-radius: var(--border-radius);
		padding: var(--space-m);
	}

	@media (min-width: 768px) {
		.name {
			flex-direction: row;
			justify-content: flex-start;
		}
	}

	.info__fullname {
		color: var(--primary-600);
		font-family: var(--fancy-font);
		margin-bottom: var(--space-s);
	}

	.info__job {
		font-weight: 300;
		color: var(--primary-700);
	}

	.portrait {
		object-fit: cover;
		height: 100%;
	}
</style>
