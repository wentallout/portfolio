<script>
	import ExLink from '$components/common/ExLink.svelte';

	/** @type {{ title: string, href?: string, icon: import('svelte').Snippet, children: import('svelte').Snippet }} */
	let { children, href, icon, title } = $props();
</script>

<div class="contact__address fancy-border">
	<div class="address__icon-column">
		{@render icon?.()}
	</div>

	<div class="address__text-column">
		{#if href}
			<ExLink {href}>
				<div class="address__title text-base">
					{title}
				</div>
			</ExLink>
		{:else}
			<div class="address__title text-base">
				{title}
			</div>
		{/if}
		<div class="address__content">
			{@render children?.()}
		</div>
	</div>
</div>

<style>
	.contact__address {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: var(--space-s);

		padding: var(--space-card);
		transition: var(--transition);
		box-shadow: var(--boxShadow);
		background: var(--color-bg-gradient-subtle);

		position: relative;
		border-radius: var(--border-radius-light);
	}

	.address__icon-column {
		display: flex;
		align-items: flex-start;

		color: var(--color-text);
	}

	.address__text-column {
		display: flex;
		flex-direction: column;
		gap: var(--space-2xs);
	}

	.address__title {
		font-weight: 500;
		text-box: cap alphabetic;
	}

	.address__content {
		display: flex;
		flex-direction: column;
		gap: var(--space-xs);
	}

	:global(.address__desc) {
		color: var(--color-text-secondary);
	}
</style>
