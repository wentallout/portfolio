<!-- <script>
	import { onMount } from 'svelte';

	let input;

	let searchResult;

	$: searchResult;

	onMount(async () => {
		const pagefind = await import('/pagefind/pagefind.js');
		console.log(await pagefind.search('sveltekit'));
	});

	async function handleInput(e) {
		searchResult = await pagefind.search(input);
		console.log(searchResult);
	}
</script>

<input bind:this={input} type="text" on:input={handleInput} />
<div>{searchResult}</div>

<style>
	input {
		background-color: red;
	}
</style> -->
