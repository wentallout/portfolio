import { c as create_ssr_component, b as add_attribute, d as spread, e as escape_object, v as validate_component, f as each, g as escape, h as subscribe, i as null_to_empty } from "../../chunks/index.js";
import { w as website, n as navItems } from "../../chunks/config.js";
import { p as page, n as navigating } from "../../chunks/stores.js";
import NProgress from "nprogress";
const SkipLink_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: ".skip-link.svelte-19z0hfa{position:fixed;top:0;left:0;right:0;text-align:center;background-color:var(--accent-200);color:var(--neutral-900);padding:1rem 2rem;translate:0 -100%;transition:translate 150ms ease-in-out;transition:background-color 0.5s;z-index:3}.skip-link.svelte-19z0hfa:hover{background-color:var(--accent-300)}.skip-link.svelte-19z0hfa:focus{translate:0;outline:none}",
  map: null
};
const SkipLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$7);
  return `<a class="${"skip-link svelte-19z0hfa"}" href="${"#main-content"}">Skip to main content </a>`;
});
const PWA = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const { themeColor } = website;
  return `${$$result.head += `<meta name="${"theme-color"}"${add_attribute("content", themeColor, 0)} data-svelte="svelte-12k4fzg">`, ""}`;
});
const Caret_circle_up = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 256 256" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M201.5 54.5a103.9 103.9 0 0 0-147 147a103.9 103.9 0 0 0 147-147Zm-11.3 135.7a88 88 0 1 1 0-124.4a87.5 87.5 0 0 1 0 124.4Zm-20.3-51.6a8 8 0 0 1-.5 11.3a8.2 8.2 0 0 1-5.4 2.1a7.9 7.9 0 0 1-5.9-2.6L128 116l-30.1 33.4a8 8 0 0 1-11.8-10.8l36-40a8 8 0 0 1 11.8 0Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const BackToTop_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: ".bck2top.svelte-pxm703{background-color:var(--neutral-900);width:48px;height:48px;border-radius:100%;position:fixed;right:30px;bottom:30px;z-index:99;opacity:1;transition:opacity 0.3s, visibility 0.3s;user-select:none;line-height:normal}@media(hover: hover){.bck2top.svelte-pxm703:hover{cursor:pointer;transform:scale(1.2);transition:transform 0.3s;filter:brightness(1.5)}}.bck2top.hidden.svelte-pxm703{opacity:0;visibility:hidden}",
  map: null
};
const BackToTop = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { showOnPx = 150 } = $$props;
  if ($$props.showOnPx === void 0 && $$bindings.showOnPx && showOnPx !== void 0)
    $$bindings.showOnPx(showOnPx);
  $$result.css.add(css$6);
  return `

<div class="${["bck2top svelte-pxm703", "hidden"].join(" ").trim()}">${validate_component(Caret_circle_up, "CaretCircleUp").$$render(
    $$result,
    {
      color: "var(--primary-500)",
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
  code: "footer.svelte-hnc4uy.svelte-hnc4uy{display:flex;flex-direction:column;justify-content:center;align-items:flex-start;padding:var(--space-m) var(--space-xs);position:relative;max-width:100vw;background-image:url(/images/noise.svg);background-repeat:repeat}.footer__other.svelte-hnc4uy.svelte-hnc4uy{z-index:2;color:var(--neutral-500)}.footer__other.svelte-hnc4uy a.svelte-hnc4uy{color:var(--accent-500)}.footer-container.svelte-hnc4uy.svelte-hnc4uy{display:flex;flex-direction:column;color:var(--neutral-100);font-weight:300}@media(min-width: 768px){footer.svelte-hnc4uy.svelte-hnc4uy{padding:var(--space-m) 17vw}}footer.svelte-hnc4uy.svelte-hnc4uy:before{background:url('/images/rhombus_line.png') repeat top center/49px 72px;content:'';position:absolute;top:0;left:0;width:100%;height:100%;opacity:0.12;z-index:1}.nav-list.svelte-hnc4uy.svelte-hnc4uy{display:flex;flex-direction:row;justify-content:left;align-items:center;margin:0px;z-index:2;margin-bottom:var(--space-l);flex-wrap:wrap;font-family:'Blacker'}.nav-list-item.svelte-hnc4uy.svelte-hnc4uy{display:flex;padding-left:0;padding-right:var(--space-xs)}.nav-list-item.svelte-hnc4uy a.svelte-hnc4uy:hover{color:var(--primary-500)}footer.svelte-hnc4uy.svelte-hnc4uy{--c-footer--mask-height:10px;position:relative;margin-top:calc(var(--c-footer--mask-height) * -1);-webkit-mask-image:url(/images/mask_section-bg_top.png),\r\n			-webkit-gradient(linear, left top, left bottom, from(#000));-webkit-mask-image:url(/images/mask_section-bg_top.png), linear-gradient(#000);mask-image:url(/images/mask_section-bg_top.png),\r\n			-webkit-gradient(linear, left top, left bottom, from(#000));mask-image:url(/images/mask_section-bg_top.png), linear-gradient(#000);-webkit-mask-size:auto var(--c-footer--mask-height),\r\n			100% calc(100% - var(--c-footer--mask-height) + 1px);mask-size:auto var(--c-footer--mask-height),\r\n			100% calc(100% - var(--c-footer--mask-height) + 1px);-webkit-mask-position:left top, left calc(var(--c-footer--mask-height) - 1px);mask-position:left top, left calc(var(--c-footer--mask-height) - 1px);-webkit-mask-repeat:repeat-x, no-repeat;mask-repeat:repeat-x, no-repeat}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<footer class="${"svelte-hnc4uy"}"><div class="${"footer-container small-text svelte-hnc4uy"}"><ul class="${"nav-list svelte-hnc4uy"}">${each(navItems, (navItem) => {
    return `<li class="${"nav-list-item svelte-hnc4uy"}"><a${add_attribute("href", navItem.path, 0)} class="${"svelte-hnc4uy"}">${escape(navItem.title)}</a>
				</li>`;
  })}</ul>
		<div class="${"footer__other svelte-hnc4uy"}"><p>2022 - Made by Khoa with <a href="${"https://kit.svelte.dev"}" class="${"svelte-hnc4uy"}">SvelteKit</a></p>
			<a href="${"mailto:wentallout@gmail.com"}" class="${"svelte-hnc4uy"}">wentallout@gmail.com</a></div></div>
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
const Header_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".reduced-header.svelte-1b36mnl.svelte-1b36mnl{font-size:var(--font-size-small);transition:all 0.3s;background-color:rgba(0, 0, 0, 0.8) !important;backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px)}.reduced-list.svelte-1b36mnl.svelte-1b36mnl{min-height:2.5rem}.main-header.svelte-1b36mnl.svelte-1b36mnl{max-width:100vw;color:var(--neutral-100);background-color:#000;width:100%;position:sticky;top:0;z-index:98;scroll-snap-align:start}.hidden-mobile.svelte-1b36mnl.svelte-1b36mnl{display:none}nav.svelte-1b36mnl ul li.svelte-1b36mnl{display:flex;min-height:4rem;margin-left:0;width:100%}.nav__list.svelte-1b36mnl.svelte-1b36mnl{display:flex;flex-direction:column;justify-content:center;align-items:center;margin:0}.nav__list-item.svelte-1b36mnl.svelte-1b36mnl{color:var(--neutral-100);width:100%;display:flex;justify-content:center;align-items:center}@media(hover: hover){.nav__list-item.svelte-1b36mnl.svelte-1b36mnl:hover{color:var(--neutral-900);background-color:var(--primary-500);transition:0.3s}}@media(min-width: 768px){.hidden-mobile.svelte-1b36mnl.svelte-1b36mnl{display:flex}#burger-nav.svelte-1b36mnl.svelte-1b36mnl{display:none}.main-header.svelte-1b36mnl.svelte-1b36mnl{padding-left:17vw;padding-right:17vw}.nav__list.svelte-1b36mnl.svelte-1b36mnl{display:flex;flex-direction:row;justify-content:space-evenly;align-items:center}.nav__list-item.svelte-1b36mnl.svelte-1b36mnl{width:100%}}.active-page.svelte-1b36mnl.svelte-1b36mnl{color:var(--primary-500) !important;pointer-events:none;position:relative}@media(min-width: 768px){.active-page.svelte-1b36mnl.svelte-1b36mnl::after{position:absolute;content:'';width:100%;left:0;bottom:0;border-bottom:4px solid var(--primary-500)}}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css$4);
  $$unsubscribe_page();
  return `
