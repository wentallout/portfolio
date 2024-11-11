<script>
	// ADD IMAGE
	import defaultFeaturedImage from '$lib/assets/images/seo/1344x896.png';
	import defaultOgImage from '$lib/assets/images/seo/1200x627.png';
	import defaultOgSquareImage from '$lib/assets/images/seo/400x400.png';
	import defaultTwitterImage from '$lib/assets/images/seo/800x418.png';
	const defaultAlt = 'cover image';
	//

	import website from '$lib/config.js';
	const {
		author,
		entity,
		facebookAuthorPage,
		facebookPage,
		ogLanguage,
		siteLanguage,
		siteShortTitle,
		siteTitle,
		siteUrl,
		githubPage,
		linkedinProfile,
		telegramUsername,
		tiktokUsername,
		twitterUsername
	} = website;

	import OpenGraph from '$components/seo/OpenGraph.svelte';
	import SchemaOrg from '$components/seo/SchemaOrg.svelte';
	import Twitter from '$components/seo/Twitter.svelte';

	/** @type {{entityMeta?: any, lastUpdated?: any, datePublished?: any, metadescription: string, slug: any, timeToRead?: number, title?: string, article?: boolean, breadcrumbs?: any, featuredImage?: any, ogImage?: any, ogSquareImage?: any, twitterImage?: any}} */
	let {
		entityMeta = null,
		lastUpdated = new Date(),
		datePublished = new Date(),
		metadescription,
		slug,
		timeToRead = 0,
		title = '',
		article = false,
		breadcrumbs = [
			{
				name: 'Home',
				slug: ''
			},
			{
				name: 'Project',
				slug: 'project'
			},
			{
				name: 'Blog',
				slug: 'blog'
			},
			{
				name: 'Resource',
				slug: 'resource'
			},
			{
				name: 'Contact',
				slug: 'contact'
			}
		],
		featuredImage = {
			url: defaultFeaturedImage,
			alt: defaultAlt,
			width: 672,
			height: 448,
			caption: 'Home page'
		},
		ogImage = {
			url: defaultOgImage,
			alt: defaultAlt
		},
		ogSquareImage = {
			url: defaultOgSquareImage,
			alt: defaultAlt
		},
		twitterImage = {
			url: defaultTwitterImage,
			alt: defaultAlt
		}
	} = $props();

	const twitterProps = {
		article,
		author,
		twitterUsername,
		image: twitterImage,
		timeToRead
	};

	const pageTitle = `${title} | ${siteTitle}`;
	const url = `${siteUrl}/${slug}`;

	const openGraphProps = {
		article,
		datePublished,
		lastUpdated,
		image: ogImage,
		squareImage: ogSquareImage,
		metadescription,
		ogLanguage,
		pageTitle,
		siteTitle,
		url,
		...(article ? { datePublished, lastUpdated, facebookPage, facebookAuthorPage } : {})
	};

	const schemaOrgProps = {
		article,
		author,
		breadcrumbs,
		datePublished,
		entity,
		lastUpdated,
		entityMeta,
		featuredImage,
		metadescription,
		siteLanguage,
		siteTitle,
		siteTitleAlt: siteShortTitle,
		siteUrl,
		title: pageTitle,
		url,
		facebookPage,
		githubPage,
		linkedinProfile,
		telegramUsername,
		tiktokUsername,
		twitterUsername
	};
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={metadescription} />
	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
	<link href={url} rel="canonical" />
</svelte:head>
<Twitter {...twitterProps} />
<OpenGraph {...openGraphProps} />
<SchemaOrg {...schemaOrgProps} />
