<script>
	function generateEntityHash(entityInput) {
		const entity = String(entityInput || ''); // Ensure input is a string, default to empty if null/undefined
		let hash = 0;

		if (entity.length === 0) {
			return hash;
		}

		for (let i = 0; i < entity.length; i++) {
			const char = entity.charCodeAt(i);
			hash = (hash << 5) - hash + char;
			hash |= 0; // Convert to 32bit integer
		}

		return hash.toString();
	}

	/** @type {{article?: boolean, author: any, breadcrumbs: { name: string; slug: string }[], datePublished: any, entity: any, lastUpdated: any, featuredImage: any, metadescription: any, siteLanguage: any, siteTitle: any, siteTitleAlt: any, siteUrl: string, title: any, url: any, facebookPage: any, githubPage: any, linkedinProfile: any, telegramUsername: any, tiktokUsername: any, twitterUsername: any, entityMeta?: { url: string; faviconWidth: number; faviconHeight: number } | null}} */
	let {
		article = false,
		author,
		breadcrumbs,
		datePublished,
		entity,
		entityMeta = null,
		facebookPage,
		featuredImage,
		githubPage,
		lastUpdated,
		linkedinProfile,
		metadescription,
		siteLanguage,
		siteTitle,
		siteTitleAlt,
		siteUrl,
		telegramUsername,
		tiktokUsername,
		title,
		twitterUsername,
		url
	} = $props();

	const entityHash = generateEntityHash(author);

	const schemaOrgEntity =
		entityMeta !== null
			? {
					'@id': `${siteUrl}/#/schema/person/${entityHash}`,
					'@type': ['Person', 'Organization'],
					image: {
						'@id': `${siteUrl}/#personlogo`,
						'@type': 'ImageObject',
						caption: author,
						height: entityMeta.faviconHeight,
						inLanguage: siteLanguage,
						url: entityMeta.url,
						width: entityMeta.faviconWidth
					},
					logo: {
						'@id': `${siteUrl}/#personlogo`
					},
					name: author,
					sameAs: [
						`https://twitter.com/${twitterUsername}`,
						`https://github.com/${githubPage}`,
						`https://www.tiktok.com/${tiktokUsername}`,
						`https://t.me/${telegramUsername}`,
						`https://uk.linkedin.com/in/${linkedinProfile}`,
						facebookPage
					]
				}
			: null;

	const schemaOrgWebsite = {
		'@id': `${siteUrl}/#website`,
		'@type': 'WebSite',
		description: siteTitleAlt,
		inLanguage: siteLanguage,
		name: siteTitle,
		potentialAction: [
			{
				'@type': 'SearchAction',
				'query-input': 'required name=search_term_string',
				target: `${siteUrl}/?s={search_term_string}`
			}
		],
		publisher: {
			'@id': `${siteUrl}/#/schema/person/${entityHash}`
		},
		url: siteUrl
	};

	const schemaOrgImageObject = {
		'@id': `${url}#primaryimage`,
		'@type': 'ImageObject',
		caption: featuredImage.caption,
		contentUrl: featuredImage.url,
		height: featuredImage.height,
		inLanguage: siteLanguage,
		url: featuredImage.url,
		width: featuredImage.width
	};

	const schemaOrgBreadcrumbList = {
		'@id': `${url}#breadcrumb`,
		'@type': 'BreadcrumbList',
		itemListElement: breadcrumbs.map((element, index) => ({
			'@type': 'ListItem',
			item: {
				'@id': `${siteUrl}/${element.slug}`,
				'@type': 'WebPage',
				name: element.name,
				url: `${siteUrl}/${element.slug}`
			},
			position: index + 1
		}))
	};

	const schemaOrgWebPage = {
		'@id': `${url}#webpage`,
		'@type': 'WebPage',
		author: {
			'@id': `${siteUrl}/#/schema/person/${entityHash}`
		},
		breadcrumb: {
			'@id': `${url}#breadcrumb`
		},
		dateModified: lastUpdated,
		datePublished,
		description: metadescription,
		inLanguage: siteLanguage,
		isPartOf: {
			'@id': `${siteUrl}/#website`
		},
		name: title,
		potentialAction: [
			{
				'@type': 'ReadAction',
				target: [url]
			}
		],
		primaryImageOfPage: {
			'@id': `${url}#primaryimage`
		},
		url
	};

	let schemaOrgArticle = null;
	if (article) {
		schemaOrgArticle = {
			'@id': `${url}#article`,
			'@type': 'Article',
			articleSection: ['blog'],
			author: {
				'@id': `${siteUrl}/#/schema/person/${entityHash}`
			},
			dateModified: lastUpdated,
			datePublished,
			headline: title,
			image: {
				'@id': `${url}#primaryimage`
			},
			inLanguage: siteLanguage,
			isPartOf: {
				'@id': `${url}#webpage`
			},
			mainEntityOfPage: {
				'@id': `${url}#webpage`
			},
			publisher: {
				'@id': `${siteUrl}/#/schema/person/${entityHash}`
			}
		};
	}

	const schemaOrgPublisher = {
		'@id': `${siteUrl}/#/schema/person/${entityHash}`,
		'@type': ['Person', 'Organization'],
		image: {
			'@id': `${siteUrl}/#personlogo`,
			'@type': 'ImageObject',
			caption: entity,
			contentUrl: `${siteUrl}/images/brand-logo.svg`,
			height: 512,
			inLanguage: siteLanguage,
			url: `${siteUrl}/images/brand-logo.svg`,
			width: 512
		},
		logo: {
			'@id': `${siteUrl}/#personlogo`
		},
		name: entity,
		sameAs: [
			`https://twitter.com/${twitterUsername}`,
			`https://github.com/${githubPage}`,
			`https://www.tiktok.com/${tiktokUsername}`,
			`https://t.me/${telegramUsername}`,
			`https://linkedin.com/in/${linkedinProfile}`,
			facebookPage
		]
	};

	const schemaOrgArray = [
		schemaOrgEntity,
		schemaOrgWebsite,
		schemaOrgImageObject,
		schemaOrgWebPage,
		schemaOrgBreadcrumbList,
		...(article ? [schemaOrgArticle] : []),
		schemaOrgPublisher
	].filter((item) => item !== null && item !== undefined); // Filter out any null or undefined entities from the graph

	const schemaOrgObject = {
		'@context': 'https://schema.org',
		'@graph': schemaOrgArray
	};
	const jsonLdString = JSON.stringify(schemaOrgObject);
</script>

<svelte:head>
	<script type="application/ld+json">
		{jsonLdString}
	</script>
</svelte:head>
