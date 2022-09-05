var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Page
});
module.exports = __toCommonJS(stdin_exports);
var import_chunks = require("../../chunks/index.js");
var import_SEO = require("../../chunks/SEO.js");
var import_config = require("../../chunks/config.js");
var import_object_hash = require("object-hash");
const Atropos_svelte = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let $$restProps = (0, import_chunks.k)($$props, [
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
  (0, import_chunks.l)();
  let elRef = null;
  const cls = (...args) => {
    return args.filter((c) => !!c).join(" ");
  };
  (0, import_chunks.o)(() => {
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
  return `<div${(0, import_chunks.d)(
    [
      {
        class: (0, import_chunks.p)(cls("atropos", className))
      },
      (0, import_chunks.e)($$restProps)
    ],
    {}
  )}${(0, import_chunks.b)("this", elRef, 0)}><span${(0, import_chunks.b)("class", cls("atropos-scale", scaleClass), 0)}><span${(0, import_chunks.b)("class", cls("atropos-rotate", rotateClass), 0)}><span${(0, import_chunks.b)("class", cls("atropos-inner", innerClass), 0)}>${slots.default ? slots.default({}) : ``}
        ${highlight || typeof highlight === "undefined" ? `<span class="${"atropos-highlight"}"></span>` : ``}</span>
      ${slots.rotate ? slots.rotate({}) : ``}
      ${shadow || typeof shadow === "undefined" ? `<span class="${"atropos-shadow"}"></span>` : ``}</span>
    ${slots.scale ? slots.scale({}) : ``}</span>
  ${slots.root ? slots.root({}) : ``}</div>`;
});
const Atropos = Atropos_svelte;
const Hero_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".atropos-container.svelte-6ahp1k{margin-bottom:var(--space-l)}.btn-seemywork.svelte-6ahp1k{background-color:var(--primary);color:var(--black)}.btn-seemywork.svelte-6ahp1k:hover{background-color:var(--primary-hover)}.hero.svelte-6ahp1k{background-image:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),\r\n			url('/images/fuji.svg');width:100%;height:600px;background-position:center;background-repeat:no-repeat;background-size:cover;display:flex;justify-content:center;align-items:center}.hero-text.svelte-6ahp1k{display:flex;flex-direction:column;justify-content:center;align-items:center;color:var(--white)}",
  map: null
};
const Hero = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"atropos-container svelte-6ahp1k"}">${(0, import_chunks.v)(Atropos, "Atropos").$$render(
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
        return `<div class="${"hero svelte-6ahp1k"}"><div class="${"hero-text svelte-6ahp1k"}"><h1 data-atropos-offset="${"-5"}">Hi! I&#39;m Khoa</h1>
				<p data-atropos-offset="${"-3"}">I code and design.</p>
				<a data-atropos-offset="${"10"}" class="${"btn btn-seemywork svelte-6ahp1k"}" href="${"/project"}">See my work</a></div></div>`;
      }
    }
  )}
</div>`;
});
const fpt = "/_app/immutable/assets/fpt-25e5d114.webp";
const nashtech = "/_app/immutable/assets/nashtech-b8b99d2d.webp";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".past-clients.svelte-12uhlh4{width:100%;display:flex;justify-content:center;align-items:center;flex-direction:column;margin-bottom:var(--space-l)}.past-clients__logo.svelte-12uhlh4{display:flex;justify-content:center;align-items:center;flex-direction:column;flex-wrap:wrap}@media(min-width: 768px){.past-clients__logo.svelte-12uhlh4{flex-direction:row}}.logo.svelte-12uhlh4{width:200px;height:200px;width:auto}@media(min-width: 768px){.logo.svelte-12uhlh4{width:300px;height:300px}}",
  map: null
};
let title = "Home";
let metadescription = "Portfolio - UIUX Designer, Web Developer Nguyen Dang Khoa";
const featuredImageAlt = "Portfolio of Khoa";
const Page = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  const { author, siteUrl } = import_config.w;
  const breadcrumbs = [{ name: "Home", slug: "" }];
  const featuredImage = {
    url: import_SEO.f,
    alt: featuredImageAlt,
    width: 672,
    height: 448,
    caption: "Home page"
  };
  const ogImage = { url: import_SEO.o, alt: featuredImageAlt };
  const ogSquareImage = {
    url: import_SEO.a,
    alt: featuredImageAlt
  };
  const twitterImage = {
    url: import_SEO.t,
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

${(0, import_chunks.v)(import_SEO.S, "SEO").$$render($$result, Object.assign(seoProps), {}, {})}
${(0, import_chunks.v)(Hero, "Hero").$$render($$result, {}, {}, {})}

<div class="${"past-clients svelte-12uhlh4"}"><p class="${"past-clients__text base-text"}">I have worked for</p>
	<div class="${"past-clients__logo svelte-12uhlh4"}"><img loading="${"lazy"}" decoding="${"async"}" class="${"logo svelte-12uhlh4"}"${(0, import_chunks.b)("src", fpt, 0)} alt="${"FPT Software"}">
		<img loading="${"lazy"}" decoding="${"async"}" class="${"logo svelte-12uhlh4"}"${(0, import_chunks.b)("src", nashtech, 0)} alt="${"NashTech"}"></div></div>

<div></div>`;
});
