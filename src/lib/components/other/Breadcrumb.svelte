<script>
	import { page } from '$app/state';
	import { CaretRight, House } from '$lib/assets/icons/icons';

	let crumbs = $derived.by(() => {
		const path = page.url.pathname;
		const segments = path.split('/').filter(Boolean);
		return segments.map((segment, index) => ({
			label: segment.replace(/-/g, ' '),
			href: '/' + segments.slice(0, index + 1).join('/')
		}));
	});
</script>

<nav id="breadcrumb" aria-label="breadcrumb" class="flex items-center flex-wrap gap-2 text-sm text-neutral-400 font-sans">
	{#each crumbs as crumb, i (crumb.href)}
		{#if i === 0}
			<a class="inline-flex items-center text-neutral-400 hover:text-white transition-colors" href="/">
				<House height="16" width="16" />
			</a>
			<CaretRight height="14" width="14" class="text-neutral-600 shrink-0" />
		{/if}
		{#if i === crumbs.length - 1}
			<div class="font-normal text-white capitalize select-text">
				{crumb.label}
			</div>
		{:else}
			<a class="text-neutral-400 hover:text-white transition-colors capitalize" href={crumb.href}>{crumb.label}</a>
			<CaretRight height="14" width="14" class="text-neutral-600 shrink-0" />
		{/if}
	{/each}
</nav>
