<script lang="ts">
	import Accordion from '$components/common/Accordion.svelte';
	import { Question } from '$lib/assets/icons/icons';
	import { FAQ_JSON_LD, FAQ_LIST } from '$lib/constants/faq';
	import { SECTION_TITLES } from '$lib/constants/labels';
	import { serializeSchema } from '$lib/utils/seo';
	import SectionTitle from '$sections/layout/SectionTitle.svelte';

	let schema = serializeSchema(FAQ_JSON_LD);
</script>

<svelte:head>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html schema}
</svelte:head>

<section class="border-grid-b w-full relative">
	<SectionTitle sectionTitle={SECTION_TITLES.faq}>
		{#snippet children({ sectionIcon })}
			<Question {...sectionIcon} />
		{/snippet}
	</SectionTitle>

	<div class="w-full relative">
		{#each FAQ_LIST as faq (faq.question)}
			<Accordion accordionSection={faq.question} accordionText={faq.answer} />
		{/each}
	</div>
</section>


