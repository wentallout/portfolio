import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { I as Image } from "./Image.js";
const headingFontSizes = "/_app/immutable/assets/headingFontSizes-094cb572.webp";
const metadata = {
  "title": "Calculate typography values",
  "date": "2022-10-01T00:00:00.000Z",
  "categories": ["typography"]
};
const Calculate_typography_values = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2 id="${"light-or-dark-background"}"><a href="${"#light-or-dark-background"}">Light or Dark Background?</a></h2>
<p>A large majority of websites favored dark on light color schemes. People use a less aggressive contrast of an off-white or even beige background with dark-gray text. The off-white is often chosen to lower contrast. If you’re making a news/blog website, you might want a comfortable lengthy reading experience.</p>
<p>Black text on a white background is a common pattern for body copy. The contrast is easy on the eyes and is, at least among these websites, the status quo.</p>
<h2 id="${"font-size-for-headlines"}"><a href="${"#font-size-for-headlines"}">Font Size For Headlines</a></h2>
${validate_component(Image, "Image").$$render(
    $$result,
    {
      src: headingFontSizes,
      alt: "heading font sizes"
    },
    {},
    {}
  )}
<p>The most popular font size for headlines is <strong>between 29 and 32 px</strong>.</p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">headline font size = body copy font size * 2.4</code>`}<!-- HTML_TAG_END --></pre>
<h2 id="${"font-size-for-body-copy"}"><a href="${"#font-size-for-body-copy"}">Font Size For Body Copy</a></h2>
<p>The most popular font size for body copy is <strong>between 14 and 16 px</strong>.</p>
<h2 id="${"best-line-height"}"><a href="${"#best-line-height"}">Best line-height</a></h2>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">line height =  body copy font size * 1.5 (or 1.6)</code>`}<!-- HTML_TAG_END --></pre>
<h2 id="${"best-letter-spacing"}"><a href="${"#best-letter-spacing"}">best letter spacing</a></h2>
<p>There’s no <strong>correct</strong> way to achieve perfect spacing atm.</p>
<p><a href="${"https://www.webdesignerdepot.com/2020/07/the-designers-guide-to-letter-spacing/"}" rel="${"nofollow noopener noreferrer external"}" target="${"_blank"}">The Designer’s Guide To Letter Spacing</a></p>
<h2 id="${"best-line-length"}"><a href="${"#best-line-length"}">Best line-length</a></h2>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">line length = line height *  24.8</code>`}<!-- HTML_TAG_END --></pre>
<h2 id="${"space-between-paragraphs"}"><a href="${"#space-between-paragraphs"}">Space between paragraphs</a></h2>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">space between paragraphs = 1.43 * line height</code>`}<!-- HTML_TAG_END --></pre>
<h2 id="${"characters-per-line"}"><a href="${"#characters-per-line"}">Characters per line</a></h2>
<p>The optimal number of characters per line is between 55 and 75, but 75 to 90 is more popular.</p>
<h2 id="${"left-align-is-usually-correct"}"><a href="${"#left-align-is-usually-correct"}">Left align is usually correct</a></h2>
<p>Body text is always left-aligned. Hyphenation is not used at line endings. And links are underlined and/or highlighted with bold or color, sometimes only on hover.</p>
<h2 id="${"some-numbers-on-the-implementation-of-responsive-design"}"><a href="${"#some-numbers-on-the-implementation-of-responsive-design"}">Some numbers on the implementation of responsive design</a></h2>
<p>At a display width of 500 pixels:</p>
<ul><li>Average line height: 28 pixels</li>
<li>Average font size of body: 15 pixels</li>
<li>Average number of characters per line: 77</li></ul>
<p>At a display width of 700 pixels:</p>
<ul><li>Average font size of headlines: 36 pixels</li>
<li>Average font size of body: 15.6 pixels</li>
<li>Average number of characters per line: 82.7</li></ul>
<p>At a display width of 950 pixels:</p>
<ul><li>Average font size of headlines: 37.9 pixels</li>
<li>Average font size of body: 16.1 pixels</li>
<li>Average number of characters per line: 84.8</li></ul>
<p>At a display width of 1600 pixels:</p>
<ul><li>Average font size of headlines: 40.7 pixels</li>
<li>Average font size of body: 16.2 pixels</li>
<li>Average number of characters per line: 86.8</li></ul>
<h2 id="${"raw-data"}"><a href="${"#raw-data"}">Raw Data</a></h2>
<p><a href="${"https://docs.google.com/spreadsheets/d/1Vcehdh4SZT5RJhzZ0i-rjCRFX_HC2Lo94hbSqiqYblQ/edit#gid=1"}" rel="${"nofollow noopener noreferrer external"}" target="${"_blank"}">Spreadsheet</a></p>`;
});
export {
  Calculate_typography_values as default,
  metadata
};
