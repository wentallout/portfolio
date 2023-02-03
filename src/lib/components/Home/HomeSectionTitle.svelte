<script>
	export let title = '';
	export let extraClass = '';
</script>

<h2 class="home-section xl-text {extraClass}">{title}</h2>

<style>
	.home-section {
		color: var(--primary-500);
		font-family: var(--fancy-font);
		margin-bottom: var(--space-m);
	}
</style>
