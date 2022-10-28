import { c as create_ssr_component, d as add_attribute, v as validate_component } from "../../chunks/index.js";
import { B as Button } from "../../chunks/Button.js";
import { I as Image } from "../../chunks/Image.js";
import { S as SEO, f as featuredImageSrc, o as ogImageSrc, a as ogSquareImageSrc, t as twitterImageSrc } from "../../chunks/SEO.js";
import { w as website } from "../../chunks/config.js";
const Waves = "/_app/immutable/assets/waves-589c59bd.mp4";
const Hero_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "section.svelte-1ohgwfz{padding-bottom:var(--space-2xl)}.hero__video.svelte-1ohgwfz{height:100%;-o-object-fit:cover;object-fit:cover;position:absolute}.hero.svelte-1ohgwfz,.hero__video.svelte-1ohgwfz{border-radius:var(--border-radius);display:flex;overflow:hidden;width:100%}.hero.svelte-1ohgwfz{background-color:transparent;background-position:50%;background-repeat:no-repeat;background-size:cover;height:600px;position:relative}.hero.svelte-1ohgwfz,.hero__text.svelte-1ohgwfz{align-items:center;justify-content:center}.hero__text.svelte-1ohgwfz{background-image:linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.3));color:var(--neutral-100);display:flex;flex-direction:column;height:100%;text-shadow:3px 4px 7px rgba(0,0,0,.8);width:100%;z-index:3}.hi.svelte-1ohgwfz{font-family:var(--fancy-font)}",
  map: null
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<section class="${"svelte-1ohgwfz"}"><div class="${"hero svelte-1ohgwfz"}"><video autoplay loop muted class="${"hero__video svelte-1ohgwfz"}"${add_attribute("src", Waves, 0)}></video>
		<div class="${"hero__text svelte-1ohgwfz"}"><h1 class="${"hi xxl-text svelte-1ohgwfz"}">Hi! I&#39;m Khoa</h1>
			<p>I code and design.</p>
			<a href="${"/project"}">${validate_component(Button, "Button").$$render(
    $$result,
    {
      label: "See my work",
      backgroundColor: "var(--primary-500)",
      type: "button"
    },
    {},
    {}
  )}</a></div></div>
</section>`;
});
const fpt = "/_app/immutable/assets/fpt-9e418949.webp";
const nashtech = "/_app/immutable/assets/nashtech-485d2d86.webp";
const Clients_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "section.svelte-rttiaf{padding-bottom:var(--space-2xl)}.clients.svelte-rttiaf{align-items:flex-start;flex-direction:column;width:100%}.clients.svelte-rttiaf,.clients__logo.svelte-rttiaf{display:flex;gap:var(--space-m);justify-content:center}.clients__logo.svelte-rttiaf{align-items:center;flex-direction:row;flex-wrap:wrap}.clients__title.svelte-rttiaf{font-family:var(--fancy-font);font-weight:600}.logo.svelte-rttiaf{aspect-ratio:1/1;filter:grayscale();height:100px;width:100px}",
  map: null
};
const Clients = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<section class="${"svelte-rttiaf"}"><div class="${"clients svelte-rttiaf"}"><h2 class="${"clients__title xl-text svelte-rttiaf"}">I have worked for</h2>
		<div class="${"clients__logo svelte-rttiaf"}"><img class="${"logo svelte-rttiaf"}" loading="${"lazy"}" decoding="${"async"}"${add_attribute("src", fpt, 0)} alt="${"FPT Software"}">
			<img class="${"logo svelte-rttiaf"}" loading="${"lazy"}" decoding="${"async"}"${add_attribute("src", nashtech, 0)} alt="${"NashTech"}"></div></div>
</section>`;
});
const UX = "/_app/immutable/assets/ux-36a3bc54.svg";
const designProcess = "/_app/immutable/assets/designProcess-124842c8.svg";
const Expertise_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "section.svelte-cibgir{padding-bottom:var(--space-2xl)}.block__icon.svelte-cibgir{align-items:center;display:flex;flex-direction:row;flex-wrap:wrap;gap:var(--space-m);justify-content:center}.block__title.svelte-cibgir{font-weight:500}.block__text.svelte-cibgir{color:var(--neutral-700);max-width:60ch}.expertise.svelte-cibgir{align-items:flex-start;display:flex;flex-direction:column;gap:var(--space-m);justify-content:center}.expertise__block.svelte-cibgir{align-items:center;display:flex;flex-direction:row;flex-wrap:wrap;gap:var(--space-l);justify-content:flex-start}.block.svelte-cibgir{align-items:flex-start;display:flex;flex-direction:column;justify-content:center}.expertise__title.svelte-cibgir{font-family:var(--fancy-font);font-weight:600}",
  map: null
};
const Expertise = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<section class="${"svelte-cibgir"}"><div class="${"expertise svelte-cibgir"}"><h2 class="${"expertise__title xl-text svelte-cibgir"}">My expertise</h2>
		<div class="${"expertise__block svelte-cibgir"}"><div class="${"block__icon svelte-cibgir"}"><img${add_attribute("src", designProcess, 0)} alt="${"design process"}" width="${"100"}" height="${"100"}">
				<img${add_attribute("src", UX, 0)} alt="${"user experience"}" width="${"100"}" height="${"100"}"></div>
			<div class="${"block svelte-cibgir"}"><h3 class="${"block__title base-text svelte-cibgir"}">Product Design</h3>
				<p class="${"block__text small-text svelte-cibgir"}">Experience applying UX frameworks, working in iterative cycles, and quickly testing ideas
					to design products that match user expectations.
				</p></div></div></div>
