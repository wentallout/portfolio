<script lang="ts">
	import { page } from '$app/state';
	import { haptic } from '#lib/actions/haptics.js';
	import { navItems } from '#lib/config.js';
	import { EnvelopeSimple, Folder, Pen, User } from '#lib/assets/icons/icons.js';

	type Props = {
		visible?: boolean;
	};

	let { visible = false }: Props = $props();

	const navIconMap: Record<string, typeof Pen> = {
		'/blogs': Pen,
		'/projects': Folder,
		'/about': User,
		'/contact': EnvelopeSimple
	};

	const links = $derived([...navItems]);

	function isActive(path: string) {
		if (path === '/') return page.url.pathname === '/';
		return page.url.pathname.startsWith(path);
	}
</script>

<!-- Desktop-only: hidden below md so mobile BottomNav is untouched.
	 Flip rail: the top horizontal bar "turns" 90° around its right edge and docks
	 flush to the left border of the max-w-6xl page container. Every cell is square
	 (aspect-square of the 68px-wide rail), KN cap included. -->
<aside
	class="fixed top-1/2 z-40 hidden -translate-y-1/2 md:block left-3 xl:left-[calc(50%-36rem-76px)] [perspective:1200px]"
	aria-label="floating navigation"
	aria-hidden={!visible}>
	<nav
		aria-label="scrolled section menu"
		class="relative flex w-[68px] flex-col items-stretch border border-border/80 bg-background/85 shadow-lg shadow-black/5 backdrop-blur-md transition-all duration-500 supports-[backdrop-filter]:bg-background/70 [transform-style:preserve-3d] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] {visible
			? 'pointer-events-auto translate-x-0 opacity-100 [transform:rotateY(0deg)]'
			: 'pointer-events-none -translate-x-8 opacity-0 [transform:rotateY(68deg)]'}"
		style="transform-origin: right center;">
		<!-- brand cap — this IS the home button, mirroring the "Khoa Nguyen" logo cell of the top bar -->
		<a
			href="/"
			use:haptic={'selection'}
			tabindex={visible ? 0 : -1}
			aria-label="Khoa Nguyen — home"
			aria-current={isActive('/') ? 'page' : undefined}
			class="flex aspect-square w-full items-center justify-center border-b border-border/70 font-fancy text-sm tracking-tight transition-colors {isActive('/')
				? 'bg-primary/15 text-primary'
				: 'text-foreground hover:text-primary'}">
			KN
		</a>

		{#each links as link, i (link.path)}
			{@const Icon = navIconMap[link.path] ?? Pen}
			{@const active = isActive(link.path)}
			<a
				href={link.path}
				use:haptic={'selection'}
				tabindex={visible ? 0 : -1}
				aria-label={link.title}
				aria-current={active ? 'page' : undefined}
				style="transition-delay: {visible ? `${60 + i * 55}ms` : '0ms'}"
				class="group relative flex aspect-square w-full flex-col items-center justify-center gap-1 border-b border-border/50 px-1 transition-all duration-500 last:border-b-0 [transform-style:preserve-3d] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] {visible
					? 'translate-x-0 opacity-100 [transform:rotateY(0deg)]'
					: '-translate-x-3 opacity-0 [transform:rotateY(55deg)]'} {active
					? 'bg-primary/15 text-primary'
					: 'text-foreground/65 hover:bg-muted hover:text-foreground'}">
				<!-- active rail — vertical version of the top bar's underline -->
				<span
					class="absolute top-2 bottom-2 left-0 w-[2px] bg-primary transition-all duration-300 {active
						? 'scale-y-100 opacity-100'
						: 'scale-y-0 opacity-0'}"
					aria-hidden="true">
				</span>
				<Icon width="19" height="19" />
				<span class="text-sm leading-tight font-normal">{link.title}</span>
			</a>
		{/each}

		<!-- docking nub — bridges the rail into the page container's left border -->
		<span
			class="absolute top-1/2 -right-[9px] hidden h-px w-[9px] bg-border xl:block"
			aria-hidden="true">
		</span>
	</nav>
</aside>
