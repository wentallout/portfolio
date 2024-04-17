<div class="blogs">
	<slot />
</div>

<style>
	.blogs {
		/* CUSTOM VALUE */
		--min: 30ch;
		--gap: var(--spaceS);
		/* --- */

		/* SPACING */
		margin-top: var(--spaceL);
		margin-bottom: var(--spaceL);
		/* --- */

		/* GRID */
		display: grid;
		grid-gap: var(--gap);
		grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));
		/* --- */
	}
</style>
