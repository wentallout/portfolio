import { c as create_ssr_component, d as add_attribute, h as escape } from "./index3.js";
const ExLink_svelte_svelte_type_style_lang = "";
const css = {
  code: "a.svelte-cae10u.svelte-cae10u{position:relative;transition:var(--transition)}.tooltip.svelte-cae10u.svelte-cae10u{-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);background:rgba(0,0,0,.5);border-radius:var(--border-radius-light);color:var(--text);font-weight:300;opacity:0;padding:var(--space-xs);position:fixed;z-index:99}.tooltip.svelte-cae10u.svelte-cae10u,a.svelte-cae10u:hover .tooltip.svelte-cae10u{display:none}@media(min-width:768px){a.svelte-cae10u:hover .tooltip.svelte-cae10u{display:block;opacity:1}}",
  map: null
};
const ExLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href } = $$props;
  let { ariaLabel = "external link" } = $$props;
  let tooltipX = 0;
  let tooltipY = 0;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  $$result.css.add(css);
  return `<a${add_attribute("aria-label", ariaLabel, 0)}${add_attribute("href", href, 0)} rel="${"external nofollow noopener noreferrer"}" target="${"_blank"}" class="${"svelte-cae10u"}"><div class="${"tooltip small-text svelte-cae10u"}" style="${"top: " + escape(tooltipY, true) + "px; left: " + escape(tooltipX, true) + "px"}">${escape(href)}</div>

	${slots.default ? slots.default({}) : ``}
</a>`;
});
export {
  ExLink as E
};
