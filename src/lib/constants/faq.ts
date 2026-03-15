export const FAQ_LIST = [
	{
		answer:
			'Good UI/UX design is crucial for the success of any digital products because it can greatly impact user engagement, retention, and conversion rates. A well-designed interface can also improve brand perception and customer loyalty.',
		question: 'Why do I need to care about UI/UX?'
	},
	{
		answer:
			'I typically start by gathering as much information as possible about the project and the target audience. This may involve conducting user research, creating personas, and analyzing competitors. From there, I create wireframes and prototypes to test different design ideas and iterate based on user feedback.',
		question: 'How do you approach a new project?'
	},
	{
		answer:
			'Success is measured by low bounce rates, user engagement, conversion rates (sign-up, purchases), performance (fast load times below 3 seconds, responsiveness), and SEO improvements like higher traffic and rankings. Client satisfaction and meeting project goals are equally crucial for overall success.',
		question: 'How do you measure the success of a web project?'
	},
	{
		answer:
			"I take the time to understand the feedback and consider it carefully before making any changes. I also ask follow-up questions to clarify any confusion and ensure that I'm addressing the feedback effectively.",
		question: 'How do you handle design feedback and criticism?'
	}
];

import type { FAQPage, WithContext } from 'schema-dts';

export const FAQ_JSON_LD: WithContext<FAQPage> = {
	'@context': 'https://schema.org',
	'@type': 'FAQPage',
	mainEntity: FAQ_LIST.map((item) => ({
		'@type': 'Question',
		acceptedAnswer: {
			'@type': 'Answer',
			text: item.answer
		},
		name: item.question
	}))
};
