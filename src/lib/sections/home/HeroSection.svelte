<script>
	import { tooltip } from '$lib/actions/tooltip';
	import Ballpit from '$lib/components/Ballpit.svelte';
	import BlurText from '$lib/components/BlurText.svelte';
	import { CAL_BOOKING_LINK } from '$lib/constants/personal';

	const calBookingLink = CAL_BOOKING_LINK;
</script>

<div class="w-full bg-transparent relative border-grid-b select-none overflow-hidden">
	<!-- Ballpit background — behind glass card, fills entire hero -->
	<div class="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
		<Ballpit
			count={120}
			gravity={0.45}
			friction={0.9975}
			wallBounce={0.95}
			followCursor={true}
			minSize={0.5}
			maxSize={1}
			ambientColor={0xffffff}
			ambientIntensity={1}
			lightIntensity={120}
			colors={[0xffbb00, 0xe0a400, 0xc79200, 0x525252, 0x171717]}
			class="opacity-80 dark:opacity-60" />
		<!-- soft fade so balls don't clash with grid edges -->
		<div
			class="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background/20 pointer-events-none">
		</div>
	</div>
	<!-- Top Grid Row (single — reduced from 2 for compact hero) -->
	<div class="hidden sm:grid grid-cols-10 border-grid-b w-full relative z-10">
		{#each Array(10) as _, i (i)}
			<div class="aspect-square border-grid-r last:border-r-0 relative"></div>
		{/each}
	</div>

	<!-- Central Hero Area with Left & Right 1:1 Square Grid Column Frames -->
	<div class="grid grid-cols-10 border-grid-b w-full relative z-10">
		<!-- Left Border Column (compact — 3:1 squares) -->
		<div class="hidden md:flex flex-col col-span-1 border-grid-r h-full relative">
			<div class="aspect-square border-grid-b relative"></div>
			<div class="aspect-square border-grid-b relative"></div>
		</div>

		<!-- Central Hero Card — compact padding, glassy -->
		<div
			class="col-span-10 md:col-span-8 px-8 py-10 sm:px-10 sm:py-12 md:px-12 md:py-14 lg:px-14 flex flex-col items-start justify-center text-left relative border-grid-r z-20 transition-colors duration-200 bg-background/75 dark:bg-background/60 backdrop-blur-xl backdrop-saturate-150 supports-[backdrop-filter]:bg-background/65 shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-border/50">
			<div class="max-w-2xl flex flex-col items-start text-left">
				<!-- Hero Headline with BlurText animation -->
				<h1
					class="text-2xl sm:text-2xl md:text-2xl font-medium tracking-tight text-foreground mb-6 leading-[1.05] w-full flex flex-wrap items-baseline gap-x-[0.15em]">
					<BlurText
						class="text-5xl sm:text-2xl md:text-5xl font-medium tracking-tight leading-[1.1] text-foreground"
						animateBy="words"
						direction="top"
						stepDuration={0.35}
						text="Crafting products that feel thoughtful & precise"
						threshold={0.1} />
				</h1>

				<!-- Hero Subtitle -->
				<p
					class="text-sm sm:text-base text-muted-foreground max-w-xl font-normal leading-relaxed mb-8 text-pretty">
					Hi, I'm Khoa — a developer based in Ho Chi Minh City. I build fast and intuitive web
					experiences from initial concept to clean production code.
				</p>

				<!-- Action Buttons -->
				<div class="flex flex-wrap items-center justify-start gap-4">
					<a
						class="px-6 py-2.5 bg-primary text-primary-foreground font-medium text-base hover:bg-primary/90 active:scale-95 transition-all duration-200 shadow-md inline-flex items-center gap-2"
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

		<!-- Right Border Column (compact — 3:1 squares) -->
		<div class="hidden md:flex flex-col col-span-1 h-full relative">
			<div class="aspect-square border-grid-b relative"></div>
			<div class="aspect-square border-grid-b relative"></div>
		</div>
	</div>

	<!-- Bottom Grid Row (single — reduced from 2 for compact hero) -->
	<div class="hidden sm:grid grid-cols-10 w-full relative z-10">
		{#each Array(10) as _, i (i)}
			<div class="aspect-square border-grid-r last:border-r-0 relative"></div>
		{/each}
	</div>
</div>
