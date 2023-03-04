<script>
	import SaosContainer from '$lib/components/Common/SaosContainer.svelte';
	import ExLink from '$lib/components/Common/ExLink.svelte';
	import fpt from '$lib/assets/images/home/fpt.png?w=300&h=300';
	import nashtech from '$lib/assets/images/home/nashtech.png?w=300&h=300';
	import HomeSectionTitle from '$lib/components/Home/HomeSectionTitle.svelte';
</script>

<SaosContainer>
	<section>
		<div class="clients">
			<HomeSectionTitle title="Worked at" />
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
</SaosContainer>

<style>
	.clients {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: flex-start;
		flex-direction: column;
	}
	.clients__logo {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: row;
		flex-wrap: wrap;
		gap: var(--space-m);
	}

	.logo {
		aspect-ratio: 1/1;
		width: 160px;
		height: 160px;

		filter: grayscale();
		transition: var(--transition);
	}

	.logo:hover {
		filter: none;
	}
</style>
