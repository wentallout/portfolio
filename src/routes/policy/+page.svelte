<script>
	import Button from '$components/Button/Button.svelte';
</script>

<div class="container">
	<h1 class="text-large">PRIVACY POLICY</h1>

	<a href="/doc/privacy-policy.pdf">
		<Button label="Read Privacy Policy" backgroundColor="var(--colorPrimary)" />
	</a>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		gap: var(--space-m);
		height: 500px;
		align-items: center;
		justify-content: center;
		border: 1px dotted var(--colorBorder);
	}
</style>
