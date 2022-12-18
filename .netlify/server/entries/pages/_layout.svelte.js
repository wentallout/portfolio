import { c as create_ssr_component, d as add_attribute, e as spread, f as escape_object, v as validate_component, g as each, h as escape, j as null_to_empty, b as subscribe } from "../../chunks/index.js";
import { w as website, n as navItems } from "../../chunks/config.js";
import { P as Phone, L as Linkedin_logo } from "../../chunks/phone.js";
import { p as page, n as navigating } from "../../chunks/stores.js";
import "circletype";
import NProgress from "nprogress";
import "vanilla-lazyload";
const SkipLink_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: ".skip-link.svelte-x4qkrt{background-color:var(--accent-900);color:var(--neutral-100);left:0;padding:var(--space-s);position:fixed;right:0;text-align:center;top:0;transition:translate .15s ease-in-out;transition:background-color .5s;translate:0 -100%;z-index:11}.skip-link.svelte-x4qkrt:hover{background-color:var(--accent-700)}.skip-link.svelte-x4qkrt:focus{outline:none;translate:0}",
  map: null
};
const SkipLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$7);
  return `<a class="${"skip-link svelte-x4qkrt"}" href="${"#main-content"}">Skip to main content </a>`;
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
const css$6 = {
  code: ".bck2top.svelte-1kuqezj{align-items:center;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);background-color:var(--primary-600);bottom:30px;-webkit-clip-path:polygon(50% 0,100% 50%,50% 100%,0 50%);clip-path:polygon(50% 0,100% 50%,50% 100%,0 50%);display:flex;height:48px;justify-content:center;line-height:normal;opacity:1;position:fixed;right:30px;transition:opacity .3s,visibility .3s;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:48px;z-index:99}@media(min-width:768px){.bck2top.svelte-1kuqezj{height:64px;width:64px}}@media(hover:hover){.bck2top.svelte-1kuqezj:hover{cursor:pointer;filter:brightness(1.2);transform:scale(1.2);transition:transform .3s}}.bck2top.hidden.svelte-1kuqezj{opacity:0;visibility:hidden}",
  map: null
};
const BackToTop = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { showOnPx = 150 } = $$props;
  if ($$props.showOnPx === void 0 && $$bindings.showOnPx && showOnPx !== void 0)
    $$bindings.showOnPx(showOnPx);
  $$result.css.add(css$6);
  return `

<div class="${["bck2top svelte-1kuqezj", "hidden"].join(" ").trim()}">${validate_component(Caret_up, "CaretUp").$$render(
    $$result,
    {
      color: "var(--primary-900)",
      width: "32",
      height: "32"
    },
    {},
    {}
  )}
</div>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: "footer.svelte-143al1f.svelte-143al1f{align-items:flex-start;background-color:transparent;background-repeat:repeat;display:flex;flex-direction:column;justify-content:center;max-width:100vw;padding:var(--space-2xl) var(--space-xs)}.footer__social.svelte-143al1f.svelte-143al1f{display:flex;flex-direction:row;flex-wrap:wrap;gap:var(--space-s);z-index:2}.footer-container.svelte-143al1f.svelte-143al1f{color:var(--neutral-100);display:flex;flex-direction:column;font-weight:300}@media(min-width:768px){footer.svelte-143al1f.svelte-143al1f{padding:var(--space-xl) 17vw}}.nav-list.svelte-143al1f.svelte-143al1f{align-items:center;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:left;margin:0;margin-bottom:var(--space-l);z-index:2}.nav-list-item.svelte-143al1f.svelte-143al1f{display:flex;padding-left:0;padding-right:var(--space-xs)}.nav-list-item.svelte-143al1f a.svelte-143al1f{font-family:var(--fancy-font);transition:.3s}.nav-list-item.svelte-143al1f a.svelte-143al1f:hover{color:var(--primary-600)}footer.svelte-143al1f.svelte-143al1f{position:relative}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let iconColor = "var(--neutral-100)";
  $$result.css.add(css$5);
  return `<footer class="${"svelte-143al1f"}"><div class="${"footer-container small-text svelte-143al1f"}"><ul class="${"nav-list svelte-143al1f"}">${each(navItems, (navItem) => {
    return `<li class="${"nav-list-item svelte-143al1f"}"><a${add_attribute("href", navItem.path, 0)} class="${"svelte-143al1f"}">${escape(navItem.title)}</a>
				</li>`;
  })}</ul>
		<div class="${"footer__social svelte-143al1f"}"><a aria-label="${"Phone me"}" class="${"social__icon"}" href="${"tel:+84929066331"}">${validate_component(Phone, "Phone").$$render(
    $$result,
    {
      width: "32",
      height: "32",
      color: iconColor
    },
    {},
    {}
  )}</a>
			<a aria-label="${"Contact through LinkedIn"}" class="${"social__icon"}" href="${"https://www.linkedin.com/in/wentallout"}" target="${"_blank"}" rel="${"noreferrer noopener"}">${validate_component(Linkedin_logo, "LinkedinLogo").$$render(
    $$result,
    {
      width: "32",
      height: "32",
      color: "var(--neutral-100)"
    },
    {},
    {}
  )}</a></div></div>
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
const css$4 = {
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
  $$result.css.add(css$4);
  headerClass = updateClass(y);
  return `

<div class="${escape(null_to_empty(headerClass), true) + " svelte-bfhcfu"}">${slots.default ? slots.default({}) : ``}
</div>`;
});
const Header_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".active-page.svelte-deicg3{background-color:var(--primary-600);color:var(--black)}.active-page.svelte-deicg3:hover{color:var(--neutral-900)!important}.nav-list__item.svelte-deicg3:hover{color:var(--primary-600)}.nav.svelte-deicg3{background-color:transparent;display:flex;font-size:var(--font-size-base);font-weight:500;max-width:100vw;transition:.3s;width:100%}.nav.svelte-deicg3,.nav-scrolldown.svelte-deicg3{color:var(--neutral-100)}.nav-scrolldown.svelte-deicg3{-webkit-backdrop-filter:blur(1px);backdrop-filter:blur(1px);background-color:rgba(0,0,0,.7)!important;box-shadow:0 2px 4px rgba(45,35,66,.35),0 7px 13px -3px rgba(45,35,66,.25)}.nav-list.svelte-deicg3{display:flex;flex-direction:row;margin:0;width:100%}.nav-list__item.svelte-deicg3{display:none}.hamburger.svelte-deicg3{cursor:pointer;display:flex;justify-content:center;padding:var(--space-xs);width:100%}@media(min-width:768px){.nav.svelte-deicg3{padding:0 17vw}.nav-list__item.svelte-deicg3{align-items:center;display:flex;justify-content:center;line-height:1;width:100%}.hamburger.svelte-deicg3{display:none}}.item.svelte-deicg3{align-items:center;display:flex;height:100%;justify-content:center;padding:var(--space-s);width:100%}.overlay.svelte-deicg3{background-color:rgba(0,0,0,.9);font-weight:500;height:0;left:0;overflow-y:hidden;position:fixed;top:0;transition:.2s;width:100%;z-index:99}.overlay-content.svelte-deicg3{align-items:center;display:flex;flex-direction:column;justify-content:center;position:relative;top:60px;width:100%}.overlay-item.svelte-deicg3{color:var(--neutral-200);display:block;outline:1px solid transparent;padding:var(--space-s) 0;padding-left:20vw;transition:.3s;width:100%}.overlay-item.svelte-deicg3:focus,.overlay-item.svelte-deicg3:hover{color:var(--primary-600);outline:1px solid var(--primary-600)}.closebtn.svelte-deicg3{align-items:center;background-color:var(--primary-600);cursor:pointer;display:flex;justify-content:center;padding:var(--space-xs);position:absolute;top:0;width:100%}@media screen and (max-height:450px){.overlay.svelte-deicg3{overflow-y:auto}}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let navOverlayEle;
  $$result.css.add(css$3);
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
        return `<header><nav class="${["nav svelte-deicg3", ""].join(" ").trim()}"><ul class="${"nav-list svelte-deicg3"}">${each(navItems, (navItem) => {
          return `<li class="${[
            "nav-list__item svelte-deicg3",
            $page.url.pathname === `${navItem.path}` ? "active-page" : ""
          ].join(" ").trim()}"><a class="${"item svelte-deicg3"}"${add_attribute("href", navItem.path, 0)}>${escape(navItem.title)}</a>
					</li>`;
        })}

				<li class="${"hamburger svelte-deicg3"}">${validate_component(List, "List").$$render(
          $$result,
          {
            color: "var(--neutral-100)",
            width: "32",
            height: "32"
          },
          {},
          {}
        )}</li></ul></nav></header>`;
      }
    }
  )}

