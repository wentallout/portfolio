import { c as create_ssr_component } from "./index.js";
/* empty css                                                */const metadata = {
  "title": "Gestalt Principles of Design",
  "date": "08/10/2022",
  "categories": ["fundamental"]
};
const Gestalt = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2>1. Law of Proximity</h2>
<p>Objects that are placed near each other will be visually group together</p>
<h2>2. Common Region</h2>
<p>Objects that share an area with a boundary will be visually grouped together.</p>
<h2>3. Law of Similarity</h2>
<p>Objects that are visually similar in size, shape and/or color will be visually grouped together, even if those objects are not near each other.</p>
<h2>4. Law of Continuity</h2>
<p>Objects that are ordered in a line or a curve appear to be related</p>
<h2>5. Law of Closure</h2>
<p>Objects that are visually incomplete will be perceived as a whole by a user</p>`;
});
export {
  Gestalt as default,
  metadata
};
