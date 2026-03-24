<script>
	import {
		author,
		defaultAlt,
		defaultOgImage,
		defaultOgSquareImage,
		defaultTwitterImage,
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
	} from '$lib/constants/personal';

	/** @type {{article?: boolean, breadcrumbs?: any, datePublished?: string, entityMeta?: any, featuredImage?: any, lastUpdated?: string, metadescription?: string, ogImage?: any, ogSquareImage?: any, path?: string, slug?: string, timeToRead?: number, title?: string, twitterImage?: any}} */
	let {
		article = false,
		breadcrumbs = [],
		datePublished = '',
		entityMeta = null,
		featuredImage = {
			url: defaultOgImage,
			caption: defaultAlt,
			width: 1200,
			height: 630
		},
		lastUpdated = '',
		metadescription = '',
		ogImage = {
			alt: defaultAlt,
			url: defaultOgImage
		},
		ogSquareImage = {
			alt: defaultAlt,
			url: defaultOgSquareImage
		},
		path = '',
		slug = '',
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

	const twitterProps = $derived({
		article,
		author,
		image: twitterImage,
		timeToRead,
		twitterUsername
	});

	const pageTitle = $derived(`${title} | ${siteTitle}`);
	const url = $derived(new URL(path || `/${slug}`, siteUrl).href);

	const openGraphProps = $derived({
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
	});

	const schemaOrgProps = $derived({
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
	});
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
