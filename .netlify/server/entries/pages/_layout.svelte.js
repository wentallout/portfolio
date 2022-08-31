var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Layout
});
module.exports = __toCommonJS(stdin_exports);
var import_chunks = require("../../chunks/index.js");
var import_stores = require("../../chunks/stores.js");
var import_nprogress = __toESM(require("nprogress"));
const Caret_circle_up = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  return `<svg${(0, import_chunks.b)(
    [
      { preserveAspectRatio: "xMidYMid meet" },
      { viewBox: "0 0 256 256" },
      { width: "1.2em" },
      { height: "1.2em" },
      (0, import_chunks.e)($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M201.5 54.5a103.9 103.9 0 0 0-147 147a103.9 103.9 0 0 0 147-147Zm-11.3 135.7a88 88 0 1 1 0-124.4a87.5 87.5 0 0 1 0 124.4Zm-20.3-51.6a8 8 0 0 1-.5 11.3a8.2 8.2 0 0 1-5.4 2.1a7.9 7.9 0 0 1-5.9-2.6L128 116l-30.1 33.4a8 8 0 0 1-11.8-10.8l36-40a8 8 0 0 1 11.8 0Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const BackToTop_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: ".bck2top.svelte-3yclfz{background-color:var(--black);width:48px;height:48px;border-radius:100%;position:fixed;right:30px;bottom:30px;z-index:99;opacity:1;transition:opacity 0.3s, visibility 0.3s;user-select:none;line-height:normal}.bck2top.svelte-3yclfz:hover{cursor:pointer;transform:scale(1.5);transition:transform 0.3s;filter:brightness(1.5)}.bck2top.hidden.svelte-3yclfz{opacity:0;visibility:hidden}",
  map: null
};
const BackToTop = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let { showOnPx = 150 } = $$props;
  if ($$props.showOnPx === void 0 && $$bindings.showOnPx && showOnPx !== void 0)
    $$bindings.showOnPx(showOnPx);
  $$result.css.add(css$6);
  return `

<div class="${["bck2top svelte-3yclfz", "hidden"].join(" ").trim()}">${(0, import_chunks.v)(Caret_circle_up, "CaretCircleUp").$$render(
    $$result,
    {
      color: "var(--primary)",
      width: "48",
      height: "48"
    },
    {},
    {}
  )}
</div>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".footer-container.svelte-5gjiaz{display:flex;flex-direction:column;color:var(--white) !important;font-weight:300}footer.svelte-5gjiaz{display:flex;flex-direction:column;justify-content:center;align-items:flex-start;font-weight:300;padding:2rem 1rem;position:relative;max-width:100vw;background-color:#000}@media(min-width: 768px){footer.svelte-5gjiaz{padding:2rem 17vw}}footer.svelte-5gjiaz:before{background:url('/images/rhombus_line.png') repeat top center/49px 72px;content:'';position:absolute;top:0;left:0;width:100%;height:100%;opacity:0.12;z-index:1}.nav-list.svelte-5gjiaz{display:flex;flex-direction:row;justify-content:left;align-items:center;margin:0px;z-index:2;margin-bottom:1rem}.nav-list-item.svelte-5gjiaz{display:flex;padding-left:0;padding-right:1rem}",
  map: null
};
const Footer = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<footer class="${"svelte-5gjiaz"}"><div class="${"footer-container small-text svelte-5gjiaz"}"><ul class="${"nav-list svelte-5gjiaz"}"><li class="${"nav-list-item svelte-5gjiaz"}"><a href="${"/"}">Home</a></li>
			<li class="${"nav-list-item svelte-5gjiaz"}"><a href="${"/project"}">Project</a></li>
			<li class="${"nav-list-item svelte-5gjiaz"}"><a href="${"/resource"}">Resource</a></li>
			<li class="${"nav-list-item svelte-5gjiaz"}"><a href="${"/contact"}">Contact</a></li></ul>
		<div class="${""}">2022 - Made by Khoa with SvelteKit</div>
		<div class="${""}">wentallout@gmail.com</div></div>
