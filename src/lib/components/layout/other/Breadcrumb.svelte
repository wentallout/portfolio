<script>
	import { page } from '$app/stores';
	let currentPath = $page.url.pathname;

	let crumbs;

	import CaretRight from '~icons/ph/caret-right';

	function removeHyphens(text) {
		return text.replace(/-/g, ' '); // This line removes all hyphens and replaces them with spaces
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
</script>

<nav aria-label="breadcrumb" id="breadcrumb" class="breadcrumb text-small">
	{#each crumbs as c, i}
		{#if i == crumbs.length - 1}
			<div class="breadcrumb__unclickable">
				{c.label}
			</div>
		{:else}
			<a class="breadcrumb__clickable link" href={c.href}>{c.label}</a>
			<CaretRight width="16" height="16" />
		{/if}
	{/each}
</nav>

<style>
	.breadcrumb {
		/* FLEX */
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.25rem;

		padding-top: 100px;
		padding-bottom: var(--spaceL);

		background-color: transparent;
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
</style>
