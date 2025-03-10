<script>
	import Accordion from '$components/common/Accordion.svelte';
	import QuestionArt from '$lib/assets/arts/FaqArt.svelte';
	import { Question } from '$lib/assets/icons/icons';
	import SectionTitle from '$sections/SectionTitle.svelte';
</script>

<section>
	<SectionTitle sectionTitle="Frequently Asked Questions">
		{#snippet children({ sectionIcon })}
			<Question {...sectionIcon} />
		{/snippet}
	</SectionTitle>

	<div class="faq">
		<div class="faq__list">
			<Accordion
				accordionSection="Why do I need to care about UI/UX?"
				accordionText="Good UI/UX design is crucial for the success of any digital products because it can greatly impact user engagement, retention, and conversion rates. A well-designed interface can also improve brand perception and customer loyalty." />

			<Accordion
				accordionSection="How do you approach a new project?"
				accordionText="I typically start by gathering as much information as possible about the project and the target audience. This may involve conducting user research, creating personas, and analyzing competitors. From there, I create wireframes and prototypes to test different design ideas and iterate based on user feedback." />

			<!-- <Accordion
				accordionSection="How to deal with procrastination?"
				accordionText="Starting with something, even imperfect, helps overcome inertia and reduces pressure. To improve, set small goals, use the 5-minute rule, and reflect on progress." /> -->

			<Accordion
				accordionSection="How do you measure the success of a web project?"
				accordionText="Success is measured by low bounce rates, user engagement, conversion rates (sign-up, purchases), performance (fast load times below 3 seconds, responsiveness), and SEO improvements like higher traffic and rankings. Client satisfaction and meeting project goals are equally crucial for overall success." />

			<Accordion
				accordionSection="How do you handle design feedback and criticism?"
				accordionText="I take the time to understand the feedback and consider it carefully before making any changes. I also ask follow-up questions to clarify any confusion and ensure that I'm addressing the feedback effectively." />
		</div>

		<div class="faq__art">
			<QuestionArt />
		</div>
	</div>
</section>

<style>
	.faq {
		display: grid;
		gap: var(--space-xl);
		align-items: center;
		grid-template-columns: 1fr;
	}

	@media (min-width: 768px) {
		.faq {
			grid-template-columns: 1fr 1fr;
		}
	}

	.faq__art {
		max-width: 500px;
	}

	.faq__list {
		display: flex;
		flex-direction: column;
		gap: var(--space-mid);
	}
</style>
