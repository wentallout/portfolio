<script>
	import { page } from '$app/state';
	import ThemeSwitcher from '$components/button/ThemeSwitcher.svelte';
	import { haptic } from '$lib/actions/haptics';

	import { navItems } from '$lib/config.js';

	let scrollY = $state(0);
</script>

<svelte:window bind:scrollY />

<header
	class="sticky top-0 z-40 w-full border-grid-b bg-background/85 backdrop-blur-md supports-[backdrop-filter]:bg-background/70 dark:bg-background/80 dark:supports-[backdrop-filter]:bg-background/60 transition-all duration-200 relative overflow-hidden">
	<!-- subtle dotted veil — very low opacity + soft wash so text stays AAA contrast in both themes -->

	<div
		class="absolute inset-0 z-[1] bg-background/40 dark:bg-background/20 pointer-events-none"
		aria-hidden="true">
	</div>

	<div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between relative z-10">
		<a
			class="font-fancy text-base tracking-tight text-foreground flex items-center hover:opacity-90 transition-opacity"
			href="/"
			use:haptic={'selection'}>
			Khoa Nguyen
		</a>

		<!-- Desktop Navigation Menu -->
		<nav class="hidden md:flex items-center gap-6" aria-label="primary menu">
			{#each navItems as navItem (navItem.path)}
				{@const active =
					navItem.path === '/'
						? page.url.pathname === '/'
						: page.url.pathname.startsWith(navItem.path)}
				<a
					class="text-sm font-medium transition-colors {active
						? 'text-foreground font-medium underline underline-offset-4 decoration-primary'
						: 'text-foreground/65 dark:text-foreground/75 hover:text-foreground'}"
					href={navItem.path}
					use:haptic={'selection'}>
					{navItem.title}
				</a>
			{/each}
		</nav>

		<!-- Right Utilities -->
		<div class="flex items-center gap-2">
			<ThemeSwitcher />
		</div>
	</div>
</header>
