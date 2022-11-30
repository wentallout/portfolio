<script>
	let contentTexts = [
		'Human-centered',
		'Design Thinking',
		'Accessibility',
		'Affordance',
		'Responsive'
	];
</script>

<div role="marquee" data-nosnippet class="marquee-container">
	<div class="marquee">
		<ul class="marquee__content">
			{#each contentTexts as contentText}
				<li class="content__text">{contentText}</li>
			{/each}
		</ul>

		<ul class="marquee__content" aria-hidden="true">
			{#each contentTexts as contentText}
				<li class="content__text">{contentText}</li>
			{/each}
		</ul>
	</div>
</div>

<style>
	.marquee-container {
		z-index: 1;
		position: absolute;
		width: 100%;
		max-width: 100vw;
		/* Typography */
		font-weight: 400;
		font-size: var(--font-size-small);
	}

	.marquee {
		--gap: 0.5rem;
		position: relative;
		display: flex;
		overflow: hidden;
		user-select: none;
		gap: var(--gap);
		color: var(--primary-600);
	}

	.marquee__content {
		flex-shrink: 0;
		display: flex;
		justify-content: space-around;
		gap: var(--gap);
		min-width: 100%;
		animation: scroll 30s linear infinite;
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
