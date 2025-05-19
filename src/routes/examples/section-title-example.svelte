<script>
	import PageTitle from '$components/common/PageTitle.svelte';
	import SectionTitle from '$sections/SectionTitle.svelte';
	import { Books, Code, Cpu } from '$lib/assets/icons/icons';
</script>

<PageTitle pageTitle="Section Title Examples" />

<div class="container">
	<h1>Section Title Animation Examples</h1>
	
	<div class="example">
		<h2>Example 1: Default (No Un-split)</h2>
		<SectionTitle 
			sectionTitle="Regular Section Title" 
			sectionDesc="This is a regular section title with no un-split animation. The text will stay animated.">
			{#snippet children({ sectionIcon })}
				<Books {...sectionIcon} />
			{/snippet}
		</SectionTitle>
	</div>
	
	<div class="example">
		<h2>Example 2: Un-split After 2 Seconds</h2>
		<SectionTitle 
			sectionTitle="Un-split After 2 Seconds" 
			sectionDesc="This section title will animate and then revert back to normal text after 2 seconds."
			unsplitAfter={2}>
			{#snippet children({ sectionIcon })}
				<Code {...sectionIcon} />
			{/snippet}
		</SectionTitle>
	</div>
	
	<div class="example">
		<h2>Example 3: Un-split After 4 Seconds</h2>
		<SectionTitle 
			sectionTitle="Longer Un-split Delay" 
			sectionDesc="This section title has a longer delay before un-splitting (4 seconds)."
			unsplitAfter={4}>
			{#snippet children({ sectionIcon })}
				<Cpu {...sectionIcon} />
			{/snippet}
		</SectionTitle>
	</div>
</div>

<style>
	.container {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem;
	}
	
	.example {
		margin-bottom: 5rem;
		padding: 2rem;
		border-radius: 8px;
		background-color: var(--color-bg-container);
		box-shadow: var(--boxShadow);
	}
	
	h1 {
		margin-bottom: 2rem;
		text-align: center;
	}
	
	h2 {
		margin-bottom: 2rem;
		font-size: 1.4rem;
		color: var(--color-text-secondary);
	}
</style>
