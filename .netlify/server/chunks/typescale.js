import { c as create_ssr_component, v as validate_component } from "./index.js";
import { I as Image } from "./Image.js";
const utopia = "/_app/immutable/assets/utopia-2a8d2dc3.png";
const utopiaOutput = "/_app/immutable/assets/utopiaOutput-1b20ced1.png";
const metadata = {
  "title": "How to pick the perfect Type Scale for your next design",
  "date": "20/09/2022"
};
const Typescale = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2>What is type scale?</h2>
<p>A type scale is a collection of font sizes that are in visual harmony. A typographer chooses sizes from a typographic scale in the same way that a musician chooses notes from a musical scale.</p>
<h2>How to generate a type scale?</h2>
<p>If you\u2019re like me and can\u2019t be bothered to do all the math stuff, you should use a website that calculate and generate a type scale for you.
<a href="${"https://utopia.fyi/type/calculator"}" rel="${"nofollow"}">Utopia</a> is my favorite.</p>
<h3>Input</h3>
<p>Now Utopia requires an input. You need to pick 2 font size, one for the smallest screen size and one for the biggest screen size you have. The page already has <strong>320px width for the min viewport</strong> and <strong>1140px width for the max viewport</strong>, you can keep that number if you want.</p>
${validate_component(Image, "Image").$$render($$result, { src: utopia, alt: "utopia" }, {}, {})}
<h3>Output</h3>
<p>Utopia will generate a type scale for you using <strong>steps</strong>. You\u2019re gonna use these <strong>steps</strong> instead of fixed numbers in your designs. This is the ultimate way to make responsive typography and avoid the tedious process of defining a specific numbers for each breakpoint.</p>
${validate_component(Image, "Image").$$render($$result, { src: utopiaOutput, alt: "utopia output" }, {}, {})}
<h2>Which type scale should I choose?</h2>
<p>This can get complicated so I suggest you experiment a little bit. I normally categorize designs into these three:</p>
<ul><li>High Contrast (banners, marketing sites): These scales have the greatest variation between sizes, and are perfect for large screens</li></ul>
<p>-&gt; Golden Ratio (1.618), Perfect Fifth (1.5), Augmented Fourth (1.414)</p>
<ul><li>Medium Contrast (blogs): This is the most popular type scale, it has moderate variance between sizes</li></ul>
<p>-&gt; Perfect Fourth (1.333), Major Third (1.25), Minor Third (1.2)</p>
<ul><li>Low Contrast (websites with a lot of text like E-commerce, news): work well for layouts that contain a lot of identifiers</li></ul>
<p>-&gt; Major Second (1.125), Minor Second (1.067)</p>`;
});
export {
  Typescale as default,
  metadata
};
