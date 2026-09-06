<script lang="ts">
	import { page } from '$app/state';
	import ThemeSwitcher from '#lib/components/button/ThemeSwitcher.svelte';
	import { Button } from '#lib/components/ui/button/index.js';
	import { haptic } from '#lib/actions/haptics.js';

	import { navItems } from '#lib/config.js';
	import { authClient } from '#lib/auth-client.js';
	import { onMount } from 'svelte';
	import FloatingSidebar from '#lib/components/layout/header/FloatingSidebar.svelte';

	type NavUser = { id: string; email: string; name: string; role: string } | null | undefined;
	let { user: serverUser }: { user?: NavUser } = $props();

	let scrollY = $state(0);
	let clientHasSession = $state(false);

	// Desktop-only: after scrolling past the hero, show the floating sidebar.
	// The top bar is intentionally NOT sticky — it scrolls away with the page.
	const SCROLL_THRESHOLD = 220;
	const scrolled = $derived(scrollY > SCROLL_THRESHOLD);

	// Resolve user from prop or page.data (page.data.user comes from +layout.server.ts)
	const effectiveUser: NavUser = $derived(
		serverUser ?? (page.data as { user?: NavUser })?.user ?? null
	);

	// Client fallback: if SSR didn't have user (e.g. verifier exchange pending), check Better Auth session
	onMount(() => {
		if (effectiveUser?.role === 'admin' || effectiveUser?.email) return;
		authClient
			.getSession()
			.then((res: unknown) => {
				const r = res as { data?: { user?: { email?: string } | null; session?: unknown } | null };
				if (r?.data?.user?.email || r?.data?.session) clientHasSession = true;
			})
			.catch(() => {});
	});

	const showCms = $derived(
		effectiveUser?.role === 'admin' ||
			(effectiveUser?.email && effectiveUser?.role !== 'none') ||
			clientHasSession
	);
</script>

<svelte:window bind:scrollY />

<!-- Top bar scrolls away with the page (NOT sticky) — the floating sidebar takes over on scroll -->
<header
	class="relative top-auto z-30 w-full overflow-hidden border-grid-b bg-background/85 backdrop-blur-md transition-all duration-200 supports-[backdrop-filter]:bg-background/70 dark:bg-background/80 dark:supports-[backdrop-filter]:bg-background/60">
	<!-- subtle dotted veil — very low opacity + soft wash so text stays AAA contrast in both themes -->

	<div
		class="absolute inset-0 z-[1] bg-background/40 dark:bg-background/20 pointer-events-none"
		aria-hidden="true">
	</div>

	<div class="max-w-6xl mx-auto px-6 py-4 grid grid-cols-2 items-center relative z-10">
		<!-- Left: Logo + Navigation Links -->
		<div class="flex items-center gap-6">
			<a
				class="font-fancy text-base tracking-tight text-foreground flex items-center hover:opacity-90 transition-opacity"
				href="/"
				use:haptic={'selection'}>
				Khoa Nguyen
			</a>

			<!-- Desktop Navigation Menu: always visible in the top bar (top bar scrolls away) -->
			<nav class="hidden items-center gap-6 md:flex" aria-label="primary menu">
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
		</div>

		<!-- Right: Actions -->
		<div class="flex items-center justify-end gap-2">
			{#if showCms}
				<Button
					href="/studio"
					class="cursor-target rounded-none gap-1.5 shadow-sm"
					aria-label="Open CMS">
					Studio
				</Button>
			{/if}
			<ThemeSwitcher />
		</div>
	</div>
</header>

<FloatingSidebar visible={scrolled} />
