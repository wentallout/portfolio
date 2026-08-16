<script>
	import { page } from '$app/state';
	import { haptic } from '$lib/actions/haptics';
	import { House, Pen, Folder, User, EnvelopeSimple } from '$lib/assets/icons/icons';

	const navItems = [
		{ path: '/', title: 'Home', icon: House },
		{ path: '/blogs', title: 'Writing', icon: Pen },
		{ path: '/projects', title: 'Projects', icon: Folder },
		{ path: '/about', title: 'About', icon: User },
		{ path: '/contact', title: 'Contact', icon: EnvelopeSimple }
	];

	function isActive(path) {
		if (path === '/') {
			return page.url.pathname === '/';
		}
		return page.url.pathname.startsWith(path);
	}
</script>

<nav aria-label="mobile bottom menu" class="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-t border-neutral-800/80 px-2 py-2 flex justify-around items-center transition-all duration-300">
	{#each navItems as item (item.path)}
		{@const active = isActive(item.path)}
		<a
			href={item.path}
			use:haptic={'selection'}
			class="flex flex-col items-center gap-1 px-3 py-1 rounded-lg transition-all duration-200 text-[10px] font-mono tracking-tight {active ? 'text-white font-semibold' : 'text-neutral-500 hover:text-neutral-300'}"
		>
			<div class="transition-transform duration-200 {active ? 'scale-110 text-white' : 'text-neutral-400'}">
				<item.icon width="18" height="18" />
			</div>
			<span>{item.title}</span>
		</a>
	{/each}
</nav>