<header class="${["main-header base-text svelte-1b36mnl", ""].join(" ").trim()}"><nav class="${"svelte-1b36mnl"}"><ul class="${"nav__list svelte-1b36mnl"}"><li id="${"burger-nav"}" class="${["svelte-1b36mnl", ""].join(" ").trim()}"><a class="${"nav__list-item svelte-1b36mnl"}"${add_attribute("href", "#", 0)}>${validate_component(List, "List").$$render(
    $$result,
    {
      color: "var(--neutral-100)",
      width: "32",
      height: "32"
    },
    {},
    {}
  )}</a></li>

			${each(navItems, (navItem) => {
    return `<li class="${[
      escape(null_to_empty(`navbar-list${" hidden-mobile"}`), true) + " svelte-1b36mnl",
      ""
    ].join(" ").trim()}">${$page.url.pathname === `${navItem.path}` ? `<a class="${"nav__list-item active-page svelte-1b36mnl"}"${add_attribute("href", navItem.path, 0)}>${escape(navItem.title)}
						</a>` : `<a class="${"nav__list-item svelte-1b36mnl"}"${add_attribute("href", navItem.path, 0)}>${escape(navItem.title)}
						</a>`}
				</li>`;
  })}</ul></nav>
</header>`;
});
const Breadcrumb_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".breadcrumb.svelte-cp8htt{margin-bottom:var(--space-l);font-weight:300;color:var(--neutral-800)}.breadcrumb__unclickable.svelte-cp8htt{display:inline-block;font-weight:500}.breadcrumb__clickable.svelte-cp8htt{display:inline-flex;color:var(--primary-600)}.breadcrumb__clickable.svelte-cp8htt:hover{color:var(--primary-700)}",
  map: null
};
const Breadcrumb = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  return `<nav class="${"breadcrumb base-text svelte-cp8htt"}">${each(crumbs, (c, i) => {
    return `${i == crumbs.length - 1 ? `<div class="${"breadcrumb__unclickable svelte-cp8htt"}">${escape(c.label)}
			</div>` : `<a class="${"breadcrumb__clickable svelte-cp8htt"}"${add_attribute("href", c.href, 0)}>${escape(c.label)}</a> &gt;\xA0`}`;
  })}
