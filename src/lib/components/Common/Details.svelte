<script>
	export let summary = '';

	export let answer = '';
</script>

<details>
	<summary>
		<div class="small-text">{summary}</div>
	</summary>
	<div class="answer small-text">
		{answer}
	</div>
</details>

<style>
	summary:hover {
		background-color: var(--bg-400);
	}

	summary {
		max-width: var(--text-width);
	}

	details > summary {
		cursor: pointer;
		padding: var(--space-xs);

		transition: var(--transition);
	}

	details > summary > * {
		display: inline;
	}

	details > div {
		margin-top: 0;
	}

	.answer {
		color: var(--text-color-low);
		max-width: var(--text-width);
		padding: var(--space-s);
	}

	details:focus {
		background-color: black;
	}

	details[open] {
		/* outline: 1px solid var(--text-color); */
		margin-bottom: var(--space-s);
	}

	details[open] .answer {
		outline: 1px solid var(--text-color);
	}
</style>
