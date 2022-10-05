import { c as create_ssr_component, b as add_attribute, v as validate_component } from "../../chunks/index.js";
import { B as Button } from "../../chunks/Button.js";
import { A as Atropos } from "../../chunks/atropos-svelte.js";
import { S as SEO, f as featuredImageSrc, o as ogImageSrc, a as ogSquareImageSrc, t as twitterImageSrc } from "../../chunks/SEO.js";
import { w as website } from "../../chunks/config.js";
const fpt = "/_app/immutable/assets/fpt-9e418949.webp";
const nashtech = "/_app/immutable/assets/nashtech-485d2d86.webp";
const Clients_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".clients.svelte-1pfiyk8{width:100%;display:flex;justify-content:center;align-items:flex-start;flex-direction:column;gap:var(--space-m)}.clients__logo.svelte-1pfiyk8{display:flex;justify-content:center;align-items:center;flex-direction:column;flex-wrap:wrap;gap:var(--space-m)}.clients__title.svelte-1pfiyk8{font-family:'Blacker'}@media(min-width: 768px){.clients__logo.svelte-1pfiyk8{flex-direction:row}}.logo.svelte-1pfiyk8{aspect-ratio:1/1;width:100px;height:100px;filter:grayscale()}",
  map: null
};
const Clients = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<section class="${"clients svelte-1pfiyk8"}"><h2 class="${"clients__title large-text svelte-1pfiyk8"}">I have worked for</h2>
	<div class="${"clients__logo svelte-1pfiyk8"}"><img class="${"logo svelte-1pfiyk8"}" loading="${"lazy"}" decoding="${"async"}"${add_attribute("src", fpt, 0)} alt="${"FPT Software"}">
		<img class="${"logo svelte-1pfiyk8"}" loading="${"lazy"}" decoding="${"async"}"${add_attribute("src", nashtech, 0)} alt="${"NashTech"}"></div>
</section>`;
});
const UX = "/_app/immutable/assets/ux-36a3bc54.svg";
const designProcess = "/_app/immutable/assets/designProcess-124842c8.svg";
const Expertise_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".block__icon.svelte-1i8yvcx{display:flex;flex-direction:row;gap:var(--space-m)}.block__title.svelte-1i8yvcx{font-weight:500}.block__text.svelte-1i8yvcx{color:var(--neutral-700)}.expertise.svelte-1i8yvcx{display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:var(--space-m)}.expertise__block.svelte-1i8yvcx{display:flex;flex-direction:column;flex-wrap:wrap;justify-content:center;align-items:flex-start}.block.svelte-1i8yvcx{max-width:60ch}.expertise__title.svelte-1i8yvcx{font-family:'Blacker'}",
  map: null
};
const Expertise = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<section class="${"expertise svelte-1i8yvcx"}"><h2 class="${"expertise__title large-text svelte-1i8yvcx"}">My expertise</h2>
	<div class="${"expertise__block svelte-1i8yvcx"}"><div class="${"block__icon svelte-1i8yvcx"}"><img${add_attribute("src", designProcess, 0)} alt="${"design process"}" width="${"50"}" height="${"50"}">
			<img${add_attribute("src", UX, 0)} alt="${"user experience"}" width="${"50"}" height="${"50"}"></div>
		<div class="${"block svelte-1i8yvcx"}"><h3 class="${"block__title base-text svelte-1i8yvcx"}">Product Design</h3>
			<p class="${"block__text small-text svelte-1i8yvcx"}">Experience applying UX frameworks, working in iterative cycles, and quickly testing ideas to
				design products that match user expectations and reach the market faster.
			</p></div></div>
</section>`;
});
const frontend = "/_app/immutable/assets/frontend-b1799fa6.svg";
const navigation = "/_app/immutable/assets/navigation-59b517a7.svg";
const interactive = "/_app/immutable/assets/interactive-dd63c66a.svg";
const graphicDesign = "/_app/immutable/assets/graphicDesign-e603326c.svg";
const ToolUsed_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".tool.svelte-1gjvhy{display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:var(--space-m)}.tool__block.svelte-1gjvhy{width:100%;--min:24ch;display:grid;grid-gap:var(--space-s);grid-template-columns:repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));justify-content:center;align-content:center}.tool__title.svelte-1gjvhy{font-family:'Blacker'}.block__section.svelte-1gjvhy{display:flex;flex-direction:column;align-items:flex-start;border-radius:var(--border-radius);background-color:var(--neutral-900);padding:var(--space-m)}.block__title.svelte-1gjvhy{color:var(--primary-500);font-weight:500;margin-bottom:var(--space-s)}.block__text.svelte-1gjvhy{color:var(--neutral-100);font-weight:300;margin:0}",
  map: null
};
const ToolUsed = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<section class="${"tool svelte-1gjvhy"}"><h2 class="${"tool__title large-text svelte-1gjvhy"}">Tools &amp; Frameworks I use</h2>

	<div class="${"tool__block svelte-1gjvhy"}"><div class="${"block__section svelte-1gjvhy"}"><img width="${"50"}" height="${"50"}" class="${"block__image"}"${add_attribute("src", navigation, 0)} alt="${"navigation"}">
			<h3 class="${"block__title base-text svelte-1gjvhy"}">Prototyping</h3>
			<p class="${"block__text small-text svelte-1gjvhy"}">Figma</p>
			<p class="${"block__text small-text svelte-1gjvhy"}">Adobe XD</p>
			<p class="${"block__text small-text svelte-1gjvhy"}">Sketch</p></div>

		<div class="${"block__section svelte-1gjvhy"}"><img width="${"50"}" height="${"50"}" class="${"block__image"}"${add_attribute("src", graphicDesign, 0)} alt="${"graphic design"}">
			<h3 class="${"block__title base-text svelte-1gjvhy"}">Design</h3>
			<p class="${"block__text small-text svelte-1gjvhy"}">Illustrator</p>
			<p class="${"block__text small-text svelte-1gjvhy"}">Photoshop</p></div>

		<div class="${"block__section svelte-1gjvhy"}"><img width="${"50"}" height="${"50"}" class="${"block__image"}"${add_attribute("src", interactive, 0)} alt="${"interactive"}">
			<h3 class="${"block__title base-text svelte-1gjvhy"}">Motion</h3>
			<p class="${"block__text small-text svelte-1gjvhy"}">Lottie</p>
			
			<p class="${"block__text small-text svelte-1gjvhy"}">CSS Animations</p></div>

		<div class="${"block__section svelte-1gjvhy"}"><img width="${"50"}" height="${"50"}" class="${"block__image"}"${add_attribute("src", frontend, 0)} alt="${"frontend"}">
			<h3 class="${"block__title base-text svelte-1gjvhy"}">Frontend</h3>
			<p class="${"block__text small-text svelte-1gjvhy"}">Semantic HTML + BEM CSS</p>
			<p class="${"block__text small-text svelte-1gjvhy"}">Bootstrap + Material</p>
			<p class="${"block__text small-text svelte-1gjvhy"}">JS, React, Svelte</p></div></div>
