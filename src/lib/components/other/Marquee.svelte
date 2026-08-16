<script>
	/** @type {{items?: any}} */
	let {
		items = [
			'E-commerce',
			'Landing page',
			'Usability',
			'Accessibility',
			'Information Architecture',
			'Responsive Design',
			'Design Systems',
			'Performance Optimization'
		]
	} = $props();
</script>

<div class="w-full border-grid-b bg-black py-4 overflow-hidden relative select-none text-sm text-neutral-400">
	<div class="flex overflow-hidden relative gap-12 group">
		<ul class="flex shrink-0 items-center justify-around gap-12 min-w-full animate-marquee group-hover:[animation-play-state:paused]">
			{#each items as item (item)}
				<li class="flex items-center gap-4 whitespace-nowrap font-medium text-neutral-300 hover:text-white transition-colors font-sans">
					<span>{item}</span>
					<span class="text-neutral-600 text-[10px]">•</span>
				</li>
			{/each}
		</ul>

		<ul class="flex shrink-0 items-center justify-around gap-12 min-w-full animate-marquee group-hover:[animation-play-state:paused]" aria-hidden="true">
			{#each items as item (item)}
				<li class="flex items-center gap-4 whitespace-nowrap font-medium text-neutral-300 hover:text-white transition-colors font-sans">
					<span>{item}</span>
					<span class="text-neutral-600 text-[10px]">•</span>
				</li>
			{/each}
		</ul>
	</div>
</div>

<style>
	@keyframes marquee {
		0% {
			transform: translateX(0%);
		}
		100% {
			transform: translateX(-100%);
		}
	}

	.animate-marquee {
		animation: marquee 25s linear infinite;
	}
</style>

