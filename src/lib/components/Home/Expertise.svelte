<script>
	import UX from '$lib/assets/images/home/ux.svg';
	import designProcess from '$lib/assets/images/home/designProcess.svg';
</script>

<section>
	<div class="expertise">
		<h2 class="expertise__title xl-text">My expertise</h2>
		<div class="expertise__block">
			<div class="block__icon">
				<img src={designProcess} alt="design process" width="100" height="100" />
				<img src={UX} alt="user experience" width="100" height="100" />
			</div>
			<div class="block">
				<h3 class="block__title base-text">Product Design</h3>
				<p class="block__text small-text">
					Experience applying UX frameworks, working in iterative cycles, and quickly testing ideas
					to design products that match user expectations.
				</p>
			</div>
		</div>
	</div>
</section>

<style>
	section {
		padding-bottom: var(--space-2xl);
	}
	.block__icon {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: var(--space-m);
	}

	.block__title {
		font-weight: 500;
	}

	.block__text {
		color: var(--neutral-700);
		max-width: 60ch;
	}

	.expertise {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;

		gap: var(--space-m);
	}

	.expertise__block {
		justify-content: flex-start;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		gap: var(--space-l);
	}

	.block {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
	}

	.expertise__title {
		font-family: 'Recoleta Alt';
		font-weight: 600;
	}
</style>
