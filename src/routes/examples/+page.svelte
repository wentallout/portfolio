<script>
	import PageTitle from '$components/common/PageTitle.svelte';
	import SectionTitle from '$sections/SectionTitle.svelte';
</script>

<PageTitle pageTitle="Animation Examples" />

<section>
	<SectionTitle
		sectionTitle="Animation Examples"
		sectionDesc="Explore different animation techniques used in this portfolio" />

	<div class="examples-list">
		<a href="/examples/text-reveal-example" class="example-card">
			<h3>Text Reveal Animation</h3>
			<p>
				See how text can be animated character by character and then un-split back to normal text.
			</p>
		</a>

		<a href="/examples/section-title-example" class="example-card">
			<h3>Section Title Animation</h3>
			<p>Examples of section titles with different un-split animation timings.</p>
		</a>

		<a href="/examples/debounce-example" class="example-card">
			<h3>Debounce Example</h3>
			<p>See how debouncing improves performance by reducing function calls during rapid input.</p>
		</a>

		<!-- Add more example cards here as needed -->
	</div>
</section>

<style>
	.examples-list {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: var(--space-mid);
		margin-top: var(--space-large);
	}

	.example-card {
		padding: var(--space-mid);
		background-color: var(--color-bg-container);
		border-radius: var(--border-radius-light);
		box-shadow: var(--boxShadow);
		transition: var(--transition);
	}

	.example-card:hover {
		transform: translateY(-5px);
		box-shadow: var(--boxShadow-hover);
	}

	.example-card h3 {
		margin-bottom: var(--space-2xs);
		color: var(--color-primary);
	}

	.example-card p {
		color: var(--color-text-secondary);
		font-size: var(--font-size-small);
	}
</style>
