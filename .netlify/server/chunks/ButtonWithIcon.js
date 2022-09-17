import { c as create_ssr_component, h as escape } from "./index.js";
const ButtonWithIcon_svelte_svelte_type_style_lang = "";
const css = {
  code: ".btn.svelte-z8kbwj{border:1px solid transparent;margin-right:var(--space-xs)}.btn.svelte-z8kbwj:hover{filter:brightness(70%)}",
  map: null
};
const ButtonWithIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { label = "exampleLabel" } = $$props;
  let { labelColor = "" } = $$props;
  let { backgroundColor = "transparent" } = $$props;
  let { border = "" } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.labelColor === void 0 && $$bindings.labelColor && labelColor !== void 0)
    $$bindings.labelColor(labelColor);
  if ($$props.backgroundColor === void 0 && $$bindings.backgroundColor && backgroundColor !== void 0)
    $$bindings.backgroundColor(backgroundColor);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  $$result.css.add(css);
  return `<button style="${"background-color: " + escape(backgroundColor, true) + "; border: " + escape(border, true) + "; color: " + escape(labelColor, true)}" class="${"btn svelte-z8kbwj"}" type="${"submit"}">${slots.default ? slots.default({}) : ``}
	${escape(label)}
</button>`;
});
export {
  ButtonWithIcon as B
};
