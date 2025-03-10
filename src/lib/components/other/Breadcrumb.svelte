<script>
	import { page } from '$app/stores';
	import { CaretRight, House } from '$lib/assets/icons/icons';

	let crumbs = $state([]);

	$effect(() => {
		const path = $page.url.pathname;

		const segments = path.split('/').filter(Boolean);

		crumbs = [
			...segments.map((segment, index) => ({
				label: segment.replace(/-/g, ' '),
				href: '/' + segments.slice(0, index + 1).join('/')
			}))
		];
	});
</script>

<nav id="breadcrumb" class="breadcrumb text-small" aria-label="breadcrumb">
	{#each crumbs as crumb, i}
		{#if i === 0}
			<a class="breadcrumb__clickable link" href="/">
				<House />
			</a>
			<CaretRight />
		{/if}
		{#if i === crumbs.length - 1}
			<div class="breadcrumb__unclickable">
				{crumb.label}
			</div>
		{:else}
			<a class="breadcrumb__clickable link" href={crumb.href}>{crumb.label}</a>
			<CaretRight />
		{/if}
	{/each}
</nav>

<style>
	.breadcrumb {
		/* FLEX */
		display: flex;
		flex-direction: row;
		align-items: center;
		flex-wrap: wrap;
		gap: var(--space-3xs);

		position: relative;
		margin-top: var(--scroll-padding);
		margin-bottom: var(--space-xl);

		background-color: transparent;

		top: -1px;
		transition: var(--transition);
	}

	.breadcrumb__unclickable {
		pointer-events: none;
		display: inline-block;
		font-weight: var(--fontWeightXS);
		color: var(--color-text-secondary);
	}

	.breadcrumb__clickable {
		font-weight: var(--fontWeightXS);
		display: inline-flex;
		color: var(--color-primary);
	}

	.breadcrumb__clickable:hover {
		color: var(--color-primary-hover);
		text-underline-offset: 1px;
	}
</style>
