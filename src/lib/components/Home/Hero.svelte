<script>
	import Button from '$lib/components/Button/Button.svelte';

	import Waves from '$lib/assets/images/home/waves.mp4';
</script>

<section>
	<div class="hero">
		<video autoplay loop muted class="hero__video" src={Waves} />
		<div class="hero__text">
			<h1 class="hi xxl-text" data-atropos-offset="-5">Hi! I'm Khoa</h1>
			<p data-atropos-offset="-3">I code and design.</p>
			<a data-atropos-offset="0" href="/project">
				<Button label="See my work" backgroundColor="var(--primary-500)" type="button" />
			</a>
		</div>
	</div>
</section>

<style>
	.hero__video {
		display: flex;
		width: 100%;
		object-fit: cover;
		height: 100%;
		position: absolute;
		overflow: hidden;
		border-radius: var(--border-radius);
	}

	.hero {
		/* Use "linear-gradient" to add a darken background effect to the image. This will make the text easier to read */
		/* background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)); */
		position: relative;
		border-radius: var(--border-radius);
		overflow: hidden;
		width: 100%;
		height: 600px;
		background-color: transparent;

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
		z-index: 3;
		width: 100%;
		height: 100%;
		background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
		text-shadow: 3px 4px 7px rgba(81, 67, 21, 0.8);
	}

	.hi {
		font-family: 'Recoleta Alt';
	}
</style>
