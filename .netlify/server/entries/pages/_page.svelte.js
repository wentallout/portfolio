import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../chunks/index.js";
import { P as ProjectCard, R as RezaPhoneAtropos } from "../../chunks/ProjectCard.js";
import { E as ExLink, S as SEO, f as featuredImageSrc, o as ogImageSrc, a as ogSquareImageSrc, t as twitterImageSrc } from "../../chunks/SEO.js";
import { I as Image } from "../../chunks/Image.js";
import { w as website } from "../../chunks/config.js";
const Name_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".name.svelte-8oiac2{align-items:center;background:var(--bg);border-radius:var(--border-radius-light);box-shadow:var(--box-shadow);display:flex;flex-direction:column;flex-wrap:wrap;gap:var(--space-l);justify-content:center;padding:var(--space-l)}@media(min-width:768px){.name.svelte-8oiac2{flex-direction:row;justify-content:flex-start}}.info__fullname.svelte-8oiac2{color:var(--primary-600);font-family:var(--fancy-font);margin-bottom:var(--space-s)}.info__job.svelte-8oiac2{color:var(--text);font-weight:400}.portrait.svelte-8oiac2{filter:grayscale(100);height:100%;-o-object-fit:cover;object-fit:cover}",
  map: null
};
const Name = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<section class="${"name svelte-8oiac2"}"><img height="${"200"}" width="${"200"}" class="${"portrait svelte-8oiac2"}" src="${"images/portrait.png"}" alt="${"Khoa's face"}">

	<div class="${"info"}"><h1 class="${"info__fullname xxl-text svelte-8oiac2"}">Nguyen Dang Khoa</h1>
		<div class="${"info__job small-text svelte-8oiac2"}">23 y.o, love tinkering frontends and learning new design techniques
		</div>
		<div class="${"info__job small-text svelte-8oiac2"}">\u{1F4F1} UI/UX Designer (Figma)</div>
		<div class="${"info__job small-text svelte-8oiac2"}">\u{1F468}\u200D\u{1F4BB} Web Developer (JS/React/Svelte + .NET)</div></div>
</section>`;
});
const FeaturedProject_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".featured.svelte-g1k814{display:flex;flex-direction:column;gap:var(--space-m)}.featured__title.svelte-g1k814{font-family:var(--fancy-font)}",
  map: null
};
const FeaturedProject = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<section><div class="${"featured svelte-g1k814"}"><h2 class="${"featured__title xl-text svelte-g1k814"}">Featured projects</h2>
		<div class="${"projects"}">${validate_component(ProjectCard, "ProjectCard").$$render(
    $$result,
    {
      projectName: "Reza - Restaurant Reservation App",
      linkToDetail: "project/reza",
      what: "Reza is an app that lets people book restaurant tables easily.",
      who: "Age 18-30, busy office workers or tourists visiting a new city.",
      result: "Persona, User Flow, Wireframe, Prototype"
    },
    {},
    {
      default: () => {
        return `${validate_component(RezaPhoneAtropos, "RezaPhoneAtropos").$$render($$result, {}, {}, {})}`;
      }
    }
  )}</div></div>
</section>`;
});
const fpt = "/_app/immutable/assets/fpt-9e418949.webp";
const nashtech = "/_app/immutable/assets/nashtech-485d2d86.webp";
const MyClients_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".clients.svelte-1352lmp{align-items:flex-start;flex-direction:column;width:100%}.clients.svelte-1352lmp,.clients__logo.svelte-1352lmp{display:flex;gap:var(--space-m);justify-content:center}.clients__logo.svelte-1352lmp{align-items:center;flex-direction:row;flex-wrap:wrap}.clients__title.svelte-1352lmp{font-family:var(--fancy-font);font-weight:600}.logo.svelte-1352lmp{aspect-ratio:1/1;filter:grayscale();height:100px;transition:.3s;width:100px}.logo.svelte-1352lmp:hover{filter:none}",
  map: null
};
const MyClients = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<section><div class="${"clients svelte-1352lmp"}"><h2 class="${"clients__title xl-text svelte-1352lmp"}">I have worked for</h2>
		<div class="${"clients__logo svelte-1352lmp"}">${validate_component(ExLink, "ExLink").$$render($$result, { href: "https://www.fpt-software.com" }, {}, {
    default: () => {
      return `<img class="${"logo svelte-1352lmp"}" loading="${"lazy"}" decoding="${"async"}"${add_attribute("src", fpt, 0)} alt="${"FPT Software"}">`;
    }
  })}

			${validate_component(ExLink, "ExLink").$$render($$result, { href: "https://nashtechglobal.com" }, {}, {
    default: () => {
      return `<img class="${"logo svelte-1352lmp"}" loading="${"lazy"}" decoding="${"async"}"${add_attribute("src", nashtech, 0)} alt="${"NashTech"}">`;
    }
  })}</div></div>
