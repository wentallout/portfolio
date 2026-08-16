<script>
	import SEO from '$components/seo/SEO.svelte';
	import FeaturedProject from '$sections/home/Featured.svelte';
	import GetInTouch from '$sections/home/GetInTouch.svelte';
	import HeroSection from '$sections/home/HeroSection.svelte';
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
<FeaturedProject />
<Services />
<WhatIUseSection />
<GetInTouch />




