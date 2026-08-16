<script>
	import { HandHeart } from '$lib/assets/icons/icons';
	import { CAL_BOOKING_LINK } from '$lib/constants/personal';
	import SectionTitle from '$sections/layout/SectionTitle.svelte';
</script>

<section class="border-grid-b w-full relative">
	<SectionTitle sectionTitle="Services">
		{#snippet children({ sectionIcon })}
			<HandHeart {...sectionIcon} />
		{/snippet}
	</SectionTitle>

<div class="grid grid-cols-1 md:grid-cols-12 gap-0 relative items-stretch">
		<!-- Services Info Card (Blueprint Card) -->
		<div class="md:col-span-7 relative border-grid-r bg-background p-6 md:p-8 flex flex-col justify-between hover:bg-card transition-all duration-300 h-full overflow-hidden">
			<span class="grid-plus grid-plus-tl">+</span>
			<span class="grid-plus grid-plus-tr">+</span>
			<span class="grid-plus grid-plus-bl">+</span>
			<span class="grid-plus grid-plus-br">+</span>

			<div class="relative z-10">
				<div class="flex items-center justify-between text-xs mb-4">
					<span class="uppercase tracking-widest text-xs text-muted-foreground font-semibold">
						WHAT I OFFER
					</span>
					<span class="text-muted-foreground">001</span>
				</div>

				<h3 class="text-2xl font-semibold text-foreground mb-6 tracking-tight">
					Tailor-made Website Design & Frontend Development
				</h3>

				<ul class="space-y-3 text-sm text-muted-foreground mb-8 font-normal">
					<li class="flex items-center gap-3">
						<span class="text-foreground">✓</span>
						<span>High-performing landing pages, product showcases & web applications</span>
					</li>
					<li class="flex items-center gap-3">
						<span class="text-foreground">✓</span>
						<span>Built from scratch with <strong class="text-foreground font-medium">SvelteKit, JavaScript, HTML & custom CSS</strong></span>
					</li>
					<li class="flex items-center gap-3">
						<span class="text-foreground">✓</span>
						<span><strong class="text-foreground font-medium">Truly Responsive:</strong> Meticulously crafted for mobile, tablet, and widescreen viewports</span>
					</li>
					<li class="flex items-center gap-3">
						<span class="text-foreground">✓</span>
						<span>Grounded in <strong class="text-foreground font-medium">thoughtful UX, accessibility, fast loading, and organic SEO</strong></span>
					</li>
				</ul>
			</div>

			<a
				href={CAL_BOOKING_LINK}
				class="relative z-10 inline-flex items-center gap-1.5 text-xs text-foreground underline underline-offset-4 decoration-neutral-600 hover:decoration-foreground transition-all font-medium"
			>
				<span>Let's Chat About Your Project</span>
				<span>→</span>
			</a>
		</div>

		<!-- Feature Blueprint Box -->
		<div class="md:col-span-5 relative bg-background p-6 md:p-8 flex flex-col justify-between hover:bg-card transition-all duration-300 h-full">
			<span class="grid-plus grid-plus-tl">+</span>
			<span class="grid-plus grid-plus-tr">+</span>
			<span class="grid-plus grid-plus-bl">+</span>
			<span class="grid-plus grid-plus-br">+</span>

			<div>
				<div class="flex items-center justify-between text-xs mb-4">
					<span class="uppercase tracking-widest text-xs text-neutral-400 font-semibold">
						HOW WE WORK TOGETHER
					</span>
					<span class="text-neutral-500">002</span>
				</div>

				<h3 class="text-2xl font-semibold text-white mb-4 tracking-tight">
					One Point of Contact, End-to-End
				</h3>
				<p class="text-sm text-neutral-400 leading-relaxed mb-6 font-normal">
					No communication gaps or handoff delays. I take your project personally from initial UX wireframes to final pixel-perfect deployment.
				</p>
			</div>

			<div class="grid grid-cols-2 gap-3 pt-4 border-grid-t text-xs text-neutral-300">
				<div class="p-3 bg-neutral-950 border-grid-all">
					<div class="text-neutral-500 text-xs mb-1">01 / DESIGN</div>
					<div class="font-semibold text-white">UI/UX & Design Systems</div>
				</div>
				<div class="p-3 bg-neutral-950 border-grid-all">
					<div class="text-neutral-500 text-xs mb-1">02 / CODE</div>
					<div class="font-semibold text-white">Svelte & Production Web</div>
				</div>
			</div>
		</div>
	</div>

</section>




