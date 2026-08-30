<script lang="ts">
	import Accordion from '#lib/components/common/Accordion.svelte';
	import { FAQ_JSON_LD, FAQ_LIST } from '#lib/constants/faq.js';
	import { SECTION_TITLES } from '#lib/constants/labels.js';
	import { serializeSchema } from '#lib/utils/seo.js';
	import SectionTitle from '#lib/sections/layout/SectionTitle.svelte';

	let schema = serializeSchema(FAQ_JSON_LD);
</script>

<svelte:head>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html schema}
</svelte:head>

<section class="border-grid-b w-full relative">
	<SectionTitle sectionTitle={SECTION_TITLES.faq} />

	<div class="w-full relative">
		{#each FAQ_LIST as faq (faq.question)}
			<Accordion accordionSection={faq.question} accordionText={faq.answer} />
		{/each}
	</div>
</section>
