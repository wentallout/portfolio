<div class="grid-container">
	<slot />
</div>

<style>
	.grid-container {
		--min: 30ch;
		--gap: var(--spaceM);
		display: grid;
		grid-gap: var(--gap);
		grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));
	}
</style>
