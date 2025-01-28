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
			<SaosContainer animation="slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both">
				<div class="principle__section">
					<h3 class="principle__title text-base">Straightforward</h3>
					<p class="principle__desc text-small">
						Simplify the design by removing unnecessary steps or elements for a seamless user
						experience and reduced cognitive load.
					</p>
				</div>
			</SaosContainer>

			<SaosContainer animation="slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both">
				<div class="principle__section">
					<h3 class="principle__title text-base">Test</h3>
					<p class="principle__desc text-small">
						Continuously test and iterate the design to ensure it meets users' needs and
						expectations.
					</p>
				</div>
			</SaosContainer>

			<SaosContainer animation="slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both">
				<div class="principle__section">
					<h3 class="principle__title text-base">Instructional</h3>
					<p class="principle__desc text-small">
						Provide clear instructions and guidance to users, if necessary, to ensure ease of
						product or interface usage.
					</p>
				</div>
			</SaosContainer>

			<SaosContainer animation="slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both">
				<div class="principle__section">
					<h3 class="principle__title text-base">Readable</h3>
					<p class="principle__desc text-small">
						Optimize readability by choosing appropriate fonts, colors, and spacing for comfortable
						reading and reduced eye strain.
					</p>
				</div>
			</SaosContainer>
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
		gap: var(--spaceM); /* Gap between grid items */
	}

	@media (min-width: 768px) {
		.principle-container {
			grid-template-columns: 1fr 1fr;
		}
	}

	.principle__title:first-letter {
		font-size: 200%;
		color: var(--colorPrimary);
		padding-right: 2px;
	}

	.principle {
		display: flex;
		gap: var(--spaceM);
		flex-direction: column;

		position: relative;
		z-index: 1;
	}

	.principle__section {
		padding: var(--spaceL);
		display: flex;
		flex-direction: column;
		gap: var(--space2XS);

		border-radius: var(--borderRadiusLight);
		box-shadow: var(--boxShadow);
		background-color: var(--colorBgContainer);
		background: var(--colorBgGradientSubtle);

		position: relative;
		border-radius: var(--borderRadiusLight);
		border: 1px solid var(--colorBorderSecondary);
	}

	.principle__title {
		font-weight: 600;
	}

	.principle__desc {
		color: var(--colorTextSecondary);
	}

	.principle__art {
		max-width: 500px;
		align-self: center;
	}
</style>