<div class="${"overlay svelte-deicg3"}"${add_attribute("this", navOverlayEle, 0)}><div class="${"closebtn svelte-deicg3"}">${validate_component(X, "X").$$render(
    $$result,
    {
      color: "var(--primary-900)",
      width: "32",
      height: "32"
    },
    {},
    {}
  )}</div>
	<div class="${"overlay-content svelte-deicg3"}">${each(navItems, (navItem) => {
    return `<a class="${"overlay-item xl-text svelte-deicg3"}"${add_attribute("href", navItem.path, 0)}>${escape(navItem.title)}</a>`;
  })}</div>
</div>`;
});
const Breadcrumb_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".breadcrumb.svelte-4fmgkt{color:var(--text);font-weight:300;margin-bottom:var(--space-l);margin-top:var(--space-xl)}.breadcrumb__unclickable.svelte-4fmgkt{display:inline-block;font-weight:500;pointer-events:none}.breadcrumb__clickable.svelte-4fmgkt{color:var(--accent-400);display:inline-flex}.breadcrumb__clickable.svelte-4fmgkt:hover{color:var(--accent-500);text-decoration:underline}",
  map: null
};
const Breadcrumb = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { path } = $$props;
  var crumbs;
  if ($$props.path === void 0 && $$bindings.path && path !== void 0)
    $$bindings.path(path);
  $$result.css.add(css$2);
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
  return `<nav aria-label="${"breadcrumb"}" id="${"breadcrumb"}" class="${"breadcrumb base-text svelte-4fmgkt"}">${each(crumbs, (c, i) => {
    return `${i == crumbs.length - 1 ? `<div class="${"breadcrumb__unclickable svelte-4fmgkt"}">${escape(c.label)}
			</div>` : `<a class="${"breadcrumb__clickable svelte-4fmgkt"}"${add_attribute("href", c.href, 0)}>${escape(c.label)}</a> &gt;\xA0`}`;
  })}
