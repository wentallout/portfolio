import { c as create_ssr_component, e as spread, f as escape_object, v as validate_component } from "../../../../chunks/index.js";
import { S as SectionTitle } from "../../../../chunks/SectionTitle.js";
const Wrench = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 256 256" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M226.3 67.9a8.3 8.3 0 0 0-4.6-4.4a7.7 7.7 0 0 0-6.3.4a5.1 5.1 0 0 0-2.1 1.5l-39 38.9l-18.8-3.8l-3.8-18.8l38.9-39a5.1 5.1 0 0 0 1.5-2.1a7.7 7.7 0 0 0 .4-6.3a8.3 8.3 0 0 0-4.4-4.6a72 72 0 0 0-94 95.2L33.8 177c-.1.1-.3.2-.4.4a31.9 31.9 0 0 0 0 45.2a31.9 31.9 0 0 0 45.2 0c.2-.1.3-.3.4-.4l52.1-60.3a72 72 0 0 0 95.2-94Zm-26.7 67.7a56.2 56.2 0 0 1-66.5 9.5a8.1 8.1 0 0 0-10.1 1.7l-55.9 64.7a16 16 0 0 1-22.6-22.6l64.7-55.9a8 8 0 0 0 1.8-9.9a56.1 56.1 0 0 1 58.9-82.3l-32.5 32.6a8 8 0 0 0-2.2 7.2l5.6 28.3a8.4 8.4 0 0 0 6.3 6.3l28.3 5.6a8 8 0 0 0 7.2-2.2l32.6-32.5a55.9 55.9 0 0 1-15.6 49.5Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(SectionTitle, "SectionTitle").$$render($$result, { sectionTitle: "Tool" }, {}, {
    default: ({ sectionIcon }) => {
      return `${validate_component(Wrench, "Wrench").$$render($$result, Object.assign(sectionIcon), {}, {})}`;
    }
  })}



`;
});
export {
  Page as default
};
