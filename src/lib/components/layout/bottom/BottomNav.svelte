<script>
	import { page } from '$app/state';
	import { haptic } from '$lib/actions/haptics';
	import { House, Pen, Folder, User, EnvelopeSimple } from '$lib/assets/icons/icons';
	import { navItems as baseNavItems } from '$lib/constants/uxCopy.js';

	const navIconMap = {
		'/': House,
		'/blogs': Pen,
		'/projects': Folder,
		'/about': User,
		'/contact': EnvelopeSimple
	};

	const navItems = baseNavItems.map((item) => ({ ...item, icon: navIconMap[item.path] }));

	function isActive(path) {
		if (path === '/') {
			return page.url.pathname === '/';
		}
		return page.url.pathname.startsWith(path);
	}
</script>

<nav aria-label="mobile bottom menu" class="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-t border-border px-2 py-2 flex justify-around items-center transition-all duration-300">
	{#each navItems as item (item.path)}
		{@const active = isActive(item.path)}
		<a
			href={item.path}
			use:haptic={'selection'}
			class="flex flex-col items-center gap-1 px-3 py-1 rounded-lg transition-all duration-200 text-sm font-mono tracking-tight {active ? 'text-primary font-medium' : 'text-muted-foreground hover:text-foreground'}"
		>
			<div class="transition-transform duration-200 {active ? 'scale-110 text-primary' : 'text-muted-foreground'}">
				<item.icon width="18" height="18" />
			</div>
			<span>{item.title}</span>
		</a>
	{/each}
</nav>
