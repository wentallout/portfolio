<script>
	export let pageTitle = 'pageTitle';
</script>

<div class="title">
	<h1 class="title__text xxxl-text rainbow">{pageTitle}</h1>
</div>

<style>
	.title {
		/* FLEX */
		display: flex;
		justify-content: center;
		align-items: center;
		/*  */
		position: relative;
		margin-bottom: var(--space-3xl);

		overflow: hidden;
		width: 100%;

		background-color: transparent;

		background-image: linear-gradient(135deg, var(--black-500) 25%, transparent 25%),
			linear-gradient(225deg, var(--black-500) 25%, transparent 25%),
			linear-gradient(45deg, var(--black-500) 25%, transparent 25%),
			linear-gradient(315deg, var(--black-500) 25%, var(--black-400) 25%);
		background-position: 40px 0, 40px 0, 0 0, 0 0;
		background-size: 40px 40px;
		background-repeat: repeat;
	}

	.title:before {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;

		background: linear-gradient(
			0deg,
			var(--black-500) 0%,
			rgba(18, 18, 18, 0.5) 12%,
			rgba(18, 18, 18, 0.1) 30%,
			rgba(18, 18, 18, 0) 40%
		);
	}

	.title__text {
		font-family: var(--fancy-font);
		padding-top: var(--space-xl);
		padding-bottom: var(--space-xl);
		color: var(--text-color);
	}
</style>
