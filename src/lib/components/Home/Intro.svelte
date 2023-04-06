<script>
	import Button from '$lib/components/Button/Button.svelte';

	let introEle;
</script>

<section bind:this={introEle} class="intro-container full-width">
	<div class="intro">
		<div class="intro__block">
			<div class="name xxl-text">
				Khoa is a <span class="focus">UI/UX Designer</span>
			</div>
			<div class="mission small-text">
				I create practical and user-friendly products that bring real value and enhance people's
				lives.
			</div>

			<div class="intro__btn">
				<a href="/project">
					<Button
						label="See Full Portfolio"
						labelColor="var(--bg-500)"
						backgroundColor="var(--primary-500)" />
				</a>

				<a href="/contact">
					<Button
						label="Contact"
						labelColor="var(--text-color)"
						backgroundColor="var(--bg-400)"
						borderColor="var(--text-color)" />
				</a>
			</div>
		</div>
	</div>
</section>

<style>
	.intro-container {
		user-select: none;
	}

	.intro {
		display: flex;
		flex-direction: column;

		/* background-color: var(--bg-400); */
		position: relative;
	}

	.intro__block {
		display: flex;
		padding: var(--space-3xl) var(--page-padding);
		flex-direction: column;
		position: relative;
	}

	.name {
		font-family: 'Fancy';
		margin-bottom: var(--space-l);
	}

	.focus {
		color: var(--primary-500);
	}

	.mission {
		color: var(--text-color-low);
		max-width: var(--text-width);
		margin-bottom: var(--space-s);
	}
	.intro__btn {
		margin-top: var(--space-l);
		display: flex;
		justify-content: flex-start;
		align-items: center;
		width: 100%;
		gap: var(--space-s);
		flex-wrap: wrap;
	}
</style>
