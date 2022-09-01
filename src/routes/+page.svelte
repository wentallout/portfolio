<script>
	import Hero from '$lib/components/Atropos/Hero.svelte';

	import fpt from '$lib/assets/images/companylogo/fpt.png?w=300&h=300&webp';
	import nashtech from '$lib/assets/images/companylogo/nashtech.png?w=300&h=300&webp';
</script>

<svelte:head>
	<title>Khoa's Portfolio</title>
</svelte:head>

<Hero />

<div class="past-clients">
	<p class="past-clients__text base-text">I have worked for</p>
	<div class="past-clients__logo">
		<img loading="lazy" decoding="async" class="logo" src={fpt} alt="FPT Software" />
		<img loading="lazy" decoding="async" class="logo" src={nashtech} alt="NashTech" />
	</div>
</div>

<!-- description of what your job role is, what kind of job  ou do primarily -->

<div />

<style>
	.past-clients {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;

		flex-direction: column;

		/* Spacing */
		margin-bottom: var(--space-l);
	}
	.past-clients__logo {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		flex-wrap: wrap;
	}
	@media (min-width: 768px) {
		.past-clients__logo {
			flex-direction: row;
		}
	}

	.logo {
		width: 200px;
		height: 200px;
		width: auto;
	}

	@media (min-width: 768px) {
		.logo {
			width: 300px;
			height: 300px;
		}
	}
</style>
