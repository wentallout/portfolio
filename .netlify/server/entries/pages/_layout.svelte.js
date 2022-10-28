import { c as create_ssr_component, d as add_attribute, e as spread, f as escape_object, v as validate_component, g as each, h as escape, b as subscribe, j as null_to_empty } from "../../chunks/index.js";
import { w as website, n as navItems } from "../../chunks/config.js";
import { P as Phone, L as Linkedin_logo } from "../../chunks/phone.js";
import { p as page, n as navigating } from "../../chunks/stores.js";
import NProgress from "nprogress";
import "vanilla-lazyload";
const SkipLink_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: ".skip-link.svelte-nflps0{background-color:var(--accent-200);color:var(--neutral-900);left:0;padding:1rem 2rem;position:fixed;right:0;text-align:center;top:0;transition:translate .15s ease-in-out;transition:background-color .5s;translate:0 -100%;z-index:3}.skip-link.svelte-nflps0:hover{background-color:var(--accent-300)}.skip-link.svelte-nflps0:focus{outline:none;translate:0}",
  map: null
};
const SkipLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$7);
  return `<a class="${"skip-link svelte-nflps0"}" href="${"#main-content"}">Skip to main content </a>`;
});
const PWA = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const { themeColor } = website;
  return `${$$result.head += `<!-- HEAD_svelte-12k4fzg_START --><meta name="${"theme-color"}"${add_attribute("content", themeColor, 0)}><!-- HEAD_svelte-12k4fzg_END -->`, ""}`;
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
  code: ".bck2top.svelte-hvw8ht{-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);background-color:rgba(38,36,34,.8);border-radius:100%;bottom:30px;height:48px;line-height:normal;opacity:1;position:fixed;right:30px;transition:opacity .3s,visibility .3s;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:48px;z-index:99}@media(hover:hover){.bck2top.svelte-hvw8ht:hover{cursor:pointer;filter:brightness(1.5);transform:scale(1.2);transition:transform .3s}}.bck2top.hidden.svelte-hvw8ht{opacity:0;visibility:hidden}",
  map: null
};
const BackToTop = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { showOnPx = 150 } = $$props;
  if ($$props.showOnPx === void 0 && $$bindings.showOnPx && showOnPx !== void 0)
    $$bindings.showOnPx(showOnPx);
  $$result.css.add(css$6);
  return `

<div class="${["bck2top svelte-hvw8ht", "hidden"].join(" ").trim()}">${validate_component(Caret_circle_up, "CaretCircleUp").$$render(
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
  code: '.footer__social.svelte-mhz1vf.svelte-mhz1vf{display:flex;flex-direction:row;flex-wrap:wrap;gap:var(--space-s);margin-bottom:var(--space-s);z-index:2}footer.svelte-mhz1vf.svelte-mhz1vf{align-items:flex-start;background-color:var(--accent-900);background-repeat:repeat;display:flex;flex-direction:column;justify-content:center;max-width:100vw;padding:var(--space-m) var(--space-xs)}.footer__other.svelte-mhz1vf.svelte-mhz1vf{color:var(--neutral-500);display:flex;flex-direction:row;gap:var(--space-m);z-index:2}.footer__other.svelte-mhz1vf a.svelte-mhz1vf{color:var(--accent-300)}.footer__other.svelte-mhz1vf a.svelte-mhz1vf:hover{color:var(--accent-100)}.footer-container.svelte-mhz1vf.svelte-mhz1vf{color:var(--neutral-100);display:flex;flex-direction:column;font-weight:300}@media(min-width:768px){footer.svelte-mhz1vf.svelte-mhz1vf{padding:var(--space-m) 17vw}}footer.svelte-mhz1vf.svelte-mhz1vf:before{background:url(/images/rhombus_line.png) repeat top/49px 72px;content:"";height:100%;left:0;opacity:.12;position:absolute;top:0;width:100%;z-index:1}.nav-list.svelte-mhz1vf.svelte-mhz1vf{align-items:center;display:flex;flex-direction:row;flex-wrap:wrap;font-family:var(--fancy-font);font-weight:600;justify-content:left;margin:0;margin-bottom:var(--space-l);z-index:2}.nav-list-item.svelte-mhz1vf.svelte-mhz1vf{display:flex;padding-left:0;padding-right:var(--space-xs)}.nav-list-item.svelte-mhz1vf a.svelte-mhz1vf:hover{color:var(--primary-500)}footer.svelte-mhz1vf.svelte-mhz1vf{position:relative}',
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<footer class="${"svelte-mhz1vf"}"><div class="${"footer-container small-text svelte-mhz1vf"}"><ul class="${"nav-list svelte-mhz1vf"}">${each(navItems, (navItem) => {
    return `<li class="${"nav-list-item svelte-mhz1vf"}"><a${add_attribute("href", navItem.path, 0)} class="${"svelte-mhz1vf"}">${escape(navItem.title)}</a>
				</li>`;
  })}</ul>
		<div class="${"footer__social svelte-mhz1vf"}"><a aria-label="${"Phone me"}" class="${"social__icon"}" href="${"tel:+84929066331"}">${validate_component(Phone, "Phone").$$render(
    $$result,
    {
      width: "32",
      height: "32",
      color: "var(--neutral-100)"
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
  )}</a></div>
		<div class="${"footer__other svelte-mhz1vf"}"><a href="${"tel:+84929066331"}" target="${"_blank"}" rel="${"noreferrer noopener"}" class="${"svelte-mhz1vf"}">+84929066331</a>
			<a href="${"mailto:wentallout@gmail.com"}" target="${"_blank"}" rel="${"noreferrer noopener"}" class="${"svelte-mhz1vf"}">wentallout@gmail.com</a></div></div>
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
  code: '#burger-nav.svelte-1c1d9bq.svelte-1c1d9bq{cursor:pointer}.reduced-header.svelte-1c1d9bq.svelte-1c1d9bq{-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);background-color:rgba(0,0,0,.8)!important;font-size:var(--font-size-small)}.reduced-list.svelte-1c1d9bq.svelte-1c1d9bq{min-height:2.5rem;transition:.3s}.main-header.svelte-1c1d9bq.svelte-1c1d9bq{background-color:#000;box-shadow:0 2px 4px rgba(45,35,66,.35),0 7px 13px -3px rgba(45,35,66,.25);color:var(--neutral-100);max-width:100vw;position:sticky;top:0;width:100%;z-index:98}.hidden-mobile.svelte-1c1d9bq.svelte-1c1d9bq{display:none}nav.svelte-1c1d9bq ul li.svelte-1c1d9bq{display:flex;margin-left:0;min-height:4rem;width:100%}.nav__list.svelte-1c1d9bq.svelte-1c1d9bq{flex-direction:column;margin:0}.nav__list.svelte-1c1d9bq.svelte-1c1d9bq,.nav__list-item.svelte-1c1d9bq.svelte-1c1d9bq{align-items:center;display:flex;justify-content:center}.nav__list-item.svelte-1c1d9bq.svelte-1c1d9bq{color:var(--neutral-100);width:100%}@media(hover:hover){.nav__list-item.svelte-1c1d9bq.svelte-1c1d9bq:hover{background-color:var(--primary-500);background-image:url(/images/noise.svg);color:var(--neutral-900);transition:.3s}}@media(min-width:768px){.hidden-mobile.svelte-1c1d9bq.svelte-1c1d9bq{display:flex}#burger-nav.svelte-1c1d9bq.svelte-1c1d9bq{display:none}.main-header.svelte-1c1d9bq.svelte-1c1d9bq{padding-left:17vw;padding-right:17vw}.nav__list.svelte-1c1d9bq.svelte-1c1d9bq{align-items:center;display:flex;flex-direction:row;justify-content:space-evenly}.nav__list-item.svelte-1c1d9bq.svelte-1c1d9bq{width:100%}}.active-page.svelte-1c1d9bq.svelte-1c1d9bq{color:var(--primary-500)!important;pointer-events:none;position:relative}@media(min-width:768px){.active-page.svelte-1c1d9bq.svelte-1c1d9bq:after{border-bottom:4px solid var(--primary-500);bottom:0;content:"";left:0;position:absolute;width:100%}}',
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css$4);
  $$unsubscribe_page();
  return `
