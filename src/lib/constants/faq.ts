export const FAQ_LIST = [
	{
		answer:
			'Design is how your visitors experience your brand and make decisions. Great UI/UX removes friction, makes your messaging clear, and turns casual browsing into meaningful client engagements.',
		question: 'Why does UI/UX matter so much for my website?'
	},
	{
		answer:
			'We start with a friendly conversation about your goals and target audience. From there, I structure the user journey, sketch out wireframes, and craft polished UI before writing clean, high-performance code.',
		question: 'What is your process for a new project?'
	},
	{
		answer:
			'We measure success by real business outcomes: fast page loads (under 3 seconds), effortless navigation, strong visitor engagement, high conversion rates, and a site you feel proud to share.',
		question: 'How do we measure the success of our project?'
	},
	{
		answer:
			'Collaboratively and openly! Feedback is a vital part of refining the work. I listen closely to your thoughts, explain the reasoning behind design choices, and adapt the site until it fits your vision perfectly.',
		question: 'How do you handle design feedback?'
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
