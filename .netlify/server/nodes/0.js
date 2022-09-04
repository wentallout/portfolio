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
var shared = __toESM(require("../entries/pages/_layout.js"));
const index = 0;
const component = async () => (await Promise.resolve().then(() => __toESM(require("../entries/pages/_layout.svelte.js")))).default;
const file = "_app/immutable/components/pages/_layout.svelte-d1b669ed.js";
const imports = ["_app/immutable/components/pages/_layout.svelte-d1b669ed.js", "_app/immutable/chunks/index-f46d1ad3.js", "_app/immutable/chunks/stores-ca10b7ad.js", "_app/immutable/chunks/singletons-45858f23.js", "_app/immutable/chunks/index-8d58124b.js", "_app/immutable/chunks/_commonjsHelpers-e864563f.js", "_app/immutable/modules/pages/_layout.js-7b9cbfbc.js", "_app/immutable/chunks/_layout-8d2a742b.js"];
const stylesheets = ["_app/immutable/assets/+layout-5dbf0a4d.css"];
