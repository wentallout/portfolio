<div data-nosnippet class="container">
	<div class="marquee">
		<ul class="marquee__content">
			<li>User-centered design</li>
			<li>Usability</li>
			<li>Information Architecture</li>
			<li>Interaction Design</li>
			<li>User Testing</li>
			<li>Accessibility</li>
			<li>Responsive Design</li>
			<li>Visual design</li>
			<li>Content strategy</li>
			<li>Prototyping</li>
		</ul>

		<ul class="marquee__content" aria-hidden="true">
			<li>User-centered design</li>
			<li>Usability</li>
			<li>Information Architecture</li>
			<li>Interaction Design</li>
			<li>User Testing</li>
			<li>Accessibility</li>
			<li>Responsive Design</li>
			<li>Visual design</li>
			<li>Content strategy</li>
			<li>Prototyping</li>
		</ul>
	</div>
</div>

<style>
	.container {
		z-index: 1;
		width: 100%;
		max-width: 100vw;

		font-weight: 300;
		font-size: var(--font-size-small);
		line-height: normal;
		position: relative;
	}

	.marquee {
		--gap: 0.5rem;
		position: relative;
		display: flex;
		overflow: hidden;
		user-select: none;
		gap: var(--gap);
		background-color: var(--black-400);
		color: var(--primary-500);
	}

	.marquee__content {
		--gap: 0.5rem;
		flex-shrink: 0;
		display: flex;
		justify-content: space-around;
		gap: var(--gap);
		min-width: 100%;
		animation: scroll 20s linear infinite;
		animation-direction: reverse;
	}

	.marquee:hover .marquee__content {
		animation-play-state: paused;
	}

	@keyframes scroll {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(calc(-100% - var(--gap)));
		}
	}
</style>
