<script>
	import Hero from '$lib/components/Home/Hero/Hero.svelte';
	import GetInTouch from '$components/Home/GetInTouch.svelte';
	import FeaturedProject from '$components/Home/Featured.svelte';
	import Clients from '$components/Home/MyClients.svelte';
	import WhatIUse from '$components/Home/WhatIUse.svelte';
	import AboutMe from '$components/Home/AboutMe.svelte';

	const breadcrumbs = [
		{
			name: 'Home',
			slug: ''
		}
	];
	import SEO from '$components/SEO/SEO.svelte';
	import Principles from '$lib/components/Home/Principles.svelte';

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
<FeaturedProject />
<WhatIUse />
<AboutMe />
<Principles />
<Clients />
<GetInTouch />