</section>`;
});
const frontend = "/_app/immutable/assets/frontend-fe9a0df8.svg";
const navigation = "/_app/immutable/assets/navigation-d8691831.svg";
const interactive = "/_app/immutable/assets/interactive-7503e599.svg";
const graphicDesign = "/_app/immutable/assets/graphicDesign-85c15e57.svg";
const ToolUsed_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "section.svelte-dt05ey{padding-bottom:var(--space-2xl)}.tool.svelte-dt05ey{align-items:flex-start;display:flex;flex-direction:column;gap:var(--space-m)}.tool.svelte-dt05ey,.tool__block.svelte-dt05ey{justify-content:center}.tool__block.svelte-dt05ey{--min:24ch;grid-gap:var(--space-s);align-content:center;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,var(--min)),1fr));width:100%}.tool__title.svelte-dt05ey{font-family:var(--fancy-font);font-weight:600}.block__section.svelte-dt05ey{align-items:flex-start;background-color:var(--neutral-900);background-image:url(/images/noise2.svg);border-radius:var(--border-radius);box-shadow:var(--box-shadow);display:flex;flex-direction:column;padding:var(--space-m)}.block__title.svelte-dt05ey{background:var(--gradient);-webkit-background-clip:text;background-clip:text;color:transparent;font-weight:500;margin-bottom:var(--space-s)}.block__text.svelte-dt05ey{color:var(--neutral-100);font-weight:300;margin:0}",
  map: null
};
const ToolUsed = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<section class="${"svelte-dt05ey"}"><div class="${"tool svelte-dt05ey"}"><h2 class="${"tool__title xl-text svelte-dt05ey"}">Tools &amp; Frameworks I use</h2>

		<div class="${"tool__block svelte-dt05ey"}"><div class="${"block__section svelte-dt05ey"}">${validate_component(Image, "Image").$$render(
    $$result,
    {
      hasCaption: false,
      width: "50",
      height: "50",
      src: navigation,
      alt: "navigation"
    },
    {},
    {}
  )}
				<h3 class="${"block__title base-text svelte-dt05ey"}">Prototyping</h3>
				<p class="${"block__text small-text svelte-dt05ey"}">Figma</p>
				<p class="${"block__text small-text svelte-dt05ey"}">Adobe XD</p>
				<p class="${"block__text small-text svelte-dt05ey"}">Sketch</p></div>

			<div class="${"block__section svelte-dt05ey"}">${validate_component(Image, "Image").$$render(
    $$result,
    {
      hasCaption: false,
      width: "50",
      height: "50",
      src: graphicDesign,
      alt: "graphic design"
    },
    {},
    {}
  )}
				<h3 class="${"block__title base-text svelte-dt05ey"}">Design</h3>
				<p class="${"block__text small-text svelte-dt05ey"}">Illustrator</p>
				<p class="${"block__text small-text svelte-dt05ey"}">Photoshop</p></div>

			<div class="${"block__section svelte-dt05ey"}">${validate_component(Image, "Image").$$render(
    $$result,
    {
      hasCaption: false,
      width: "50",
      height: "50",
      src: interactive,
      alt: "interactive"
    },
    {},
    {}
  )}
				<h3 class="${"block__title base-text svelte-dt05ey"}">Motion</h3>
				<p class="${"block__text small-text svelte-dt05ey"}">Lottie</p>
				
				<p class="${"block__text small-text svelte-dt05ey"}">CSS Animations</p></div>

			<div class="${"block__section svelte-dt05ey"}">${validate_component(Image, "Image").$$render(
    $$result,
    {
      hasCaption: false,
      width: "50",
      height: "50",
      src: frontend,
      alt: "frontend"
    },
    {},
    {}
  )}
				<h3 class="${"block__title base-text svelte-dt05ey"}">Frontend</h3>
				<p class="${"block__text small-text svelte-dt05ey"}">Semantic HTML, BEM CSS</p>
				<p class="${"block__text small-text svelte-dt05ey"}">Bootstrap, Material</p>
				<p class="${"block__text small-text svelte-dt05ey"}">JS, React, Svelte</p></div></div></div>
</section>`;
});
const AboutMe_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-1kvjwtp{padding-bottom:var(--space-2xl)}.about.svelte-1kvjwtp{align-items:flex-start;display:flex;flex-direction:column;gap:var(--space-m);justify-content:center;width:100%}.about__title.svelte-1kvjwtp{font-family:var(--fancy-font);font-weight:600}.about__block.svelte-1kvjwtp{display:flex;flex-direction:column;gap:var(--space-s);max-width:60ch}.block__title.svelte-1kvjwtp{font-weight:500}.block__text.svelte-1kvjwtp{color:var(--neutral-700)}",
  map: null
};
const AboutMe = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="${"svelte-1kvjwtp"}"><div class="${"about svelte-1kvjwtp"}"><h2 class="${"about__title xl-text svelte-1kvjwtp"}">About me</h2>
		<div class="${"about__block svelte-1kvjwtp"}"><div class="${"block"}"><h3 class="${"block__title base-text svelte-1kvjwtp"}">Education &amp; Background</h3>
				<p class="${"block__text small-text svelte-1kvjwtp"}">I&#39;ve studied and worked as a full-stack developer for years, but never found the
					satisfaction I needed until I discovered the art of UI/UX Design in 2022. My current focus
					is UX design - providing the best user experience through research, creating flows and
					wireframes that solve problems.
				</p></div>
			<div class="${"block"}"><h3 class="${"block__title base-text svelte-1kvjwtp"}">Thought Process</h3>
				<p class="${"block__text small-text svelte-1kvjwtp"}">There isn&#39;t a miracle method that solves everything. Every project is unique and
					constantly riddled with ambiguity and constraints. Fortunately, there&#39;s no need to
					reinvent the wheel, I can follow industry guidelines and proven UX frameworks \u2014 beginning
					with a discovery phase to understand the problem; followed by prototyping, validating my
					ideas with users, and collaborating with stakeholders throughout the process. Taking these
					simple steps has never failed me and always leads to innovative solutions and successful
					outcomes.
				</p></div></div></div>
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
  return `${$$result.head += `<!-- HEAD_svelte-a43jgt_START -->${$$result.title = `<title>Khoa&#39;s Portfolio</title>`, ""}<!-- HEAD_svelte-a43jgt_END -->`, ""}

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
