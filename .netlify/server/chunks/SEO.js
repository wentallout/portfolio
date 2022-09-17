import { c as create_ssr_component, b as add_attribute, h as escape, v as validate_component } from "./index.js";
import { w as website } from "./config.js";
import hash from "object-hash";
const featuredImageSrc = "/_app/immutable/assets/home-f7ba4dd3.jpg";
const ogImageSrc = "/_app/immutable/assets/home-open-graph-1fad80fe.jpg";
const ogSquareImageSrc = "/_app/immutable/assets/home-open-graph-square-2e611abf.jpg";
const twitterImageSrc = "/_app/immutable/assets/home-twitter-f9826a1b.jpg";
const VERTICAL_LINE_ENTITY = "|";
const OpenGraph = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { article = false } = $$props;
  let { datePublished } = $$props;
  let { lastUpdated } = $$props;
  let { facebookAuthorPage = "" } = $$props;
  let { facebookPage = "" } = $$props;
  let { image } = $$props;
  let { squareImage } = $$props;
  let { metadescription } = $$props;
  let { ogLanguage } = $$props;
  let { pageTitle } = $$props;
  let { siteTitle } = $$props;
  let { url } = $$props;
  if ($$props.article === void 0 && $$bindings.article && article !== void 0)
    $$bindings.article(article);
  if ($$props.datePublished === void 0 && $$bindings.datePublished && datePublished !== void 0)
    $$bindings.datePublished(datePublished);
  if ($$props.lastUpdated === void 0 && $$bindings.lastUpdated && lastUpdated !== void 0)
    $$bindings.lastUpdated(lastUpdated);
  if ($$props.facebookAuthorPage === void 0 && $$bindings.facebookAuthorPage && facebookAuthorPage !== void 0)
    $$bindings.facebookAuthorPage(facebookAuthorPage);
  if ($$props.facebookPage === void 0 && $$bindings.facebookPage && facebookPage !== void 0)
    $$bindings.facebookPage(facebookPage);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.squareImage === void 0 && $$bindings.squareImage && squareImage !== void 0)
    $$bindings.squareImage(squareImage);
  if ($$props.metadescription === void 0 && $$bindings.metadescription && metadescription !== void 0)
    $$bindings.metadescription(metadescription);
  if ($$props.ogLanguage === void 0 && $$bindings.ogLanguage && ogLanguage !== void 0)
    $$bindings.ogLanguage(ogLanguage);
  if ($$props.pageTitle === void 0 && $$bindings.pageTitle && pageTitle !== void 0)
    $$bindings.pageTitle(pageTitle);
  if ($$props.siteTitle === void 0 && $$bindings.siteTitle && siteTitle !== void 0)
    $$bindings.siteTitle(siteTitle);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  return `${$$result.head += `<meta property="${"og:site_name"}"${add_attribute("content", siteTitle, 0)} data-svelte="svelte-1jlun1z"><meta property="${"og:locale"}"${add_attribute("content", ogLanguage, 0)} data-svelte="svelte-1jlun1z"><meta property="${"og:url"}"${add_attribute("content", url, 0)} data-svelte="svelte-1jlun1z"><meta property="${"og:type"}"${add_attribute("content", article ? "article" : "website", 0)} data-svelte="svelte-1jlun1z"><meta property="${"og:title"}"${add_attribute("content", pageTitle, 0)} data-svelte="svelte-1jlun1z"><meta property="${"og:description"}"${add_attribute("content", metadescription, 0)} data-svelte="svelte-1jlun1z">${image ? `<meta property="${"og:image"}"${add_attribute("content", image.url, 0)} data-svelte="svelte-1jlun1z">
		<meta property="${"og:image:width"}" content="${"1200"}" data-svelte="svelte-1jlun1z">
		<meta property="${"og:image:height"}" content="${"627"}" data-svelte="svelte-1jlun1z">
		<meta property="${"og:image:alt"}"${add_attribute("content", image.alt, 0)} data-svelte="svelte-1jlun1z">` : ``}${squareImage ? `<meta property="${"og:image"}"${add_attribute("content", squareImage.url, 0)} data-svelte="svelte-1jlun1z">
		<meta property="${"og:image:width"}" content="${"400"}" data-svelte="svelte-1jlun1z">
		<meta property="${"og:image:height"}" content="${"400"}" data-svelte="svelte-1jlun1z">
		<meta property="${"og:image:alt"}"${add_attribute("content", squareImage.alt, 0)} data-svelte="svelte-1jlun1z">` : ``}${article ? `<meta property="${"article:publisher"}"${add_attribute("content", facebookPage, 0)} data-svelte="svelte-1jlun1z">
		<meta property="${"article:author"}"${add_attribute("content", facebookAuthorPage, 0)} data-svelte="svelte-1jlun1z">
		<meta property="${"article:published_time"}"${add_attribute("content", datePublished, 0)} data-svelte="svelte-1jlun1z">
		<meta property="${"article:modified_time"}"${add_attribute("content", lastUpdated, 0)} data-svelte="svelte-1jlun1z">` : ``}`, ""}`;
});
const SchemaOrg = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { article = false } = $$props;
  let { author } = $$props;
  let { breadcrumbs } = $$props;
  let { datePublished } = $$props;
  let { entity } = $$props;
  let { lastUpdated } = $$props;
  let { featuredImage } = $$props;
  let { metadescription } = $$props;
  let { siteLanguage } = $$props;
  let { siteTitle } = $$props;
  let { siteTitleAlt } = $$props;
  let { siteUrl } = $$props;
  let { title } = $$props;
  let { url } = $$props;
  let { facebookPage } = $$props;
  let { githubPage } = $$props;
  let { linkedinProfile } = $$props;
  let { telegramUsername } = $$props;
  let { tiktokUsername } = $$props;
  let { twitterUsername } = $$props;
  let { entityMeta = null } = $$props;
  const entityHash = hash({ author }, { algorithm: "md5" });
  const schemaOrgEntity = entityMeta !== null ? {
    "@type": ["Person", "Organization"],
    "@id": `${siteUrl}/#/schema/person/${entityHash}`,
    name: author,
    image: {
      "@type": "ImageObject",
      "@id": `${siteUrl}/#personlogo`,
      inLanguage: siteLanguage,
      url: entityMeta.url,
      width: entityMeta.faviconWidth,
      height: entityMeta.faviconHeight,
      caption: author
    },
    logo: { "@id": `${siteUrl}/#personlogo` },
    sameAs: [
      `https://twitter.com/${twitterUsername}`,
      `https://github.com/${githubPage}`,
      `https://www.tiktok.com/${tiktokUsername}`,
      `https://t.me/${telegramUsername}`,
      `https://uk.linkedin.com/in/${linkedinProfile}`,
      facebookPage
    ]
  } : null;
  const schemaOrgWebsite = {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: siteTitle,
    description: siteTitleAlt,
    publisher: {
      "@id": `${siteUrl}/#/schema/person/${entityHash}`
    },
    potentialAction: [
      {
        "@type": "SearchAction",
        target: `${siteUrl}/?s={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    ],
    inLanguage: siteLanguage
  };
  const schemaOrgImageObject = {
    "@type": "ImageObject",
    "@id": `${url}#primaryimage`,
    inLanguage: siteLanguage,
    url: featuredImage.url,
    contentUrl: featuredImage.url,
    width: featuredImage.width,
    height: featuredImage.height,
    caption: featuredImage.caption
  };
  const schemaOrgBreadcrumbList = {
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    itemListElement: breadcrumbs.map((element, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "WebPage",
        "@id": `${siteUrl}/${element.slug}`,
        url: `${siteUrl}/${element.slug}`,
        name: element.name
      }
    }))
  };
  const schemaOrgWebPage = {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: title,
    isPartOf: { "@id": `${siteUrl}/#website` },
    primaryImageOfPage: { "@id": `${url}#primaryimage` },
    datePublished,
    dateModified: lastUpdated,
    author: {
      "@id": `${siteUrl}/#/schema/person/${entityHash}`
    },
    description: metadescription,
    breadcrumb: { "@id": `${url}#breadcrumb` },
    inLanguage: siteLanguage,
    potentialAction: [{ "@type": "ReadAction", target: [url] }]
  };
  let schemaOrgArticle = null;
  if (article) {
    schemaOrgArticle = {
      "@type": "Article",
      "@id": `${url}#article`,
      isPartOf: { "@id": `${url}#webpage` },
      author: {
        "@id": `${siteUrl}/#/schema/person/${entityHash}`
      },
      headline: title,
      datePublished,
      dateModified: lastUpdated,
      mainEntityOfPage: { "@id": `${url}#webpage` },
      publisher: {
        "@id": `${siteUrl}/#/schema/person/${entityHash}`
      },
      image: { "@id": `${url}#primaryimage` },
      articleSection: ["blog"],
      inLanguage: siteLanguage
    };
  }
  const schemaOrgPublisher = {
    "@type": ["Person", "Organization"],
    "@id": `${siteUrl}/#/schema/person/${entityHash}`,
    name: entity,
    image: {
      "@type": "ImageObject",
      "@id": `${siteUrl}/#personlogo`,
      inLanguage: siteLanguage,
      url: `${siteUrl}/assets/rodneylab-logo.png`,
      contentUrl: `${siteUrl}/assets/rodneylab-logo.png`,
      width: 512,
      height: 512,
      caption: entity
    },
    logo: { "@id": `${siteUrl}/#personlogo` },
    sameAs: [
      `https://twitter.com/${twitterUsername}`,
      `https://github.com/${githubPage}`,
      `https://www.tiktok.com/${tiktokUsername}`,
      `https://t.me/${telegramUsername}`,
      `https://uk.linkedin.com/in/${linkedinProfile}`,
      facebookPage
    ]
  };
  const schemaOrgArray = [
    schemaOrgEntity,
    schemaOrgWebsite,
    schemaOrgImageObject,
    schemaOrgWebPage,
    schemaOrgBreadcrumbList,
    ...article ? [schemaOrgArticle] : [],
    schemaOrgPublisher
  ];
  const schemaOrgObject = {
    "@context": "https://schema.org",
    "@graph": schemaOrgArray
  };
  let jsonLdString = JSON.stringify(schemaOrgObject);
  let jsonLdScript = `
		<script type="application/ld+json">
			${jsonLdString}
		${"<"}/script>
	`;
  if ($$props.article === void 0 && $$bindings.article && article !== void 0)
    $$bindings.article(article);
  if ($$props.author === void 0 && $$bindings.author && author !== void 0)
    $$bindings.author(author);
  if ($$props.breadcrumbs === void 0 && $$bindings.breadcrumbs && breadcrumbs !== void 0)
    $$bindings.breadcrumbs(breadcrumbs);
  if ($$props.datePublished === void 0 && $$bindings.datePublished && datePublished !== void 0)
    $$bindings.datePublished(datePublished);
  if ($$props.entity === void 0 && $$bindings.entity && entity !== void 0)
    $$bindings.entity(entity);
  if ($$props.lastUpdated === void 0 && $$bindings.lastUpdated && lastUpdated !== void 0)
    $$bindings.lastUpdated(lastUpdated);
  if ($$props.featuredImage === void 0 && $$bindings.featuredImage && featuredImage !== void 0)
    $$bindings.featuredImage(featuredImage);
  if ($$props.metadescription === void 0 && $$bindings.metadescription && metadescription !== void 0)
    $$bindings.metadescription(metadescription);
  if ($$props.siteLanguage === void 0 && $$bindings.siteLanguage && siteLanguage !== void 0)
    $$bindings.siteLanguage(siteLanguage);
  if ($$props.siteTitle === void 0 && $$bindings.siteTitle && siteTitle !== void 0)
    $$bindings.siteTitle(siteTitle);
  if ($$props.siteTitleAlt === void 0 && $$bindings.siteTitleAlt && siteTitleAlt !== void 0)
    $$bindings.siteTitleAlt(siteTitleAlt);
  if ($$props.siteUrl === void 0 && $$bindings.siteUrl && siteUrl !== void 0)
    $$bindings.siteUrl(siteUrl);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.facebookPage === void 0 && $$bindings.facebookPage && facebookPage !== void 0)
    $$bindings.facebookPage(facebookPage);
  if ($$props.githubPage === void 0 && $$bindings.githubPage && githubPage !== void 0)
    $$bindings.githubPage(githubPage);
  if ($$props.linkedinProfile === void 0 && $$bindings.linkedinProfile && linkedinProfile !== void 0)
    $$bindings.linkedinProfile(linkedinProfile);
  if ($$props.telegramUsername === void 0 && $$bindings.telegramUsername && telegramUsername !== void 0)
    $$bindings.telegramUsername(telegramUsername);
  if ($$props.tiktokUsername === void 0 && $$bindings.tiktokUsername && tiktokUsername !== void 0)
    $$bindings.tiktokUsername(tiktokUsername);
  if ($$props.twitterUsername === void 0 && $$bindings.twitterUsername && twitterUsername !== void 0)
    $$bindings.twitterUsername(twitterUsername);
  if ($$props.entityMeta === void 0 && $$bindings.entityMeta && entityMeta !== void 0)
    $$bindings.entityMeta(entityMeta);
  return `${$$result.head += `<!-- HTML_TAG_START -->${jsonLdScript}<!-- HTML_TAG_END -->`, ""}`;
});
const Twitter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { article = false } = $$props;
  let { author } = $$props;
  let { twitterUsername } = $$props;
  let { image } = $$props;
  let { timeToRead = 0 } = $$props;
  if ($$props.article === void 0 && $$bindings.article && article !== void 0)
    $$bindings.article(article);
  if ($$props.author === void 0 && $$bindings.author && author !== void 0)
    $$bindings.author(author);
  if ($$props.twitterUsername === void 0 && $$bindings.twitterUsername && twitterUsername !== void 0)
    $$bindings.twitterUsername(twitterUsername);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.timeToRead === void 0 && $$bindings.timeToRead && timeToRead !== void 0)
    $$bindings.timeToRead(timeToRead);
  return `${$$result.head += `<meta property="${"twitter:card"}" content="${"summary_large_image"}" data-svelte="svelte-vpzw1s"><meta property="${"twitter:domain"}" content="${"wentallout.tech"}" data-svelte="svelte-vpzw1s"><meta property="${"twitter:url"}" content="${"https://www.wentallout.tech"}" data-svelte="svelte-vpzw1s"><meta property="${"twitter:title"}" content="${"Portfolio - Nguyen Dang Khoa"}" data-svelte="svelte-vpzw1s"><meta property="${"twitter:description"}" content="${"Khoa's Personal Portfolio."}" data-svelte="svelte-vpzw1s">${image ? `<meta property="${"twitter:image"}"${add_attribute("content", image.url, 0)} data-svelte="svelte-vpzw1s">` : ``}${twitterUsername ? `<meta name="${"twitter:creator"}"${add_attribute("content", `@${twitterUsername}`, 0)} data-svelte="svelte-vpzw1s">
		<meta name="${"twitter:site"}"${add_attribute("content", `@${twitterUsername}`, 0)} data-svelte="svelte-vpzw1s">` : ``}<meta name="${"twitter:label1"}" content="${"Written by"}" data-svelte="svelte-vpzw1s"><meta name="${"twitter:data1"}"${add_attribute("content", author, 0)} data-svelte="svelte-vpzw1s">${article && timeToRead > 0 ? `<meta name="${"twitter:label2"}" content="${"Est. reading time"}" data-svelte="svelte-vpzw1s">
		<meta name="${"twitter:data2"}"${add_attribute("content", timeToRead !== 1 ? `${timeToRead} minutes` : "1 minute", 0)} data-svelte="svelte-vpzw1s">` : ``}`, ""}`;
});
const defaultAlt = "Khoa Portfolio cover image featuring a smartphone and a pen on a black background";
const SEO = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const { author, entity, facebookAuthorPage, facebookPage, ogLanguage, siteLanguage, siteShortTitle, siteTitle, siteUrl, githubPage, linkedinProfile, telegramUsername, tiktokUsername, twitterUsername } = website;
  let { article = false } = $$props;
  let { breadcrumbs = [] } = $$props;
  let { entityMeta = null } = $$props;
  let { lastUpdated } = $$props;
  let { datePublished } = $$props;
  let { metadescription } = $$props;
  let { slug } = $$props;
  let { timeToRead = 0 } = $$props;
  let { title } = $$props;
  let { featuredImage = {
    url: featuredImageSrc,
    alt: defaultAlt,
    width: 672,
    height: 448,
    caption: "Home page"
  } } = $$props;
  let { ogImage = { url: ogImageSrc, alt: defaultAlt } } = $$props;
  let { ogSquareImage = {
    url: ogSquareImageSrc,
    alt: defaultAlt
  } } = $$props;
  let { twitterImage = {
    url: twitterImageSrc,
    alt: defaultAlt
  } } = $$props;
  const pageTitle = `${siteTitle} ${VERTICAL_LINE_ENTITY} ${title}`;
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
    ...article ? {
      datePublished,
      lastUpdated,
      facebookPage,
      facebookAuthorPage
    } : {}
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
  const twitterProps = {
    article,
    author,
    twitterUsername,
    image: twitterImage,
    timeToRead
  };
  if ($$props.article === void 0 && $$bindings.article && article !== void 0)
    $$bindings.article(article);
  if ($$props.breadcrumbs === void 0 && $$bindings.breadcrumbs && breadcrumbs !== void 0)
    $$bindings.breadcrumbs(breadcrumbs);
  if ($$props.entityMeta === void 0 && $$bindings.entityMeta && entityMeta !== void 0)
    $$bindings.entityMeta(entityMeta);
  if ($$props.lastUpdated === void 0 && $$bindings.lastUpdated && lastUpdated !== void 0)
    $$bindings.lastUpdated(lastUpdated);
  if ($$props.datePublished === void 0 && $$bindings.datePublished && datePublished !== void 0)
    $$bindings.datePublished(datePublished);
  if ($$props.metadescription === void 0 && $$bindings.metadescription && metadescription !== void 0)
    $$bindings.metadescription(metadescription);
  if ($$props.slug === void 0 && $$bindings.slug && slug !== void 0)
    $$bindings.slug(slug);
  if ($$props.timeToRead === void 0 && $$bindings.timeToRead && timeToRead !== void 0)
    $$bindings.timeToRead(timeToRead);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.featuredImage === void 0 && $$bindings.featuredImage && featuredImage !== void 0)
    $$bindings.featuredImage(featuredImage);
  if ($$props.ogImage === void 0 && $$bindings.ogImage && ogImage !== void 0)
    $$bindings.ogImage(ogImage);
  if ($$props.ogSquareImage === void 0 && $$bindings.ogSquareImage && ogSquareImage !== void 0)
    $$bindings.ogSquareImage(ogSquareImage);
  if ($$props.twitterImage === void 0 && $$bindings.twitterImage && twitterImage !== void 0)
    $$bindings.twitterImage(twitterImage);
  return `${$$result.head += `${$$result.title = `<title>${escape(pageTitle)}</title>`, ""}<meta name="${"description"}"${add_attribute("content", metadescription, 0)} data-svelte="svelte-1on4akf"><meta name="${"robots"}" content="${"index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"}" data-svelte="svelte-1on4akf"><link rel="${"canonical"}"${add_attribute("href", url, 0)} data-svelte="svelte-1on4akf">`, ""}
${validate_component(Twitter, "Twitter").$$render($$result, Object.assign(twitterProps), {}, {})}
${validate_component(OpenGraph, "OpenGraph").$$render($$result, Object.assign(openGraphProps), {}, {})}
${validate_component(SchemaOrg, "SchemaOrg").$$render($$result, Object.assign(schemaOrgProps), {}, {})}`;
});
export {
  SEO as S,
  ogSquareImageSrc as a,
  featuredImageSrc as f,
  ogImageSrc as o,
  twitterImageSrc as t
};
