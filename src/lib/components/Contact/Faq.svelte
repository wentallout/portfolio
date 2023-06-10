<script>
	import Details from '$components/Common/Details.svelte';
	import SectionTitle from '$lib/components/Common/Section/SectionTitle.svelte';

	import Question from '~icons/ph/question';
</script>

<section>
	<SectionTitle sectionTitle="Frequently Asked Questions" let:sectionIcon>
		<Question {...sectionIcon} />
	</SectionTitle>

	<Details
		summary="What is UI/UX design?"
		answer="UI/UX design stands for user interface/user experience design. It involves creating visually appealing and easy-to-use interfaces for digital products and ensuring that the user experience is intuitive, efficient, and enjoyable." />
	<Details
		summary="Why is UI/UX design important?"
		answer="Good UI/UX design is crucial for the success of digital products because it can greatly impact user engagement, retention, and conversion rates. A well-designed interface can also improve brand perception and customer loyalty." />

	<Details
		summary="How do you approach a new design project?"
		answer="I typically start by gathering as much information as possible about the project and the target audience. This may involve conducting user research, creating personas, and analyzing competitors. From there, I create wireframes and prototypes to test different design ideas and iterate based on user feedback." />

	<Details
		summary="How do you measure the success of a design project?"
		answer="Success metrics can vary depending on the project goals, but I typically look at metrics like user engagement, conversion rates, and user satisfaction to gauge the success of a design project. I also gather feedback from stakeholders and users to assess the impact of the design on their experience." />

	<Details
		summary="How do you handle design feedback and criticism?"
		answer="I welcome feedback and criticism as opportunities to improve my designs and better meet project goals. I take the time to understand the feedback and consider it carefully before making any changes. I also ask follow-up questions to clarify any confusion and ensure that I'm addressing the feedback effectively." />
</section>
