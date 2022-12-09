<section>
	<div class="expertise">
		<h2 class="expertise__title xl-text">My expertise</h2>
		<div class="expertise__block">
			<div class="block">
				<h3 class="block__title base-text">Product Design</h3>
				<p class="block__text small-text">
					Experience using UX frameworks, working in iterative cycles, and quickly testing ideas to
					design products that meet user expectations.
				</p>
			</div>
		</div>
	</div>
</section>

<style>
	.expertise {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		gap: var(--space-m);
	}

	.block__title {
		font-weight: 600;
		color: var(--primary-600);
	}

	.block__text {
		color: var(--neutral-800);
		max-width: 60ch;
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
		padding: var(--space-l);
		box-shadow: var(--box-shadow);
		border-radius: var(--border-radius-light);
	}

	.expertise__title {
		font-family: var(--fancy-font);
		font-weight: 600;
	}
</style>
