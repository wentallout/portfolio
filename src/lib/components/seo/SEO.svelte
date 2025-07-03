<script>
	import website from '$lib/config.js';
	const {
		author,

		facebookAuthorPage,
		facebookPage,
		githubPage,
		linkedinProfile,
		ogLanguage,
		siteLanguage,
		siteShortTitle,
		siteTitle,
		siteUrl,
		telegramUsername,
		tiktokUsername,
		twitterUsername
	} = website;

	import defaultOgImage from '$lib/assets/images/seo/1200x627.png';
	import defaultFeaturedImage from '$lib/assets/images/seo/1344x896.png';
	import defaultOgSquareImage from '$lib/assets/images/seo/400x400.png';
	import defaultTwitterImage from '$lib/assets/images/seo/800x418.png';
	const defaultAlt = 'cover image';

	/** @type {{entityMeta?: any, lastUpdated?: any, datePublished?: any, metadescription: string, slug: any, timeToRead?: number, title?: string, article?: boolean, breadcrumbs?: any, featuredImage?: any, ogImage?: any, ogSquareImage?: any, twitterImage?: any, path?: string}} */
	let {
		article = false,
		slug,
		breadcrumbs = [
			{
				name: 'Home',
				slug: ''
			},
			{
				name: 'Projects',
				slug: 'projects'
			},
			{
				name: 'Blogs',
				slug: 'blogs'
			},
			{
				name: 'Contact',
				slug: 'contact'
			}
		],
		datePublished = new Date(),
		entityMeta = null,
		featuredImage = {
			alt: defaultAlt,
			caption: 'Home page',
			height: 448,
			url: defaultFeaturedImage,
			width: 672
		},
		lastUpdated = new Date(),
		metadescription,
		ogImage = {
			alt: defaultAlt,
			url: defaultOgImage
		},
		ogSquareImage = {
			alt: defaultAlt,
			url: defaultOgSquareImage
		},
		path = '', // Add path to props with default empty string
		timeToRead = 0,
		title = '',
		twitterImage = {
			alt: defaultAlt,
			url: defaultTwitterImage
		}
	} = $props();

	import OpenGraph from '$components/seo/OpenGraph.svelte';
	import SchemaOrg from '$components/seo/SchemaOrg.svelte';
	import Twitter from '$components/seo/Twitter.svelte';

	const twitterProps = {
		article,
		author,
		image: twitterImage,
		timeToRead,
		twitterUsername
	};

	const pageTitle = `${title} | ${siteTitle}`;
	const url = `${siteUrl}/${slug}`;

	const openGraphProps = {
		article,
		datePublished,
		image: ogImage,
		lastUpdated,
		metadescription,
		ogLanguage,
		pageTitle,
		siteTitle,
		squareImage: ogSquareImage,
		url,
		...(article ? { datePublished, facebookAuthorPage, facebookPage, lastUpdated } : {})
	};

	const schemaOrgProps = {
		article,
		author,
		breadcrumbs,
		datePublished,

		entityMeta,
		facebookPage,
		featuredImage,
		githubPage,
		lastUpdated,
		linkedinProfile,
		metadescription,
		siteLanguage,
		siteTitle,
		siteTitleAlt: siteShortTitle,
		siteUrl,
		telegramUsername,
		tiktokUsername,
		title: pageTitle,
		twitterUsername,
		url
	};
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={metadescription} />
	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
	<link href={url} rel="canonical" />

	<meta content={title} property="og:title" />

	<meta content="1200" property="og:image:width" />
	<meta content="630" property="og:image:height" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
</svelte:head>
<Twitter {...twitterProps} />
<OpenGraph {...openGraphProps} />
<SchemaOrg {...schemaOrgProps} />
