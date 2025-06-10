<script>
	import VideoDemoCard from '$components/projects/VideoDemoCard.svelte';

	const demos = [
		{ link: 'https://huebase.netlify.app/', vidDemo: '/videos/text-animated-on-scroll.webm' },
		{ link: 'https://huebase.netlify.app/', vidDemo: '/videos/text-animated-on-scroll.webm' }
	];
</script>

<div class="list">
	{#each demos as demo}
		<VideoDemoCard {demo} />
	{/each}
</div>

<style>
	.list {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--space-mid);
	}
</style>
