<script lang="ts">
	import Accordion from '$components/common/Accordion.svelte';
	import QuestionArt from '$lib/assets/arts/FaqArt.svelte';
	import { Question } from '$lib/assets/icons/icons';
	import { FAQ_JSON_LD, FAQ_LIST } from '$lib/constants/faq';
	import { serializeSchema } from '$lib/utils/seo';
	import SectionTitle from '$sections/layout/SectionTitle.svelte';

	let schema = serializeSchema(FAQ_JSON_LD);
</script>

<svelte:head>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html schema}
</svelte:head>

<section>
	<SectionTitle sectionTitle="Frequently Asked Questions">
		{#snippet children({ sectionIcon })}
			<Question {...sectionIcon} />
		{/snippet}
	</SectionTitle>

	<div class="faq">
		<div class="faq__list">
			{#each FAQ_LIST as faq (faq.question)}
				<Accordion accordionSection={faq.question} accordionText={faq.answer} />
			{/each}
		</div>

		<div class="faq__art">
			<QuestionArt />
		</div>
	</div>
</section>

<style>
	.faq {
		display: grid;
		gap: var(--space-xl);
		align-items: center;
		grid-template-columns: 1fr;
		align-items: start;
	}

	@media (min-width: 768px) {
		.faq {
			grid-template-columns: 1fr 1fr;
		}
	}

	.faq__art {
		max-width: 100dvw;
		overflow: hidden;
	}

	.faq__list {
		display: flex;
		flex-direction: column;
		gap: var(--space-mid);
	}
</style>
