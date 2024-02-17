<script>
	export let pageTitle = 'pageTitle';

	import Wall from '$lib/assets/images/common/wall.jpg';
	import Breadcrumb from '$components/layout/other/Breadcrumb.svelte';

	export let decoImageUrl = Wall;

	import StarFour from '~icons/ph/star-four';
</script>

<div class="full-width title">
	<div class="title__extra">
		{pageTitle}
	</div>

	<img class="title__bg" alt="title deco" loading="lazy" src={decoImageUrl} />

	<div class="title__content">
		<StarFour height="40" width="40" />
		<h1 class="text-3xl title__text tracking-in-expand">
			{pageTitle}
		</h1>
		<StarFour height="40" width="40" />
	</div>
</div>
<Breadcrumb />

<style>
	.title__extra {
		-webkit-text-stroke: 2px var(--colorText);
		-webkit-text-fill-color: transparent;
		font-size: 30vh;
		position: absolute;
		paint-order: stroke fill;

		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		font-family: var(--fontFancy);
		opacity: 15%;
		z-index: -2;
	}

	.title__content {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 24px;
	}

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
		height: 300px;

		user-select: none;
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
		animation: pageTitleAni 50s linear;
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