<header class="${[
    "main-header base-text svelte-1c1d9bq",
    ""
  ].join(" ").trim()}"><nav class="${"svelte-1c1d9bq"}"><ul class="${"nav__list svelte-1c1d9bq"}"><li id="${"burger-nav"}" class="${["svelte-1c1d9bq", ""].join(" ").trim()}"><div class="${"nav__list-item svelte-1c1d9bq"}">${`${validate_component(List, "List").$$render(
    $$result,
    {
      color: "var(--neutral-100)",
      width: "32",
      height: "32"
    },
    {},
    {}
  )}`}</div></li>

			${each(navItems, (navItem) => {
    return `<li class="${[
      escape(null_to_empty(`navbar-list${" hidden-mobile"}`), true) + " svelte-1c1d9bq",
      ""
    ].join(" ").trim()}">${$page.url.pathname === `${navItem.path}` ? `<a class="${"nav__list-item active-page svelte-1c1d9bq"}"${add_attribute("href", navItem.path, 0)}>${escape(navItem.title)}
						</a>` : `<a class="${"nav__list-item svelte-1c1d9bq"}"${add_attribute("href", navItem.path, 0)}>${escape(navItem.title)}
						</a>`}
				</li>`;
  })}</ul></nav>
</header>`;
});
const Breadcrumb_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".breadcrumb.svelte-1yucn8w{color:var(--accent-900);font-weight:300;margin-bottom:var(--space-l)}.breadcrumb__unclickable.svelte-1yucn8w{display:inline-block;font-weight:500}.breadcrumb__clickable.svelte-1yucn8w{color:var(--accent-600);display:inline-flex}.breadcrumb__clickable.svelte-1yucn8w:hover{color:var(--accent-700);text-decoration:underline}",
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
  return `<nav class="${"breadcrumb base-text svelte-1yucn8w"}">${each(crumbs, (c, i) => {
    return `${i == crumbs.length - 1 ? `<div class="${"breadcrumb__unclickable svelte-1yucn8w"}">${escape(c.label)}
			</div>` : `<a class="${"breadcrumb__clickable svelte-1yucn8w"}"${add_attribute("href", c.href, 0)}>${escape(c.label)}</a> &gt;\xA0`}`;
  })}
