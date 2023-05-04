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
	summary {
		max-width: var(--text-width);
	}
	summary:hover {
		background-color: var(--colorBgElevated);
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
		color: var(--colorTextSecondary);
		max-width: var(--text-width);
		padding: var(--space-s);
	}

	details:focus {
		background-color: black;
	}

	details[open] {
		margin-bottom: var(--space-s);
	}

	details[open] .answer {
		outline: 1px solid var(--colorBorder);
	}
</style>
