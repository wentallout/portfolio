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
  default: () => Error2
});
module.exports = __toCommonJS(stdin_exports);
var import_chunks = require("../../chunks/index.js");
var import_stores = require("../../chunks/stores.js");
const _error_svelte_svelte_type_style_lang = "";
const css = {
  code: ".status.svelte-pfzc9z{color:var(--error)}.btn-back.svelte-pfzc9z{background-color:var(--primary);color:var(--black)}.btn-back.svelte-pfzc9z:hover{background-color:var(--primary-hover)}",
  map: null
};
const Error2 = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_chunks.f)(import_stores.p, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<h1 class="${"large-text status svelte-pfzc9z"}">${(0, import_chunks.h)($page.status)}</h1>
<h2 class="${"error-info mix-text"}">Oops! This is awkward...</h2>
<p>${(0, import_chunks.h)($page.error.message)}</p>

<a class="${"btn btn-back svelte-pfzc9z"}" href="${"/"}">Go back</a>`;
});
