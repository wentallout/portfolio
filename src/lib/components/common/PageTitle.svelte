<script>

	import Wall from '$lib/assets/images/common/wall.webp';
	import Breadcrumb from '$components/layout/other/Breadcrumb.svelte';

	/** @type {{pageTitle?: string, decoImageUrl?: any}} */
	let { pageTitle = 'pageTitle', decoImageUrl = Wall } = $props();
</script>

<div class="full-width title">
	<div class="title__extra">
		{pageTitle}
	</div>

	<img class="title__bg" alt="title deco" loading="lazy" src={decoImageUrl} />

	<div class="title__content">
		<h1 class="text-3xl title__text tracking-in-expand">
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
		gap: var(--spaceS);
		/*  */

		padding-top: var(--spaceM);
		padding-bottom: var(--spaceM);
		overflow: hidden;
		height: 30dvh;

		user-select: none;
	}
	.title__extra {
		-webkit-text-stroke: 1.5px var(--colorText);
		-webkit-text-fill-color: transparent;
		font-size: 30vh;
		position: absolute;
		paint-order: stroke fill;

		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		font-family: var(--fontFancy);
		opacity: 10%;
		z-index: -2;
		font-weight: 100;
		letter-spacing: var(--tracking-tighter);
	}

	.title__content {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: var(--spaceM);
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
		font-family: var(--fontFancy);
		color: var(--colorText);
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
