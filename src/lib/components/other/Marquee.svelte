<script>
	/** @type {{items?: any}} */
	let {
		items = [
			'E-commerce',
			'Landing page',
			'Usability',
			'Accessibility',
			'Information Architecture',
			'Responsive Design'
		]
	} = $props();
</script>

<div class="container">
	<div class="marquee">
		<ul class="marquee__content">
			{#each items as item}
				<li>{item}</li>
			{/each}
		</ul>

		<ul class="marquee__content" aria-hidden="true">
			{#each items as item}
				<li>{item}</li>
			{/each}
		</ul>
	</div>
</div>

<style>
	.container {
		width: 100%;
		max-width: 100vw;
		font-size: var(--font-size-small);
		line-height: 1;
		position: relative;
		overflow: hidden;
		padding-block: 4px;
	}

	.marquee {
		background-color: var(--color-bg-layout);
		--gap: var(--space-3xl);
		position: relative;
		display: flex;
		overflow: hidden;
		user-select: none;
		gap: var(--gap);
		color: var(--color-text);
		padding: var(--space-xs) 0;
	}

	.marquee__content {
		flex-shrink: 0;
		display: flex;
		justify-content: space-around;
		gap: var(--gap);
		min-width: 100%;
		animation: scroll 20s linear infinite;
		animation-direction: reverse;
		font-family: var(--font-fancy);
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
