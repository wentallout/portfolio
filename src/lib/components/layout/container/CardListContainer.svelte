<div class="grid-container">
	<slot />
</div>

<style>
	.grid-container {
		--min: 25ch;
		--gap: var(--spaceM);

		display: grid;
		grid-gap: var(--gap);
		/* min() with 100% prevents overflow
  in extra narrow spaces */
		grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));
	}
</style>
