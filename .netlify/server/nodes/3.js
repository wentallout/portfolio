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
  shared: () => shared,
  stylesheets: () => stylesheets
});
module.exports = __toCommonJS(stdin_exports);
var shared = __toESM(require("../entries/pages/contact/_page.js"));
const index = 3;
const component = async () => (await Promise.resolve().then(() => __toESM(require("../entries/pages/contact/_page.svelte.js")))).default;
const file = "_app/immutable/components/pages/contact/_page.svelte-a4552609.js";
const imports = ["_app/immutable/components/pages/contact/_page.svelte-a4552609.js", "_app/immutable/chunks/index-f46d1ad3.js", "_app/immutable/chunks/figma-logo-d36fd173.js", "_app/immutable/modules/pages/contact/_page.js-344d4a79.js", "_app/immutable/chunks/_page-42553da0.js"];
const stylesheets = ["_app/immutable/assets/+page-f1edc2b4.css"];
