import { c as create_ssr_component, h as escape, f as add_attribute } from "./index.js";
const Button_svelte_svelte_type_style_lang = "";
const css = {
  code: ".btn.svelte-156zclx{display:flex;justify-content:center;align-items:center;padding:12px 24px;width:-moz-fit-content;width:fit-content;transition:0.3s;font-size:var(--font-size-small);line-height:var(--line-height-small);font-weight:500;border:1px solid transparent;border-radius:var(--border-radius);overflow:hidden;position:relative;cursor:pointer}.btn.svelte-156zclx:hover{filter:brightness(80%)}",
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { label = "exampleLabel" } = $$props;
  let { labelColor = "var(--neutral-900)" } = $$props;
  let { backgroundColor = "transparent" } = $$props;
  let { type = "submit" } = $$props;
  let { border = "" } = $$props;
  let btnEle;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.labelColor === void 0 && $$bindings.labelColor && labelColor !== void 0)
    $$bindings.labelColor(labelColor);
  if ($$props.backgroundColor === void 0 && $$bindings.backgroundColor && backgroundColor !== void 0)
    $$bindings.backgroundColor(backgroundColor);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  $$result.css.add(css);
  return `<button class="${"btn svelte-156zclx"}" style="${"background-color: " + escape(backgroundColor, true) + "; border: " + escape(border, true) + "; color: " + escape(labelColor, true)}"${add_attribute("type", type, 0)}${add_attribute("this", btnEle, 0)}>${slots.default ? slots.default({}) : ``}
	${escape(label)}
</button>`;
});
export {
  Button as B
};
