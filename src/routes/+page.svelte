<script>
	import SEO from '$components/seo/SEO.svelte';
	import SaosContainer from '$lib/components/common/SaosContainer.svelte';
	import FeaturedProject from '$sections/home/Featured.svelte';
	import GetInTouch from '$sections/home/GetInTouch.svelte';
	import HeroSection from '$sections/home/HeroSection.svelte';
	import MyClientsSection from '$sections/home/MyClientsSection.svelte';
	import PrinciplesSection from '$sections/home/PrinciplesSection.svelte';
	import Services from '$sections/home/ServicesSection.svelte';
	import WhatIUseSection from '$sections/home/WhatIUseSection.svelte';

	const breadcrumbs = [
		{
			name: 'Home',
			slug: ''
		}
	];

	const seoProps = {
		breadcrumbs,
		metadescription: 'Welcome to Portfolio of Khoa',
		slug: '',
		title: 'Home'
	};
</script>

<SEO {...seoProps} />
<HeroSection />

<SaosContainer animation="fade-in-top 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;">
	<Services />
</SaosContainer>

<SaosContainer animation="fade-in-top 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;">
	<FeaturedProject />
</SaosContainer>

<SaosContainer animation="fade-in-top 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;">
	<WhatIUseSection />
</SaosContainer>

<SaosContainer animation="fade-in-top 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;">
	<PrinciplesSection />
</SaosContainer>

<!-- <SaosContainer animation="fade-in-top 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;">
	<MyClientsSection />
</SaosContainer> -->

<GetInTouch />
