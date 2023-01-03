<script>
	import ExLink from '$lib/components/Common/ExLink.svelte';
</script>

<section class="name">
	<div class="info">
		<h1 class="info__fullname xxl-text rainbow">Nguyen Dang Khoa</h1>

		<div class="info__detail">
			<div class="info__link">
				<ExLink href="https://www.linkedin.com/in/wentallout/">
					<div class="info__desc small-text link">LinkedIn</div>
				</ExLink>
				<ExLink href="tel:+84929066331">
					<div class="info__desc small-text link">+84 929066331</div>
				</ExLink>
			</div>
			<div class="info__desc small-text">
				Born in Ho Chi Minh City, love tinkering my frontends and learning new design techniques.
			</div>
		</div>
	</div>
</section>

<style>
	.name {
		/* FLEX */
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		flex-wrap: wrap;
		/* FLEX END */
	}

	@media (min-width: 768px) {
		.name {
			flex-direction: row;
			justify-content: flex-start;
		}
	}

	.info__fullname {
		font-family: var(--fancy-font);
		margin-bottom: var(--space-xs);
	}

	.info__detail {
		display: flex;
		flex-direction: column;
	}

	.info__desc {
		font-weight: 400;
		color: var(--text-color-low);
	}

	.info__link {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: var(--space-s);
		margin-bottom: var(--space-m);
	}

	.link {
		color: var(--accent-500);
	}

	.link:hover {
		color: var(--accent-300);
	}
</style>
