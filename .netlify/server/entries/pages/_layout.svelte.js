import { c as create_ssr_component, d as spread, e as escape_object, v as validate_component, f as add_attribute, g as each, h as escape, b as subscribe, j as null_to_empty } from "../../chunks/index.js";
import { w as website, n as navItems } from "../../chunks/config.js";
import { p as page, n as navigating } from "../../chunks/stores.js";
import NProgress from "nprogress";
const Moon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 256 256" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M224.3 150.3a8.1 8.1 0 0 0-7.8-5.7l-2.2.4A84 84 0 0 1 111 41.6a5.7 5.7 0 0 0 .3-1.8a7.9 7.9 0 0 0-10.3-8.1a100 100 0 1 0 123.3 123.2a7.2 7.2 0 0 0 0-4.6ZM128 212A84 84 0 0 1 92.8 51.7a99.9 99.9 0 0 0 111.5 111.5A84.4 84.4 0 0 1 128 212Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Sun = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 256 256" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M128 60a68 68 0 1 0 68 68a68.1 68.1 0 0 0-68-68Zm0 120a52 52 0 1 1 52-52a52 52 0 0 1-52 52Zm-8-144V16a8 8 0 0 1 16 0v20a8 8 0 0 1-16 0ZM43.1 54.5a8.1 8.1 0 1 1 11.4-11.4l14.1 14.2a8 8 0 0 1 0 11.3a8.1 8.1 0 0 1-11.3 0ZM36 136H16a8 8 0 0 1 0-16h20a8 8 0 0 1 0 16Zm32.6 51.4a8 8 0 0 1 0 11.3l-14.1 14.2a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3a8.1 8.1 0 0 1 0-11.4l14.2-14.1a8 8 0 0 1 11.3 0ZM136 220v20a8 8 0 0 1-16 0v-20a8 8 0 0 1 16 0Zm76.9-18.5a8.1 8.1 0 0 1 0 11.4a8.5 8.5 0 0 1-5.7 2.3a8.3 8.3 0 0 1-5.7-2.3l-14.1-14.2a8 8 0 0 1 11.3-11.3ZM248 128a8 8 0 0 1-8 8h-20a8 8 0 0 1 0-16h20a8 8 0 0 1 8 8Zm-60.6-59.4a8 8 0 0 1 0-11.3l14.1-14.2a8.1 8.1 0 0 1 11.4 11.4l-14.2 14.1a8.1 8.1 0 0 1-11.3 0Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const SiteThemeToggle_svelte_svelte_type_style_lang = "";
const css$8 = {
  code: ".switcher.svelte-1uq2f44{background:none;border:none;cursor:pointer;padding:0;outline:0}.spin-right.svelte-1uq2f44{animation:svelte-1uq2f44-spin 575ms cubic-bezier(0.075, 0.82, 0.17, 1.135);@keyframes spin {\r\n			0% {\r\n				transform: scale(0) rotate(0deg);\r\n			}\r\n			100% {\r\n				transform: scale(1) rotate(720deg);\r\n			}\r\n		}}.spin-left.svelte-1uq2f44{animation:svelte-1uq2f44-spin 575ms cubic-bezier(0.075, 0.82, 0.17, 1.135);@keyframes spin {\r\n			0% {\r\n				transform: scale(0) rotate(0deg);\r\n			}\r\n			100% {\r\n				transform: scale(1) rotate(-720deg);\r\n			}\r\n		}}.theme.svelte-1uq2f44{display:none}.dark .icon-moon.svelte-1uq2f44{display:block}.light .icon-sun.svelte-1uq2f44{display:block}",
  map: null
};
const SiteThemeToggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$8);
  return `

<button class="${"switcher svelte-1uq2f44"}"><div class="${[
    "icon svelte-1uq2f44",
    " "
  ].join(" ").trim()}"><div class="${"theme icon-moon svelte-1uq2f44"}">${validate_component(Moon, "Moon").$$render($$result, { width: "32", height: "32" }, {}, {})}</div>

		<div class="${"theme icon-sun svelte-1uq2f44"}">${validate_component(Sun, "Sun").$$render($$result, { width: "32", height: "32" }, {}, {})}</div></div>
</button>`;
});
const SkipLink_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: ".skip-link.svelte-q4d93e{position:fixed;top:0;left:0;right:0;text-align:center;background-color:var(--accent-200);color:var(--neutral-900);padding:1rem 2rem;translate:0 -100%;transition:translate 150ms ease-in-out;transition:background-color 0.5s;z-index:3}.skip-link.svelte-q4d93e:hover{background-color:var(--accent-300)}.skip-link.svelte-q4d93e:focus{translate:0;outline:none}",
  map: null
};
const SkipLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$7);
  return `<a class="${"skip-link svelte-q4d93e"}" href="${"#main-content"}">Skip to main content </a>`;
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
  code: ".bck2top.svelte-zam3qz{background-color:var(--neutral-900);width:48px;height:48px;border-radius:100%;position:fixed;right:30px;bottom:30px;z-index:99;opacity:1;transition:opacity 0.3s, visibility 0.3s;-webkit-user-select:none;-moz-user-select:none;user-select:none;line-height:normal}@media(hover: hover){.bck2top.svelte-zam3qz:hover{cursor:pointer;transform:scale(1.2);transition:transform 0.3s;filter:brightness(1.5)}}.bck2top.hidden.svelte-zam3qz{opacity:0;visibility:hidden}",
  map: null
};
const BackToTop = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { showOnPx = 150 } = $$props;
  if ($$props.showOnPx === void 0 && $$bindings.showOnPx && showOnPx !== void 0)
    $$bindings.showOnPx(showOnPx);
  $$result.css.add(css$6);
  return `

<div class="${["bck2top svelte-zam3qz", "hidden"].join(" ").trim()}">${validate_component(Caret_circle_up, "CaretCircleUp").$$render(
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
  code: "footer.svelte-109x8g2.svelte-109x8g2{display:flex;flex-direction:column;justify-content:center;align-items:flex-start;padding:var(--space-m) var(--space-xs);position:relative;max-width:100vw;background-color:var(--accent-900);background-image:url(/images/noise.svg);background-repeat:repeat}.footer__other.svelte-109x8g2.svelte-109x8g2{z-index:2;color:var(--neutral-500)}.footer__other.svelte-109x8g2 a.svelte-109x8g2{color:var(--accent-500)}.footer-container.svelte-109x8g2.svelte-109x8g2{display:flex;flex-direction:column;color:var(--neutral-100);font-weight:300}@media(min-width: 768px){footer.svelte-109x8g2.svelte-109x8g2{padding:var(--space-m) 17vw}}footer.svelte-109x8g2.svelte-109x8g2:before{background:url('/images/rhombus_line.png') repeat top center/49px 72px;content:'';position:absolute;top:0;left:0;width:100%;height:100%;opacity:0.12;z-index:1}.nav-list.svelte-109x8g2.svelte-109x8g2{display:flex;flex-direction:row;justify-content:left;align-items:center;margin:0px;z-index:2;margin-bottom:var(--space-l);flex-wrap:wrap;font-family:'Recoleta Alt';font-weight:600}.nav-list-item.svelte-109x8g2.svelte-109x8g2{display:flex;padding-left:0;padding-right:var(--space-xs)}.nav-list-item.svelte-109x8g2 a.svelte-109x8g2:hover{color:var(--primary-500)}footer.svelte-109x8g2.svelte-109x8g2{position:relative}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<footer class="${"svelte-109x8g2"}"><div class="${"footer-container small-text svelte-109x8g2"}"><ul class="${"nav-list svelte-109x8g2"}">${each(navItems, (navItem) => {
    return `<li class="${"nav-list-item svelte-109x8g2"}"><a${add_attribute("href", navItem.path, 0)} class="${"svelte-109x8g2"}">${escape(navItem.title)}</a>
				</li>`;
  })}</ul>
		<div class="${"footer__other svelte-109x8g2"}"><p>2022 - Made by Khoa with <a href="${"https://kit.svelte.dev"}" class="${"svelte-109x8g2"}">SvelteKit</a></p>
			<a href="${"mailto:wentallout@gmail.com"}" class="${"svelte-109x8g2"}">wentallout@gmail.com</a></div></div>
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
  code: ".reduced-header.svelte-5xfucm.svelte-5xfucm{font-size:var(--font-size-small);background-color:rgba(0, 0, 0, 0.8) !important;backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px)}.reduced-list.svelte-5xfucm.svelte-5xfucm{min-height:2.5rem}.main-header.svelte-5xfucm.svelte-5xfucm{max-width:100vw;color:var(--neutral-100);background-color:#000;width:100%;position:sticky;top:0;z-index:98}.hidden-mobile.svelte-5xfucm.svelte-5xfucm{display:none}nav.svelte-5xfucm ul li.svelte-5xfucm{display:flex;min-height:4rem;margin-left:0;width:100%}.nav__list.svelte-5xfucm.svelte-5xfucm{display:flex;flex-direction:column;justify-content:center;align-items:center;margin:0}.nav__list-item.svelte-5xfucm.svelte-5xfucm{color:var(--neutral-100);width:100%;display:flex;justify-content:center;align-items:center}@media(hover: hover){.nav__list-item.svelte-5xfucm.svelte-5xfucm:hover{color:var(--neutral-900);background-image:url('/images/noise.svg');background-color:var(--primary-500);transition:0.3s}}@media(min-width: 768px){.hidden-mobile.svelte-5xfucm.svelte-5xfucm{display:flex}#burger-nav.svelte-5xfucm.svelte-5xfucm{display:none}.main-header.svelte-5xfucm.svelte-5xfucm{padding-left:17vw;padding-right:17vw}.nav__list.svelte-5xfucm.svelte-5xfucm{display:flex;flex-direction:row;justify-content:space-evenly;align-items:center}.nav__list-item.svelte-5xfucm.svelte-5xfucm{width:100%}}.active-page.svelte-5xfucm.svelte-5xfucm{color:var(--primary-500) !important;pointer-events:none;position:relative}@media(min-width: 768px){.active-page.svelte-5xfucm.svelte-5xfucm::after{position:absolute;content:'';width:100%;left:0;bottom:0;border-bottom:4px solid var(--primary-500)}}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css$4);
  $$unsubscribe_page();
  return `
