import { c as create_ssr_component, v as validate_component, f as add_attribute } from "../../chunks/index.js";
import { B as Button } from "../../chunks/Button.js";
import { A as Atropos } from "../../chunks/atropos-svelte.js";
import { S as SEO, f as featuredImageSrc, o as ogImageSrc, a as ogSquareImageSrc, t as twitterImageSrc } from "../../chunks/SEO.js";
import { w as website } from "../../chunks/config.js";
const Hero_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".hero.svelte-tltave{background-image:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),\r\n			url('/images/fuji.svg');border-radius:var(--border-radius);width:100%;height:600px;background-position:center;background-repeat:no-repeat;background-size:cover;display:flex;justify-content:center;align-items:center}.hero__text.svelte-tltave{display:flex;flex-direction:column;justify-content:center;align-items:center;color:var(--neutral-100)}.hi.svelte-tltave{font-family:'Recoleta Alt'}",
  map: null
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<section>${validate_component(Atropos, "Atropos").$$render(
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
        return `<div class="${"hero svelte-tltave"}"><div class="${"hero__text svelte-tltave"}"><h1 class="${"hi xxl-text svelte-tltave"}" data-atropos-offset="${"-5"}">Hi! I&#39;m Khoa</h1>
				<p data-atropos-offset="${"-3"}">I code and design.</p>
				<a data-atropos-offset="${"0"}" href="${"/project"}">${validate_component(Button, "Button").$$render(
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
</section>`;
});
const fpt = "/_app/immutable/assets/fpt-9e418949.webp";
const nashtech = "/_app/immutable/assets/nashtech-485d2d86.webp";
const Clients_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".clients.svelte-ys7utv{width:100%;display:flex;justify-content:center;align-items:flex-start;flex-direction:column;gap:var(--space-m)}.clients__logo.svelte-ys7utv{display:flex;justify-content:center;align-items:center;flex-direction:column;flex-wrap:wrap;gap:var(--space-m)}.clients__title.svelte-ys7utv{font-family:'Recoleta Alt';font-weight:600}@media(min-width: 768px){.clients__logo.svelte-ys7utv{flex-direction:row}}.logo.svelte-ys7utv{aspect-ratio:1/1;width:100px;height:100px;filter:grayscale()}",
  map: null
};
const Clients = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<section class="${"clients svelte-ys7utv"}"><h2 class="${"clients__title large-text svelte-ys7utv"}">I have worked for</h2>
	<div class="${"clients__logo svelte-ys7utv"}"><img class="${"logo svelte-ys7utv"}" loading="${"lazy"}" decoding="${"async"}"${add_attribute("src", fpt, 0)} alt="${"FPT Software"}">
		<img class="${"logo svelte-ys7utv"}" loading="${"lazy"}" decoding="${"async"}"${add_attribute("src", nashtech, 0)} alt="${"NashTech"}"></div>
