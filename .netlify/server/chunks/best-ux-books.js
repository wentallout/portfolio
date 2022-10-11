import { c as create_ssr_component, v as validate_component } from "./index.js";
import { I as Image } from "./Image.js";
const uxBooks = "/_app/immutable/assets/uxBooks-8105af66.jpeg";
const metadata = {
  "title": "Best UX Books to read",
  "date": "07/10/2022",
  "categories": ["tips"]
};
const Best_ux_books = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2>Roadmap</h2>
${validate_component(Image, "Image").$$render(
    $$result,
    {
      imagePreset: "scroll",
      src: uxBooks,
      alt: "UX Books to read"
    },
    {},
    {}
  )}`;
});
export {
  Best_ux_books as default,
  metadata
};
