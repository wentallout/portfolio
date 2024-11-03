<script>
	import Hero from '$sections/home/Hero.svelte';
	import Services from '$sections/home/Services.svelte';
	import GetInTouch from '$sections/home/GetInTouch.svelte';
	import FeaturedProject from '$sections/home/Featured.svelte';
	import Clients from '$sections/home/MyClients.svelte';
	import WhatIUse from '$sections/home/WhatIUse.svelte';
	import SEO from '$components/seo/SEO.svelte';
	import Principles from '$sections/home/Principles.svelte';
	import SaosContainer from '$lib/components/common/SaosContainer.svelte';

	const breadcrumbs = [
		{
			name: 'Home',
			slug: ''
		}
	];

	const seoProps = {
		breadcrumbs,
		title: 'Home',
		metadescription: 'Welcome to Portfolio of Khoa',
		slug: ''
	};
</script>

<SEO {...seoProps} />
<Hero />

<SaosContainer animation="fade-in-top 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;">
	<Services />
</SaosContainer>

<SaosContainer animation="fade-in-top 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;">
	<FeaturedProject />
</SaosContainer>

<SaosContainer animation="fade-in-top 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;">
	<WhatIUse />
</SaosContainer>

<SaosContainer animation="fade-in-top 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;">
	<Principles />
</SaosContainer>

<SaosContainer animation="fade-in-top 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;">
	<Clients />
</SaosContainer>
<GetInTouch />
