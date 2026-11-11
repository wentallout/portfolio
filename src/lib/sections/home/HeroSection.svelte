<script lang="ts">
	import { tooltip } from '#lib/actions/tooltip.js';
	import AmberArtifact from '#lib/components/AmberArtifact.svelte';
	import Ballpit from '#lib/components/Ballpit.svelte';
	import BlurText from '#lib/components/BlurText.svelte';
	import { CAL_BOOKING_LINK } from '#lib/constants/personal.js';
	import { Button } from '#lib/components/ui/button/index.js';

	const calBookingLink = CAL_BOOKING_LINK;
</script>

<div class="w-full bg-background relative border border-border select-none overflow-hidden">
	<!-- Ballpit background — amber resin globules behind glass card -->
	<div class="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
		<Ballpit
			class="opacity-75 dark:opacity-65"
			ambientColor={0xfffbeb}
			ambientIntensity={1.2}
			colors={[0xd97706, 0xf59e0b, 0xb45309, 0x92400e, 0x451a03, 0x1c1917]}
			count={100}
			followCursor={true}
			friction={0.9975}
			gravity={0.45}
			lightIntensity={130}
			maxSize={1}
			minSize={0.5}
			wallBounce={0.95} />
		<!-- soft fade so balls don't clash with grid edges -->
		<div
			class="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background/20 pointer-events-none">
		</div>
	</div>
	<!-- Top Grid Row -->
	<div class="hidden sm:grid grid-cols-10 border-grid-b w-full relative z-10">
		{#each Array(10) as _, i (i)}
			<div class="aspect-square border-grid-r last:border-r-0 relative"></div>
		{/each}
	</div>

	<!-- Central Hero Area with Left & Right 1:1 Square Grid Column Frames -->
	<div class="grid grid-cols-10 border-grid-b w-full relative z-10">
		<!-- Left Border Column -->
		<div class="hidden md:flex flex-col col-span-1 border-grid-r h-full relative">
			<div class="aspect-square border-grid-b relative"></div>
			<div class="aspect-square border-grid-b relative"></div>
		</div>

		<!-- Central Hero Card — compact padding, opaque card with 3D Amber specimen display -->
		<div
			class="col-span-10 md:col-span-8 px-8 py-10 sm:px-10 sm:py-12 md:px-12 md:py-14 lg:px-14 flex flex-col lg:flex-row items-center justify-between text-left relative border-grid-r z-20 transition-colors duration-200 bg-card dark:bg-card shadow-[0_8px_32px_rgba(0,0,0,0.06)] border border-border gap-8">
			<div class="max-w-xl flex flex-col items-start text-left shrink-0">
				<!-- Hero Headline with BlurText animation -->
				<h1
					class="text-2xl sm:text-2xl md:text-2xl font-medium tracking-tight text-foreground mb-5 leading-[1.08] w-full flex flex-wrap items-baseline gap-x-[0.15em] text-pretty">
					<BlurText
						class="text-5xl sm:text-2xl md:text-5xl font-medium tracking-tight leading-[1.1] text-foreground"
						animateBy="words"
						direction="top"
						stepDuration={0.35}
						text="I make websites and software people enjoy using."
						threshold={0.1} />
				</h1>

				<!-- Hero Subtitle -->
				<p
					class="text-sm sm:text-base text-muted-foreground max-w-lg font-normal leading-relaxed mb-8 text-pretty">
					I'm Khoa Nguyen, a developer based in Ho Chi Minh City. I care about the little things —
					clear interfaces, fast websites, and software that doesn't make people stop and think
					about how to use it.
				</p>

				<!-- Action Buttons -->
				<div class="flex flex-wrap items-center justify-start gap-4">
					<span use:tooltip={{ position: 'top', text: 'Schedule a friendly discovery call' }}>
						<Button
							class="h-auto px-6 py-2.5 text-base has-[>svg]:px-6"
							href={calBookingLink}
							size="lg">
							Let's talk
						</Button>
					</span>

					<Button
						class="h-auto px-6 py-2.5 text-base has-[>svg]:px-6"
						href="/projects"
						size="lg"
						variant="outline">
						See my work
					</Button>
				</div>
			</div>

			<!-- 3D Amber Artifact Island (Hổ Phách Fossil Gem with responsive tilt & inclusions) -->
			<div class="w-full sm:w-64 md:w-72 lg:w-80 aspect-square relative flex items-center justify-center shrink-0">
				<div class="absolute inset-0 bg-radial from-primary/20 via-primary/5 to-transparent rounded-full filter blur-2xl pointer-events-none"></div>
				<AmberArtifact class="w-full h-full relative z-10" />
			</div>
		</div>

		<!-- Right Border Column -->
		<div class="hidden md:flex flex-col col-span-1 h-full relative">
			<div class="aspect-square border-grid-b relative"></div>
			<div class="aspect-square border-grid-b relative"></div>
		</div>
	</div>

	<!-- Bottom Grid Row -->
	<div class="hidden sm:grid grid-cols-10 w-full relative z-10">
		{#each Array(10) as _, i (i)}
			<div class="aspect-square border-grid-r last:border-r-0 relative"></div>
		{/each}
	</div>
</div>
