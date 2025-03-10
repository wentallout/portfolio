<script>
	import Breadcrumb from '$components/other/Breadcrumb.svelte';
	import Wall from '$lib/assets/images/common/wall.webp';

	/** @type {{pageTitle?: string, decoImageUrl?: any}} */
	let { decoImageUrl = Wall, pageTitle = 'pageTitle' } = $props();
</script>

<div class="full-width title">
	<span class="title__extra">
		{pageTitle}
	</span>

	<img
		class="title__bg"
		alt="title deco"
		height="642"
		loading="eager"
		src={decoImageUrl}
		title="title deco"
		width="1920" />

	<div class="title__content">
		<h1 class="text-3xl title__text tracking-in-expand text-trim">
			{pageTitle}
		</h1>
	</div>
</div>
<Breadcrumb />

<style>
	.title {
		z-index: 1;
		position: relative;
		/* FLEX */
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: var(--space-small);
		/*  */

		padding-top: var(--space-mid);
		padding-bottom: var(--space-mid);
		overflow: hidden;
		height: 30dvh;

		text-box: trim-both cap alphabetic;

		user-select: none;
	}
	.title__extra {
		-webkit-text-stroke: 1.5px var(--color-text);
		-webkit-text-fill-color: transparent;
		font-size: 30vh;
		position: absolute;
		paint-order: stroke fill;

		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		font-family: var(--font-fancy);
		opacity: 15%;
		z-index: -2;
		font-weight: 100;
		letter-spacing: var(--tracking-tighter);

		text-box: trim-both cap alphabetic;
	}

	.title__content {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: var(--space-mid);
	}

	.title::after {
		pointer-events: none;
		content: '';
		position: absolute;
		inset: 0;
		background: var(--smooth-border);
		z-index: 4;
	}

	.title__bg {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		z-index: -3;
		width: 100%;
		height: 100%;
		object-fit: cover;
		animation: pageTitleAni 50s infinite ease-in-out;
		filter: grayscale() brightness(0.3);
		object-position: top;
	}

	:global([color-scheme='light'] .title__bg) {
		filter: grayscale() invert();
		opacity: 0.2;
	}

	@keyframes pageTitleAni {
		0% {
			object-position: top;
		}
		50% {
			object-position: bottom;
		}
		100% {
			object-position: top;
		}
	}

	.title__text {
		font-family: var(--font-fancy);
		color: var(--color-text);
		z-index: 2;
		position: relative;
		filter: drop-shadow(0px 0px 2px currentcolor);
		letter-spacing: var(--tracking-tight);
	}

	:global([color-scheme='light'] .title__deco) {
		filter: invert();
	}

	.tracking-in-expand {
		animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.61, 0.355, 1) both;
	}

	@keyframes tracking-in-expand {
		0% {
			letter-spacing: -0.5em;
			opacity: 0;
		}
		40% {
			opacity: 0.6;
		}
		100% {
			opacity: 1;
		}
	}
</style>