</section>`;
});
const MyExpertise_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".expertise.svelte-1s7d1fe{align-items:flex-start;display:flex;flex-direction:column;gap:var(--space-m);justify-content:center}.block__title.svelte-1s7d1fe{color:var(--primary-600);font-weight:600}.block__text.svelte-1s7d1fe{color:var(--neutral-800);color:var(--text-low);max-width:60ch}.expertise__block.svelte-1s7d1fe{align-items:center;display:flex;flex-direction:row;flex-wrap:wrap;gap:var(--space-l);justify-content:flex-start}.block.svelte-1s7d1fe{align-items:flex-start;background-color:var(--bg);border-radius:var(--border-radius-light);box-shadow:var(--box-shadow);display:flex;flex-direction:column;justify-content:center;padding:var(--space-l)}.expertise__title.svelte-1s7d1fe{font-family:var(--fancy-font);font-weight:600}",
  map: null
};
const MyExpertise = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<section><div class="${"expertise svelte-1s7d1fe"}"><h2 class="${"expertise__title xl-text svelte-1s7d1fe"}">My expertise</h2>
		<div class="${"expertise__block svelte-1s7d1fe"}"><div class="${"block svelte-1s7d1fe"}"><h3 class="${"block__title base-text svelte-1s7d1fe"}">Product Design</h3>
				<p class="${"block__text small-text svelte-1s7d1fe"}">Experience using UX frameworks, working in iterative cycles, and quickly testing ideas to
					design products that meet user expectations.
				</p></div></div></div>
</section>`;
});
const frontend = "/_app/immutable/assets/frontend-b188da22.svg";
const navigation = "/_app/immutable/assets/navigation-9af7f3a6.svg";
const interactive = "/_app/immutable/assets/interactive-621aac0b.svg";
const graphicDesign = "/_app/immutable/assets/graphicDesign-46f1e6c2.svg";
const MyTools_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".block__section.svelte-xdrr87{background-color:var(--bg);border-radius:var(--border-radius-light);box-shadow:var(--box-shadow);padding:var(--space-l)}.block__section.svelte-xdrr87,.tool.svelte-xdrr87{align-items:flex-start;display:flex;flex-direction:column}.tool.svelte-xdrr87{gap:var(--space-m)}.tool.svelte-xdrr87,.tool__block.svelte-xdrr87{justify-content:center}.tool__block.svelte-xdrr87{--min:24ch;grid-gap:var(--space-s);align-content:center;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,var(--min)),1fr));width:100%}.tool__title.svelte-xdrr87{font-family:var(--fancy-font)}.block__title.svelte-xdrr87{color:var(--primary-600);font-weight:600;margin-bottom:var(--space-2xs);margin-top:var(--space-m)}.block__text.svelte-xdrr87{color:var(--text-low);font-weight:400;margin:0}",
  map: null
};
const MyTools = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<section><div class="${"tool svelte-xdrr87"}"><h2 class="${"tool__title xl-text svelte-xdrr87"}">Tools I use</h2>

		<div class="${"tool__block svelte-xdrr87"}"><div class="${"block__section svelte-xdrr87"}">${validate_component(Image, "Image").$$render(
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
				<h3 class="${"block__title base-text svelte-xdrr87"}">Prototyping</h3>
				<p class="${"block__text small-text svelte-xdrr87"}">Figma</p>
				<p class="${"block__text small-text svelte-xdrr87"}">Adobe XD</p>
				<p class="${"block__text small-text svelte-xdrr87"}">Sketch</p></div>

			<div class="${"block__section svelte-xdrr87"}">${validate_component(Image, "Image").$$render(
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
				<h3 class="${"block__title base-text svelte-xdrr87"}">Design</h3>
				<p class="${"block__text small-text svelte-xdrr87"}">Illustrator</p>
				<p class="${"block__text small-text svelte-xdrr87"}">Photoshop</p></div>

			<div class="${"block__section svelte-xdrr87"}">${validate_component(Image, "Image").$$render(
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
				<h3 class="${"block__title base-text svelte-xdrr87"}">Motion</h3>
				<p class="${"block__text small-text svelte-xdrr87"}">Lottie</p>
				
				<p class="${"block__text small-text svelte-xdrr87"}">CSS Animations</p></div>

			<div class="${"block__section svelte-xdrr87"}">${validate_component(Image, "Image").$$render(
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
				<h3 class="${"block__title base-text svelte-xdrr87"}">Frontend</h3>
				<p class="${"block__text small-text svelte-xdrr87"}">Semantic HTML, BEM CSS</p>
				<p class="${"block__text small-text svelte-xdrr87"}">Bootstrap, Material</p>
				<p class="${"block__text small-text svelte-xdrr87"}">JS, React, SvelteKit</p></div></div></div>
</section>`;
});
const AboutMe_svelte_svelte_type_style_lang = "";
const css = {
  code: ".about.svelte-1ati4vj{align-items:flex-start;display:flex;flex-direction:column;gap:var(--space-m);justify-content:center;width:100%}.about__title.svelte-1ati4vj{font-family:var(--fancy-font);font-weight:600}.about__block.svelte-1ati4vj{border-radius:var(--border-radius-light);display:flex;flex-direction:column;gap:var(--space-l);max-width:60ch}.block__title.svelte-1ati4vj{color:var(--primary-600);font-weight:600}.block__text.svelte-1ati4vj{color:var(--text-low);font-weight:400}",
  map: null
};
const AboutMe = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section><div class="${"about svelte-1ati4vj"}"><h2 class="${"about__title xl-text svelte-1ati4vj"}">About me</h2>
		<div class="${"about__block svelte-1ati4vj"}"><div class="${"block"}"><h3 class="${"block__title base-text svelte-1ati4vj"}">Education &amp; Background</h3>
				<p class="${"block__text small-text svelte-1ati4vj"}">I worked as a full-stack developer for about a year but didn&#39;t find the fulfillment I was
					looking for until I discovered the art of UI/UX Design in 2022. My current focus is on UX
					design, which involves conducting research and developing flows and wireframes to solve
					users&#39; pain points.
				</p></div>
			<div class="${"block"}"><h3 class="${"block__title base-text svelte-1ati4vj"}">Thought Process</h3>
				<p class="${"block__text small-text svelte-1ati4vj"}">There isn&#39;t a miracle method that solves everything. Every project is unique and
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
let metadescription = "Nguyen Dang Khoa - UI UX Designer + Web Developer. Personal Portfolio.";
const featuredImageAlt = "Nguyen Dang Khoa - UI UX Designer + Web Developer";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const { author, siteUrl } = website;
  const breadcrumbs = [{ name: "Home", slug: "" }];
  const featuredImage = {
    url: featuredImageSrc,
    alt: featuredImageAlt,
    width: 672,
    height: 448,
    caption: "HomePage"
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
  return `

${validate_component(SEO, "SEO").$$render($$result, Object.assign(seoProps), {}, {})}
${validate_component(Name, "Name").$$render($$result, {}, {}, {})}
${validate_component(FeaturedProject, "FeaturedProject").$$render($$result, {}, {}, {})}
${validate_component(MyClients, "Clients").$$render($$result, {}, {}, {})}
${validate_component(MyExpertise, "Expertise").$$render($$result, {}, {}, {})}
${validate_component(MyTools, "ToolUsed").$$render($$result, {}, {}, {})}
${validate_component(AboutMe, "AboutMe").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
