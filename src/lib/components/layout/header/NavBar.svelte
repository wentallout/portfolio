<script>
	import { page } from '$app/state';
	import ThemeSwitcher from '$components/button/ThemeSwitcher.svelte';
	import { haptic } from '$lib/actions/haptics';
	import DottedBackground from '$lib/components/ui/DottedBackground.svelte';
	import { navItems } from '$lib/config.js';

	let scrollY = $state(0);
</script>

<svelte:window bind:scrollY />

<header
	class="sticky top-0 z-40 w-full border-grid-b bg-background/90 backdrop-blur-md transition-all duration-200 relative overflow-hidden">
	<div class="absolute inset-0 z-0 opacity-40 pointer-events-none">
		<DottedBackground
			bgColor="transparent"
			cellSize={4}
			colors={['#FFFFFF', '#888888', '#222222']}
			frequency={2}
			speed={4} />
	</div>

	<div class="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between relative z-10">
		<a
			class="font-fancy text-lg tracking-tight text-foreground flex items-center hover:opacity-90 transition-opacity"
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
					class="text-xs md:text-sm font-medium transition-colors {active
						? 'text-foreground font-semibold underline underline-offset-4 decoration-primary'
						: 'text-muted-foreground hover:text-foreground'}"
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
