<script>
	import ExLink from '$components/common/ExLink.svelte';
	import FooterCopyright from '$components/layout/footer/FooterCopyright.svelte';
	import Marquee from '$components/other/Marquee.svelte';
	import { EnvelopeSimple, GitHubLogo, LinkedinLogo, Phone } from '$lib/assets/icons/icons';
	import { navItems } from '$lib/config.js';
	import DottedBackground from '$lib/components/ui/DottedBackground.svelte';
</script>

<footer class="w-full bg-black relative text-xs text-neutral-400 font-sans overflow-hidden">
	<div class="absolute inset-0 z-0 opacity-40 pointer-events-none">
		<DottedBackground
			bgColor="transparent"
			colors={["#FFFFFF", "#888888", "#222222"]}
			cellSize={4}
			frequency={2}
			speed={4}
		/>
	</div>

	<!-- 4-Column Blueprint Grid Matrix -->
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0 border-grid-b relative z-10">
		<!-- Column 1: About -->
		<div class="border-grid-r p-6 md:p-8 space-y-4 relative">
			<span class="grid-plus grid-plus-tl">+</span>
			<span class="grid-plus grid-plus-tr">+</span>
			<h4 class="text-xs font-semibold text-white uppercase tracking-widest text-neutral-400">
				ABOUT
			</h4>
			<p class="text-neutral-400 leading-relaxed text-xs font-sans font-normal">
				Khoa Nguyen. Tailor-made, high-performance websites for businesses & creators.
			</p>
			<a class="inline-block text-rose-300 hover:text-white transition-colors" href="/about">
				More about me →
			</a>
		</div>

		<!-- Column 2: Navigate -->
		<div class="border-grid-r p-6 md:p-8 space-y-4 relative">
			<span class="grid-plus grid-plus-tr">+</span>
			<h4 class="text-xs font-semibold text-white uppercase tracking-widest text-neutral-400">
				NAVIGATE
			</h4>
			<ul class="space-y-2.5">
				{#each navItems as navItem (navItem.path)}
					<li>
						<a class="hover:text-white transition-colors" href={navItem.path}>
							{navItem.title}
						</a>
					</li>
				{/each}
			</ul>
		</div>

		<!-- Column 3: Tools & Resources -->
		<div class="border-grid-r p-6 md:p-8 space-y-4 relative">
			<span class="grid-plus grid-plus-tr">+</span>
			<h4 class="text-xs font-semibold text-white uppercase tracking-widest text-neutral-400">
				TOOLS & RESOURCES
			</h4>
			<ul class="space-y-2.5">
				<li>
					<a class="hover:text-white transition-colors" href="/blogs">Figma Resources</a>
				</li>
				<li>
					<a
						class="hover:text-white transition-colors"
						href="https://www.realtimecolors.com"
						rel="noreferrer"
						target="_blank">Color Palette Generator ↗</a>
				</li>
				<li>
					<a
						class="hover:text-white transition-colors"
						href="https://fluid-type.tolin.ski"
						rel="noreferrer"
						target="_blank">Fluid Type Calculator ↗</a>
				</li>
				<li>
					<a class="hover:text-white transition-colors" href="/rss.xml">RSS Feed</a>
				</li>
			</ul>
		</div>

		<!-- Column 4: Connect -->
		<div class="p-8 md:p-10 space-y-4 relative">
			<span class="grid-plus grid-plus-tr">+</span>
			<h4 class="text-xs font-semibold text-white uppercase tracking-widest text-neutral-400">
				CONNECT
			</h4>
			<div class="flex items-center gap-2.5 pt-1">
				<ExLink href="mailto:wentallout@gmail.com">
					<div
						class="p-2.5 bg-black border-grid-all hover:bg-neutral-900 text-neutral-300 hover:text-white transition-colors">
						<EnvelopeSimple height="16" width="16" />
					</div>
				</ExLink>
				<ExLink href="tel:+84929066331">
					<div
						class="p-2.5 bg-black border-grid-all hover:bg-neutral-900 text-neutral-300 hover:text-white transition-colors">
						<Phone height="16" width="16" />
					</div>
				</ExLink>
				<ExLink href="https://www.linkedin.com/in/wentallout">
					<div
						class="p-2.5 bg-black border-grid-all hover:bg-neutral-900 text-neutral-300 hover:text-white transition-colors">
						<LinkedinLogo height="16" width="16" />
					</div>
				</ExLink>
				<ExLink href="https://github.com/wentallout">
					<div
						class="p-2.5 bg-black border-grid-all hover:bg-neutral-900 text-neutral-300 hover:text-white transition-colors">
						<GitHubLogo height="16" width="16" />
					</div>
				</ExLink>
			</div>
		</div>
	</div>

	<!-- Copyright Row -->
	<div class="p-6 md:p-8 text-center relative border-grid-b z-10">
		<span class="grid-plus grid-plus-tl">+</span>
		<span class="grid-plus grid-plus-tr">+</span>
		<FooterCopyright />
	</div>
</footer>

<Marquee />

