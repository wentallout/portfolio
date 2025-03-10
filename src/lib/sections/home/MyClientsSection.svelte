<script>
	import ExLink from '$components/common/ExLink.svelte';
	import SaosContainer from '$components/common/SaosContainer.svelte';
	import { Buildings } from '$lib/assets/icons/icons';
	import fpt from '$lib/assets/images/home/fpt.png?w=300&h=300';
	import nashtech from '$lib/assets/images/home/nashtech.png?w=300&h=300';
	import SectionTitle from '$sections/SectionTitle.svelte';
</script>

<SaosContainer>
	<section>
		<div class="clients">
			<SectionTitle sectionTitle="Worked at">
				{#snippet children({ sectionIcon })}
					<Buildings {...sectionIcon} />
				{/snippet}
			</SectionTitle>
			<div class="clients__logo">
				<ExLink href="https://www.fpt-software.com">
					<img
						class="logo"
						alt="FPT Software"
						decoding="async"
						loading="lazy"
						src={fpt}
						title="FPT Software" />
				</ExLink>

				<ExLink href="https://nashtechglobal.com">
					<img
						class="logo"
						alt="NashTech"
						decoding="async"
						loading="lazy"
						src={nashtech}
						title="NashTech" />
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
		gap: var(--space-mid);
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