</footer>`;
});
const List = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  return `<svg${(0, import_chunks.b)(
    [
      { preserveAspectRatio: "xMidYMid meet" },
      { viewBox: "0 0 256 256" },
      { width: "1.2em" },
      { height: "1.2em" },
      (0, import_chunks.e)($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8ZM40 72h176a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16Zm176 112H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const navItems = [
  {
    title: "Home",
    path: "/"
  },
  {
    title: "Project",
    path: "/project"
  },
  {
    title: "Resource",
    path: "/resource"
  },
  {
    title: "Contact",
    path: "/contact"
  }
];
const Header_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".reduced.svelte-9t61oi.svelte-9t61oi{min-height:2.5rem;font-size:var(--font-size-small);transition:all 0.3s;backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px);background-color:rgba(0, 0, 0, 0.7)}.main-header.reduced.svelte-9t61oi.svelte-9t61oi{background-color:transparent;backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px)}.main-header.svelte-9t61oi.svelte-9t61oi{max-width:100vw;color:var(--white);background-color:#000;width:100%;position:sticky;top:0;z-index:98}.hidden-mobile.svelte-9t61oi.svelte-9t61oi{display:none}nav.svelte-9t61oi ul li.svelte-9t61oi{display:flex;min-height:3.5rem;margin-left:0;width:100%}.nav__list.svelte-9t61oi.svelte-9t61oi{display:flex;flex-direction:column;justify-content:center;align-items:center;margin:0}.nav__list-item.svelte-9t61oi.svelte-9t61oi{color:var(--white);width:100%;display:flex;justify-content:center;align-items:center;border:0.1px solid var(--black)}@media(hover: hover){.nav__list-item.svelte-9t61oi.svelte-9t61oi:hover{color:var(--black);background-color:var(--primary);transition:0.3s}}@media(min-width: 768px){.hidden-mobile.svelte-9t61oi.svelte-9t61oi{display:flex}#burger-nav.svelte-9t61oi.svelte-9t61oi{display:none}.main-header.svelte-9t61oi.svelte-9t61oi{padding-left:17vw;padding-right:17vw}.nav__list.svelte-9t61oi.svelte-9t61oi{display:flex;flex-direction:row;justify-content:space-evenly;align-items:center}.nav__list-item.svelte-9t61oi.svelte-9t61oi{width:100%}}.active-page.svelte-9t61oi.svelte-9t61oi{color:var(--primary) !important;pointer-events:none}",
  map: null
};
const Header = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_chunks.d)(import_stores.p, (value) => $page = value);
  $$result.css.add(css$4);
  $$unsubscribe_page();
  return `
<header class="${["main-header base-text svelte-9t61oi", ""].join(" ").trim()}"><nav class="${"svelte-9t61oi"}"><ul class="${"nav__list svelte-9t61oi"}"><li id="${"burger-nav"}" class="${["svelte-9t61oi", ""].join(" ").trim()}"><a class="${"nav__list-item svelte-9t61oi"}"${(0, import_chunks.f)("href", "#", 0)}>${(0, import_chunks.v)(List, "List").$$render(
    $$result,
    {
      color: "var(--white)",
      width: "32",
      height: "32"
    },
    {},
    {}
  )}</a></li>

			${(0, import_chunks.g)(navItems, (navItem) => {
    return `<li class="${[
      (0, import_chunks.h)((0, import_chunks.i)(`navbar-list${" hidden-mobile"}`), true) + " svelte-9t61oi",
      ""
    ].join(" ").trim()}">${$page.url.pathname === `${navItem.path}` ? `<a class="${"nav__list-item active-page svelte-9t61oi"}"${(0, import_chunks.f)("href", navItem.path, 0)}>${(0, import_chunks.h)(navItem.title)}
						</a>` : `<a class="${"nav__list-item svelte-9t61oi"}"${(0, import_chunks.f)("href", navItem.path, 0)}>${(0, import_chunks.h)(navItem.title)}
						</a>`}
				</li>`;
  })}</ul></nav>
