<script>
	import ExLink from '$components/common/ExLink.svelte';
	import FooterCopyright from '$components/layout/footer/FooterCopyright.svelte';
	import Marquee from '$components/other/Marquee.svelte';
	import { EnvelopeSimple, GitHubLogo, LinkedinLogo, Phone } from '$lib/assets/icons/icons';
	import { navItems } from '$lib/config.js';
	import DottedBackground from '$lib/components/ui/DottedBackground.svelte';
</script>

<footer class="w-full bg-background relative text-sm font-sans overflow-hidden">
	<!-- subtle dotted veil — washed behind a background veil so foreground text stays high-contrast in light + dark -->
	<div class="absolute inset-0 z-0 opacity-[0.045] dark:opacity-[0.08] pointer-events-none" aria-hidden="true">
		<DottedBackground
			bgColor="transparent"
			colors={["#1a1a1a", "#FFBB00", "#FB7185"]}
			cellSize={2}
			frequency={2}
			speed={4}
		/>
	</div>
	<div class="absolute inset-0 z-[1] bg-background/45 dark:bg-background/25 pointer-events-none" aria-hidden="true"></div>

	<!-- 4-Column Blueprint Grid Matrix -->
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0 relative z-10">
		<!-- Column 1: About -->
		<div class="signature-padding space-y-4 relative">
			<h4 class="text-sm font-medium text-foreground uppercase tracking-widest">
				ABOUT
			</h4>
			<p class="text-foreground/70 dark:text-foreground/75 leading-relaxed text-sm font-sans font-normal">
				Khoa Nguyen. Tailor-made, high-performance websites for businesses & creators.
			</p>
			<a class="inline-block font-medium text-foreground underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors" href="/about">
				More about me →
			</a>
		</div>

		<!-- Column 2: Navigate -->
		<div class="signature-padding space-y-4 relative">
			<h4 class="text-sm font-medium text-foreground uppercase tracking-widest">
				NAVIGATE
			</h4>
			<ul class="space-y-2.5 text-foreground/70 dark:text-foreground/75">
				{#each navItems as navItem (navItem.path)}
					<li>
						<a class="hover:text-foreground hover:underline underline-offset-4 decoration-border transition-colors" href={navItem.path}>
							{navItem.title}
						</a>
					</li>
				{/each}
			</ul>
		</div>

		<!-- Column 3: Tools & Resources -->
		<div class="signature-padding space-y-4 relative">
			<h4 class="text-sm font-medium text-foreground uppercase tracking-widest">
				TOOLS & RESOURCES
			</h4>
			<ul class="space-y-2.5 text-foreground/70 dark:text-foreground/75">
				<li>
					<a class="hover:text-foreground hover:underline underline-offset-4 decoration-border transition-colors" href="/blogs">Figma Resources</a>
				</li>
				<li>
					<a
						class="hover:text-foreground hover:underline underline-offset-4 decoration-border transition-colors"
						href="https://www.realtimecolors.com"
						rel="noreferrer"
						target="_blank">Color Palette Generator ↗</a>
				</li>
				<li>
					<a
						class="hover:text-foreground hover:underline underline-offset-4 decoration-border transition-colors"
						href="https://fluid-type.tolin.ski"
						rel="noreferrer"
						target="_blank">Fluid Type Calculator ↗</a>
				</li>
				<li>
					<a class="hover:text-foreground hover:underline underline-offset-4 decoration-border transition-colors" href="/rss.xml">RSS Feed</a>
				</li>
			</ul>
		</div>

		<!-- Column 4: Connect -->
		<div class="signature-padding space-y-4 relative">
			<h4 class="text-sm font-medium text-foreground uppercase tracking-widest">
				CONNECT
			</h4>
			<div class="flex items-center gap-2.5 pt-1">
				<ExLink href="mailto:wentallout@gmail.com">
					<div
						class="p-2.5 bg-card border-grid-all hover:bg-accent text-foreground/70 dark:text-foreground/75 hover:text-foreground transition-colors">
						<EnvelopeSimple height="16" width="16" />
					</div>
				</ExLink>
				<ExLink href="tel:+84929066331">
					<div
						class="p-2.5 bg-card border-grid-all hover:bg-accent text-foreground/70 dark:text-foreground/75 hover:text-foreground transition-colors">
						<Phone height="16" width="16" />
					</div>
				</ExLink>
				<ExLink href="https://www.linkedin.com/in/wentallout">
					<div
						class="p-2.5 bg-card border-grid-all hover:bg-accent text-foreground/70 dark:text-foreground/75 hover:text-foreground transition-colors">
						<LinkedinLogo height="16" width="16" />
					</div>
				</ExLink>
				<ExLink href="https://github.com/wentallout">
					<div
						class="p-2.5 bg-card border-grid-all hover:bg-accent text-foreground/70 dark:text-foreground/75 hover:text-foreground transition-colors">
						<GitHubLogo height="16" width="16" />
					</div>
				</ExLink>
			</div>
		</div>
	</div>

	<!-- Copyright Row -->
	<div class="signature-padding text-center relative z-10">
		<FooterCopyright />
	</div>
</footer>

<Marquee />

