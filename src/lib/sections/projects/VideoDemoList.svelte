<script>
	import VideoDemoCard from '$components/projects/VideoDemoCard.svelte';

	const demos = [
		{
			link: 'https://huebase.netlify.app/',
			repoUrl: '',
			title: 'Text animated on scroll',
			vidDemo: '/videos/text-animated-on-scroll.webm'
		},
		{
			link: 'https://bitkraft-scifi.netlify.app/',
			repoUrl: '',
			title: 'Scifi Nav',
			vidDemo: '/videos/bitkraft-scifi.webm'
		},
		{
			link: 'https://phantom-gallery.netlify.app/',
			repoUrl: '',
			title: 'Phantom Gallery',
			vidDemo: '/videos/phantom-gallery.webm'
		},
		{
			link: 'https://responsive-minimap.netlify.app/',
			repoUrl: 'https://github.com/wentallout/responsive-minimap',
			title: 'Responsive Minimap',
			vidDemo: '/videos/responsive-minimap.webm'
		}
	];
</script>

<div class="list">
	{#each demos as demo}
		<VideoDemoCard link={demo.link} title={demo.title} vidDemo={demo.vidDemo} />
	{/each}
</div>

<style>
	.list {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--space-mid);
	}

	@media (min-width: 992px) {
		.list {
			grid-template-columns: 1fr 1fr;
		}
	}
</style>
