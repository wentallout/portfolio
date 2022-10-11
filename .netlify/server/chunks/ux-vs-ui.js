import { c as create_ssr_component } from "./index.js";
/* empty css                                                */const metadata = {
  "title": "Understanding UX vs UI",
  "date": "30/09/2022",
  "categories": ["fundamental"]
};
const Ux_vs_ui = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2>What does a UX Designer do?</h2>
<p>UX Design always puts users needs first when considering design solutions in order to enhance customer satisfaction.</p>
<ul><li>Defining a problem</li>
<li>Understanding users</li>
<li>Creating personas</li>
<li>Generating tasks &amp; user flows</li>
<li>Creating sketches -&gt; wireframes -&gt; prototypes</li>
<li>Usability testing</li></ul>
<h2>What does a UI Designer do?</h2>
<p>UI Designers make products joyful to interact with. They focus on the visual hierarchy and patterns that give visual cues to users.</p>
<ul><li>Typography</li>
<li>Color scheme</li>
<li>Iconography</li>
<li>Grids, Layout, Spacing</li>
<li>Buttons, Inputs &amp; Forms</li></ul>`;
});
export {
  Ux_vs_ui as default,
  metadata
};
