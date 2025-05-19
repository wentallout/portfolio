<script>
	import { textReveal } from '$lib/actions/gsapAnimation';
	import { onMount } from 'svelte';
	
	let exampleText1;
	let exampleText2;
	let exampleText3;
	
	onMount(() => {
		// Example 1: Default behavior - text stays split
		textReveal(exampleText1);
		
		// Example 2: Text un-splits after 2 seconds
		textReveal(exampleText2, { unsplitAfter: 2 });
		
		// Example 3: Custom animation with un-split after 3 seconds
		textReveal(exampleText3, {
			duration: 0.5,
			ease: 'elastic.out(1, 0.3)',
			stagger: 0.03,
			unsplitAfter: 3
		});
	});
</script>

<div class="container">
	<h1>Text Reveal Examples</h1>
	
	<div class="example">
		<h2>Example 1: Default (No Un-split)</h2>
		<p bind:this={exampleText1} class="demo-text">
			This text will be animated character by character and stay that way.
		</p>
	</div>
	
	<div class="example">
		<h2>Example 2: Un-split After 2 Seconds</h2>
		<p bind:this={exampleText2} class="demo-text">
			This text will animate and then revert back to normal after 2 seconds.
		</p>
	</div>
	
	<div class="example">
		<h2>Example 3: Custom Animation with Un-split</h2>
		<p bind:this={exampleText3} class="demo-text">
			This text has custom animation parameters and will un-split after 3 seconds.
		</p>
	</div>
</div>

<style>
	.container {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem;
	}
	
	.example {
		margin-bottom: 3rem;
		padding: 1.5rem;
		border-radius: 8px;
		background-color: var(--color-bg-container);
		box-shadow: var(--boxShadow);
	}
	
	.demo-text {
		font-size: 1.2rem;
		line-height: 1.6;
		margin-top: 1rem;
	}
	
	h1 {
		margin-bottom: 2rem;
		text-align: center;
	}
	
	h2 {
		margin-bottom: 1rem;
		font-size: 1.4rem;
	}
</style>
