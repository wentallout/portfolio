<script>
	import Button from '$lib/components/Button/Button.svelte';
	import Atropos from 'atropos/svelte';
</script>

<section>
	<Atropos highlight="false" shadow="false" rotateTouch="scroll-y" rotateXMax={5} rotateYMax={5}>
		<div class="hero">
			<div class="hero__text">
				<h1 class="hi xxl-text" data-atropos-offset="-5">Hi! I'm Khoa</h1>
				<p data-atropos-offset="-3">I code and design.</p>
				<a data-atropos-offset="0" href="/project">
					<Button label="See my work" backgroundColor="var(--primary-500)" type="button" />
				</a>
			</div>
		</div>
	</Atropos>
</section>

<style>
	.hero {
		/* Use "linear-gradient" to add a darken background effect to the image. This will make the text easier to read */
		background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
			url('/images/fuji.svg');
		border-radius: var(--border-radius);
		width: 100%;
		height: 600px;

		/* Position and center the image to scale nicely on all screens */
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;

		/* Flexbox */
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.hero__text {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: var(--neutral-100);
	}

	.hi {
		font-family: 'Recoleta Alt';
	}
</style>
