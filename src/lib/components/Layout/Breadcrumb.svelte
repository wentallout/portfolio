<script>
	export let path;

	var crumbs;

	$: {
		// Remove zero-length tokens.
		const tokens = path.split('/').filter((t) => t !== '');

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

<nav aria-label="breadcrumb" id="breadcrumb" class="breadcrumb base-text">
	{#each crumbs as c, i}
		{#if i == crumbs.length - 1}
			{#if c.label !== 'home'}
				<div class="breadcrumb__unclickable">
					{c.label}
				</div>
			{/if}
		{:else}
			<a class="breadcrumb__clickable" href={c.href}>{c.label}</a> /&nbsp;
		{/if}
	{/each}
</nav>

<style>
	.breadcrumb {
		margin-top: var(--space-xl);
		margin-bottom: var(--space-l);
	}

	.breadcrumb__unclickable {
		pointer-events: none;
		display: inline-block;
		font-weight: 300;
		color: var(--text-color-low);
	}

	.breadcrumb__clickable {
		font-weight: 300;
		display: inline-flex;
		color: var(--accent-300);
	}

	.breadcrumb__clickable:hover {
		color: var(--primary-500);
	}
</style>