</header>`;
});
const Breadcrumb_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".breadcrumb.svelte-2g7qdp{margin-bottom:2rem;font-weight:300;color:var(--gray)}.breadcrumb__unclickable.svelte-2g7qdp{display:inline-block;font-weight:500}.breadcrumb__clickable.svelte-2g7qdp{color:var(--primary)}.breadcrumb__clickable.svelte-2g7qdp:hover{color:var(--primary-hover)}",
  map: null
};
const Breadcrumb = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let { path } = $$props;
  var crumbs;
  if ($$props.path === void 0 && $$bindings.path && path !== void 0)
    $$bindings.path(path);
  $$result.css.add(css$3);
  {
    {
      const tokens = path.split("/").filter((t) => t !== "");
      let tokenPath = "";
      crumbs = tokens.map((t) => {
        tokenPath += "/" + t;
        return { label: t, href: tokenPath };
      });
      crumbs.unshift({ label: "home", href: "/" });
    }
  }
  return `<div class="${"breadcrumb small-text svelte-2g7qdp"}">${(0, import_chunks.g)(crumbs, (c, i) => {
    return `${i == crumbs.length - 1 ? `<div class="${"breadcrumb__unclickable svelte-2g7qdp"}">${(0, import_chunks.h)(c.label)}
			</div>` : `<a class="${"breadcrumb__clickable svelte-2g7qdp"}"${(0, import_chunks.f)("href", c.href, 0)}>${(0, import_chunks.h)(c.label)}</a> &gt;\xA0`}`;
  })}
