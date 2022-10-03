<script>
	import Expertise from '$lib/components/Home/Expertise.svelte';
	import ToolUsed from '$lib/components/Home/ToolUsed.svelte';
	import Hero from '$lib/components/Atropos/Hero.svelte';

	import fpt from '$lib/assets/images/home/fpt.png?w=300&h=300&webp';
	import nashtech from '$lib/assets/images/home/nashtech.png?w=300&h=300&webp';

	// ---SEO---
	import SEO from '$lib/components/SEO/SEO.svelte';
	import website from '$lib/config.js';

	import ogSquareImageSrc from '$lib/assets/images/seo/home-open-graph-square.jpg';
	import ogImageSrc from '$lib/assets/images/seo/home-open-graph.jpg';
	import twitterImageSrc from '$lib/assets/images/seo/home-twitter.jpg';
	import featuredImageSrc from '$lib/assets/images/seo/home.jpg';
	import AboutMe from '$lib/components/Home/AboutMe.svelte';

	const { author, siteUrl } = website;

	let title = 'Home';
	const breadcrumbs = [
		{
			name: 'Home',
			slug: ''
		}
	];
	let metadescription = 'Portfolio - UIUX Designer, Web Developer Nguyen Dang Khoa';
	const featuredImageAlt = 'Portfolio of Khoa';
	const featuredImage = {
		url: featuredImageSrc,
		alt: featuredImageAlt,
		width: 672,
		height: 448,
		caption: 'Home page'
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
		datePublished: '2021-07-07T14:19:33.000+0100',
		lastUpdated: '2021-07-07T14:19:33.000+0100',
		breadcrumbs,
		metadescription,
		featuredImage,
		ogImage,
		ogSquareImage,
		twitterImage
	};
	// ---SEO END---
</script>

<svelte:head>
	<title>Khoa's Portfolio</title>
</svelte:head>

<SEO {...seoProps} />
<Hero />

<section class="clients">
	<h2 class="clients__title large-text">I have worked for</h2>
	<div class="clients__logo">
		<img class="logo" loading="lazy" decoding="async" src={fpt} alt="FPT Software" />
		<img class="logo" loading="lazy" decoding="async" src={nashtech} alt="NashTech" />
	</div>
</section>

<Expertise />

<ToolUsed />

<AboutMe />

<style>
	.clients {
		width: 100%;
		display: flex;
		justify-content: center;

		align-items: flex-start;

		flex-direction: column;

		/* Spacing */
		margin-bottom: var(--space-xl);
		gap: var(--space-m);
	}
	.clients__logo {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		flex-wrap: wrap;
		gap: var(--space-m);
	}

	.clients__title {
		font-family: 'Blacker';
	}

	@media (min-width: 768px) {
		.clients__logo {
			flex-direction: row;
		}
	}

	.logo {
		aspect-ratio: 1/1;
		width: 100px;
		height: 100px;

		filter: grayscale();
	}
</style>
