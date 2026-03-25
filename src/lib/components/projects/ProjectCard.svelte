<script>
	import MouseGlow from '$components/common/MouseGlow.svelte';
	import { haptic } from '$lib/actions/haptics';

	let {
		desc = '',
		linkToDetail = '',
		output = '',
		projectName = '',
		role = '',
		thumbnail
	} = $props();
</script>

<a use:haptic={'selection'} class="project-container fancy-border" href={linkToDetail}>
	<MouseGlow />
	<article class="project">
		<div class="project__thumbnail">
			<img alt={projectName} loading="lazy" src={thumbnail} />
		</div>
		<div class="project__info">
			<h2 class="project__title text-large text-trim">
				{projectName}
			</h2>

			<div class="info text-small">
				<p class="section__label">Role</p>
				<p class="section__desc">{role}</p>

				<p class="section__label">Description</p>
				<p class="section__desc">{desc}</p>

				<p class="section__label">Result</p>
				<p class="section__desc">{output}</p>
			</div>
		</div>
	</article>
</a>

<style lang="postcss">
	.project-container {
		--ease-out-custom: cubic-bezier(0.23, 1, 0.32, 1);
		display: block;
		position: relative;
		text-decoration: none;
		transition: 
			transform 250ms var(--ease-out-custom),
			filter 250ms var(--ease-out-custom);
		transform-origin: center;
		will-change: transform;
	}

	.project-container:hover {
		transform: translateY(-4px) scale(1.01);
		filter: brightness(1.05);
	}

	.project-container:active {
		transform: translateY(-2px) scale(0.98);
		transition-duration: 80ms;
	}

	.project {
		display: grid;
		grid-template-columns: 1fr;
		position: relative;
		width: 100%;
		transition: box-shadow 250ms var(--ease-out-custom);
		box-shadow: var(--boxShadow);
		overflow: hidden;
		border-radius: var(--border-radius-light);
		background: var(--color-bg-gradient-subtle);
	}

	@media (min-width: 992px) {
		.project {
			grid-template-columns: 320px 1fr;
		}
	}

	.project__thumbnail {
		width: 100%;
		height: 100%;
		position: relative;
		overflow: hidden;
		z-index: 0;
	}

	.project__thumbnail img {
		object-fit: cover;
		width: 100%;
		height: 100%;
		transition: transform 600ms var(--ease-out-custom);
		will-change: transform;
	}

	.project-container:hover .project__thumbnail img {
		transform: scale(1.1);
	}

	.project__title {
		display: flex;
		justify-content: flex-start;
		flex-direction: column;
		font-weight: var(--fontWeightLarge);
		transition: color 200ms var(--ease-out-custom);
	}

	.project-container:hover .project__title {
		color: var(--color-primary-hover);
	}

	.info {
		display: grid;
		gap: var(--space-s);
		grid-template-columns: auto 1fr;
	}

	.project__info {
		display: flex;
		flex-grow: 2;
		flex-direction: column;
		position: relative;
		padding: var(--space-card);
		gap: var(--space-mid);
		color: var(--color-text);
		transition: background 250ms var(--ease-out-custom);
	}

	.project-container:hover .project__info {
		background: var(--color-bg-elevated);
	}

	.section__label {
		color: var(--color-text);
		min-width: 10%;
		font-weight: 600;
	}

	.section__desc {
		max-width: var(--text-width);
	}

	@keyframes article-appear {
		from {
			transform: translateY(20px);
			opacity: 0;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}

	.project-container {
		view-timeline-name: --articleAppear;
		animation-timeline: --articleAppear;
		animation-name: article-appear;
		animation-fill-mode: both;
		animation-range: entry 0% entry 40%;
	}
</style>
