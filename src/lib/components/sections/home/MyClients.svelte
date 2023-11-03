<script>
	import SaosContainer from '$components/common/SaosContainer.svelte';
	import ExLink from '$components/common/ExLink.svelte';
	import fpt from '$lib/assets/images/home/fpt.png?w=300&h=300';
	import nashtech from '$lib/assets/images/home/nashtech.png?w=300&h=300';
	import SectionTitle from '$components/sections/SectionTitle.svelte';

	import Buildings from '~icons/ph/buildings';
</script>

<SaosContainer>
	<section>
		<div class="clients">
			<SectionTitle sectionTitle="Worked at" let:sectionIcon>
				<Buildings {...sectionIcon} />
			</SectionTitle>
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

<style lang="postcss">
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
		gap: var(--spaceM);
	}

	.logo {
		aspect-ratio: 1/1;
		width: 160px;
		height: 160px;

		filter: grayscale();
		transition: var(--transition);

		&:hover {
			filter: none;
		}
	}
</style>
