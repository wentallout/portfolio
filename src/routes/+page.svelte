<script>
	import Hero from '$lib/components/Atropos/Hero.svelte';

	import fpt from '$lib/assets/images/companylogo/fpt.png?width=100';
	import nashtech from '$lib/assets/images/companylogo/nashtech.png?width=100';
</script>

<svelte:head>
	<title>Khoa's Portfolio</title>
</svelte:head>

<Hero />

<div class="past-clients">
	<p class="past-clients__text base-text">I have worked for</p>
	<div class="past-clients__logo">
		<img
			height="100"
			width="100"
			loading="lazy"
			decoding="async"
			class="logo"
			src={fpt}
			alt="FPT Software"
		/>
		<img
			height="100"
			width="100"
			loading="lazy"
			decoding="async"
			class="logo"
			src={nashtech}
			alt="NashTech"
		/>
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
		margin-bottom: 2.5rem;
	}

	.past-clients__text {
	}

	.past-clients__logo {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: row;
	}

	.logo {
		width: 100px;
		height: 100px;
		object-fit: cover;
		margin-left: 1rem;
	}
</style>
