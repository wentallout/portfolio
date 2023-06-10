<script>
	export let pageTitle = 'pageTitle';
	export let decoImageUrl = '';
</script>

<div class="title full-width">
	{#if decoImageUrl != ''}
		<img class="title__deco" src={decoImageUrl} alt="page title" />
	{/if}

	<h1 class="title__text xxxl-text tracking-in-expand">{pageTitle}</h1>
</div>

<style>
	.title__deco {
		z-index: 1;

		position: absolute;
		top: 0;
		left: 50%;
		transform: translateY(-50%) translateX(-50%);
		height: var(--fontSizeXL);
		width: auto;
		opacity: 0.5;
		user-select: none;
	}

	.title {
		position: relative;
		/* FLEX */
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: var(--spaceS);
		/*  */

		margin-bottom: var(--space2XL);
		overflow: visible;
	}

	.title__text {
		font-family: var(--fontFancy);
		color: var(--colorText);
		z-index: 2;
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
