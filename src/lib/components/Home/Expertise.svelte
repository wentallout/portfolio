<script>
	import UX from '$lib/assets/images/home/ux.svg';
	import designProcess from '$lib/assets/images/home/designProcess.svg';
</script>

<section class="expertise">
	<h2 class="expertise__title large-text">My expertise</h2>
	<div class="expertise__block">
		<div class="block__icon">
			<img src={designProcess} alt="design process" width="50" height="50" />
			<img src={UX} alt="user experience" width="50" height="50" />
		</div>
		<div class="block">
			<h3 class="block__title base-text">Product Design</h3>
			<p class="block__text small-text">
				Experience applying UX frameworks, working in iterative cycles, and quickly testing ideas to
				design products that match user expectations and reach the market faster.
			</p>
		</div>
	</div>
</section>

<style>
	.block__icon {
		display: flex;
		flex-direction: row;
		gap: var(--space-m);
	}

	.expertise {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;

		/* Spacing */
		margin-bottom: var(--space-xl);
		gap: var(--space-m);
	}

	.expertise__block {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		justify-content: center;
		align-items: flex-start;
	}

	.block {
		max-width: 60ch;
	}

	.expertise__title {
		font-family: 'Blacker';
	}
</style>
