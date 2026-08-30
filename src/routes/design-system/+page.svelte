<script lang="ts">
	import Breadcrumb from '#lib/components/other/Breadcrumb.svelte';
	import SectionTitle from '#lib/sections/layout/SectionTitle.svelte';

	const colorsList = [
		{
			name: 'Kintsugi Gold (金継ぎ)',
			token: 'var(--primary)',
			desc: 'Primary focal seam. Used for active focus rings, key action buttons, and blueprint intersection ticks.',
			oklch: 'oklch(0.74 0.16 85)',
			hex: '#D4AF37'
		},
		{
			name: 'Aizome Indigo (藍染)',
			token: 'var(--foreground)',
			desc: 'Deep indigo text and structural lacquer ink tone.',
			oklch: 'oklch(0.20 0.03 230)',
			hex: '#1C2D37'
		},
		{
			name: 'Kin Washi (金和紙)',
			token: 'var(--background)',
			desc: 'Warm off-white fibrous Japanese paper surface in Light Mode.',
			oklch: 'oklch(0.985 0.005 85)',
			hex: '#FAF9F5'
		},
		{
			name: 'Urushi Night (漆夜)',
			token: 'var(--background) [Dark]',
			desc: 'Deep dark indigo-black Japanese lacquer finish in Dark Mode.',
			oklch: 'oklch(0.18 0.025 230)',
			hex: '#161D22'
		},
		{
			name: 'Seigaiha Mist (青海波)',
			token: 'var(--secondary)',
			desc: 'Subtle wave mist tone for secondary container surfaces and quiet accents.',
			oklch: 'oklch(0.94 0.015 220)',
			hex: '#EEF2F4'
		}
	];

	const typographyList = [
		{
			role: 'Display / Fancy Title',
			family: 'Nightmare / Nightmare',
			sample: 'KINTSUGI DESIGN SYSTEM',
			class: 'font-fancy text-3xl md:text-4xl tracking-wide'
		},
		{
			role: 'Section Titles & Headings',
			family: 'Inter (Sans-serif)',
			sample: 'Philosophical Foundations',
			class: 'font-sans font-semibold text-xl md:text-2xl text-foreground'
		},
		{
			role: 'Body Text',
			family: 'Inter (Sans-serif)',
			sample: 'Embracing imperfection, repair, and golden seams across digital user interfaces.',
			class: 'font-sans text-sm md:text-base text-foreground/80 leading-relaxed'
		},
		{
			role: 'Code & Technical Labels',
			family: 'JetBrains Mono (Monospace)',
			sample: 'var(--primary) /* oklch(0.74 0.16 85) */',
			class: 'font-mono text-xs md:text-sm text-muted-foreground bg-muted px-2 py-1 rounded'
		}
	];

	const philosophyItems = [
		{
			title: 'Kintsugi (金継ぎ — Golden Joinery)',
			desc: 'Treating flaws, cracks, and structural boundaries not as defects to hide, but as golden highlights. In our blueprint grid, borders and intersections are demarcated with Kintsugi Gold (+ ticks).'
		},
		{
			title: 'Seigaiha (青海波 — Ocean Waves of Peace)',
			desc: 'Traditional wave patterns symbolizing tranquility, resilience, and good fortune. Represented in our background layout gutters and subtle wave veils.'
		},
		{
			title: 'Wabi-Sabi (侘寂 — Aesthetic of Transience)',
			desc: 'Minimalist layout balance paired with tactile textures—warm paper tones (Washi) in light mode and deep lacquer depth (Urushi) in dark mode.'
		}
	];
</script>

<svelte:head>
	<title>Design System | Kintsugi & Seigaiha Aesthetic</title>
	<meta
		name="description"
		content="Comprehensive design system documentation for the portfolio, detailing Kintsugi gold, Seigaiha indigo palette, typography, and blueprint spacing rules." />
</svelte:head>

<Breadcrumb />

<!-- Header Banner -->
<header class="space-y-4 border-b border-border signature-padding">
	<h1 class="font-fancy text-3xl md:text-5xl text-foreground">Kintsugi & Seigaiha Design System</h1>
	<p class="text-muted-foreground text-sm md:text-base max-w-3xl leading-relaxed">
		A Japanese aesthetic design system blending the art of golden joinery (Kintsugi) and ocean wave
		tranquility (Seigaiha) with modern blueprint precision and OKLCH color spaces.
	</p>
</header>

<!-- Section 1: Philosophy -->
<section class="space-y-6">
	<SectionTitle sectionTitle="1. Philosophical Foundations" />

	<div class="grid grid-cols-1 md:grid-cols-3 border-t">
		{#each philosophyItems as item (item.title)}
			<div class="blueprint-card space-y-3">
				<h3 class="font-sans font-medium text-base text-foreground">{item.title}</h3>
				<p class="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
			</div>
		{/each}
	</div>
</section>

<!-- Section 2: Color Palette -->
<section class="space-y-6">
	<SectionTitle sectionTitle="2. Color System (OKLCH)" />

	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
		{#each colorsList as color (color.name)}
			<div class="border border-border p-5 bg-card space-y-4">
				<div
					style="background-color: {color.token}; color: {color.name.includes('Kin Washi')
						? '#1C2D37'
						: '#FAF9F5'};"
					class="w-full h-24 border border-border shadow-inner flex items-end justify-end p-2 text-xs font-mono">
					{color.hex}
				</div>
				<div>
					<h4 class="font-sans font-medium text-sm text-foreground">{color.name}</h4>
					<p class="font-mono text-xs text-primary mt-0.5">{color.token}</p>
					<p class="text-xs text-muted-foreground mt-2 leading-normal">{color.desc}</p>
				</div>
			</div>
		{/each}
	</div>
</section>

<!-- Section 3: Typography -->
<section class="space-y-6">
	<SectionTitle sectionTitle="3. Typography Scale" />

	<div class="border border-border divide-y divide-border bg-card">
		{#each typographyList as type (type.role)}
			<div class="p-6 space-y-2">
				<div class="flex flex-wrap justify-between text-xs text-muted-foreground font-mono">
					<span>{type.role}</span>
					<span>{type.family}</span>
				</div>
				<div class={type.class}>
					{type.sample}
				</div>
			</div>
		{/each}
	</div>
</section>

<!-- Section 4: Blueprint Grid & Spacing -->
<section class="space-y-6">
	<SectionTitle sectionTitle="4. Blueprint Grid & Spacing" />

	<div class="blueprint-card space-y-4">
		<h3 class="font-sans font-medium text-base text-foreground">
			Gapless Grid System & Intersection Markers
		</h3>
		<p class="text-sm text-muted-foreground leading-relaxed">
			All container components adhere to crisp 1px borders (`border-grid-r`, `border-grid-b`) with
			gold intersection ticks (`+` / `grid-plus`) positioned at pixel origins to mirror
			architectural drafting blueprints.
		</p>
		<div class="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
			<div
				class="p-4 border border-border bg-background text-center font-mono text-xs text-muted-foreground">
				p-6 (1.5rem / 24px)
			</div>
			<div
				class="p-4 border border-border bg-background text-center font-mono text-xs text-muted-foreground">
				pb-20 (5rem / 80px)
			</div>
			<div
				class="p-4 border border-border bg-background text-center font-mono text-xs text-muted-foreground">
				gap-0 (Matrix)
			</div>
			<div
				class="p-4 border border-border bg-background text-center font-mono text-xs text-muted-foreground">
				min text-sm (14px)
			</div>
		</div>
	</div>
</section>
