<div class="container">
	<div class="marquee">
		<ul class="marquee__content">
			<li>Design Thinking</li>
			<li>Usability</li>
			<li>Accessibility</li>
			<li>Information Architecture</li>
			<li>Wireframe</li>
			<li>Responsive Design</li>
		</ul>

		<ul class="marquee__content" aria-hidden="true">
			<li>Design Thinking</li>
			<li>Usability</li>
			<li>Accessibility</li>
			<li>Information Architecture</li>
			<li>Wireframe</li>
			<li>Responsive Design</li>
		</ul>
	</div>
</div>

<style>
	.container {
		width: 100%;
		max-width: 100vw;
		font-weight: var(--fontWeightSmall);
		font-size: var(--fontSizeSmall);
		line-height: normal;
		position: relative;
		overflow: hidden;
	}

	.marquee {
		--gap: var(--space3XL);
		position: relative;
		display: flex;
		overflow: hidden;
		user-select: none;
		gap: var(--gap);
		background-color: var(--colorBlack);
		color: var(--colorPrimary);
		padding: var(--spaceXS) 0;
	}

	.marquee__content {
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
