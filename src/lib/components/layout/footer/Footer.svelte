<script lang="ts">
	import ExLink from '#lib/components/common/ExLink.svelte';
	import FooterCopyright from '#lib/components/layout/footer/FooterCopyright.svelte';
	import FooterColumn from '#lib/components/layout/footer/FooterColumn.svelte';
	import FooterSocialButton from '#lib/components/layout/footer/FooterSocialButton.svelte';

	import { EnvelopeSimple, GitHubLogo, LinkedinLogo, Phone } from '#lib/assets/icons/icons.js';
	import { navItems } from '#lib/config.js';
	import DottedBackground from '#lib/components/ui/DottedBackground.svelte';

	const resourceLinks = [
		{ href: '/design-system', label: 'Design System' },
		{ href: '/blogs', label: 'Figma Resources' },
		{
			href: 'https://www.realtimecolors.com',
			label: 'Color Palette Generator ↗',
			isExternal: true
		},
		{ href: 'https://fluid-type.tolin.ski', label: 'Fluid Type Calculator ↗', isExternal: true },
		{ href: '/rss.xml', label: 'RSS Feed' }
	];

	const socialLinks = [
		{ href: 'mailto:wentallout@gmail.com', label: 'Email', icon: EnvelopeSimple },
		{ href: 'tel:+84929066331', label: 'Phone', icon: Phone },
		{ href: 'https://www.linkedin.com/in/wentallout', label: 'LinkedIn', icon: LinkedinLogo },
		{ href: 'https://github.com/wentallout', label: 'GitHub', icon: GitHubLogo }
	];
</script>

<footer class="w-full bg-background relative text-sm font-sans overflow-hidden">
	<!-- animated dotted background -->
	<div
		class="absolute inset-0 z-0 opacity-5 dark:opacity-60 pointer-events-none"
		aria-hidden="true">
		<DottedBackground
			bgColor="transparent"
			cellSize={2}
			colors={['var(--background)', 'var(--muted)']}
			frequency={2}
			speed={5} />
	</div>

	<!-- 4-Column Blueprint Grid Matrix -->
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0 relative z-10">
		<!-- Column 1: About -->
		<FooterColumn title="ABOUT">
			<p
				class="text-foreground/70 dark:text-foreground/75 leading-relaxed text-sm font-sans font-normal">
				Khoa Nguyen. Tailor-made, high-performance websites for businesses & creators.
			</p>
			<a
				class="inline-block font-medium text-primary underline underline-offset-4 decoration-primary hover:text-primary/80 transition-colors"
				href="/about">
				More about me →
			</a>
		</FooterColumn>

		<!-- Column 2: Navigate -->
		<FooterColumn title="NAVIGATE">
			<ul class="space-y-2.5 text-foreground/70 dark:text-foreground/75">
				{#each navItems as navItem (navItem.path)}
					<li>
						<a
							class="hover:text-foreground hover:underline underline-offset-4 decoration-border transition-colors"
							href={navItem.path}>
							{navItem.title}
						</a>
					</li>
				{/each}
			</ul>
		</FooterColumn>

		<!-- Column 3: Tools & Resources -->
		<FooterColumn title="TOOLS & RESOURCES">
			<ul class="space-y-2.5 text-foreground/70 dark:text-foreground/75">
				{#each resourceLinks as item (item.href)}
					<li>
						{#if item.isExternal}
							<ExLink ariaLabel={item.label} href={item.href}>
								<span
									class="hover:text-foreground hover:underline underline-offset-4 decoration-border transition-colors">
									{item.label}
								</span>
							</ExLink>
						{:else}
							<a
								class="hover:text-foreground hover:underline underline-offset-4 decoration-border transition-colors"
								href={item.href}>
								{item.label}
							</a>
						{/if}
					</li>
				{/each}
			</ul>
		</FooterColumn>

		<!-- Column 4: Connect -->
		<FooterColumn title="CONNECT">
			<div class="flex items-center gap-2.5 pt-1">
				{#each socialLinks as link (link.href)}
					<FooterSocialButton ariaLabel={link.label} href={link.href}>
						<link.icon height="16" width="16" />
					</FooterSocialButton>
				{/each}
			</div>
		</FooterColumn>
	</div>

	<!-- Copyright Row -->
	<div class="signature-padding text-center relative z-10">
		<FooterCopyright />
	</div>
</footer>
