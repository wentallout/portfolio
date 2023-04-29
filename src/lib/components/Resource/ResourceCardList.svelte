<script>
	import ResourceCard from '$lib/components/Resource/ResourceCard.svelte';
</script>

<div class="tools">
	<ResourceCard
		href="https://www.userinterviews.com/"
		name="User Interviews"
		desc="Recruit participants from a community of 125,000 members based on profession, demographics,
	geography and more, for any kind of research." />

	<ResourceCard
		href="https://appoint.ly"
		name="Appoint.ly"
		desc="A web-based scheduling tool that helps to schedule meetings quickly through the integration with calendars online." />

	<ResourceCard
		href="https://crowdsignal.com"
		name="Crowd Signal"
		desc="Collect, organize and analyze data from a variety of sources, including social media." />

	<ResourceCard
		href="https://www.jotform.com"
		name="Jotform"
		desc="Create online forms, get an email for each response, collect data." />

	<ResourceCard
		href="https://www.surveymonkey.com"
		name="Survey Monkey"
		desc="Online survey tool to capture the voices and opinions of the people who matter most to you." />

	<ResourceCard
		href="https://www.yesinsights.com"
		name="YesInsights"
		desc="Simple one question and NPS surveys to improve your business." />
</div>

<style>
	.tools {
		--min: 40ch;
		--gap: var(--space-l);

		display: grid;

		grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));

		border-left: 1px solid var(--bg-400);
		border-top: 1px solid var(--bg-400);
	}
</style>
