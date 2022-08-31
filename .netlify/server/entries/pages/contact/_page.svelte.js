var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Page
});
module.exports = __toCommonJS(stdin_exports);
var import_chunks = require("../../../chunks/index.js");
const SocialLinks_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".social.svelte-16q0xg2{display:flex;flex-direction:column;justify-content:center;align-items:left;width:100%}.biolink-qr.svelte-16q0xg2{width:300px;height:300px;object-fit:cover}.biolink-qr.svelte-16q0xg2:hover{background-color:var(--primary)}",
  map: null
};
const SocialLinks = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="${"social svelte-16q0xg2"}"><a target="${"_blank"}" class="${"social__link"}" href="${"https://khoa.bio.link/"}"><img class="${"biolink-qr svelte-16q0xg2"}" src="${"/images/khoa-biolink.png"}" alt="${"Khoa's Biolink"}"></a>
</div>`;
});
const ContactForm_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".form-container.svelte-sj83c{display:flex;justify-content:left;width:100%}.contact.svelte-sj83c{box-shadow:var(--box-shadow);width:100%;max-width:70rem;display:flex;flex-direction:column;padding:2rem}.contact__input.svelte-sj83c{border:1px solid var(--gray);margin-bottom:1rem}.contact__message.svelte-sj83c{margin-bottom:1rem;border:1px solid var(--gray)}.contact__input.svelte-sj83c:focus,.contact__message.svelte-sj83c:focus{border:2px solid var(--black)}.btn-send.svelte-sj83c{border:0;background-color:var(--primary);margin-right:1rem}.btn-send.svelte-sj83c:hover{background-color:hsl(38, 50%, 37%)}.btn-reset.svelte-sj83c{border:1px solid var(--error);color:var(--error);background-color:transparent}.btn-reset.svelte-sj83c:hover{background-color:var(--error);color:var(--white)}.btn-container.svelte-sj83c{display:flex;flex-direction:row;margin-top:2rem}",
  map: null
};
const ContactForm = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"form-container base-text svelte-sj83c"}"><form netlify class="${"contact svelte-sj83c"}" action="${"https://formsubmit.co/wentallout@gmail.com"}" method="${"POST"}">
		<input type="${"hidden"}" name="${"_captcha"}" value="${"false"}">
		<input type="${"hidden"}" name="${"_subject"}" value="${"New email from Khoa's website"}">
		

		<div class="${"label"}">Name</div>
		<input class="${"contact__input small-text svelte-sj83c"}" type="${"text"}" name="${"name"}" required>
		<div class="${"label"}">Email</div>
		<input placeholder="${"username@email.com"}" class="${"contact__input small-text svelte-sj83c"}" type="${"email"}" name="${"email"}" required>
		<div class="${"label"}">Message</div>
		<textarea class="${"contact__message small-text svelte-sj83c"}" required name="${"message"}" placeholder="${""}"></textarea>

		<div class="${"btn-container svelte-sj83c"}"><button class="${"btn btn-send svelte-sj83c"}" type="${"submit"}">Send</button>
			<button class="${"btn btn-reset svelte-sj83c"}" type="${"reset"}">Reset</button></div></form>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-1ipmg82{display:flex;justify-content:space-between;flex-direction:column}",
  map: null
};
const Page = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Contact</title>`, ""}`, ""}

<div class="${"container svelte-1ipmg82"}">${(0, import_chunks.v)(ContactForm, "ContactForm").$$render($$result, {}, {}, {})}
	${(0, import_chunks.v)(SocialLinks, "SocialLinks").$$render($$result, {}, {}, {})}
</div>`;
});
