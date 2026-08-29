<script>
	import { SECTION_TITLES } from '$lib/constants/labels';
	import { CAL_BOOKING_LINK } from '$lib/constants/personal';
	import SectionTitle from '$sections/layout/SectionTitle.svelte';
</script>

<section class="border-grid-b w-full relative">
	<SectionTitle sectionTitle={SECTION_TITLES.services} />

	<div class="grid grid-cols-1 md:grid-cols-2 gap-0 relative items-stretch">
		<!-- Services Info Card (Blueprint Card) -->
		<div
			class="relative bg-background signature-padding flex flex-col justify-between hover:bg-card transition-all duration-300 h-full overflow-hidden">
			<div class="relative z-10">
				<h3 class="text-2xl font-medium text-foreground mb-6 tracking-tight">
					Tailor-made Website Design & Frontend Development
				</h3>

				<ul class="space-y-3 text-sm text-muted-foreground mb-8 font-normal">
					<li class="flex items-center gap-3">
						<span class="text-foreground">✓</span>
						<span>High-performing landing pages, product showcases & web applications</span>
					</li>
					<li class="flex items-center gap-3">
						<span class="text-foreground">✓</span>
						<span
							>Built from scratch with <strong class="text-foreground font-medium"
								>SvelteKit, JavaScript, HTML & custom CSS</strong
							></span>
					</li>
					<li class="flex items-center gap-3">
						<span class="text-foreground">✓</span>
						<span
							><strong class="text-foreground font-medium">Truly Responsive:</strong> Meticulously crafted
							for mobile, tablet, and widescreen viewports</span>
					</li>
					<li class="flex items-center gap-3">
						<span class="text-foreground">✓</span>
						<span
							>Grounded in <strong class="text-foreground font-medium"
								>thoughtful UX, accessibility, fast loading, and organic SEO</strong
							></span>
					</li>
				</ul>
			</div>

			<a
				href={CAL_BOOKING_LINK}
				class="relative z-10 inline-flex items-center gap-1.5 text-sm text-foreground underline underline-offset-4 decoration-muted-foreground hover:decoration-foreground transition-all font-medium">
				<span>Let's Chat</span>
				<span>→</span>
			</a>
		</div>

		<!-- Feature Blueprint Box -->
		<div
			class="relative bg-background signature-padding flex flex-col justify-between hover:bg-card transition-all duration-300 h-full">
			<div>
				<h3 class="text-2xl font-medium text-foreground mb-5 tracking-tight">
					One Point of Contact, End-to-End
				</h3>
				<p class="text-sm text-muted-foreground leading-relaxed mb-8 font-normal">
					No communication gaps or handoff delays. I take your project personally from initial UX
					wireframes to final pixel-perfect deployment.
				</p>
			</div>

			<div class="grid grid-cols-2 gap-3 pt-6 text-sm text-muted-foreground">
				<div class="p-3 bg-card border border-border">
					<div class="text-muted-foreground text-sm mb-1">01 / DESIGN</div>
					<div class="font-medium text-foreground">UI/UX & Design Systems</div>
				</div>
				<div class="p-3 bg-card border border-border">
					<div class="text-muted-foreground text-sm mb-1">02 / CODE</div>
					<div class="font-medium text-foreground">Svelte & Production Web</div>
				</div>
			</div>
		</div>
	</div>
</section>