</section>`;
});
const UX = "/_app/immutable/assets/ux-36a3bc54.svg";
const designProcess = "/_app/immutable/assets/designProcess-124842c8.svg";
const Expertise_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".block__icon.svelte-c1bshq{display:flex;flex-direction:row;gap:var(--space-m)}.block__title.svelte-c1bshq{font-weight:500}.block__text.svelte-c1bshq{color:var(--neutral-700)}.expertise.svelte-c1bshq{display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:var(--space-m)}.expertise__block.svelte-c1bshq{display:flex;flex-direction:column;flex-wrap:wrap;justify-content:center;align-items:flex-start}.block.svelte-c1bshq{max-width:60ch}.expertise__title.svelte-c1bshq{font-family:'Recoleta Alt';font-weight:600}",
  map: null
};
const Expertise = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<section class="${"expertise svelte-c1bshq"}"><h2 class="${"expertise__title large-text svelte-c1bshq"}">My expertise</h2>
	<div class="${"expertise__block svelte-c1bshq"}"><div class="${"block__icon svelte-c1bshq"}"><img${add_attribute("src", designProcess, 0)} alt="${"design process"}" width="${"50"}" height="${"50"}">
			<img${add_attribute("src", UX, 0)} alt="${"user experience"}" width="${"50"}" height="${"50"}"></div>
		<div class="${"block svelte-c1bshq"}"><h3 class="${"block__title base-text svelte-c1bshq"}">Product Design</h3>
			<p class="${"block__text small-text svelte-c1bshq"}">Experience applying UX frameworks, working in iterative cycles, and quickly testing ideas to
				design products that match user expectations and reach the market faster.
			</p></div></div>
</section>`;
});
const frontend = "/_app/immutable/assets/frontend-b1799fa6.svg";
const navigation = "/_app/immutable/assets/navigation-59b517a7.svg";
const interactive = "/_app/immutable/assets/interactive-dd63c66a.svg";
const graphicDesign = "/_app/immutable/assets/graphicDesign-e603326c.svg";
const ToolUsed_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".tool.svelte-k5u1du{display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:var(--space-m)}.tool__block.svelte-k5u1du{width:100%;--min:24ch;display:grid;grid-gap:var(--space-s);grid-template-columns:repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));justify-content:center;align-content:center}.tool__title.svelte-k5u1du{font-family:'Recoleta Alt';font-weight:600}.block__section.svelte-k5u1du{display:flex;flex-direction:column;align-items:flex-start;border-radius:var(--border-radius);background-image:url('/images/noise2.svg');background-color:var(--neutral-900);padding:var(--space-m)}.block__title.svelte-k5u1du{color:var(--primary-500);font-weight:500;margin-bottom:var(--space-s)}.block__text.svelte-k5u1du{color:var(--neutral-100);font-weight:300;margin:0}",
  map: null
};
const ToolUsed = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<section class="${"tool svelte-k5u1du"}"><h2 class="${"tool__title large-text svelte-k5u1du"}">Tools &amp; Frameworks I use</h2>

	<div class="${"tool__block svelte-k5u1du"}"><div class="${"block__section svelte-k5u1du"}"><img width="${"50"}" height="${"50"}" class="${"block__image"}"${add_attribute("src", navigation, 0)} alt="${"navigation"}">
			<h3 class="${"block__title base-text svelte-k5u1du"}">Prototyping</h3>
			<p class="${"block__text small-text svelte-k5u1du"}">Figma</p>
			<p class="${"block__text small-text svelte-k5u1du"}">Adobe XD</p>
			<p class="${"block__text small-text svelte-k5u1du"}">Sketch</p></div>

		<div class="${"block__section svelte-k5u1du"}"><img width="${"50"}" height="${"50"}" class="${"block__image"}"${add_attribute("src", graphicDesign, 0)} alt="${"graphic design"}">
			<h3 class="${"block__title base-text svelte-k5u1du"}">Design</h3>
			<p class="${"block__text small-text svelte-k5u1du"}">Illustrator</p>
			<p class="${"block__text small-text svelte-k5u1du"}">Photoshop</p></div>

		<div class="${"block__section svelte-k5u1du"}"><img width="${"50"}" height="${"50"}" class="${"block__image"}"${add_attribute("src", interactive, 0)} alt="${"interactive"}">
			<h3 class="${"block__title base-text svelte-k5u1du"}">Motion</h3>
			<p class="${"block__text small-text svelte-k5u1du"}">Lottie</p>
			
			<p class="${"block__text small-text svelte-k5u1du"}">CSS Animations</p></div>

		<div class="${"block__section svelte-k5u1du"}"><img width="${"50"}" height="${"50"}" class="${"block__image"}"${add_attribute("src", frontend, 0)} alt="${"frontend"}">
			<h3 class="${"block__title base-text svelte-k5u1du"}">Frontend</h3>
			<p class="${"block__text small-text svelte-k5u1du"}">Semantic HTML + BEM CSS</p>
			<p class="${"block__text small-text svelte-k5u1du"}">Bootstrap + Material</p>
			<p class="${"block__text small-text svelte-k5u1du"}">JS, React, Svelte</p></div></div>
</section>`;
});
const AboutMe_svelte_svelte_type_style_lang = "";
const css = {
  code: ".about.svelte-1840n7b{display:flex;justify-content:center;align-items:flex-start;flex-direction:column;max-width:60ch;gap:var(--space-m)}.about__title.svelte-1840n7b{font-family:'Recoleta Alt';font-weight:600}.about__block.svelte-1840n7b{display:flex;flex-direction:column;gap:var(--space-s)}.block__title.svelte-1840n7b{font-weight:500}.block__text.svelte-1840n7b{color:var(--neutral-700)}",
  map: null
};
const AboutMe = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="${"about svelte-1840n7b"}"><h2 class="${"about__title large-text svelte-1840n7b"}">About me</h2>
	<div class="${"about__block svelte-1840n7b"}"><div class="${"block"}"><h3 class="${"block__title base-text svelte-1840n7b"}">Education &amp; Background</h3>
			<p class="${"block__text small-text svelte-1840n7b"}">I&#39;ve studied and worked as a full-stack developer for years but never found the satisfaction
				I needed until I discovered the art of UI/UX Design in 2022. My current focus is UX design -
				providing the best user experience through research, problem-solving, flows, and wireframes.
			</p></div>
		<div class="${"block"}"><h3 class="${"block__title base-text svelte-1840n7b"}">Thought Process</h3>
			<p class="${"block__text small-text svelte-1840n7b"}">I don&#39;t chase &quot;silver bullets&quot; because they don&#39;t exist. Every project is unique and always
				riddled with ambiguity and constraints. Fortunately, there&#39;s no need to reinvent the wheel,
				I can follow industry guidelines and proven UX frameworks \u2014 beginning with a discovery phase
				to understand the problem; followed by prototyping, validating my ideas with users, and
				collaborating with stakeholders throughout the process. Taking these simple steps has never
				failed me and always leads to innovative solutions and successful outcomes.
			</p></div></div>
</section>`;
});
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
    datePublished: "2077-07-07T14:19:33.000+0100",
    lastUpdated: "2077-07-07T14:19:33.000+0100",
    breadcrumbs,
    metadescription,
    featuredImage,
    ogImage,
    ogSquareImage,
    twitterImage
  };
  return `${$$result.head += `${$$result.title = `<title>Khoa&#39;s Portfolio</title>`, ""}`, ""}

${validate_component(SEO, "SEO").$$render($$result, Object.assign(seoProps), {}, {})}
${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})}

${validate_component(Clients, "Clients").$$render($$result, {}, {}, {})}

${validate_component(Expertise, "Expertise").$$render($$result, {}, {}, {})}

${validate_component(ToolUsed, "ToolUsed").$$render($$result, {}, {}, {})}

${validate_component(AboutMe, "AboutMe").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
