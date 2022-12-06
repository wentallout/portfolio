<div class="tools">
	<a class="tool" target="_blank" rel="noreferrer noopener" href="https://www.userinterviews.com/">
		<h2 class="tool__name base-text">User Interviews</h2>
		<p class="tool__description small-text">
			Recruit participants from a community of 125,000 members based on profession, demographics,
			geography and more, for any kind of research.
		</p>
	</a>

	<a class="tool" target="_blank" rel="noreferrer noopener" href="https://appoint.ly">
		<h2 class="tool__name base-text">Appoint.ly</h2>
		<p class="tool__description small-text">
			A web-based scheduling tool that helps to schedule meetings quickly through the integration
			with calendars online.
		</p>
	</a>

	<a class="tool" target="_blank" rel="noreferrer noopener" href="https://crowdsignal.com/">
		<h2 class="tool__name base-text">Crowd Signal</h2>
		<p class="tool__description small-text">
			Collect, organize and analyze data from a variety of sources, including social media and
			mobile.
		</p>
	</a>

	<a class="tool" target="_blank" rel="noreferrer noopener" href="https://www.jotform.com">
		<h2 class="tool__name base-text">Jotform</h2>
		<p class="tool__description small-text">
			Create online forms, get an email for each response, collect data.
		</p>
	</a>

	<a class="tool" target="_blank" rel="noreferrer noopener" href="https://minetime.ai/">
		<h2 class="tool__name base-text">MineTime</h2>
		<p class="tool__description small-text">
			A free calendar app with smart scheduling and time analytics features.
		</p>
	</a>

	<a class="tool" target="_blank" rel="noreferrer noopener" href="https://www.surveymonkey.com">
		<h2 class="tool__name base-text">Survey Monkey</h2>
		<p class="tool__description small-text">
			Online survey tool to capture the voices and opinions of the people who matter most to you.
		</p>
	</a>

	<a class="tool" target="_blank" rel="noreferrer noopener" href="https://www.yesinsights.com/">
		<h2 class="tool__name base-text">YesInsights</h2>
		<p class="tool__description small-text">
			Simple one question and NPS surveys to improve your business.
		</p>
	</a>
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
		font-weight: 500;
	}

	.tool {
		display: flex;
		flex-direction: column;
		width: 100%;
		padding: var(--space-m);

		transition: 0.3s;
		background-color: var(--bg);
		box-shadow: var(--box-shadow);
		border-radius: var(--border-radius);
	}

	.tool:hover {
		box-shadow: var(--box-shadow-hover);
	}

	.tool:hover .tool__name {
		color: var(--primary-500);
	}

	.tool__description {
		color: var(--neutral-800);
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		font-weight: 400;
	}

	@media (min-width: 768px) {
		.tool {
			width: 55ch;
		}
	}
</style>
