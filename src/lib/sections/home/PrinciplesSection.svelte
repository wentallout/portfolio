<script>
	import SaosContainer from '$components/common/SaosContainer.svelte';
	import PrincipleArt from '$lib/assets/arts/PrincipleArt.svelte';
	import { Scales } from '$lib/assets/icons/icons';
	import SectionTitle from '$sections/SectionTitle.svelte';
</script>

<section>
	<SectionTitle sectionDesc="My guidelines for a good design." sectionTitle="Design Principles">
		{#snippet children({ sectionIcon })}
			<Scales {...sectionIcon} />
		{/snippet}
	</SectionTitle>

	<div class="principle-container">
		<div class="principle">
			<article class="principle__section fancy-border">
				<h3 class="principle__title text-base text-trim">Straightforward</h3>
				<p class="principle__desc text-small">
					Simplify the design by removing unnecessary steps or elements for a seamless user
					experience and reduced cognitive load.
				</p>
			</article>

			<article class="principle__section fancy-border">
				<h3 class="principle__title text-base text-trim">Test</h3>
				<p class="principle__desc text-small">
					Continuously test and iterate the design to ensure it meets users' needs and expectations.
				</p>
			</article>

			<article class="principle__section fancy-border">
				<h3 class="principle__title text-base text-trim">Instructional</h3>
				<p class="principle__desc text-small">
					Provide clear instructions and guidance to users, if necessary, to ensure ease of product
					or interface usage.
				</p>
			</article>

			<article class="principle__section fancy-border">
				<h3 class="principle__title text-base text-trim">Readable</h3>
				<p class="principle__desc text-small">
					Optimize readability by choosing appropriate fonts, colors, and spacing for comfortable
					reading and reduced eye strain.
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
