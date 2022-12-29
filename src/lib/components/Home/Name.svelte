<script>
	import ExLink from '$lib/components/Common/ExLink.svelte';
</script>

<section class="name">
	<div class="info">
		<h1 class="info__fullname xxl-text">Nguyen Dang Khoa</h1>

		<div class="info__detail">
			<div class="info__link">
				<ExLink href="https://www.linkedin.com/in/wentallout/">
					<div class="info__desc small-text link">linkedin.com/in/wentallout</div>
				</ExLink>
				<ExLink href="tel:+84929066331">
					<div class="info__desc small-text link">+84 929066331</div>
				</ExLink>
			</div>
			<div class="info__desc small-text">
				23 y.o, love tinkering frontends and learning new design techniques
			</div>
			<div class="small-text">
				<div class="info__desc">📱 UI/UX Designer (Figma)</div>
				<div class="info__desc">👨‍💻 Web Developer (JS/React/Svelte/.NET)</div>
			</div>
		</div>
	</div>
</section>

<style>
	.name {
		/* FLEX */
		display: flex;
		justify-content: center;
		align-items: flex-start;
		flex-direction: column;
		flex-wrap: wrap;
		/* FLEX END */

		gap: var(--space-l);
		background: var(--bg);
		border-radius: var(--border-radius-light);
		padding: var(--space-l);
		box-shadow: var(--box-shadow);
	}

	@media (min-width: 768px) {
		.name {
			flex-direction: row;
			justify-content: flex-start;
		}
	}

	.info__fullname {
		font-family: var(--fancy-font);
		margin-bottom: var(--space-s);
	}

	.info__detail {
		display: flex;
		flex-direction: column;
		gap: var(--space-s);
	}

	.info__desc {
		font-weight: 400;
		color: var(--text);
	}

	.portrait {
		object-fit: cover;
		height: 100%;
		filter: grayscale(100);
	}

	.link {
		color: var(--accent-500);
	}

	.link:hover {
		color: var(--accent-300);
	}
</style>
