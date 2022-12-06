import { c as create_ssr_component } from "./index.js";
const metadata = {
  "title": "What the hell is WCAG?",
  "date": "2022-11-26",
  "categories": ["fundamental"]
};
const Wth_is_wcag = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="${"toc"}"><ol class="${"toc-level toc-level-1"}"><li class="${"toc-item toc-item-h2"}"><a class="${"toc-link toc-link-h2"}" href="${"#wcag"}">WCAG</a></li><li class="${"toc-item toc-item-h2"}"><a class="${"toc-link toc-link-h2"}" href="${"#the-four-principles"}">The four principles</a></li></ol></nav>

<h2 id="${"wcag"}">WCAG</h2>
<p>WCAG is short for \u201CWeb Content Accessibility Guidelines\u201D. These are guidelines for web content creators (people that make websites and web apps) on how to make sure that their content or application is usable and accessible by everyone. A good intro on WCAG can be found at MDN. In some countries, it\u2019s even mandatory for certain sites to adhere to these guidelines.</p>
<p><a href="${"https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG"}" rel="${"nofollow"}">Understanding WCAG</a></p>
<h2 id="${"the-four-principles"}">The four principles</h2>
<p><a href="${"https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable"}" rel="${"nofollow"}">Perceivable</a>: Users must be able to perceive it in some way, using one or more of their senses.</p>
<p><a href="${"https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Operable"}" rel="${"nofollow"}">Operable</a>: Users must be able to control UI elements (e.g. buttons must be clickable in some way \u2014 mouse, keyboard, voice command, etc.).</p>
<p><a href="${"https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Understandable"}" rel="${"nofollow"}">Understandable</a>: The content must be understandable to its users.</p>
<p><a href="${"https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Robust"}" rel="${"nofollow"}">Robust</a>: The content must be developed using well-adopted web standards that will work across different browsers, now and in the future.</p>`;
});
export {
  Wth_is_wcag as default,
  metadata
};
