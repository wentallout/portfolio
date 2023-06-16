<script>
	import ResourceCard from '$components/Resource/Card/ResourceCard.svelte';

	const tools = [
		{
			href: 'https://www.userinterviews.com',
			name: 'UserInterviews.com',
			desc: 'Recruit participants from a community of 125000 members based on profession, demographics, geography and more, for any kind of research.'
		},
		{
			href: 'https://appoint.ly',
			name: 'Appoint.ly',
			desc: 'A web-based scheduling tool that helps to schedule meetings quickly through the integration with calendars online.'
		},
		{
			href: 'https://crowdsignal.com',
			name: 'Crowd Signal',
			desc: 'Collect, organize and analyze data from a variety of sources, including social media.'
		},
		{
			href: 'https://www.jotform.com',
			name: 'Jotform',
			desc: 'Create online forms, get an email for each response, collect data.'
		},
		{
			href: 'https://www.surveymonkey.com',
			name: 'Survey Monkey',
			desc: 'Online survey tool to capture the voices and opinions of the people who matter most to you.'
		},
		{
			href: 'https://www.yesinsights.com',
			name: 'YesInsights',
			desc: 'Simple one question and NPS surveys to improve your business.'
		}
	];
</script>

<div class="tools">
	{#each tools as tool}
		<ResourceCard {...tool} />
	{/each}
</div>

<style>
	.tools {
		--min: 40ch;

		display: grid;
		grid-gap: var(--spaceM);

		grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));
	}
</style>
