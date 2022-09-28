import { c as create_ssr_component, k as compute_rest_props, l as createEventDispatcher, o as onDestroy, d as spread, p as escape_attribute_value, e as escape_object, b as add_attribute, v as validate_component } from "../../chunks/index.js";
import { B as Button } from "../../chunks/Button.js";
import { S as SEO, f as featuredImageSrc, o as ogImageSrc, a as ogSquareImageSrc, t as twitterImageSrc } from "../../chunks/SEO.js";
import { w as website } from "../../chunks/config.js";
const Atropos_svelte = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "class",
    "scaleClass",
    "rotateClass",
    "innerClass",
    "eventsEl",
    "alwaysActive",
    "activeOffset",
    "shadowOffset",
    "shadowScale",
    "duration",
    "rotate",
    "rotateTouch",
    "rotateXMax",
    "rotateYMax",
    "rotateXInvert",
    "rotateYInvert",
    "stretchX",
    "stretchY",
    "stretchZ",
    "commonOrigin",
    "shadow",
    "highlight"
  ]);
  let { class: className = "" } = $$props;
  let { scaleClass = "" } = $$props;
  let { rotateClass = "" } = $$props;
  let { innerClass = "" } = $$props;
  let { eventsEl = void 0 } = $$props;
  let { alwaysActive = void 0 } = $$props;
  let { activeOffset = void 0 } = $$props;
  let { shadowOffset = void 0 } = $$props;
  let { shadowScale = void 0 } = $$props;
  let { duration = void 0 } = $$props;
  let { rotate = void 0 } = $$props;
  let { rotateTouch = void 0 } = $$props;
  let { rotateXMax = void 0 } = $$props;
  let { rotateYMax = void 0 } = $$props;
  let { rotateXInvert = void 0 } = $$props;
  let { rotateYInvert = void 0 } = $$props;
  let { stretchX = void 0 } = $$props;
  let { stretchY = void 0 } = $$props;
  let { stretchZ = void 0 } = $$props;
  let { commonOrigin = true } = $$props;
  let { shadow = true } = $$props;
  let { highlight = true } = $$props;
  createEventDispatcher();
  let elRef = null;
  const cls = (...args) => {
    return args.filter((c) => !!c).join(" ");
  };
  onDestroy(() => {
  });
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.scaleClass === void 0 && $$bindings.scaleClass && scaleClass !== void 0)
    $$bindings.scaleClass(scaleClass);
  if ($$props.rotateClass === void 0 && $$bindings.rotateClass && rotateClass !== void 0)
    $$bindings.rotateClass(rotateClass);
  if ($$props.innerClass === void 0 && $$bindings.innerClass && innerClass !== void 0)
    $$bindings.innerClass(innerClass);
  if ($$props.eventsEl === void 0 && $$bindings.eventsEl && eventsEl !== void 0)
    $$bindings.eventsEl(eventsEl);
  if ($$props.alwaysActive === void 0 && $$bindings.alwaysActive && alwaysActive !== void 0)
    $$bindings.alwaysActive(alwaysActive);
  if ($$props.activeOffset === void 0 && $$bindings.activeOffset && activeOffset !== void 0)
    $$bindings.activeOffset(activeOffset);
  if ($$props.shadowOffset === void 0 && $$bindings.shadowOffset && shadowOffset !== void 0)
    $$bindings.shadowOffset(shadowOffset);
  if ($$props.shadowScale === void 0 && $$bindings.shadowScale && shadowScale !== void 0)
    $$bindings.shadowScale(shadowScale);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.rotate === void 0 && $$bindings.rotate && rotate !== void 0)
    $$bindings.rotate(rotate);
  if ($$props.rotateTouch === void 0 && $$bindings.rotateTouch && rotateTouch !== void 0)
    $$bindings.rotateTouch(rotateTouch);
  if ($$props.rotateXMax === void 0 && $$bindings.rotateXMax && rotateXMax !== void 0)
    $$bindings.rotateXMax(rotateXMax);
  if ($$props.rotateYMax === void 0 && $$bindings.rotateYMax && rotateYMax !== void 0)
    $$bindings.rotateYMax(rotateYMax);
  if ($$props.rotateXInvert === void 0 && $$bindings.rotateXInvert && rotateXInvert !== void 0)
    $$bindings.rotateXInvert(rotateXInvert);
  if ($$props.rotateYInvert === void 0 && $$bindings.rotateYInvert && rotateYInvert !== void 0)
    $$bindings.rotateYInvert(rotateYInvert);
  if ($$props.stretchX === void 0 && $$bindings.stretchX && stretchX !== void 0)
    $$bindings.stretchX(stretchX);
  if ($$props.stretchY === void 0 && $$bindings.stretchY && stretchY !== void 0)
    $$bindings.stretchY(stretchY);
  if ($$props.stretchZ === void 0 && $$bindings.stretchZ && stretchZ !== void 0)
    $$bindings.stretchZ(stretchZ);
  if ($$props.commonOrigin === void 0 && $$bindings.commonOrigin && commonOrigin !== void 0)
    $$bindings.commonOrigin(commonOrigin);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.highlight === void 0 && $$bindings.highlight && highlight !== void 0)
    $$bindings.highlight(highlight);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(cls("atropos", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", elRef, 0)}><span${add_attribute("class", cls("atropos-scale", scaleClass), 0)}><span${add_attribute("class", cls("atropos-rotate", rotateClass), 0)}><span${add_attribute("class", cls("atropos-inner", innerClass), 0)}>${slots.default ? slots.default({}) : ``}
        ${highlight || typeof highlight === "undefined" ? `<span class="${"atropos-highlight"}"></span>` : ``}</span>
      ${slots.rotate ? slots.rotate({}) : ``}
      ${shadow || typeof shadow === "undefined" ? `<span class="${"atropos-shadow"}"></span>` : ``}</span>
    ${slots.scale ? slots.scale({}) : ``}</span>
  ${slots.root ? slots.root({}) : ``}</div>`;
});
const Atropos = Atropos_svelte;
const Hero_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".atropos-container.svelte-y9q7w6{margin-bottom:var(--space-l)}.hero.svelte-y9q7w6{background-image:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),\r\n			url('/images/fuji.svg');border-radius:var(--border-radius);width:100%;height:600px;background-position:center;background-repeat:no-repeat;background-size:cover;display:flex;justify-content:center;align-items:center}.hero-text.svelte-y9q7w6{display:flex;flex-direction:column;justify-content:center;align-items:center;color:var(--neutral-100)}",
  map: null
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"atropos-container svelte-y9q7w6"}">${validate_component(Atropos, "Atropos").$$render(
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
        return `<div class="${"hero svelte-y9q7w6"}"><div class="${"hero-text svelte-y9q7w6"}"><h1 data-atropos-offset="${"-5"}">Hi! I&#39;m Khoa</h1>
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
  code: ".past-clients.svelte-12uhlh4{width:100%;display:flex;justify-content:center;align-items:center;flex-direction:column;margin-bottom:var(--space-l)}.past-clients__logo.svelte-12uhlh4{display:flex;justify-content:center;align-items:center;flex-direction:column;flex-wrap:wrap}@media(min-width: 768px){.past-clients__logo.svelte-12uhlh4{flex-direction:row}}.logo.svelte-12uhlh4{width:200px;height:200px;width:auto}@media(min-width: 768px){.logo.svelte-12uhlh4{width:300px;height:300px}}",
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

<div class="${"past-clients svelte-12uhlh4"}"><p class="${"past-clients__text base-text"}">I have worked for</p>
	<div class="${"past-clients__logo svelte-12uhlh4"}"><img loading="${"lazy"}" decoding="${"async"}" class="${"logo svelte-12uhlh4"}"${add_attribute("src", fpt, 0)} alt="${"FPT Software"}">
		<img loading="${"lazy"}" decoding="${"async"}" class="${"logo svelte-12uhlh4"}"${add_attribute("src", nashtech, 0)} alt="${"NashTech"}"></div></div>

<div></div>`;
});
export {
  Page as default
};
