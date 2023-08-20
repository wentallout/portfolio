<script>
	import HeroVisual from '$lib/components/Home/Hero/HeroVisual.svelte';
	import Button from '$components/Button/Button.svelte';
</script>

<section>
	<div class="full-width">
		<div class="hero global-container">
			<div class="hero__block">
				<div class="hero__name text-2xl">
					Khoa is a
					<div class="focus">UI/UX Designer</div>
				</div>
				<div class="hero__text text-small">
					I create practical and user-friendly products that bring real value and enhance people's
					lives.

					<a class="hero__link link" href="/about">
						<span>More about me</span>
					</a>
				</div>

				<div class="hero__btn">
					<a href="/project">
						<Button
							label="See All Projects"
							labelColor="#000"
							backgroundColor="var(--colorPrimary)"
							glowColor="var(--colorPrimary)" />
					</a>

					<a href="/contact">
						<Button
							label="Contact"
							labelColor="var(--colorText)"
							backgroundColor="transparent"
							borderColor="var(--colorText)" />
					</a>
				</div>
			</div>

			<HeroVisual />
		</div>
	</div>
</section>

<style>
	.hero__link {
		display: block;
		color: var(--colorPrimary);
	}

	.hero__btn a {
		display: contents;
	}

	.hero {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		position: relative;
		overflow: visible;
		align-items: center;
	}

	.hero__block {
		display: flex;

		padding-top: var(--space3XL);
		padding-bottom: var(--space3XL);

		flex-direction: column;
		position: relative;
		width: 100%;
	}

	.hero__name {
		font-family: var(--fontFancy);
		margin-bottom: var(--spaceL);
	}

	.focus {
		display: block;
		color: var(--colorPrimary);
	}

	.hero__text {
		color: var(--colorTextSecondary);
		margin-bottom: var(--spaceS);
		text-wrap: balance;
		max-width: 40ch;
	}
	.hero__btn {
		margin-top: var(--spaceL);
		width: 100%;

		display: flex;
		gap: var(--spaceS);
		flex-wrap: wrap;
	}
</style>
