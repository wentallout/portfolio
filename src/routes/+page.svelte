<script>
	import Hero from '$lib/components/Atropos/Hero.svelte';

	import fpt from '$lib/assets/images/companylogo/fpt.png?w=300&h=300&webp';
	import nashtech from '$lib/assets/images/companylogo/nashtech.png?w=300&h=300&webp';

	// ---SEO---
	import SEO from '$lib/components/SEO/SEO.svelte';
	import website from '$lib/config.js';

	import ogSquareImageSrc from '$lib/assets/images/seo/home-open-graph-square.jpg';
	import ogImageSrc from '$lib/assets/images/seo/home-open-graph.jpg';
	import twitterImageSrc from '$lib/assets/images/seo/home-twitter.jpg';
	import featuredImageSrc from '$lib/assets/images/seo/home.jpg';

	export let data;
	const { posts } = data;

	const { author, siteUrl } = website;

	let title = 'Home';
	const breadcrumbs = [
		{
			name: 'Home',
			slug: '',
		},
	];
	let metadescription = 'Portfolio - UIUX Designer, Web Developer Nguyen Dang Khoa';
	const featuredImageAlt = 'Portfolio of Khoa';
	const featuredImage = {
		url: featuredImageSrc,
		alt: featuredImageAlt,
		width: 672,
		height: 448,
		caption: 'Home page',
	};
	const ogImage = {
		url: ogImageSrc,
		alt: featuredImageAlt,
	};
	const ogSquareImage = {
		url: ogSquareImageSrc,
		alt: featuredImageAlt,
	};

	const twitterImage = {
		url: twitterImageSrc,
		alt: featuredImageAlt,
	};
	const entityMeta = {
		url: `${siteUrl}/`,
		faviconWidth: 512,
		faviconHeight: 512,
		caption: author,
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
		twitterImage,
	};
	// ---SEO END---
</script>

<svelte:head>
	<title>Khoa's Portfolio</title>
</svelte:head>

<SEO {...seoProps} />
<Hero />

<div class="past-clients">
	<p class="past-clients__text base-text">I have worked for</p>
	<div class="past-clients__logo">
		<img loading="lazy" decoding="async" class="logo" src={fpt} alt="FPT Software" />
		<img loading="lazy" decoding="async" class="logo" src={nashtech} alt="NashTech" />
	</div>
</div>

<div />

<style>
	.past-clients {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;

		flex-direction: column;

		/* Spacing */
		margin-bottom: var(--space-l);
	}
	.past-clients__logo {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		flex-wrap: wrap;
	}
	@media (min-width: 768px) {
		.past-clients__logo {
			flex-direction: row;
		}
	}

	.logo {
		width: 200px;
		height: 200px;
		width: auto;
	}

	@media (min-width: 768px) {
		.logo {
			width: 300px;
			height: 300px;
		}
	}
</style>
