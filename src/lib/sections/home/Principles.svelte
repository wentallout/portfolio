<script>
	import SectionTitle from '$sections/SectionTitle.svelte';

	import Scales from '~icons/ph/scales';
</script>

<section>
	<SectionTitle
		sectionDesc="These are my own personal guidelines for a good design. I hope to improve upon these in the future. You can call it S.T.I.R."
		sectionTitle="My Design Principles"
		let:sectionIcon>
		<Scales {...sectionIcon} />
	</SectionTitle>

	<div class="principle">
		<div class="principle__section">
			<h3 class="principle__title text-base">Straightforward</h3>
			<p class="principle__desc text-small">
				Simplify the design by removing unnecessary steps or elements for a seamless user experience
				and reduced cognitive load.
			</p>
		</div>

		<div class="principle__section">
			<h3 class="principle__title text-base">Test</h3>
			<p class="principle__desc text-small">
				Continuously test and iterate the design to ensure it meets users' needs and expectations.
			</p>
		</div>

		<div class="principle__section">
			<h3 class="principle__title text-base">Instructional</h3>
			<p class="principle__desc text-small">
				Provide clear instructions and guidance to users, if necessary, to ensure ease of product or
				interface usage.
			</p>
		</div>

		<div class="principle__section">
			<h3 class="principle__title text-base">Readable</h3>
			<p class="principle__desc text-small">
				Optimize readability by choosing appropriate fonts, colors, and spacing for comfortable
				reading and reduced eye strain.
			</p>
		</div>
	</div>
</section>

<style>
	.principle__title:first-letter {
		font-size: 200%;
		color: var(--colorPrimary);
		padding-right: 2px;
	}

	.principle {
		--min: 35ch;
		--gap: var(--spaceM);

		display: grid;
		grid-gap: var(--gap);

		grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));
		align-items: stretch;

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
	}

	.principle__title {
		font-weight: 600;
	}

	.principle__desc {
		color: var(--colorTextSecondary);
	}
</style>