</nav>`;
});
const Marquee_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".container.svelte-1eambwo.svelte-1eambwo{font-size:var(--font-size-small);font-weight:400;max-width:100vw;position:absolute;width:100%;z-index:1}.marquee.svelte-1eambwo.svelte-1eambwo{--gap:0.5rem;color:var(--primary-600);overflow:hidden;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none}.marquee.svelte-1eambwo.svelte-1eambwo,.marquee__content.svelte-1eambwo.svelte-1eambwo{display:flex;gap:var(--gap)}.marquee__content.svelte-1eambwo.svelte-1eambwo{animation:svelte-1eambwo-scroll 30s linear infinite;animation-direction:reverse;flex-shrink:0;justify-content:space-around;min-width:100%}.marquee.svelte-1eambwo:hover .marquee__content.svelte-1eambwo{animation-play-state:paused}@keyframes svelte-1eambwo-scroll{0%{transform:translateX(0)}to{transform:translateX(calc(-100% - var(--gap)))}}",
  map: null
};
const Marquee = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="${"container svelte-1eambwo"}"><div class="${"marquee svelte-1eambwo"}"><ul class="${"marquee__content svelte-1eambwo"}"><li>Nguyen Dang Khoa</li>
			<li>wentallout@gmail.com</li>
			<li>+84 929 066 331</li>
			<li>Mobile First</li>
			<li>Responsive Design</li>
			<li>Human-Centered Design</li></ul>
		
		<ul class="${"marquee__content svelte-1eambwo"}" aria-hidden="${"true"}"><li>Nguyen Dang Khoa</li>
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
  code: ".yinyang-container.svelte-e87qtx{background-color:#000;border-radius:100%;display:hidden;height:24px;opacity:.6;width:24px;z-index:0}.svg-container.svelte-e87qtx{align-items:center;background-color:transparent;display:flex;height:60%;justify-content:center;position:relative;width:100%}@media(min-width:768px){.svg-container.svelte-e87qtx{height:100%;width:100%}}.logo-container.svelte-e87qtx{align-items:center;background-color:#000;display:flex;justify-content:center;max-width:100vw;padding-bottom:.5rem;padding-top:.5rem;position:relative;width:100%}",
  map: null
};
const LogoContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"logo-container svelte-e87qtx"}"><div class="${"svg-container svelte-e87qtx"}">${validate_component(Marquee, "Marquee").$$render($$result, {}, {}, {})}
		<div class="${"yinyang-container svelte-e87qtx"}">${validate_component(Yin_yang_fill, "YinYangFill").$$render(
    $$result,
    {
      class: "rotate",
      color: "var(--neutral-900)",
      width: "24",
      height: "24"
    },
    {},
    {}
  )}</div></div>
</div>`;
});
const latin300 = "";
const latin400 = "";
const latin500 = "";
const latin600 = "";
const sanitize = "";
const global = "";
const weird = "";
const atropos_min = "";
const nprogress = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".page-container.svelte-1mqvlmv{background:var(--background)}.main-content.svelte-1mqvlmv{display:flex;flex-direction:column;margin:var(--space-m) 1rem;min-height:calc(100vh - 70px)}@media(min-width:768px){.main-content.svelte-1mqvlmv{margin:var(--space-m) 0;padding:var(--space-m) 17vw}}",
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
<div class="${"page-container svelte-1mqvlmv"}" data-sveltekit-prefetch>${validate_component(BackToTop, "BackToTop").$$render($$result, {}, {}, {})}
	${validate_component(LogoContainer, "LogoContainer").$$render($$result, {}, {}, {})}
	${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

	<main id="${"main-content"}" class="${"main-content svelte-1mqvlmv"}">${validate_component(Breadcrumb, "Breadcrumb").$$render($$result, { path: $page.url.pathname }, {}, {})}
			${slots.default ? slots.default({}) : ``}</main>

	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}
</div>`;
});
export {
  Layout as default
};