</nav>`;
});
const CursorTrail_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".cursor.svelte-1xbjmty .cursor--large.svelte-1xbjmty,.cursor.svelte-1xbjmty .cursor--small.svelte-1xbjmty,.cursor.svelte-1xbjmty .cursor--text.svelte-1xbjmty{border-radius:50%;height:var(--cursor-size);left:0;mix-blend-mode:difference;pointer-events:none;position:fixed;top:0;transform:translate(-50%,-50%);-webkit-user-select:none;-moz-user-select:none;user-select:none;width:var(--cursor-size);z-index:1000}.cursor.svelte-1xbjmty .cursor--text.svelte-1xbjmty{--cursor-size:fit-content;color:#fff;font-size:.75rem;opacity:0}.cursor.svelte-1xbjmty .cursor--text .text.svelte-1xbjmty{font-family:var(--normal-font);font-weight:400}.cursor.svelte-1xbjmty .cursor--small.svelte-1xbjmty{--cursor-size:20px;background:#fff}.cursor.svelte-1xbjmty .cursor--large.svelte-1xbjmty{--cursor-size:60px;border:2px solid #fff}",
  map: null
};
const CursorTrail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cursorLarge;
  let cursorSmall;
  let cursorText;
  let text;
  $$result.css.add(css$1);
  return `

<div class="${"cursor svelte-1xbjmty"}"><div class="${"cursor--small svelte-1xbjmty"}"${add_attribute("this", cursorSmall, 0)}></div>
	<div class="${"cursor--large svelte-1xbjmty"}"${add_attribute("this", cursorLarge, 0)}></div>
	<div class="${"cursor--text svelte-1xbjmty"}"${add_attribute("this", cursorText, 0)}><div class="${"text svelte-1xbjmty"}"${add_attribute("this", text, 0)}>GO HERE! GO HERE! GO HERE! GO HERE!</div></div>
</div>`;
});
const fonts = "";
const sanitize = "";
const global = "";
const weird = "";
const atropos_min = "";
const nprogress = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".page-container.svelte-hbz498{background:var(--page-bg)}.main-content.svelte-hbz498{display:flex;flex-direction:column;min-height:calc(100vh - 70px);padding:var(--space-l) 1rem}@media(min-width:768px){.main-content.svelte-hbz498{padding:var(--space-l) 17vw}}",
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
<div class="${"page-container svelte-hbz498"}" data-sveltekit-preload-data>${validate_component(BackToTop, "BackToTop").$$render($$result, {}, {}, {})}

	${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

	<main class="${"main-content svelte-hbz498"}" id="${"main-content"}">${validate_component(Breadcrumb, "Breadcrumb").$$render($$result, { path: $page.url.pathname }, {}, {})}
			${slots.default ? slots.default({}) : ``}</main>

	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}
</div>`;
});
export {
  Layout as default
};
