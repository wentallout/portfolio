<script>
	import { getContext } from 'svelte';
	import { faqsKey } from './FaqContainer.svelte';

	export let summary;

	const activeFaq = getContext(faqsKey);
</script>

<details
	open={$activeFaq === summary}
	on:toggle={({ target }) => {
		$activeFaq = target.open ? summary : $activeFaq;
	}}
>
	<summary class="base-text">{summary}</summary>
	<slot />
</details>

<style>
	details {
		margin-bottom: var(--space-l);
	}

	details > summary {
		list-style: none;
	}
	summary::-webkit-details-marker {
		display: none;
	}

	summary::after {
		content: ' ►';
	}
	details[open] summary:after {
		content: ' ▼';
	}

	details[open] summary ~ * {
		animation: sweep 0.5s ease-in-out;
	}
</style>
