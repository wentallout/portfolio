<script>
	import MouseGlow from '$components/common/MouseGlow.svelte';
	import { fade } from 'svelte/transition';

	let { link = '', repoUrl = '', title = '', vidDemo = '' } = $props();
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
	<div class="vid__desc">
		<h5 class="vid__title">{title}</h5>
	</div>
</a>

<style lang="postcss">
	.vid-container {
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
	}

	.vid {
		display: flex;
		border: 1px dotted var(--color-border-secondary);
	}

	.vid__demo {
		width: 100%;
	}

	.vid__desc {
		border: 1px solid var(--color-border-secondary);
		border-top: 0;
		padding: var(--space-xs) var(--space-xs);
		border-bottom-left-radius: var(--border-radius-light);
		border-bottom-right-radius: var(--border-radius-light);
	}

	.vid__title {
		font-weight: 600;
	}
</style>
