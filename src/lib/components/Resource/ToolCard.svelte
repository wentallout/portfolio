<div class="tools">
	<div class="tool">
		<a target="_blank" href="https://www.userinterviews.com/">
			<h2 class="tool__name base-text">User Interviews</h2>
			<p class="tool__description small-text">
				Recruit participants from a community of 125,000 members based on profession, demographics,
				geography and more, for any kind of research.
			</p>
		</a>
	</div>

	<div class="tool">
		<a target="_blank" href="https://appoint.ly">
			<h2 class="tool__name base-text">Appoint.ly</h2>
			<p class="tool__description small-text">
				A web-based scheduling tool that helps to schedule meetings quickly through the integration
				with calendars online.
			</p>
		</a>
	</div>

	<div class="tool">
		<a target="_blank" href="https://crowdsignal.com/">
			<h2 class="tool__name base-text">Crowd Signal</h2>
			<p class="tool__description small-text">
				Collect, organize and analyze data from a variety of sources, including social media and
				mobile.
			</p>
		</a>
	</div>

	<div class="tool">
		<a target="_blank" href="https://www.jotform.com">
			<h2 class="tool__name base-text">Jotform</h2>
			<p class="tool__description small-text">
				Create online forms, get an email for each response, collect data.
			</p>
		</a>
	</div>

	<div class="tool">
		<a target="_blank" href="https://minetime.ai/">
			<h2 class="tool__name base-text">MineTime</h2>
			<p class="tool__description small-text">
				A free calendar app with smart scheduling and time analytics features.
			</p>
		</a>
	</div>

	<div class="tool">
		<a target="_blank" href="https://www.surveymonkey.com">
			<h2 class="tool__name base-text">Survey Monkey</h2>
			<p class="tool__description small-text">
				Online survey tool to capture the voices and opinions of the people who matter most to you.
			</p>
		</a>
	</div>

	<div class="tool">
		<a target="_blank" href="https://www.yesinsights.com/">
			<h2 class="tool__name base-text">YesInsights</h2>
			<p class="tool__description small-text">
				simple one question and NPS surveys to improve your business.
			</p>
		</a>
	</div>
</div>

<style>
	.tools {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		max-width: 100%;
		gap: var(--space-m);
	}

	.tool__name {
		color: var(--primary);
	}

	.tool {
		display: flex;
		flex-direction: column;
		border: 0.5px solid var(--black);
		width: 100%;
		padding: var(--space-m);
		box-shadow: var(--box-shadow);
		border-radius: var(--border-radius);
	}

	.tool:hover {
		box-shadow: var(--box-shadow-hover);
	}

	.tool__description {
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
	}

	@media (min-width: 768px) {
		.tool {
			width: 50ch;
		}
	}
</style>
