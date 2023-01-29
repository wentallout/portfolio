import { c as create_ssr_component, d as add_attribute, e as spread, f as escape_object, v as validate_component, g as each, h as escape, j as null_to_empty, b as subscribe } from "../../chunks/index3.js";
import { w as website, n as navItems } from "../../chunks/config.js";
import { S as SocialButtons } from "../../chunks/SocialButtons.js";
import { p as page, n as navigating } from "../../chunks/stores.js";
import NProgress from "nprogress";
import "vanilla-lazyload";
const SkipLink_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: ".skip-link.svelte-p1hkwv{background-color:var(--accent-900);color:var(--text-color);left:0;padding:var(--space-s);position:fixed;right:0;text-align:center;top:0;transition:translate .15s ease-in-out;transition:background-color .5s;translate:0 -100%;z-index:11}.skip-link.svelte-p1hkwv:hover{background-color:var(--accent-700)}.skip-link.svelte-p1hkwv:focus{outline:none;translate:0}",
  map: null
};
const SkipLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$6);
  return `<a class="${"skip-link svelte-p1hkwv"}" href="${"#main-content"}">Skip to main content </a>`;
});
const PWA = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const { themeColor } = website;
  return `${$$result.head += `<!-- HEAD_svelte-12k4fzg_START --><meta name="${"theme-color"}"${add_attribute("content", themeColor, 0)}><!-- HEAD_svelte-12k4fzg_END -->`, ""}`;
});
const Caret_up = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 256 256" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M208 168a8.5 8.5 0 0 1-5.7-2.3L128 91.3l-74.3 74.4a8.1 8.1 0 0 1-11.4-11.4l80-80a8.1 8.1 0 0 1 11.4 0l80 80a8.1 8.1 0 0 1 0 11.4a8.5 8.5 0 0 1-5.7 2.3Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const BackToTop_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".bck2top.svelte-csiq9k{align-items:center;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);background-color:rgba(0,0,0,.5);bottom:10px;-webkit-clip-path:polygon(50% 0,100% 50%,50% 100%,0 50%);clip-path:polygon(50% 0,100% 50%,50% 100%,0 50%);display:flex;height:56px;justify-content:center;line-height:normal;opacity:1;position:fixed;right:10px;transition:opacity .3s,visibility .3s;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:56px;z-index:99}@media(min-width:768px){.bck2top.svelte-csiq9k{height:64px;width:64px}}@media(hover:hover){.bck2top.svelte-csiq9k:hover{cursor:pointer;filter:brightness(1.2);transform:scale(1.2);transition:transform .3s}}.bck2top.hidden.svelte-csiq9k{opacity:0;visibility:hidden}",
  map: null
};
const BackToTop = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { showOnPx = 150 } = $$props;
  if ($$props.showOnPx === void 0 && $$bindings.showOnPx && showOnPx !== void 0)
    $$bindings.showOnPx(showOnPx);
  $$result.css.add(css$5);
  return `

<div class="${["bck2top svelte-csiq9k", "hidden"].join(" ").trim()}">${validate_component(Caret_up, "CaretUp").$$render($$result, { class: "icon", width: "24", height: "24" }, {}, {})}
</div>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: '.other-info.svelte-1mvxf8b.svelte-1mvxf8b{color:var(--text-color-low);margin-top:var(--space-s);-webkit-user-select:none;-moz-user-select:none;user-select:none}.secret.svelte-1mvxf8b.svelte-1mvxf8b{color:transparent;transition:var(--transition)}.other-info.svelte-1mvxf8b:hover+.secret.svelte-1mvxf8b{color:var(--primary-500)}footer.svelte-1mvxf8b.svelte-1mvxf8b{align-items:flex-start;background-color:var(--black);display:flex;flex-direction:column;justify-content:center;max-width:100vw;padding:var(--space-2xl) var(--space-xs)}footer.svelte-1mvxf8b.svelte-1mvxf8b:before{background:linear-gradient(180deg,var(--page-bg) 0,hsla(0,0%,7%,.5) 12%,hsla(0,0%,7%,.1) 30%,hsla(0,0%,7%,0) 40%);bottom:0;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0;z-index:0}.footer-container.svelte-1mvxf8b.svelte-1mvxf8b{color:var(--text-color);display:flex;flex-direction:column;font-weight:300}@media(min-width:768px){footer.svelte-1mvxf8b.svelte-1mvxf8b{padding:var(--space-xl) 20vw}}.nav-list.svelte-1mvxf8b.svelte-1mvxf8b{align-items:center;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:left;margin:0;margin-bottom:var(--space-l)}.nav-list-item.svelte-1mvxf8b.svelte-1mvxf8b{display:flex;padding-left:0;padding-right:var(--space-xs)}.nav-list-item.svelte-1mvxf8b a.svelte-1mvxf8b{font-weight:500;transition:.3s}.nav-list-item.svelte-1mvxf8b a.svelte-1mvxf8b:hover{color:var(--primary-500)}footer.svelte-1mvxf8b.svelte-1mvxf8b{position:relative}',
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<footer class="${"svelte-1mvxf8b"}"><div class="${"footer-container small-text svelte-1mvxf8b"}"><ul class="${"nav-list svelte-1mvxf8b"}">${each(navItems, (navItem) => {
    return `<li class="${"nav-list-item svelte-1mvxf8b"}"><a${add_attribute("href", navItem.path, 0)} class="${"svelte-1mvxf8b"}">${escape(navItem.title)}</a>
				</li>`;
  })}</ul>

		${validate_component(SocialButtons, "SocialButtons").$$render($$result, {}, {}, {})}

		<div class="${"other-info small-text svelte-1mvxf8b"}">wentallout © 2021 - 2023</div>
		<div class="${"secret small-text svelte-1mvxf8b"}">I declare war on anybody standing in the way of what I dream for.
		</div></div>
</footer>`;
});
const List = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 256 256" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8ZM40 72h176a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16Zm176 112H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const X = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 256 256" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M205.7 194.3a8.1 8.1 0 0 1 0 11.4a8.2 8.2 0 0 1-11.4 0L128 139.3l-66.3 66.4a8.2 8.2 0 0 1-11.4 0a8.1 8.1 0 0 1 0-11.4l66.4-66.3l-66.4-66.3a8.1 8.1 0 0 1 11.4-11.4l66.3 66.4l66.3-66.4a8.1 8.1 0 0 1 11.4 11.4L139.3 128Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const VanishingHeader_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "div.svelte-bfhcfu{position:fixed;top:0;transition:transform .1s linear;width:100%;z-index:10}.show.svelte-bfhcfu{transform:translateY(0)}.hide.svelte-bfhcfu{transform:translateY(-100%)}",
  map: null
};
const VanishingHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { duration = "300ms" } = $$props;
  let { offset = 0 } = $$props;
  let { tolerance = 0 } = $$props;
  let headerClass = "show";
  let y = 0;
  let lastY = 0;
  function deriveClass(y2, dy) {
    if (y2 < offset) {
      return "show";
    }
    if (Math.abs(dy) <= tolerance) {
      return headerClass;
    }
    if (dy < 0) {
      return "hide";
    }
    return "show";
  }
  function updateClass(y2) {
    const dy = lastY - y2;
    lastY = y2;
    return deriveClass(y2, dy);
  }
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.offset === void 0 && $$bindings.offset && offset !== void 0)
    $$bindings.offset(offset);
  if ($$props.tolerance === void 0 && $$bindings.tolerance && tolerance !== void 0)
    $$bindings.tolerance(tolerance);
  $$result.css.add(css$3);
  headerClass = updateClass(y);
  return `

<div class="${escape(null_to_empty(headerClass), true) + " svelte-bfhcfu"}">${slots.default ? slots.default({}) : ``}
</div>`;
});
const Header_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".active-page.svelte-1w57ojt{background-color:var(--primary-500);color:var(--black)}.active-page.svelte-1w57ojt:hover{color:var(--neutral-900)!important}.nav-list__item.svelte-1w57ojt:hover{color:var(--primary-500)}.nav.svelte-1w57ojt{background-color:transparent;display:flex;font-size:var(--font-size-base);font-weight:500;max-width:100vw;transition:var(--transition);width:100%}.nav.svelte-1w57ojt,.nav-scrolldown.svelte-1w57ojt{color:var(--text-color)}.nav-scrolldown.svelte-1w57ojt{-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);background-color:rgba(0,0,0,.7)!important}.nav-list.svelte-1w57ojt{display:flex;flex-direction:row;margin:0;width:100%}.nav-list__item.svelte-1w57ojt{display:none}.hamburger.svelte-1w57ojt{cursor:pointer;display:flex;justify-content:center;padding:var(--space-xs);width:100%}@media(min-width:768px){.nav.svelte-1w57ojt{padding:0 20vw}.nav-list__item.svelte-1w57ojt{align-items:center;display:flex;justify-content:center;line-height:1;width:100%}.hamburger.svelte-1w57ojt{display:none}}.item.svelte-1w57ojt{align-items:center;display:flex;height:100%;justify-content:center;padding:var(--space-s);transition:var(--transition);width:100%}.overlay.svelte-1w57ojt{-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);background-color:rgba(0,0,0,.9);font-weight:500;height:0;left:0;overflow-y:hidden;position:fixed;top:0;transition:.2s;width:100%;z-index:99}.overlay-content.svelte-1w57ojt{flex-direction:column;justify-content:center;position:relative;top:60px}.overlay-content.svelte-1w57ojt,.overlay-item.svelte-1w57ojt{align-items:center;display:flex;width:100%}.overlay-item.svelte-1w57ojt{color:var(--neutral-200);height:var(--scroll-padding);outline:1px solid transparent;padding:var(--space-l) 0;padding-left:20vw;padding-right:20vw;transition:var(--transition)}.overlay-item.svelte-1w57ojt:focus,.overlay-item.svelte-1w57ojt:hover{color:var(--primary-500);outline:1px solid var(--primary-500)}.closebtn.svelte-1w57ojt{align-items:center;background-color:var(--primary-500);cursor:pointer;display:flex;height:var(--scroll-padding);justify-content:center;position:absolute;top:0;width:100%}@media screen and (max-height:450px){.overlay.svelte-1w57ojt{overflow-y:auto}}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let navOverlayEle;
  let header;
  $$result.css.add(css$2);
  $$unsubscribe_page();
  return `

${validate_component(VanishingHeader, "VanishingHeader").$$render(
    $$result,
    {
      duration: "350ms",
      offset: 50,
      tolerance: 5
    },
    {},
    {
      default: () => {
        return `<header${add_attribute("this", header, 0)}><nav class="${["nav svelte-1w57ojt", ""].join(" ").trim()}"><ul class="${"nav-list svelte-1w57ojt"}">${each(navItems, (navItem) => {
          return `<li class="${[
            "nav-list__item svelte-1w57ojt",
            $page.url.pathname === `${navItem.path}` ? "active-page" : ""
          ].join(" ").trim()}"><a class="${"item svelte-1w57ojt"}"${add_attribute("href", navItem.path, 0)}>${escape(navItem.title)}</a>
					</li>`;
        })}

				<li class="${"hamburger svelte-1w57ojt"}">${validate_component(List, "List").$$render(
          $$result,
          {
            color: "var(--text-color)",
            width: "32",
            height: "32"
          },
          {},
          {}
        )}</li></ul></nav></header>`;
      }
    }
  )}

<div class="${"overlay svelte-1w57ojt"}"${add_attribute("this", navOverlayEle, 0)}><div class="${"closebtn svelte-1w57ojt"}">${validate_component(X, "X").$$render(
    $$result,
    {
      color: "var(--primary-900)",
      width: "32",
      height: "32"
    },
    {},
    {}
  )}</div>
	<div class="${"overlay-content svelte-1w57ojt"}">${each(navItems, (navItem) => {
    return `<a class="${"overlay-item xl-text svelte-1w57ojt"}"${add_attribute("href", navItem.path, 0)}>${escape(navItem.title)}</a>`;
  })}
		<div class="${"overlay-item svelte-1w57ojt"}">${validate_component(SocialButtons, "SocialButtons").$$render($$result, {}, {}, {})}</div></div>
</div>`;
});
const Breadcrumb_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".breadcrumb.svelte-16yhvqg{color:var(--text-color-low);font-weight:300;margin-bottom:var(--space-l);margin-top:var(--space-xl)}.breadcrumb__unclickable.svelte-16yhvqg{display:inline-block;font-weight:500;pointer-events:none}.breadcrumb__clickable.svelte-16yhvqg{color:var(--accent-500);display:inline-flex}.breadcrumb__clickable.svelte-16yhvqg:hover{color:var(--accent-300)}",
  map: null
};
const Breadcrumb = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { path } = $$props;
  var crumbs;
  if ($$props.path === void 0 && $$bindings.path && path !== void 0)
    $$bindings.path(path);
  $$result.css.add(css$1);
  {
    {
      const tokens = path.split("/").filter((t) => t !== "");
      let tokenPath = "";
      crumbs = tokens.map((t) => {
        tokenPath += "/" + t;
        return {
          label: t.replace("-", " "),
          href: tokenPath
        };
      });
      crumbs.unshift({ label: "home", href: "/" });
    }
  }
  return `<nav aria-label="${"breadcrumb"}" id="${"breadcrumb"}" class="${"breadcrumb base-text svelte-16yhvqg"}">${each(crumbs, (c, i) => {
    return `${i == crumbs.length - 1 ? `<div class="${"breadcrumb__unclickable svelte-16yhvqg"}">${escape(c.label)}
			</div>` : `<a class="${"breadcrumb__clickable svelte-16yhvqg"}"${add_attribute("href", c.href, 0)}>${escape(c.label)}</a> / `}`;
  })}
</nav>`;
});
const CursorTrail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ``;
});
const fonts = "";
const sanitize = "";
const global = "";
const weird = "";
const atropos_min = "";
const nprogress = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: '.page-container.svelte-1hkw5wv{background:var(--page-bg)}.main-content.svelte-1hkw5wv{display:flex;flex-direction:column;min-height:100vh;padding:var(--space-l) 1rem;position:relative;z-index:1}.main-content.svelte-1hkw5wv:before{background:url(/images/bg_decor_flower_l.png),url(/images/bg_decor_line_r.png);background-position:top var(--space-3xl) left 0,top var(--space-3xl) right 0;background-repeat:no-repeat;left:0;top:0}.main-content.svelte-1hkw5wv:after,.main-content.svelte-1hkw5wv:before{content:"";height:100%;position:absolute;width:100%;z-index:-1}.main-content.svelte-1hkw5wv:after{background:url(/images/bg_decor_line_l.png),url(/images/bg_decor_flower_r.png);background-position:bottom var(--space-xl) left 0,bottom var(--space-xl) right 0;background-repeat:no-repeat;bottom:0;right:0}@media(max-width:991px){.main-content.svelte-1hkw5wv:after,.main-content.svelte-1hkw5wv:before{display:none}}@media(min-width:768px){.main-content.svelte-1hkw5wv{padding:var(--space-l) 20vw}}',
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $navigating, $$unsubscribe_navigating;
  let $page, $$unsubscribe_page;
  $$unsubscribe_navigating = subscribe(navigating, (value) => $navigating = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  NProgress.configure({
    minimum: 0.1,
    showSpinner: false,
    trickle: false,
    easing: "ease",
    speed: 500
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  {
    {
      if ($navigating) {
        NProgress.start();
      }
      if (!$navigating) {
        NProgress.done();
      }
    }
  }
  $$unsubscribe_navigating();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-ser1xn_START --><meta name="${"google-site-verification"}" content="${"jDcuv7ulyNCJGJg0K24h9h6T_YqP9l5TBbv2DWOHh-w"}"><!-- HEAD_svelte-ser1xn_END -->`, ""}

${validate_component(SkipLink, "SkipLink").$$render($$result, {}, {}, {})}
${validate_component(PWA, "PWA").$$render($$result, {}, {}, {})}
${validate_component(CursorTrail, "CursorTrail").$$render($$result, {}, {}, {})}
<div class="${"page-container svelte-1hkw5wv"}" data-sveltekit-preload-data>${validate_component(BackToTop, "BackToTop").$$render($$result, {}, {}, {})}
	${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

	<main class="${"main-content svelte-1hkw5wv"}" id="${"main-content"}">${validate_component(Breadcrumb, "Breadcrumb").$$render($$result, { path: $page.url.pathname }, {}, {})}
			${slots.default ? slots.default({}) : ``}</main>

	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}
</div>`;
});
export {
  Layout as default
};
