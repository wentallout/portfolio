<div class="blogs">
	<slot />
</div>

<style>
	.blogs {
		/* SPACING */
		margin-top: var(--space-l);
		margin-bottom: var(--space-l);
		/* --- */

		--min: 40ch;
		--gap: 1rem;

		display: grid;
		grid-gap: var(--gap);
		grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));
	}
</style>