</nav>`;
});
const Marquee_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".container.svelte-gc1wnd.svelte-gc1wnd{position:absolute;z-index:1;width:100%;max-width:100vw;font-weight:300;font-size:var(--font-size-small)}.marquee.svelte-gc1wnd.svelte-gc1wnd{--gap:0.5rem;position:relative;display:flex;overflow:hidden;user-select:none;gap:var(--gap);color:var(--primary-600)}.marquee__content.svelte-gc1wnd.svelte-gc1wnd{flex-shrink:0;display:flex;justify-content:space-around;gap:var(--gap);min-width:100%;animation:svelte-gc1wnd-scroll 20s linear infinite;animation-direction:reverse}.marquee.svelte-gc1wnd:hover .marquee__content.svelte-gc1wnd{animation-play-state:paused}@keyframes svelte-gc1wnd-scroll{from{transform:translateX(0)}to{transform:translateX(calc(-100% - var(--gap)))}}",
  map: null
};
const Marquee = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="${"container svelte-gc1wnd"}"><div class="${"marquee svelte-gc1wnd"}"><ul class="${"marquee__content svelte-gc1wnd"}"><li>Nguyen Dang Khoa</li>
			<li>wentallout@gmail.com</li>
			<li>+84 929 066 331</li>
			<li>Mobile First</li>
			<li>Responsive Design</li>
			<li>Human-Centered Design</li></ul>
		
		<ul class="${"marquee__content svelte-gc1wnd"}" aria-hidden="${"true"}"><li>Nguyen Dang Khoa</li>
			<li>wentallout@gmail.com</li>
			<li>+84 929 066 331</li>
			<li>Mobile First</li>
			<li>Responsive Design</li>
			<li>Human-Centered Design</li></ul></div>
</div>`;
});
const Yin_yang_fill = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 256 256" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M140 80a12 12 0 1 1-12-12a12 12 0 0 1 12 12Zm92 48A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-92 48a12 12 0 1 0-12 12a12 12 0 0 0 12-12Zm32-92a44 44 0 0 0-44-44a88 88 0 0 0-46.9 162.4A51.1 51.1 0 0 1 76 180a52 52 0 0 1 52-52a44 44 0 0 0 44-44Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const LogoContainer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".yinyang-container.svelte-w6cd2z{border-radius:100%;width:40px;height:40px;background-color:#000;z-index:0;display:hidden;opacity:0.6}.svg-container.svelte-w6cd2z{display:flex;position:relative;justify-content:center;align-items:center;width:100%;height:60%;background-color:transparent}@media(min-width: 768px){.svg-container.svelte-w6cd2z{width:100%;height:100%}}.logo-container.svelte-w6cd2z{position:relative;max-width:100vw;width:100%;display:flex;justify-content:center;align-items:center;background-color:#000;padding-top:0.5rem;padding-bottom:0.5rem}",
  map: null
};
const LogoContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"logo-container svelte-w6cd2z"}"><div class="${"svg-container svelte-w6cd2z"}">${validate_component(Marquee, "Marquee").$$render($$result, {}, {}, {})}
		<div class="${"yinyang-container svelte-w6cd2z"}">${validate_component(Yin_yang_fill, "YinYangFill").$$render(
    $$result,
    {
      class: "rotate",
      color: "var(--neutral-900)",
      width: "40",
      height: "40"
    },
    {},
    {}
  )}</div></div>
