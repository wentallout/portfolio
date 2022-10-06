<script>
	import { onMount } from 'svelte';
	let headingEle;
	let headingList = [];

	onMount(() => {
		headingEle = {};
		headingEle = document.querySelectorAll('h2');

		for (let i = 0; i < headingEle.length; i++) {
			headingEle[i].setAttribute('id', `${headingEle[i].innerHTML}`);
		}

		headingList = Array.from(headingEle);
	});
</script>

<div class="toc">
	<div class="toc__title base-text">Table of Content</div>
	<ul>
		{#each headingList as item}
			<li>
				<a href={'#' + item.innerHTML}>
					{headingList.indexOf(item) + '. ' + item.innerHTML}
				</a>
			</li>
		{/each}
	</ul>
</div>

<style>
	.toc ul {
		display: flex;
		width: 100%;
		flex-direction: column;
		margin: 0;
	}

	.toc li::before {
		display: none;
	}

	.toc a {
		font-weight: 400;
		font-style: normal;
		margin-bottom: var(--space-s);
		background-color: transparent;
		padding: 0;
	}

	.toc__title {
		font-family: 'Recoleta Alt';
		font-weight: 600;
		font-size: var(--font-size-base);
		margin-bottom: var(--space-s);
	}

	.toc {
		display: flex;
		flex-direction: column;
		width: 100%;
		min-height: 250px;
		height: fit-content;
		overflow-y: auto;
		overflow-x: hidden;
		max-width: 80rem;
		border-radius: var(--border-radius);
		padding: var(--space-s);

		border: 0.5px solid var(--neutral-400);
		margin-bottom: var(--space-l);
	}
</style>