</div>`;
});
const CoolFrame_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".frameWrap.svelte-1sfynh{display:none;pointer-events:none;position:fixed;z-index:3;top:0;left:0;width:100%;height:100%;transition:0.3s;opacity:0.5}@media(min-width: 768px){.frameWrap.svelte-1sfynh{display:block}}.frame2.svelte-1sfynh:before,.frame2.svelte-1sfynh:after,.corner.svelte-1sfynh:before,.corner.svelte-1sfynh:after{content:'';display:block;position:absolute;box-sizing:border-box;z-index:2}.frame2.svelte-1sfynh{z-index:1;top:0;bottom:0;left:0;right:0;position:absolute;box-sizing:border-box}.frame2.svelte-1sfynh:before{background:url('/images/frame2corner.png') no-repeat 0 0/100%;top:0;left:0;width:21px;height:21px}.frame2.svelte-1sfynh:after{background:url('/images/frame2corner.png') no-repeat 0 0/100%;top:0;right:0;transform:rotate(90deg);width:21px;height:21px}.corner.svelte-1sfynh:before{background:url('/images/frame2corner.png') no-repeat 0 0/100%;bottom:0;left:0;transform:rotate(-90deg);width:21px;height:21px}.corner.svelte-1sfynh:after{background:url('/images/frame2corner.png') no-repeat 0 0/100%;bottom:0;right:0;transform:rotate(180deg);width:21px;height:21px}.bar.svelte-1sfynh{position:absolute;top:4px;bottom:4px;left:21px;right:21px;border-top:1px solid var(--primary);border-bottom:1px solid var(--primary)}.bar.svelte-1sfynh:before{display:block;position:absolute;left:-17px;content:'';width:0.5px;top:16px;bottom:16px;background:var(--primary)}.bar.svelte-1sfynh:after{content:'';display:block;position:absolute;right:-17px;width:0.5px;top:16px;bottom:16px;background:var(--primary)}",
  map: null
};
const CoolFrame = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="${"frameWrap svelte-1sfynh"}"><div class="${"frame2 svelte-1sfynh"}"><div class="${"corner svelte-1sfynh"}"></div>
		<div class="${"bar svelte-1sfynh"}"></div></div>
</div>`;
});
const Yin_yang = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  return `<svg${(0, import_chunks.b)(
    [
      { preserveAspectRatio: "xMidYMid meet" },
      { viewBox: "0 0 256 256" },
      { width: "1.2em" },
      { height: "1.2em" },
      (0, import_chunks.e)($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.2 104.2 0 0 0 128 24ZM40 128a88.1 88.1 0 0 1 88-88a40 40 0 0 1 0 80a56 56 0 0 0-56 56a55.2 55.2 0 0 0 5.4 24A88.1 88.1 0 0 1 40 128Zm88 88a40 40 0 0 1 0-80a56 56 0 0 0 56-56a55.2 55.2 0 0 0-5.4-24A88 88 0 0 1 128 216Zm12-40a12 12 0 1 1-12-12a12 12 0 0 1 12 12Zm-24-96a12 12 0 1 1 12 12a12 12 0 0 1-12-12Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const LogoContainer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".svg-container.svelte-1cgjoob{display:flex;justify-content:center;align-items:center;width:60%;height:60%;background-color:transparent}@media(min-width: 768px){.svg-container.svelte-1cgjoob{width:100%;height:100%}}.logo-container.svelte-1cgjoob{position:relative;max-width:100vw;width:100%;display:flex;justify-content:center;align-items:center;background-color:#000}",
  map: null
};
const LogoContainer = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"logo-container svelte-1cgjoob"}"><div class="${"svg-container svelte-1cgjoob"}">${(0, import_chunks.v)(Yin_yang, "YinYang").$$render(
    $$result,
    {
      class: "rotate",
      color: "var(--black)",
      width: "64",
      height: "64"
    },
    {},
    {}
  )}</div>
</div>`;
});
const normalize = "";
const global = "";
const weird = "";
const atropos_min = "";
const nprogress = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".page-container.svelte-1gmu23n{background-color:var(--background);display:flex;flex-direction:column}.main-content.svelte-1gmu23n{min-height:calc(100vh - 70px);padding:2rem 1rem}@media(min-width: 768px){.main-content.svelte-1gmu23n{padding:2rem 17vw}}",
  map: null
};
const Layout = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let $navigating, $$unsubscribe_navigating;
  let $page, $$unsubscribe_page;
  $$unsubscribe_navigating = (0, import_chunks.d)(import_stores.n, (value) => $navigating = value);
  $$unsubscribe_page = (0, import_chunks.d)(import_stores.p, (value) => $page = value);
  import_nprogress.default.configure({
    minimum: 0.1,
    showSpinner: false,
    trickle: false,
    easing: "ease",
    speed: 500
  });
  $$result.css.add(css);
  {
    {
      if ($navigating) {
        import_nprogress.default.start();
      }
      if (!$navigating) {
        import_nprogress.default.done();
      }
    }
  }
  $$unsubscribe_navigating();
  $$unsubscribe_page();
  return `${$$result.head += `<link rel="${"preconnect"}" href="${"https://fonts.googleapis.com"}" data-svelte="svelte-l9vls8"><link rel="${"preconnect"}" href="${"https://fonts.gstatic.com"}" crossorigin data-svelte="svelte-l9vls8"><link href="${"https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"}" rel="${"stylesheet"}" data-svelte="svelte-l9vls8">`, ""}

<div class="${"page-container svelte-1gmu23n"}">${(0, import_chunks.v)(CoolFrame, "CoolFrame").$$render($$result, {}, {}, {})}
	${(0, import_chunks.v)(BackToTop, "BackToTop").$$render($$result, {}, {}, {})}
	${(0, import_chunks.v)(LogoContainer, "LogoContainer").$$render($$result, {}, {}, {})}
	${(0, import_chunks.v)(Header, "Header").$$render($$result, {}, {}, {})}

	<main class="${"main-content svelte-1gmu23n"}">${(0, import_chunks.v)(Breadcrumb, "Breadcrumb").$$render($$result, { path: $page.url.pathname }, {}, {})}
		${slots.default ? slots.default({}) : ``}</main>

	${(0, import_chunks.v)(Footer, "Footer").$$render($$result, {}, {}, {})}
</div>`;
});
