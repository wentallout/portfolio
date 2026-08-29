<script>
	import SEO from '$components/seo/SEO.svelte';
	import { META_DESCRIPTIONS, PAGE_TITLES } from '$lib/constants/labels';
	import FeaturedProject from '$sections/home/Featured.svelte';
	import GetInTouch from '$sections/home/GetInTouch.svelte';
	import HeroSection from '$sections/home/HeroSection.svelte';
	import Services from '$sections/home/ServicesSection.svelte';
	import WhatIUseSection from '$sections/home/WhatIUseSection.svelte';

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




