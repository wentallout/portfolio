<script>
	import HeroVisual from '$lib/assets/arts/HeroVisual.svelte';
	import Button from '$components/button/Button.svelte';
	import * as m from '$paraglide/messages';
</script>

<section>
	<div class="full-width">
		<div class="hero pad">
			<div class="hero__block">
				<div class="hero__name text-2xl">
					Khoa is a
					<div class="focus">Designer</div>
					<div class="focus">+ Developer</div>
				</div>
				<div class="hero__text text-base">
					{m.heroText()}
				</div>

				<div class="hero__btn">
					<a href="/project">
						<Button
							backgroundColor="var(--colorPrimary)"
							glowColor="var(--colorPrimary)"
							label="View Portfolio"
							labelColor="var(--colorBlack)" />
					</a>

					<a href="/contact">
						<Button
							backgroundColor="var(--colorBgLayout)"
							borderColor="var(--colorText)"
							label="Contact"
							labelColor="var(--colorText)"
							shadowColor="var(--colorTextSecondary)" />
					</a>
				</div>
			</div>
		</div>
		<HeroVisual />
	</div>
</section>

<style>
	.full-width {
		position: relative;
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
		margin-bottom: var(--spaceS);
		text-wrap: balance;
		max-width: 40ch;
	}
	.hero__btn {
		margin-top: var(--spaceL);
		width: 100%;
		display: flex;
		flex-direction: row;
		gap: var(--spaceS);
		flex-wrap: wrap;
	}
</style>