<header class="${["main-header base-text svelte-5xfucm", ""].join(" ").trim()}"><nav class="${"svelte-5xfucm"}"><ul class="${"nav__list svelte-5xfucm"}"><li id="${"burger-nav"}" class="${["svelte-5xfucm", ""].join(" ").trim()}"><a class="${"nav__list-item svelte-5xfucm"}"${add_attribute("href", "#", 0)}>${validate_component(List, "List").$$render(
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
      escape(null_to_empty(`navbar-list${" hidden-mobile"}`), true) + " svelte-5xfucm",
      ""
    ].join(" ").trim()}">${$page.url.pathname === `${navItem.path}` ? `<a class="${"nav__list-item active-page svelte-5xfucm"}"${add_attribute("href", navItem.path, 0)}>${escape(navItem.title)}
						</a>` : `<a class="${"nav__list-item svelte-5xfucm"}"${add_attribute("href", navItem.path, 0)}>${escape(navItem.title)}
						</a>`}
				</li>`;
  })}</ul></nav>
</header>`;
});
const Breadcrumb_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".breadcrumb.svelte-142dy6q{margin-bottom:var(--space-l);font-weight:300;color:var(--accent-900)}.breadcrumb__unclickable.svelte-142dy6q{display:inline-block;font-weight:500}.breadcrumb__clickable.svelte-142dy6q{display:inline-flex;color:var(--accent-600)}.breadcrumb__clickable.svelte-142dy6q:hover{color:var(--accent-700);text-decoration:underline}",
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
  return `<nav class="${"breadcrumb base-text svelte-142dy6q"}">${each(crumbs, (c, i) => {
    return `${i == crumbs.length - 1 ? `<div class="${"breadcrumb__unclickable svelte-142dy6q"}">${escape(c.label)}
			</div>` : `<a class="${"breadcrumb__clickable svelte-142dy6q"}"${add_attribute("href", c.href, 0)}>${escape(c.label)}</a> &gt;\xA0`}`;
  })}
