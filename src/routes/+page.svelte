<script>
	import Hero from '$lib/components/Home/Hero.svelte';
	import Clients from '$lib/components/Home/Clients.svelte';
	import Expertise from '$lib/components/Home/Expertise.svelte';
	import ToolUsed from '$lib/components/Home/ToolUsed.svelte';
	import AboutMe from '$lib/components/Home/AboutMe.svelte';

	// ---SEO---
	import SEO from '$lib/components/SEO/SEO.svelte';
	import website from '$lib/config.js';
	import ogSquareImageSrc from '$lib/assets/images/seo/home-open-graph-square.jpg';
	import ogImageSrc from '$lib/assets/images/seo/home-open-graph.jpg';
	import twitterImageSrc from '$lib/assets/images/seo/home-twitter.jpg';
	import featuredImageSrc from '$lib/assets/images/seo/home.jpg';

	const { author, siteUrl } = website;

	let title = 'Home';
	const breadcrumbs = [
		{
			name: 'Home',
			slug: ''
		}
	];
	let metadescription = 'Nguyen Dang Khoa - UI UX Designer + Web Developer. Personal Portfolio.';
	const featuredImageAlt = 'Nguyen Dang Khoa - UI UX Designer + Web Developer';
	const featuredImage = {
		url: featuredImageSrc,
		alt: featuredImageAlt,
		width: 672,
		height: 448,
		caption: 'HomePage'
	};
	const ogImage = {
		url: ogImageSrc,
		alt: featuredImageAlt
	};
	const ogSquareImage = {
		url: ogSquareImageSrc,
		alt: featuredImageAlt
	};

	const twitterImage = {
		url: twitterImageSrc,
		alt: featuredImageAlt
	};
	const entityMeta = {
		url: `${siteUrl}/`,
		faviconWidth: 512,
		faviconHeight: 512,
		caption: author
	};
	const seoProps = {
		title,
		slug: '',
		entityMeta,
		datePublished: '2077-07-07T14:19:33.000+0100',
		lastUpdated: '2077-07-07T14:19:33.000+0100',
		breadcrumbs,
		metadescription,
		featuredImage,
		ogImage,
		ogSquareImage,
		twitterImage
	};
</script>

<!-- <svelte:head>
	<title>Khoa's Portfolio</title>
</svelte:head> -->

<SEO {...seoProps} />

<Hero />
<Clients />
<Expertise />
<ToolUsed />
<AboutMe />
