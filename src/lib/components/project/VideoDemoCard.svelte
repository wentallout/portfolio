<script>
	import MouseGlow from '$components/common/MouseGlow.svelte';
	import { fade } from 'svelte/transition';

	let { link = 'https://huebase.netlify.app/', vidDemo = '/videos/text-animated-on-scroll.webm' } =
		$props();
</script>

<a class="vid-container" aria-label="link to demo" href={link} target="_blank">
	<div class="vid">
		<video
			class="vid__demo"
			autoplay
			fetchpriority="high"
			loop
			muted
			playsinline
			transition:fade={{ duration: 300 }}>
			<source src={vidDemo} type="video/mp4" />
		</video>
	</div>
</a>

<style lang="postcss">
	.vid-container {
		display: block;
	}

	.vid {
		display: flex;
	}

	.vid__demo {
		width: 100%;
	}
</style>
