<div class="blogs">
	<slot />
</div>

<style>
	.blogs {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;

		width: 100%;
		margin-bottom: var(--space-l);
	}
</style>
