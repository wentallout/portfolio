<script>
	import { onMount } from 'svelte';
	let headingEle;
	let headingList = [];

	onMount(() => {
		headingEle = document.querySelectorAll('h2');

		if (headingEle.length === 0) {
			for (let i = 0; i < headingEle.length; i++) {
				headingEle[i].setAttribute('id', `${headingEle[i].innerHTML}`);
			}
		}

		headingList = Array.from(headingEle);
	});
</script>

<div class="toc">
	<ul>
		<div class="toc__title base-text">Table of Content</div>
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
		content: '';
	}

	.toc li a {
		font-weight: 300;
		font-style: normal;
		margin-bottom: var(--space-s);
	}

	.toc__title {
		font-weight: 500;
		margin-bottom: var(--space-s);
		padding: 4px 8px;
		border-radius: var(--border-radius);
		background-color: var(--neutral-200);
	}

	.toc {
		display: flex;
		width: 100%;
		height: 300px;
		overflow-y: auto;
		overflow-x: hidden;
		max-width: 80rem;
		border-radius: var(--border-radius);
		padding: var(--space-s);

		border: 0.5px solid var(--neutral-400);
		margin-bottom: var(--space-l);
	}
</style>
