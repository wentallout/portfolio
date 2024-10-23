<script>

	

	

	function generateEntityHash(entity) {
		let hash = 0;

		if (entity.length === 0) {
			return hash;
		}

		for (let i = 0; i < entity.length; i++) {
			const char = entity.charCodeAt(i);
			hash = (hash << 5) - hash + char;
			hash |= 0;
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
		lastUpdated,
		featuredImage,
		metadescription,
		siteLanguage,
		siteTitle,
		siteTitleAlt,
		siteUrl,
		title,
		url,
		facebookPage,
		githubPage,
		linkedinProfile,
		telegramUsername,
		tiktokUsername,
		twitterUsername,
		entityMeta = null
	} = $props();

	const entityHash = generateEntityHash(author);

	const schemaOrgEntity =
		entityMeta !== null
			? {
					'@type': ['Person', 'Organization'],
					'@id': `${siteUrl}/#/schema/person/${entityHash}`,
					name: author,
					image: {
						'@type': 'ImageObject',
						'@id': `${siteUrl}/#personlogo`,
						inLanguage: siteLanguage,
						url: entityMeta.url,
						width: entityMeta.faviconWidth,
						height: entityMeta.faviconHeight,
						caption: author
					},
					logo: {
						'@id': `${siteUrl}/#personlogo`
					},
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
		'@type': 'WebSite',
		'@id': `${siteUrl}/#website`,
		url: siteUrl,
		name: siteTitle,
		description: siteTitleAlt,
		publisher: {
			'@id': `${siteUrl}/#/schema/person/${entityHash}`
		},
		potentialAction: [
			{
				'@type': 'SearchAction',
				target: `${siteUrl}/?s={search_term_string}`,
				'query-input': 'required name=search_term_string'
			}
		],
		inLanguage: siteLanguage
	};

	const schemaOrgImageObject = {
		'@type': 'ImageObject',
		'@id': `${url}#primaryimage`,
		inLanguage: siteLanguage,
		url: featuredImage.url,
		contentUrl: featuredImage.url,
		width: featuredImage.width,
		height: featuredImage.height,
		caption: featuredImage.caption
	};

	const schemaOrgBreadcrumbList = {
		'@type': 'BreadcrumbList',
		'@id': `${url}#breadcrumb`,
		itemListElement: breadcrumbs.map((element, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			item: {
				'@type': 'WebPage',
				'@id': `${siteUrl}/${element.slug}`,
				url: `${siteUrl}/${element.slug}`,
				name: element.name
			}
		}))
	};

	const schemaOrgWebPage = {
		'@type': 'WebPage',
		'@id': `${url}#webpage`,
		url,
		name: title,
		isPartOf: {
			'@id': `${siteUrl}/#website`
		},
		primaryImageOfPage: {
			'@id': `${url}#primaryimage`
		},
		datePublished,
		dateModified: lastUpdated,
		author: {
			'@id': `${siteUrl}/#/schema/person/${entityHash}`
		},
		description: metadescription,
		breadcrumb: {
			'@id': `${url}#breadcrumb`
		},
		inLanguage: siteLanguage,
		potentialAction: [
			{
				'@type': 'ReadAction',
				target: [url]
			}
		]
	};

	let schemaOrgArticle = null;
	if (article) {
		schemaOrgArticle = {
			'@type': 'Article',
			'@id': `${url}#article`,
			isPartOf: {
				'@id': `${url}#webpage`
			},
			author: {
				'@id': `${siteUrl}/#/schema/person/${entityHash}`
			},
			headline: title,
			datePublished,
			dateModified: lastUpdated,
			mainEntityOfPage: {
				'@id': `${url}#webpage`
			},
			publisher: {
				'@id': `${siteUrl}/#/schema/person/${entityHash}`
			},
			image: {
				'@id': `${url}#primaryimage`
			},
			articleSection: ['blog'],
			inLanguage: siteLanguage
		};
	}

	const schemaOrgPublisher = {
		'@type': ['Person', 'Organization'],
		'@id': `${siteUrl}/#/schema/person/${entityHash}`,
		name: entity,
		image: {
			'@type': 'ImageObject',
			'@id': `${siteUrl}/#personlogo`,
			inLanguage: siteLanguage,
			url: `${siteUrl}/images/brand-logo.svg`,
			contentUrl: `${siteUrl}/images/brand-logo.svg`,
			width: 512,
			height: 512,
			caption: entity
		},
		logo: {
			'@id': `${siteUrl}/#personlogo`
		},
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
	];
	const schemaOrgObject = {
		'@context': 'https://schema.org',
		'@graph': schemaOrgArray
	};
	let jsonLdString = JSON.stringify(schemaOrgObject);
	let jsonLdScript = `
		<script type="application/ld+json">
			${jsonLdString}
		${'<'}/script>
	`;
</script>

<svelte:head>
	{@html jsonLdScript}
</svelte:head>
