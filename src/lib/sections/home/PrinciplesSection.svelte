<script>
	import SaosContainer from '$components/common/SaosContainer.svelte';
	import PrincipleArt from '$lib/assets/arts/PrincipleArt.svelte';
	import { Scales } from '$lib/assets/icons/icons';
	import SectionTitle from '$sections/SectionTitle.svelte';
</script>

<section>
	<SectionTitle sectionDesc="My guidelines for a good project." sectionTitle="P.U.M.P Principles">
		{#snippet children({ sectionIcon })}
			<Scales {...sectionIcon} />
		{/snippet}
	</SectionTitle>

	<div class="principle-container">
		<div class="principle">
			<article class="principle__section fancy-border">
				<h3 class="principle__title text-base text-trim">Profit-Driven</h3>
				<p class="principle__desc text-small">
					Every feature and design decision must have clear ROI. Focus on elements that drive
					revenue and business growth.
				</p>
			</article>

			<article class="principle__section fancy-border">
				<h3 class="principle__title text-base text-trim">User First</h3>
				<p class="principle__desc text-small">
					Design for real user needs, not assumptions. Solve specific problems that users will pay
					to fix.
				</p>
			</article>

			<article class="principle__section fancy-border">
				<h3 class="principle__title text-base text-trim">Measure</h3>
				<p class="principle__desc text-small">
					Track key metrics and user behavior. Use data to make improvements that impact the bottom
					line.
				</p>
			</article>

			<article class="principle__section fancy-border">
				<h3 class="principle__title text-base text-trim">Prove</h3>
				<p class="principle__desc text-small">
					Build trust through social proof, case studies, and transparent pricing. Show clear value
					to convert visitors into customers.
				</p>
			</article>
		</div>
		<div class="principle__art">
			<PrincipleArt />
		</div>
	</div>
</section>

<style>
	.principle-container {
		display: grid;
		grid-template-columns: 1fr; /* Two columns with equal width */
		gap: var(--space-mid); /* Gap between grid items */
	}

	@media (min-width: 768px) {
		.principle-container {
			grid-template-columns: 1fr 1fr;
		}
	}

	.principle__title {
		font-weight: 600;
		padding-block: 8px;
		font-family: var(--font-fancy);
	}

	.principle__title:first-letter {
		font-size: 200%;
		color: var(--color-primary);
		padding-right: 2px;
	}

	.principle {
		display: flex;
		gap: var(--space-mid);
		flex-direction: column;

		position: relative;
		z-index: 1;
	}

	.principle__section {
		/* FLEX */
		display: flex;
		flex-direction: column;
		gap: var(--space-2xs);
		/* --- */

		border-radius: var(--border-radius-light);
		box-shadow: var(--boxShadow);
		background-color: var(--color-bg-container);
		background: var(--color-bg-gradient-subtle);

		position: relative;
		padding: var(--space-mid);
	}

	.principle__desc {
		color: var(--color-text-secondary);
	}

	.principle__art {
		max-width: 500px;
		align-self: center;
	}
</style>
