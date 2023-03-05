import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { I as Image } from "./Image.js";
const uxBooks = "/_app/immutable/assets/uxBooks-68c26640.webp";
const metadata = {
  "title": "Best UX Design Books you should read in 2023 + Download Links",
  "date": "2023-1-26",
  "categories": ["freebies"]
};
const Best_ux_books = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2 id="${"roadmap"}"><a href="${"#roadmap"}">roadmap</a></h2>
${validate_component(Image, "Image").$$render(
    $$result,
    {
      src: uxBooks,
      alt: "UX Books to read",
      imagePreset: "scroll"
    },
    {},
    {}
  )}
<h2 id="${"read-these-first"}"><a href="${"#read-these-first"}">read these first</a></h2>
<p>Fundamental books will give you a feel for what UX design is all about. The essential reading list includes following books:</p>
<ul><li>The Design of Everyday Things by Don Norman</li>
<li>Designing for Interaction by Dan Saffer</li>
<li>100 Things Every Designer Needs to Know about People by Susan Weinschenk</li>
<li>Dont Make Me Think: A Common Sense Approach to Web Usability by Steve Krug</li>
<li>About Face: The Essentials of Interaction Design by Alan Cooper.</li></ul>
<h2 id="${"checklist"}"><a href="${"#checklist"}">checklist</a></h2>
<h3 id="${"kickstart"}"><a href="${"#kickstart"}">Kickstart</a></h3>
<ul class="${"contains-task-list"}"><li class="${"task-list-item"}"><input type="${"checkbox"}" disabled> The Design of Everyday Things</li></ul>
<h3 id="${"working-in-small-design-team"}"><a href="${"#working-in-small-design-team"}">Working in small design team</a></h3>
<ul class="${"contains-task-list"}"><li class="${"task-list-item"}"><input type="${"checkbox"}" disabled> The User Experience Team of One</li>
<li class="${"task-list-item"}"><input type="${"checkbox"}" disabled> Just Enough Research</li></ul>
<h3 id="${"leadership-and-design-management"}"><a href="${"#leadership-and-design-management"}">Leadership and Design Management</a></h3>
<ul class="${"contains-task-list"}"><li class="${"task-list-item"}"><input type="${"checkbox"}" disabled> The Making of a Manager</li></ul>
<h3 id="${"into-product-management"}"><a href="${"#into-product-management"}">Into Product Management</a></h3>
<ul class="${"contains-task-list"}"><li class="${"task-list-item"}"><input type="${"checkbox"}" disabled> Insprired</li>
<li class="${"task-list-item"}"><input type="${"checkbox"}" disabled> Zero To One</li></ul>
<h3 id="${"want-to-learn-basic-visual-design"}"><a href="${"#want-to-learn-basic-visual-design"}">Want to learn basic Visual Design</a></h3>
<ul class="${"contains-task-list"}"><li class="${"task-list-item"}"><input type="${"checkbox"}" disabled> The non designer Design book</li>
<li class="${"task-list-item"}"><input type="${"checkbox"}" disabled> Universal Principles of Design</li></ul>
<h3 id="${"design-that-influences-human-behaviors"}"><a href="${"#design-that-influences-human-behaviors"}">Design that influences human behaviors</a></h3>
<ul class="${"contains-task-list"}"><li class="${"task-list-item"}"><input type="${"checkbox"}" disabled> Hooked</li>
<li class="${"task-list-item"}"><input type="${"checkbox"}" disabled> 100 Things Every Designer Needs to know about people</li></ul>
<h3 id="${"usability"}"><a href="${"#usability"}">Usability</a></h3>
<ul class="${"contains-task-list"}"><li class="${"task-list-item"}"><input type="${"checkbox"}" disabled> Dont Make Me Think</li>
<li class="${"task-list-item"}"><input type="${"checkbox"}" disabled> Measuring the User Experience</li></ul>
<h3 id="${"win-design-challenge-for-ux-job"}"><a href="${"#win-design-challenge-for-ux-job"}">Win design challenge for UX job</a></h3>
<ul class="${"contains-task-list"}"><li class="${"task-list-item"}"><input type="${"checkbox"}" disabled> Solving Product Design exercises</li></ul>
<h3 id="${"understand-the-core-of-ux"}"><a href="${"#understand-the-core-of-ux"}">Understand the core of UX</a></h3>
<h4 id="${"human-computer-interaction"}"><a href="${"#human-computer-interaction"}">Human Computer Interaction</a></h4>
<ul class="${"contains-task-list"}"><li class="${"task-list-item"}"><input type="${"checkbox"}" disabled> Interaction Design</li>
<li class="${"task-list-item"}"><input type="${"checkbox"}" disabled> About face</li></ul>
<h4 id="${"strategic-ux"}"><a href="${"#strategic-ux"}">Strategic UX</a></h4>
<ul class="${"contains-task-list"}"><li class="${"task-list-item"}"><input type="${"checkbox"}" disabled> The Elements of User Experience</li></ul>
<h3 id="${"information-architecture"}"><a href="${"#information-architecture"}">Information Architecture</a></h3>
<ul class="${"contains-task-list"}"><li class="${"task-list-item"}"><input type="${"checkbox"}" disabled> Information Architecture</li>
<li class="${"task-list-item"}"><input type="${"checkbox"}" disabled> DesigningTheSearchExperience</li></ul>
<h3 id="${"research"}"><a href="${"#research"}">Research</a></h3>
<ul class="${"contains-task-list"}"><li class="${"task-list-item"}"><input type="${"checkbox"}" disabled> Observing the User Experience</li>
<li class="${"task-list-item"}"><input type="${"checkbox"}" disabled> Research methods in human-computer interaction</li></ul>
<h3 id="${"run-a-ux-project"}"><a href="${"#run-a-ux-project"}">Run a UX Project</a></h3>
<ul class="${"contains-task-list"}"><li class="${"task-list-item"}"><input type="${"checkbox"}" disabled> Project Guide to UX Design</li>
<li class="${"task-list-item"}"><input type="${"checkbox"}" disabled> Sprint</li>
<li class="${"task-list-item"}"><input type="${"checkbox"}" disabled> UX for lean startups</li></ul>
<h2 id="${"transition-from-dev-to-designer"}"><a href="${"#transition-from-dev-to-designer"}">transition from dev to designer</a></h2>
<p><a href="${"https://xd.adobe.com/ideas/career-tips/web-developer-ux-designer-10-practical-tips-make-career-transition-happen/"}" rel="${"nofollow noopener noreferrer external"}" target="${"_blank"}">Link</a></p>`;
});
export {
  Best_ux_books as default,
  metadata
};
