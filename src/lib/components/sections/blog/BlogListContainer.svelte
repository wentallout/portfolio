<div class="blogs">
	<slot />
</div>

<style>
	.blogs {
		/* SPACING */
		margin-top: var(--spaceL);
		margin-bottom: var(--spaceL);
		/* --- */

		--min: 40ch;
		--gap: var(--spaceM);

		display: grid;
		grid-gap: var(--gap);
		grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));
	}
</style>
