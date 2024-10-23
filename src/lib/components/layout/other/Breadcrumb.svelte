<script>
	import CaretRight from '~icons/ph/caret-right';
	import { page } from '$app/stores';

	let crumbs = $state([]);

	$effect(() => {
		const path = $page.url.pathname;
		const segments = path.split('/').filter(Boolean);

		crumbs = [
			{ label: 'home', href: '/' },
			...segments.map((segment, index) => ({
				label: segment.replace(/-/g, ' '),
				href: '/' + segments.slice(0, index + 1).join('/')
			}))
		];
	});
</script>

<nav id="breadcrumb" class="breadcrumb text-small" aria-label="breadcrumb">
	{#each crumbs as crumb, i}
		{#if i === crumbs.length - 1}
			<div class="breadcrumb__unclickable">
				{crumb.label}
			</div>
		{:else}
			<a class="breadcrumb__clickable link" href={crumb.href}>{crumb.label}</a>
			<CaretRight height="16" width="16" />
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
		gap: var(--space3XS);

		position: relative;
		margin-top: var(--scroll-padding);
		margin-bottom: var(--spaceXL);

		background-color: transparent;

		top: -1px;
		transition: var(--transition);
	}

	.breadcrumb__unclickable {
		pointer-events: none;
		display: inline-block;
		font-weight: var(--fontWeightXS);
		color: var(--colorTextSecondary);
	}

	.breadcrumb__clickable {
		font-weight: var(--fontWeightLarge);
		display: inline-flex;
		color: var(--colorInfo);
	}

	.breadcrumb__clickable:hover {
		color: var(--colorPrimaryHover);
		text-underline-offset: 2px;
	}
</style>