</section>`;
});
const Hero_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".hero.svelte-d7mf3s{background-image:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),\r\n			url('/images/fuji.svg');border-radius:var(--border-radius);width:100%;height:600px;background-position:center;background-repeat:no-repeat;background-size:cover;display:flex;justify-content:center;align-items:center}.hero__text.svelte-d7mf3s{display:flex;flex-direction:column;justify-content:center;align-items:center;color:var(--neutral-100)}",
  map: null
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
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
        return `<div class="${"hero svelte-d7mf3s"}"><div class="${"hero__text svelte-d7mf3s"}"><h1 data-atropos-offset="${"-5"}">Hi! I&#39;m Khoa</h1>
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
const AboutMe_svelte_svelte_type_style_lang = "";
const css = {
  code: ".about.svelte-1w3mfr8{display:flex;justify-content:center;align-items:flex-start;flex-direction:column;gap:var(--space-m)}.about__title.svelte-1w3mfr8{font-family:'Blacker'}.about__block.svelte-1w3mfr8{display:flex;flex-direction:column;gap:var(--space-s)}.block__title.svelte-1w3mfr8{font-weight:500}.block__text.svelte-1w3mfr8{max-width:60ch;color:var(--neutral-700)}",
  map: null
};
const AboutMe = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="${"about svelte-1w3mfr8"}"><h2 class="${"about__title large-text svelte-1w3mfr8"}">About me</h2>
	<div class="${"about__block svelte-1w3mfr8"}"><div class="${"block"}"><h3 class="${"block__title base-text svelte-1w3mfr8"}">Education &amp; Background</h3>
			<p class="${"block__text small-text svelte-1w3mfr8"}">I&#39;ve studied and worked as a full-stack developer for years but never found the satisfaction
				I needed until I discovered the art UI/UX Design in 2022. My current focus is UX design -
				providing the best user experience through research, problem-solving, flows, and wireframes.
			</p></div>
		<div class="${"block"}"><h3 class="${"block__title base-text svelte-1w3mfr8"}">Thought Process</h3>
			<p class="${"block__text small-text svelte-1w3mfr8"}">I don&#39;t chase &quot;silver bullets&quot; because they don&#39;t exist. Every project is unique and always
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
    datePublished: "2021-07-07T14:19:33.000+0100",
    lastUpdated: "2021-07-07T14:19:33.000+0100",
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
