<script>
	import Atropos from 'atropos/svelte';
</script>

<div class="atropos-container">
	<Atropos highlight="false" shadow="false" rotateTouch="scroll-y" rotateXMax={5} rotateYMax={5}>
		<div class="hero">
			<div class="hero-text">
				<h1 data-atropos-offset="-5">Hi! I'm Khoa</h1>
				<p data-atropos-offset="-3">I code and design.</p>
				<a data-atropos-offset="10" class="btn btn-seemywork" href="/project">See my work</a
				>
			</div>
		</div>
	</Atropos>
</div>

<style>
	.atropos-container {
		/* MARGIN BOTTOM */
		margin-bottom: var(--space-l);
	}

	.btn-seemywork {
		background-color: var(--primary);
		color: var(--black);
	}

	.btn-seemywork:hover {
		background-color: var(--primary-hover);
	}

	/* The hero image */
	.hero {
		/* Use "linear-gradient" to add a darken background effect to the image. This will make the text easier to read */
		background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
			url('/images/fuji.svg');

		width: 100%;
		height: 600px;

		/* Position and center the image to scale nicely on all screens */
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	.hero-text {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: var(--white);
	}
</style>
