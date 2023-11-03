<script>
	import Hero from '$lib/sections/home/Hero.svelte';
	import Services from '$lib/sections/home/Services.svelte';
	import GetInTouch from '$lib/sections/home/GetInTouch.svelte';
	import FeaturedProject from '$lib/sections/home/Featured.svelte';
	import Clients from '$lib/sections/home/MyClients.svelte';
	import WhatIUse from '$lib/sections/home/WhatIUse.svelte';
	import AboutMe from '$lib/sections/home/AboutMe.svelte';

	const breadcrumbs = [
		{
			name: 'Home',
			slug: ''
		}
	];
	import SEO from '$components/seo/SEO.svelte';
	import Principles from '$lib/sections/home/Principles.svelte';
	import SaosContainer from '$lib/components/common/SaosContainer.svelte';

	const seoProps = {
		breadcrumbs,
		title: 'Home',
		metadescription: 'Welcome to Portfolio of Khoa',
		slug: ''
	};
</script>

<svelte:head>
	<title>Nguyen Dang Khoa - UI/UX Designer</title>
</svelte:head>

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
	<AboutMe />
</SaosContainer>

<SaosContainer animation="fade-in-top 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;">
	<Principles />
</SaosContainer>

<SaosContainer animation="fade-in-top 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;">
	<Clients />
</SaosContainer>
<GetInTouch />
