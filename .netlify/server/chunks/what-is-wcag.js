import { c as create_ssr_component } from "./index3.js";
const metadata = {
  "title": "What is WCAG?",
  "date": "2022-11-26",
  "categories": ["fundamental"]
};
const What_is_wcag = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2 id="${"checklist"}"><a href="${"#checklist"}">Checklist</a></h2>
<p><a href="${"https://thisiswcag.com/"}" rel="${"nofollow noopener noreferrer external"}" target="${"_blank"}">https://thisiswcag.com/</a></p>
<h2 id="${"wcag"}"><a href="${"#wcag"}">WCAG</a></h2>
<p>WCAG is short for “Web Content Accessibility Guidelines”. These are guidelines for web content creators (people that make websites and web apps) on how to make sure that their content or application is usable and accessible by everyone. A good intro on WCAG can be found at MDN. In some countries, it’s even mandatory for certain sites to adhere to these guidelines.</p>
<p><a href="${"https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG"}" rel="${"nofollow noopener noreferrer external"}" target="${"_blank"}">Understanding WCAG</a></p>
<h2 id="${"the-four-principles"}"><a href="${"#the-four-principles"}">The four principles</a></h2>
<p><a href="${"https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable"}" rel="${"nofollow noopener noreferrer external"}" target="${"_blank"}">Perceivable</a>: Users must be able to perceive it in some way, using one or more of their senses.</p>
<p><a href="${"https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Operable"}" rel="${"nofollow noopener noreferrer external"}" target="${"_blank"}">Operable</a>: Users must be able to control UI elements (e.g. buttons must be clickable in some way — mouse, keyboard, voice command, etc.).</p>
<p><a href="${"https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Understandable"}" rel="${"nofollow noopener noreferrer external"}" target="${"_blank"}">Understandable</a>: The content must be understandable to its users.</p>
<p><a href="${"https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Robust"}" rel="${"nofollow noopener noreferrer external"}" target="${"_blank"}">Robust</a>: The content must be developed using well-adopted web standards that will work across different browsers, now and in the future.</p>`;
});
export {
  What_is_wcag as default,
  metadata
};
