<script lang="ts">
	import SEO from '#lib/components/seo/SEO.svelte';
	import { META_DESCRIPTIONS, PAGE_TITLES } from '#lib/constants/labels.js';
	import FeaturedProject from '#lib/sections/home/Featured.svelte';
	import GetInTouch from '#lib/sections/home/GetInTouch.svelte';
	import HeroSection from '#lib/sections/home/HeroSection.svelte';
	import Services from '#lib/sections/home/ServicesSection.svelte';
	import WhatIUseSection from '#lib/sections/home/WhatIUseSection.svelte';

	const breadcrumbs = [
		{
			name: PAGE_TITLES.home,
			slug: ''
		}
	];

	const seoProps = {
		breadcrumbs,
		metadescription: META_DESCRIPTIONS.home,
		slug: '',
		title: PAGE_TITLES.home
	};
</script>

<SEO {...seoProps} />
<HeroSection />
<FeaturedProject />
<Services />
<WhatIUseSection />
<GetInTouch />
