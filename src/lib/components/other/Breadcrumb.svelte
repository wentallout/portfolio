<script lang="ts">
	import { page } from '$app/state';
	import { CaretRight, House } from '#lib/assets/icons/icons.js';

	/** @type {{ minDepth?: number }} */
	let { minDepth = 2 } = $props();

	let crumbs = $derived.by(() => {
		const path = page.url.pathname;
		const segments = path.split('/').filter(Boolean);
		return segments.map((segment, index) => ({
			label: segment.replace(/-/g, ' '),
			href: '/' + segments.slice(0, index + 1).join('/')
		}));
	});

	let showBreadcrumb = $derived(crumbs.length >= minDepth);
</script>

{#if showBreadcrumb}
	<nav
		id="breadcrumb"
		class="flex items-center flex-wrap gap-2 text-sm text-muted-foreground"
		aria-label="breadcrumb">
		{#each crumbs as crumb, i (crumb.href)}
			{#if i === 0}
				<a
					class="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
					href="/">
					<House height="16" width="16" />
				</a>
				<CaretRight class="text-muted-foreground/60 shrink-0" height="14" width="14" />
			{/if}
			{#if i === crumbs.length - 1}
				<div class="font-normal text-foreground capitalize select-text">
					{crumb.label}
				</div>
			{:else}
				<a
					class="text-muted-foreground hover:text-foreground transition-colors capitalize"
					href={crumb.href}>{crumb.label}</a>
				<CaretRight class="text-muted-foreground/60 shrink-0" height="14" width="14" />
			{/if}
		{/each}
	</nav>
{/if}
