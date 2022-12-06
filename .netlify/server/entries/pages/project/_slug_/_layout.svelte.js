import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
import { M as MarkdownContainer } from "../../../../chunks/MarkdownContainer.js";
import "vanilla-lazyload";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(MarkdownContainer, "MarkdownContainer").$$render($$result, {}, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
export {
  Layout as default
};
