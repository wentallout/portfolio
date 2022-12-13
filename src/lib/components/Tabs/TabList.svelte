<div class="tab-list">
	<slot />
</div>

<style>
	.tab-list {
		width: 100%;
		border-bottom: 1px solid var(--neutral-600);
		margin-bottom: var(--space-xl);
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-wrap: wrap;
		gap: var(--space-s);
	}
</style>
