<script>
	import CaretRight from '~icons/ph/caret-right';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	let currentPath = $page.url.pathname;

	let crumbs;

	function removeHyphens(text) {
		// This line removes all hyphens and replaces them with spaces
		return text.replace(/-/g, ' ');
	}

	$: {
		// Remove zero-length tokens.
		let tokens = currentPath.split('/').filter((t) => t !== '');

		// Create { label, href } pairs for each token.
		let tokenPath = '';
		crumbs = tokens.map((t) => {
			tokenPath += '/' + t;
			return {
				label: removeHyphens(t),
				href: tokenPath
			};
		});

		crumbs.unshift({ label: 'home', href: '/' });
	}

	let breadcrumbEl;

	function makeBreadcrumbSticky() {
		const observer = new IntersectionObserver(
			([e]) => e.target.classList.toggle('sticky', e.intersectionRatio < 1),
			{ threshold: [1] }
		);
		observer.observe(breadcrumbEl);
	}

	onMount(() => {
		makeBreadcrumbSticky();
	});
</script>

<nav bind:this={breadcrumbEl} id="breadcrumb" class="breadcrumb text-small" aria-label="breadcrumb">
	{#each crumbs as c, i}
		{#if i === crumbs.length - 1}
			<div class="breadcrumb__unclickable">
				{c.label}
			</div>
		{:else}
			<a class="breadcrumb__clickable link" href={c.href}>{c.label}</a>
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
		font-weight: var(--fontWeightXS);
		display: inline-flex;
		color: var(--colorPrimary);
	}

	.breadcrumb__clickable:hover {
		color: var(--colorPrimaryHover);
		text-underline-offset: 2px;
	}

	:global(.breadcrumb.sticky) {
		position: sticky;
		background-color: var(--colorBgLayout);
		padding: var(--space2XS) var(--spaceXS);
		box-shadow: var(--boxShadow);
		z-index: 9999;
		border-radius: 0 0 var(--borderRadiusLight) var(--borderRadiusLight);
	}
</style>
