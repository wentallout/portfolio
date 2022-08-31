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
  S: () => SectionTitle
});
module.exports = __toCommonJS(stdin_exports);
var import_index = require("./index.js");
const SectionTitle_svelte_svelte_type_style_lang = "";
const css = {
  code: ".section-icon.svelte-8lw0n0{display:flex;justify-content:left;align-items:center;border:1px solid var(--black);border-radius:100%;padding:0.25rem;margin-right:0.5rem}.section-title.svelte-8lw0n0{display:flex;justify-content:left;align-items:center;margin-bottom:2.5rem;font-weight:600;color:var(--black)}",
  map: null
};
const SectionTitle = (0, import_index.c)(($$result, $$props, $$bindings, slots) => {
  let { sectionTitle = "" } = $$props;
  if ($$props.sectionTitle === void 0 && $$bindings.sectionTitle && sectionTitle !== void 0)
    $$bindings.sectionTitle(sectionTitle);
  $$result.css.add(css);
  return `<div class="${"section-title svelte-8lw0n0"}"><div class="${"section-icon svelte-8lw0n0"}">${slots.default ? slots.default({}) : ``}</div>
	<h2 class="${"base-text"}">${(0, import_index.h)(sectionTitle)}</h2>
</div>`;
});
