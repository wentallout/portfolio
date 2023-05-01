<div class="blogs">
	<slot />
</div>

<style>
	.blogs {
		/* display: flex;
		flex-direction: row;
		flex-wrap: wrap;

		width: 100%;
		margin-top: var(--space-l);
		margin-bottom: var(--space-l); */


		--min: 40ch;
		--gap: 1rem;

		display: grid;
		grid-gap: var(--gap);
		/* min() with 100% prevents overflow
  in extra narrow spaces */
		grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));
	}
</style>
