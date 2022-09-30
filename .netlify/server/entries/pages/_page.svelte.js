import { c as create_ssr_component, v as validate_component, b as add_attribute } from "../../chunks/index.js";
import { B as Button } from "../../chunks/Button.js";
import { A as Atropos } from "../../chunks/atropos-svelte.js";
import { S as SEO, f as featuredImageSrc, o as ogImageSrc, a as ogSquareImageSrc, t as twitterImageSrc } from "../../chunks/SEO.js";
import { w as website } from "../../chunks/config.js";
const Hero_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".atropos-container.svelte-1j1hfho{margin-bottom:var(--space-l)}.hero.svelte-1j1hfho{background-image:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),\r\n			url('/images/fuji.svg');border-radius:var(--border-radius);width:100%;height:600px;background-position:center;background-repeat:no-repeat;background-size:cover;display:flex;justify-content:center;align-items:center}.hero__text.svelte-1j1hfho{display:flex;flex-direction:column;justify-content:center;align-items:center;color:var(--neutral-100)}",
  map: null
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"atropos-container svelte-1j1hfho"}">${validate_component(Atropos, "Atropos").$$render(
    $$result,
    {
      highlight: "false",
      shadow: "false",
      rotateTouch: "scroll-y",
      rotateXMax: 5,
      rotateYMax: 5
    },
    {},
    {
      default: () => {
        return `<div class="${"hero svelte-1j1hfho"}"><div class="${"hero__text svelte-1j1hfho"}"><h1 data-atropos-offset="${"-5"}">Hi! I&#39;m Khoa</h1>
				<p data-atropos-offset="${"-3"}">I code and design.</p>
				<a data-atropos-offset="${"10"}" href="${"/project"}">${validate_component(Button, "Button").$$render(
          $$result,
          {
            label: "See my work",
            backgroundColor: "var(--primary-500)",
            type: "button"
          },
          {},
          {}
        )}</a></div></div>`;
      }
    }
  )}
</div>`;
});
const fpt = "/_app/immutable/assets/fpt-9e418949.webp";
const nashtech = "/_app/immutable/assets/nashtech-485d2d86.webp";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".past-clients.svelte-iemdlw{width:100%;display:flex;justify-content:center;align-items:center;flex-direction:column;margin-bottom:var(--space-l)}.past-clients__logo.svelte-iemdlw{display:flex;justify-content:center;align-items:center;flex-direction:column;flex-wrap:wrap}@media(min-width: 768px){.past-clients__logo.svelte-iemdlw{flex-direction:row}}.logo.svelte-iemdlw{aspect-ratio:1/1;width:200px;height:200px}@media(min-width: 768px){.logo.svelte-iemdlw{width:300px;height:300px}}",
  map: null
};
let title = "Home";
let metadescription = "Portfolio - UIUX Designer, Web Developer Nguyen Dang Khoa";
const featuredImageAlt = "Portfolio of Khoa";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const { author, siteUrl } = website;
  const breadcrumbs = [{ name: "Home", slug: "" }];
  const featuredImage = {
    url: featuredImageSrc,
    alt: featuredImageAlt,
    width: 672,
    height: 448,
    caption: "Home page"
  };
  const ogImage = { url: ogImageSrc, alt: featuredImageAlt };
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
    slug: "",
    entityMeta,
    datePublished: "2021-07-07T14:19:33.000+0100",
    lastUpdated: "2021-07-07T14:19:33.000+0100",
    breadcrumbs,
    metadescription,
    featuredImage,
    ogImage,
    ogSquareImage,
    twitterImage
  };
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Khoa&#39;s Portfolio</title>`, ""}`, ""}

${validate_component(SEO, "SEO").$$render($$result, Object.assign(seoProps), {}, {})}
${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})}

<div class="${"past-clients svelte-iemdlw"}"><p class="${"past-clients__text base-text"}">I have worked for</p>
	<div class="${"past-clients__logo svelte-iemdlw"}"><img loading="${"lazy"}" decoding="${"async"}" class="${"logo svelte-iemdlw"}"${add_attribute("src", fpt, 0)} alt="${"FPT Software"}">
		<img loading="${"lazy"}" decoding="${"async"}" class="${"logo svelte-iemdlw"}"${add_attribute("src", nashtech, 0)} alt="${"NashTech"}"></div></div>

<div></div>`;
});
export {
  Page as default
};
