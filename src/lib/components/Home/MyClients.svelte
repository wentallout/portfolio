<script>
	import ExLink from '$lib/components/Common/ExLink.svelte';
	import fpt from '$lib/assets/images/home/fpt.png?w=300&h=300';
	import nashtech from '$lib/assets/images/home/nashtech.png?w=300&h=300';
</script>

<section>
	<div class="clients">
		<h2 class="clients__title xl-text">I have worked for</h2>
		<div class="clients__logo">
			<ExLink href="https://www.fpt-software.com">
				<img class="logo" loading="lazy" decoding="async" src={fpt} alt="FPT Software" />
			</ExLink>

			<ExLink href="https://nashtechglobal.com">
				<img class="logo" loading="lazy" decoding="async" src={nashtech} alt="NashTech" />
			</ExLink>
		</div>
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
		flex-direction: row;
		flex-wrap: wrap;
		gap: var(--space-m);
	}

	.clients__title {
		font-family: var(--fancy-font);
		font-weight: 600;
		color: var(--primary-500);
	}

	.logo {
		aspect-ratio: 1/1;
		width: 100px;
		height: 100px;

		filter: grayscale();
		transition: var(--transition);
	}

	.logo:hover {
		filter: none;
	}
</style>
