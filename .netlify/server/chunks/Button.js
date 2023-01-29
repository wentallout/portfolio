import { c as create_ssr_component, h as escape, d as add_attribute } from "./index3.js";
const Button_svelte_svelte_type_style_lang = "";
const css = {
  code: ".btn.svelte-txu3vt{align-items:center;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:1px solid transparent;border-radius:var(--border-radius);cursor:pointer;display:flex;font-size:var(--font-size-small);font-weight:600;justify-content:center;line-height:normal;overflow:hidden;padding:1rem 2rem;position:relative;transition:var(--transition);width:100%}.btn.svelte-txu3vt:hover{filter:brightness(120%)}",
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { label = "exampleLabel" } = $$props;
  let { labelColor = "var(--black)" } = $$props;
  let { backgroundColor = "transparent" } = $$props;
  let { width = "" } = $$props;
  let { type = "submit" } = $$props;
  let { border = "" } = $$props;
  let btnEle;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.labelColor === void 0 && $$bindings.labelColor && labelColor !== void 0)
    $$bindings.labelColor(labelColor);
  if ($$props.backgroundColor === void 0 && $$bindings.backgroundColor && backgroundColor !== void 0)
    $$bindings.backgroundColor(backgroundColor);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  $$result.css.add(css);
  return `<button class="${"btn svelte-txu3vt"}" style="${"background-color: " + escape(backgroundColor, true) + "; border: " + escape(border, true) + "; color: " + escape(labelColor, true) + ";width: " + escape(width, true)}"${add_attribute("type", type, 0)}${add_attribute("this", btnEle, 0)}>${slots.default ? slots.default({}) : ``}
	${escape(label)}
</button>`;
});
export {
  Button as B
};
