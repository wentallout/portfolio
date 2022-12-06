import { c as create_ssr_component, e as spread, f as escape_object } from "./index.js";
const Brain = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 256 256" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M248 132a56 56 0 0 0-32-50.6V72a48 48 0 0 0-88-26.5A48 48 0 0 0 40 72v9.4a56 56 0 0 0 0 101.2v1.4a48 48 0 0 0 88 26.5a48 48 0 0 0 88-26.5v-1.4a56.1 56.1 0 0 0 32-50.6ZM88 216a32 32 0 0 1-31.8-28.6a49.3 49.3 0 0 0 7.8.6h8a8 8 0 0 0 0-16h-8a40 40 0 0 1-13.3-77.7a8.1 8.1 0 0 0 5.3-7.6V72a32 32 0 0 1 64 0v76.3A47.4 47.4 0 0 0 88 136a8 8 0 0 0 0 16a32 32 0 0 1 0 64Zm104-44h-8a8 8 0 0 0 0 16h8a49.3 49.3 0 0 0 7.8-.6A32 32 0 1 1 168 152a8 8 0 0 0 0-16a47.4 47.4 0 0 0-32 12.3V72a32 32 0 0 1 64 0v14.7a8.1 8.1 0 0 0 5.3 7.6A40 40 0 0 1 192 172ZM60 128a8 8 0 0 1 0-16a20.1 20.1 0 0 0 20-20v-8a8 8 0 0 1 16 0v8a36 36 0 0 1-36 36Zm144-8a8 8 0 0 1-8 8a36 36 0 0 1-36-36v-8a8 8 0 0 1 16 0v8a20.1 20.1 0 0 0 20 20a8 8 0 0 1 8 8Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
export {
  Brain as B
};
