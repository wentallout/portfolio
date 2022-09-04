var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  component: () => component,
  file: () => file,
  imports: () => imports,
  index: () => index,
  stylesheets: () => stylesheets
});
module.exports = __toCommonJS(stdin_exports);
const index = 5;
const component = async () => (await Promise.resolve().then(() => __toESM(require("../entries/pages/resource/_page.svelte.js")))).default;
const file = "_app/immutable/components/pages/resource/_page.svelte-85cc3f49.js";
const imports = ["_app/immutable/components/pages/resource/_page.svelte-85cc3f49.js", "_app/immutable/chunks/index-f46d1ad3.js", "_app/immutable/chunks/index-8d58124b.js", "_app/immutable/chunks/SectionTitle-182e287d.js"];
const stylesheets = ["_app/immutable/assets/+page-0b274a0d.css", "_app/immutable/assets/SectionTitle-3ceb21c2.css"];