</div>`;
});
const sanitize = "";
const global = "";
const weird = "";
const atropos_min = "";
const nprogress = "";
const _300 = "";
const _400 = "";
const _500 = "";
const _600 = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".page-container.svelte-1d93mcj{background:var(--neutral-100);display:flex;flex-direction:column;scroll-snap-type:y mandatory}.main-content.svelte-1d93mcj{display:flex;flex-direction:column;background:var(--neutral-100);min-height:calc(100vh - 70px);margin:var(--space-m) 1rem}@media(min-width: 768px){.main-content.svelte-1d93mcj{padding:var(--space-m) 17vw}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $navigating, $$unsubscribe_navigating;
  let $page, $$unsubscribe_page;
  $$unsubscribe_navigating = subscribe(navigating, (value) => $navigating = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  NProgress.configure({
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
        NProgress.start();
      }
      if (!$navigating) {
        NProgress.done();
      }
    }
  }
  $$unsubscribe_navigating();
  $$unsubscribe_page();
  return `${$$result.head += `<meta name="${"google-site-verification"}" content="${"jDcuv7ulyNCJGJg0K24h9h6T_YqP9l5TBbv2DWOHh-w"}" data-svelte="svelte-xl6eeh"><script src="${"https://js.linkz.ai/?key=6335a0730c2bfd453404a973"}" data-svelte="svelte-xl6eeh"><\/script>`, ""}

${validate_component(SkipLink, "SkipLink").$$render($$result, {}, {}, {})}
${validate_component(PWA, "PWA").$$render($$result, {}, {}, {})}
<div class="${"page-container svelte-1d93mcj"}">${validate_component(BackToTop, "BackToTop").$$render($$result, {}, {}, {})}
	${validate_component(LogoContainer, "LogoContainer").$$render($$result, {}, {}, {})}
	${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

	<main id="${"main-content"}" class="${"main-content svelte-1d93mcj"}">${validate_component(Breadcrumb, "Breadcrumb").$$render($$result, { path: $page.url.pathname }, {}, {})}
		${slots.default ? slots.default({}) : ``}</main>

	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}
</div>`;
});
export {
  Layout as default
};
