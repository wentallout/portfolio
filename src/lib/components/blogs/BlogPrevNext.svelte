<script>
	/**
	 * @typedef {Object} BlogLink
	 * @property {string} slug
	 * @property {string} title
	 */

	/** @type {BlogLink | null | undefined} */
	export let prev = undefined;
	/** @type {BlogLink | null | undefined} */
	export let next = undefined;
</script>

{#if prev || next}
	<nav class="blog-prev-next">
		{#if prev}
			<a class="prev-link" href={`/blogs/${prev.slug}`} rel="prev">
				<span class="arrow">&larr;</span>
				<span class="text">
					<span class="label">Previous</span>
					<span class="title">{prev.title}</span>
				</span>
			</a>
		{:else}
			<div class="placeholder"></div>
			<!-- Empty div to maintain layout if only next exists -->
		{/if}

		{#if next}
			<a class="next-link" href={`/blogs/${next.slug}`} rel="next">
				<span class="text">
					<span class="label">Next</span>
					<span class="title">{next.title}</span>
				</span>
				<span class="arrow">&rarr;</span>
			</a>
		{:else}
			<div class="placeholder"></div>
			<!-- Empty div to maintain layout if only prev exists -->
		{/if}
	</nav>
{/if}

<style>
	.blog-prev-next {
		display: flex;
		justify-content: space-between;
		margin-top: 2rem;
		margin-bottom: 1rem;
		padding-top: 1rem;
		border-top: 1px solid var(--color-border, #eee);
	}

	.blog-prev-next a {
		display: flex;
		align-items: center;
		text-decoration: none;
		color: var(--color-text-link, #007bff);
		padding: 0.5rem 1rem;
		border: 1px solid var(--color-border-subtle, #ddd);
		border-radius: 4px;
		transition:
			background-color 0.2s ease-in-out,
			border-color 0.2s ease-in-out;
		max-width: 48%; /* Ensure links don't overlap too much */
	}

	.blog-prev-next a:hover {
		background-color: var(--color-background-hover, #f8f9fa);
		border-color: var(--color-border-hover, #ccc);
	}

	.prev-link .text {
		margin-left: 0.5rem;
		text-align: left;
	}

	.next-link .text {
		margin-right: 0.5rem;
		text-align: right;
	}
	.next-link {
		margin-left: auto; /* Pushes next link to the right if prev is missing */
	}

	.arrow {
		font-size: 1.5em;
		line-height: 1;
	}

	.text {
		display: flex;
		flex-direction: column;
	}

	.label {
		font-size: 0.8em;
		color: var(--color-text-muted, #6c757d);
		margin-bottom: 0.25rem;
	}

	.title {
		font-weight: 500;
		display: -webkit-box; /* For multiline ellipsis */
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
		max-height: 2.8em; /* Approx 2 lines */
		line-height: 1.4em;
	}
	.placeholder {
		flex-basis: 48%; /* Occupy space similar to a link */
	}
</style>
