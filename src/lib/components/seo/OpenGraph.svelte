<script>
	/** @type {{article?: boolean, datePublished: any, lastUpdated: any, facebookAuthorPage?: string, facebookPage?: string, image: any, squareImage: any, metadescription: any, ogLanguage: any, pageTitle: any, siteTitle: any, url: any}} */
	let {
		article = false,
		datePublished,
		lastUpdated,
		facebookAuthorPage = '',
		facebookPage = '',
		image,
		squareImage,
		metadescription,
		ogLanguage,
		pageTitle,
		siteTitle,
		url
	} = $props();
</script>

<svelte:head>
	<meta content={siteTitle} property="og:site_name" />
	<meta content={ogLanguage} property="og:locale" />
	<meta content={url} property="og:url" />
	<meta content={article ? 'article' : 'website'} property="og:type" />
	<meta content={pageTitle} property="og:title" />
	<meta content={metadescription} property="og:description" />
	{#if image}
		<meta content={image.url} property="og:image" />
		<meta content="1200" property="og:image:width" />
		<meta content="627" property="og:image:height" />
		<meta content={image.alt} property="og:image:alt" />
	{/if}
	{#if squareImage}
		<meta content={squareImage.url} property="og:image" />
		<meta content="400" property="og:image:width" />
		<meta content="400" property="og:image:height" />
		<meta content={squareImage.alt} property="og:image:alt" />
	{/if}
	{#if article}
		<meta content={facebookPage} property="article:publisher" />
		<meta content={facebookAuthorPage} property="article:author" />
		<meta content={datePublished} property="article:published_time" />
		<meta content={lastUpdated} property="article:modified_time" />
	{/if}
</svelte:head>
