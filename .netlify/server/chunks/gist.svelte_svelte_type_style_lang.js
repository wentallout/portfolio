import { c as create_ssr_component, p as createEventDispatcher, d as add_attribute } from "./index3.js";
const General_observer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { height = "100" } = $$props;
  let { width = "100" } = $$props;
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  return `<div>${`<div class="${"flex justify-center mb-12"}"${add_attribute("style", `height:${height}px;width: 100%`, 0)}></div>`}</div>`;
});
const gist_svelte_svelte_type_style_lang = "";
export {
  General_observer as G
};
