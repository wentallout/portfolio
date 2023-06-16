<script>
	import { page } from '$app/stores';
	let currentPath = $page.url.pathname;
	let id = $page.route.id;
	let crumbs;

	import CaretRight from '~icons/ph/caret-right';

	$: {
		// Remove zero-length tokens.
		const tokens = currentPath.split('/').filter((t) => t !== '');

		// Create { label, href } pairs for each token.
		let tokenPath = '';
		crumbs = tokens.map((t) => {
			tokenPath += '/' + t;
			return {
				label: t.replace('-', ' '),
				href: tokenPath
			};
		});

		// Add a way to get home too.
		crumbs.unshift({ label: 'home', href: '/' });
	}
</script>

{#if currentPath !== '/' && id !== null}
	<nav aria-label="breadcrumb" id="breadcrumb" class="breadcrumb small-text">
		{#each crumbs as c, i}
			{#if i == crumbs.length - 1}
				<div class="breadcrumb__unclickable">
					{c.label}
				</div>
			{:else}
				<a class="breadcrumb__clickable underline" href={c.href}>{c.label}</a>
				<CaretRight width="16" height="16" />

				<!-- /&nbsp; -->
			{/if}
		{/each}
	</nav>
{/if}

<style>
	.breadcrumb {
		/* FLEX */
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.25rem;

		/* SPACING */
		padding-top: var(--space3XL);
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
