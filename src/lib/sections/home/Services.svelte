<script>
	import SectionTitle from '$lib/components/common/section/SectionTitle.svelte';
	import HeatmapArt from '$lib/assets/images/home/HeatmapArt.svelte';
	import ResponsiveArt from '$lib/assets/images/home/ResponsiveArt.svelte';

	import HandHeart from '~icons/ph/hand-heart';
	import Button from '$components/button/Button.svelte';
</script>

<section>
	<SectionTitle
		sectionTitle="Services"
		sectionDesc="I offer cost-effective web services that deliver outstanding value"
		let:sectionIcon>
		<HandHeart {...sectionIcon} />
	</SectionTitle>

	<div class="service">
		<div class="service__section">
			<div class="service__thumbnail">
				<div class="service__art">
					<ResponsiveArt />
				</div>
				<h3 class="service__title text-mid">Static Website</h3>
			</div>

			<ul class="service__desc text-small">
				<li class="service__point">
					Written using
					<strong>HTML, CSS, JS </strong>
				</li>
				<li class="service__point">
					<strong>Responsive:</strong> Looks great on all screen sizes
				</li>

				<li class="service__point">
					<strong>Lightweight: </strong> no more heavy libraries that slow down loading speed
				</li>
				<li class="service__point optional">
					★ Optional: Enhanced with the most cutting edge framework which is <strong
						>SvelteKit</strong> for optimal SEO, lightning fast loading speed and reusable components
				</li>
			</ul>

			<a class="service__btn" href="/contact">
				<Button
					label="Make a website"
					labelColor="var(--colorBlack)"
					backgroundColor="var(--colorPrimary)"
					glowColor="var(--colorPrimary)" />
			</a>
		</div>

		<div class="service__section">
			<div class="service__thumbnail">
				<div class="service__art">
					<HeatmapArt />
				</div>
				<h3 class="service__title text-mid">Design/Redesign Website</h3>
			</div>

			<ul class="service__desc text-small">
				<li class="service__point">
					<div class="">
						Consistent design system to improve <strong>brand recognition and marketing</strong>
					</div>
				</li>
				<li class="service__point">Fantastic <strong>user experience and accessibility</strong></li>
				<li class="service__point">Easier <strong>maintenance and scalability</strong></li>
				<li class="service__point optional">
					★ Optional: I also provide free website critiques, send your URL and get back a list of
					improvements you can apply ranging from UX, UI, SEO, and more.
				</li>
			</ul>

			<a class="service__btn" href="/contact">
				<Button
					label="Design a website"
					labelColor="var(--colorBlack)"
					backgroundColor="var(--colorPrimary)"
					glowColor="var(--colorPrimary)" />
			</a>
		</div>
	</div>
</section>

<style>
	.service {
		--min: 30ch;
		--gap: var(--spaceL);

		display: grid;
		grid-gap: var(--gap);
		/* min() with 100% prevents overflow
  in extra narrow spaces */
		grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));
	}

	.service__art {
		max-width: 200px;
	}

	.service__thumbnail {
		display: flex;
		flex-direction: column;
		gap: var(--spaceS);
		align-items: center;
	}

	.service__section {
		background-color: var(--colorBgContainer);
		padding: var(--spaceL) var(--spaceM);
		border-radius: var(--borderRadiusLight);
		box-shadow: var(--boxShadow);
		gap: var(--spaceL);

		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.service__title {
		margin-bottom: var(--spaceM);
	}

	.service__desc {
		display: flex;
		flex-direction: column;
		gap: var(--spaceXS);
		color: var(--colorTextSecondary);
	}

	.optional {
		color: var(--colorTextTertiary);
	}

	.service__btn {
		margin-top: auto;
	}
</style>
