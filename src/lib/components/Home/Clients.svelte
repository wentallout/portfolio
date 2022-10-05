<script>
	import fpt from '$lib/assets/images/home/fpt.png?w=300&h=300&webp';
	import nashtech from '$lib/assets/images/home/nashtech.png?w=300&h=300&webp';
</script>

<section class="clients">
	<h2 class="clients__title large-text">I have worked for</h2>
	<div class="clients__logo">
		<img class="logo" loading="lazy" decoding="async" src={fpt} alt="FPT Software" />
		<img class="logo" loading="lazy" decoding="async" src={nashtech} alt="NashTech" />
	</div>
</section>

<style>
	.clients {
		width: 100%;
		display: flex;
		justify-content: center;

		align-items: flex-start;

		flex-direction: column;

		gap: var(--space-m);
	}
	.clients__logo {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		flex-wrap: wrap;
		gap: var(--space-m);
	}

	.clients__title {
		font-family: 'Blacker';
	}

	@media (min-width: 768px) {
		.clients__logo {
			flex-direction: row;
		}
	}

	.logo {
		aspect-ratio: 1/1;
		width: 100px;
		height: 100px;

		filter: grayscale();
	}
</style>