</nav>`;
});
const Marquee_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".container.svelte-dfw9r1.svelte-dfw9r1{position:absolute;z-index:1;width:100%;max-width:100vw;font-weight:300;font-size:var(--font-size-small)}.marquee.svelte-dfw9r1.svelte-dfw9r1{--gap:0.5rem;position:relative;display:flex;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;user-select:none;gap:var(--gap);color:var(--primary-600)}.marquee__content.svelte-dfw9r1.svelte-dfw9r1{flex-shrink:0;display:flex;justify-content:space-around;gap:var(--gap);min-width:100%;animation:svelte-dfw9r1-scroll 20s linear infinite;animation-direction:reverse}.marquee.svelte-dfw9r1:hover .marquee__content.svelte-dfw9r1{animation-play-state:paused}@keyframes svelte-dfw9r1-scroll{from{transform:translateX(0)}to{transform:translateX(calc(-100% - var(--gap)))}}",
  map: null
};
const Marquee = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="${"container svelte-dfw9r1"}"><div class="${"marquee svelte-dfw9r1"}"><ul class="${"marquee__content svelte-dfw9r1"}"><li>Nguyen Dang Khoa</li>
			<li>wentallout@gmail.com</li>
			<li>+84 929 066 331</li>
			<li>Mobile First</li>
			<li>Responsive Design</li>
			<li>Human-Centered Design</li></ul>
		
		<ul class="${"marquee__content svelte-dfw9r1"}" aria-hidden="${"true"}"><li>Nguyen Dang Khoa</li>
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
  code: ".yinyang-container.svelte-ryltqn{border-radius:100%;width:40px;height:40px;background-color:#000;z-index:0;display:hidden;opacity:0.6}.svg-container.svelte-ryltqn{display:flex;position:relative;justify-content:center;align-items:center;width:100%;height:60%;background-color:transparent}@media(min-width: 768px){.svg-container.svelte-ryltqn{width:100%;height:100%}}.logo-container.svelte-ryltqn{position:relative;max-width:100vw;width:100%;display:flex;justify-content:center;align-items:center;background-color:#000;padding-top:0.5rem;padding-bottom:0.5rem}",
  map: null
};
const LogoContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"logo-container svelte-ryltqn"}"><div class="${"svg-container svelte-ryltqn"}">${validate_component(Marquee, "Marquee").$$render($$result, {}, {}, {})}
		<div class="${"yinyang-container svelte-ryltqn"}">${validate_component(Yin_yang_fill, "YinYangFill").$$render(
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
  code: ".page-container.svelte-4xqguu{background:var(--background)}.main-content.svelte-4xqguu{display:flex;flex-direction:column;min-height:calc(100vh - 70px);margin:var(--space-m) 1rem}@media(min-width: 768px){.main-content.svelte-4xqguu{padding:var(--space-m) 17vw}}",
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
  return `${$$result.head += `<meta name="${"google-site-verification"}" content="${"jDcuv7ulyNCJGJg0K24h9h6T_YqP9l5TBbv2DWOHh-w"}" data-svelte="svelte-1i0otj">`, ""}

${validate_component(SkipLink, "SkipLink").$$render($$result, {}, {}, {})}
${validate_component(PWA, "PWA").$$render($$result, {}, {}, {})}
<div class="${"page-container svelte-4xqguu"}" data-sveltekit-prefetch>${validate_component(BackToTop, "BackToTop").$$render($$result, {}, {}, {})}
	${validate_component(LogoContainer, "LogoContainer").$$render($$result, {}, {}, {})}
	${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

	<main id="${"main-content"}" class="${"main-content svelte-4xqguu"}">${validate_component(Breadcrumb, "Breadcrumb").$$render($$result, { path: $page.url.pathname }, {}, {})}

			${validate_component(SiteThemeToggle, "SiteThemeToggle").$$render($$result, {}, {}, {})}
			${slots.default ? slots.default({}) : ``}</main>

	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}
</div>`;
});
export {
  Layout as default
};
