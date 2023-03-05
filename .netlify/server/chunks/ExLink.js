import { c as create_ssr_component, d as add_attribute } from "./index3.js";
/* empty css                                      */const css = {
  code: "a.svelte-1cn03kb{display:contents;position:relative;transition:var(--transition)}",
  map: null
};
const ExLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href } = $$props;
  let { ariaLabel = "" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  $$result.css.add(css);
  return `<a${add_attribute("aria-label", ariaLabel, 0)}${add_attribute("href", href, 0)} rel="${"external nofollow noopener noreferrer"}" target="${"_blank"}" class="${"svelte-1cn03kb"}">${slots.default ? slots.default({}) : ``}
</a>`;
});
export {
  ExLink as E
};
