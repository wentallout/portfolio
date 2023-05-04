<script>
	import Hero from '$lib/components/Home/Hero.svelte';
	import GetInTouch from '$lib/components/Home/GetInTouch.svelte';
	import FeaturedProject from '$lib/components/Home/Featured.svelte';
	import Clients from '$lib/components/Home/MyClients.svelte';
	import WhatIUse from '$lib/components/Home/WhatIUse.svelte';
	import AboutMe from '$lib/components/Home/AboutMe.svelte';

	const breadcrumbs = [
		{
			name: 'Home',
			slug: ''
		}
	];
	import SEO from '$lib/components/SEO/SEO.svelte';

	const seoProps = {
		breadcrumbs,
		title: 'Home',
		metadescription: 'Welcome to Portfolio of Khoa',
		slug: ''
	};

	export const prerender = true;
</script>

<SEO {...seoProps} />
<Hero />
<FeaturedProject />
<WhatIUse />
<AboutMe />
<Clients />
<GetInTouch />
