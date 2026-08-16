<script>
	import { resolve } from '$app/paths';
	import { textRevealBottom } from '$lib/actions/gsapAnimation';
	import { tooltip } from '$lib/actions/tooltip';
	import { CAL_BOOKING_LINK } from '$lib/constants/personal';

	let calBookingLink = resolve(CAL_BOOKING_LINK);
</script>

<div class="w-full bg-black relative border-grid-b select-none overflow-hidden">
	<!-- Top Grid Row 1 (Perfect 1:1 Squares) -->
	<div class="hidden sm:grid grid-cols-10 border-grid-b w-full relative z-10">
		{#each Array(10) as _, i (i)}
			<div class="aspect-square border-grid-r last:border-r-0 relative">
				<span class="grid-plus grid-plus-tr">+</span>
				<span class="grid-plus grid-plus-br">+</span>
			</div>
		{/each}
	</div>

	<!-- Top Grid Row 2 (Perfect 1:1 Squares) -->
	<div class="hidden sm:grid grid-cols-10 border-grid-b w-full relative z-10">
		{#each Array(10) as _, i (i)}
			<div class="aspect-square border-grid-r last:border-r-0 relative">
				<span class="grid-plus grid-plus-tr">+</span>
				<span class="grid-plus grid-plus-br">+</span>
			</div>
		{/each}
	</div>

	<!-- Central Hero Area with Left & Right 1:1 Square Grid Column Frames -->
	<div class="grid grid-cols-10 border-grid-b w-full relative z-10">
		<!-- Left Border Column (Col 1: Stacked 1:1 Squares) -->
		<div class="hidden md:flex flex-col col-span-1 border-grid-r h-full relative">
			<div class="aspect-square border-grid-b relative">
				<span class="grid-plus grid-plus-tr">+</span><span class="grid-plus grid-plus-br">+</span>
			</div>
			<div class="aspect-square border-grid-b relative">
				<span class="grid-plus grid-plus-tr">+</span><span class="grid-plus grid-plus-br">+</span>
			</div>
			<div class="aspect-square border-grid-b relative">
				<span class="grid-plus grid-plus-tr">+</span><span class="grid-plus grid-plus-br">+</span>
			</div>
			<div class="aspect-square border-grid-b relative">
				<span class="grid-plus grid-plus-tr">+</span><span class="grid-plus grid-plus-br">+</span>
			</div>
			<div class="aspect-square relative"><span class="grid-plus grid-plus-tr">+</span></div>
		</div>

		<!-- Central Hero Card -->
		<div
			class="col-span-10 md:col-span-8 p-8 sm:p-12 md:p-20 flex flex-col items-start justify-center text-left bg-background relative border-grid-r z-20 transition-colors duration-200">
			<span class="grid-plus grid-plus-tl">+</span>
			<span class="grid-plus grid-plus-tr">+</span>
			<span class="grid-plus grid-plus-bl">+</span>
			<span class="grid-plus grid-plus-br">+</span>

			<div class="max-w-2xl flex flex-col items-start text-left">
				<!-- Hero Headline -->
				<h1
					class="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-foreground mb-6 leading-[1.05]"
					use:textRevealBottom={{ delay: 0.1, stagger: 0.03, y: 30 }}>
					Crafting products that feel thoughtful & precise<span class="text-primary">.</span>
				</h1>

				<!-- Hero Subtitle -->
				<p
					class="text-sm sm:text-base text-muted-foreground max-w-xl font-normal leading-relaxed mb-10 text-pretty">
					Hi, I'm Khoa — a designer and developer based in Ho Chi Minh City. I build custom, fast,
					and intuitive web experiences from initial concept to clean production code.
				</p>

				<!-- Action Buttons -->
				<div class="flex flex-wrap items-center justify-start gap-4">
					<a
						class="px-6 py-2.5 bg-primary text-primary-foreground font-semibold text-base hover:bg-primary/90 active:scale-95 transition-all duration-200 shadow-md inline-flex items-center gap-2"
						href={calBookingLink}
						use:tooltip={{ position: 'top', text: 'Schedule a friendly discovery call' }}>
						Book a Call
					</a>

					<a
						class="px-6 text-base py-2.5 bg-background border border-border text-foreground font-medium hover:bg-card active:scale-95 transition-all duration-200"
						href="/projects">
						My Projects
					</a>
				</div>
			</div>
		</div>

		<!-- Right Border Column (Col 10: Stacked 1:1 Squares) -->
		<div class="hidden md:flex flex-col col-span-1 h-full relative">
			<div class="aspect-square border-grid-b relative">
				<span class="grid-plus grid-plus-tr">+</span><span class="grid-plus grid-plus-br">+</span>
			</div>
			<div class="aspect-square border-grid-b relative">
				<span class="grid-plus grid-plus-tr">+</span><span class="grid-plus grid-plus-br">+</span>
			</div>
			<div class="aspect-square border-grid-b relative">
				<span class="grid-plus grid-plus-tr">+</span><span class="grid-plus grid-plus-br">+</span>
			</div>
			<div class="aspect-square border-grid-b relative">
				<span class="grid-plus grid-plus-tr">+</span><span class="grid-plus grid-plus-br">+</span>
			</div>
			<div class="aspect-square relative"><span class="grid-plus grid-plus-tr">+</span></div>
		</div>
	</div>

	<!-- Bottom Grid Row 1 (Perfect 1:1 Squares) -->
	<div class="hidden sm:grid grid-cols-10 border-grid-b w-full relative z-10">
		{#each Array(10) as _, i (i)}
			<div class="aspect-square border-grid-r last:border-r-0 relative">
				<span class="grid-plus grid-plus-tr">+</span>
				<span class="grid-plus grid-plus-br">+</span>
			</div>
		{/each}
	</div>

	<!-- Bottom Grid Row 2 (Perfect 1:1 Squares) -->
	<div class="hidden sm:grid grid-cols-10 w-full relative z-10">
		{#each Array(10) as _, i (i)}
			<div class="aspect-square border-grid-r last:border-r-0 relative">
				<span class="grid-plus grid-plus-tr">+</span>
				<span class="grid-plus grid-plus-br">+</span>
			</div>
		{/each}
	</div>
</div>
