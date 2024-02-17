<script>
	export let items = [
		'Design Thinking',
		'Usability',
		'Accessibility',
		'Information Architecture',
		'Wireframe',
		'Responsive Design'
	];
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
		font-size: var(--fontSizeXS);
		font-weight: var(--fontWeightLarge);
		line-height: normal;
		position: relative;
		overflow: hidden;
		height: 40px;
	}

	.marquee {
		background-color: var(--colorBgLayout);
		--gap: var(--space3XL);
		position: relative;
		display: flex;
		overflow: hidden;
		user-select: none;
		gap: var(--gap);
		color: var(--colorText);
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
