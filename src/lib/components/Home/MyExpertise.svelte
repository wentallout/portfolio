<section>
	<div class="expertise">
		<h2 class="expertise__title xl-text">My expertise</h2>
		<div class="expertise__block">
			<div class="block">
				<h3 class="block__title base-text">Product Design</h3>
				<p class="block__text small-text">
					I have experience using UX frameworks and working in iterative cycles to design products
					that meet user expectations. I also know how to quickly test ideas to make sure they're on
					the right track.
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
	}

	.block__text {
		max-width: 60ch;
		color: var(--text-color-low);
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
		background-color: var(--bg);
		border-radius: var(--border-radius-light);
	}

	.expertise__title {
		font-family: var(--fancy-font);
		font-weight: 600;
		color: var(--primary-500);
	}
</style>
