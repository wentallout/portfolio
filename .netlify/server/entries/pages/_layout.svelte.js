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
  default: () => Layout
});
module.exports = __toCommonJS(stdin_exports);
var import_chunks = require("../../chunks/index.js");
var import_stores = require("../../chunks/stores.js");
var import_nprogress = __toESM(require("nprogress"));
const IconContext = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let { values = {} } = $$props;
  (0, import_chunks.s)("iconCtx", values);
  if ($$props.values === void 0 && $$bindings.values && values !== void 0)
    $$bindings.values(values);
  return `${slots.default ? slots.default({}) : ``}`;
});
const CaretCircleUp = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  var _a, _b, _c;
  let $$restProps = (0, import_chunks.b)($$props, ["weight", "color", "size", "mirrored"]);
  const ctx = (0, import_chunks.g)("iconCtx") || {};
  let { weight = (_a = ctx.weight) != null ? _a : "regular" } = $$props;
  let { color = (_b = ctx.color) != null ? _b : "currentColor" } = $$props;
  let { size = (_c = ctx.size) != null ? _c : "1em" } = $$props;
  let { mirrored = ctx.mirrored || false } = $$props;
  if ($$props.weight === void 0 && $$bindings.weight && weight !== void 0)
    $$bindings.weight(weight);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.mirrored === void 0 && $$bindings.mirrored && mirrored !== void 0)
    $$bindings.mirrored(mirrored);
  return `


<svg${(0, import_chunks.d)(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: (0, import_chunks.e)(size) },
      { height: (0, import_chunks.e)(size) },
      { fill: (0, import_chunks.e)(color) },
      {
        transform: (0, import_chunks.e)(mirrored ? "scale(-1, 1)" : void 0)
      },
      { viewBox: "0 0 256 256" },
      (0, import_chunks.f)($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}<rect width="${"256"}" height="${"256"}" fill="${"none"}"></rect>${weight === "bold" ? `<path d="${"M204.4,51.6h0a107.9,107.9,0,1,0,0,152.8A107.4,107.4,0,0,0,204.4,51.6Zm-17,135.8a84,84,0,1,1,0-118.8A84.2,84.2,0,0,1,187.4,187.4ZM172.9,136a11.8,11.8,0,0,1-.9,16.9,11.9,11.9,0,0,1-16.9-.9L128,121.9,100.9,152a12,12,0,1,1-17.8-16l36-40a11.9,11.9,0,0,1,17.8,0Z"}"></path>` : `${weight === "duotone" ? `<g opacity="${"0.2"}"><circle cx="${"128"}" cy="${"128"}" r="${"96"}"></circle></g><path d="${"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Z"}"></path><path d="${"M133.9,98.6a8,8,0,0,0-11.8,0l-36,40a8,8,0,0,0,11.8,10.8L128,116l30.1,33.4A7.9,7.9,0,0,0,164,152a8.2,8.2,0,0,0,5.4-2.1,8,8,0,0,0,.5-11.3Z"}"></path>` : `${weight === "fill" ? `<path d="${"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm41.4,125.9A8.2,8.2,0,0,1,164,152a7.9,7.9,0,0,1-5.9-2.6L128,116,97.9,149.4a8,8,0,0,1-11.8-10.8l36-40a8.3,8.3,0,0,1,11.8,0l36,40A8,8,0,0,1,169.4,149.9Z"}"></path>` : `${weight === "light" ? `<path d="${"M200.1,55.9A102,102,0,0,0,55.9,200.1,102,102,0,0,0,200.1,55.9Zm-8.5,135.7a90,90,0,1,1,0-127.2A89.5,89.5,0,0,1,191.6,191.6ZM168.5,140a6,6,0,0,1-4.5,10,6.2,6.2,0,0,1-4.5-2L128,113,96.5,148a6,6,0,0,1-9-8l36-40a6.1,6.1,0,0,1,9,0Z"}"></path>` : `${weight === "thin" ? `<path d="${"M198.7,57.3h0A100,100,0,0,0,57.3,198.7,100,100,0,0,0,198.7,57.3Zm-5.6,135.8a92,92,0,1,1,0-130.2A91.8,91.8,0,0,1,193.1,193.1ZM167,141.3a4.1,4.1,0,0,1-.3,5.7,4.1,4.1,0,0,1-5.7-.3L128,110,95,146.7a4,4,0,0,1-6-5.4l36-40a4.1,4.1,0,0,1,6,0Z"}"></path>` : `${weight === "regular" ? `<path d="${"M201.5,54.5a103.9,103.9,0,0,0-147,147,103.9,103.9,0,0,0,147-147ZM190.2,190.2a88,88,0,1,1,0-124.4A87.5,87.5,0,0,1,190.2,190.2Zm-20.3-51.6a8,8,0,0,1-.5,11.3A8.2,8.2,0,0,1,164,152a7.9,7.9,0,0,1-5.9-2.6L128,116,97.9,149.4a8,8,0,0,1-11.8-10.8l36-40a8,8,0,0,1,11.8,0Z"}"></path>` : `${(0, import_chunks.h)((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`}`}`}`}`}`}</svg>`;
});
const List = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  var _a, _b, _c;
  let $$restProps = (0, import_chunks.b)($$props, ["weight", "color", "size", "mirrored"]);
  const ctx = (0, import_chunks.g)("iconCtx") || {};
  let { weight = (_a = ctx.weight) != null ? _a : "regular" } = $$props;
  let { color = (_b = ctx.color) != null ? _b : "currentColor" } = $$props;
  let { size = (_c = ctx.size) != null ? _c : "1em" } = $$props;
  let { mirrored = ctx.mirrored || false } = $$props;
  if ($$props.weight === void 0 && $$bindings.weight && weight !== void 0)
    $$bindings.weight(weight);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.mirrored === void 0 && $$bindings.mirrored && mirrored !== void 0)
    $$bindings.mirrored(mirrored);
  return `


<svg${(0, import_chunks.d)(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: (0, import_chunks.e)(size) },
      { height: (0, import_chunks.e)(size) },
      { fill: (0, import_chunks.e)(color) },
      {
        transform: (0, import_chunks.e)(mirrored ? "scale(-1, 1)" : void 0)
      },
      { viewBox: "0 0 256 256" },
      (0, import_chunks.f)($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}<rect width="${"256"}" height="${"256"}" fill="${"none"}"></rect>${weight === "bold" ? `<path d="${"M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128ZM40,76H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24ZM216,180H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z"}"></path>` : `${weight === "duotone" ? `<path d="${"M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"}"></path>` : `${weight === "fill" ? `<path d="${"M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"}"></path>` : `${weight === "light" ? `<path d="${"M222,128a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,128ZM40,70H216a6,6,0,0,0,0-12H40a6,6,0,0,0,0,12ZM216,186H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Z"}"></path>` : `${weight === "thin" ? `<path d="${"M220,128a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,128ZM40,68H216a4,4,0,0,0,0-8H40a4,4,0,0,0,0,8ZM216,188H40a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Z"}"></path>` : `${weight === "regular" ? `<path d="${"M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"}"></path>` : `${(0, import_chunks.h)((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`}`}`}`}`}`}</svg>`;
});
const Sun = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  var _a, _b, _c;
  let $$restProps = (0, import_chunks.b)($$props, ["weight", "color", "size", "mirrored"]);
  const ctx = (0, import_chunks.g)("iconCtx") || {};
  let { weight = (_a = ctx.weight) != null ? _a : "regular" } = $$props;
  let { color = (_b = ctx.color) != null ? _b : "currentColor" } = $$props;
  let { size = (_c = ctx.size) != null ? _c : "1em" } = $$props;
  let { mirrored = ctx.mirrored || false } = $$props;
  if ($$props.weight === void 0 && $$bindings.weight && weight !== void 0)
    $$bindings.weight(weight);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.mirrored === void 0 && $$bindings.mirrored && mirrored !== void 0)
    $$bindings.mirrored(mirrored);
  return `


<svg${(0, import_chunks.d)(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: (0, import_chunks.e)(size) },
      { height: (0, import_chunks.e)(size) },
      { fill: (0, import_chunks.e)(color) },
      {
        transform: (0, import_chunks.e)(mirrored ? "scale(-1, 1)" : void 0)
      },
      { viewBox: "0 0 256 256" },
      (0, import_chunks.f)($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}<rect width="${"256"}" height="${"256"}" fill="${"none"}"></rect>${weight === "bold" ? `<path d="${"M128,56a72,72,0,1,0,72,72A72.1,72.1,0,0,0,128,56Zm0,120a48,48,0,1,1,48-48A48,48,0,0,1,128,176ZM116,28V12a12,12,0,0,1,24,0V28a12,12,0,0,1-24,0Zm74.2,37.8a12,12,0,0,1,0-17l11.3-11.3a12,12,0,0,1,17,17L207.2,65.8a12,12,0,0,1-8.5,3.5A12.2,12.2,0,0,1,190.2,65.8ZM256,128a12,12,0,0,1-12,12H228a12,12,0,0,1,0-24h16A12,12,0,0,1,256,128Zm-37.5,73.5a12,12,0,0,1,0,17A11.6,11.6,0,0,1,210,222a12,12,0,0,1-8.5-3.5l-11.3-11.3a12,12,0,0,1,17-17ZM140,228v16a12,12,0,0,1-24,0V228a12,12,0,0,1,24,0ZM65.8,190.2a12,12,0,0,1,0,17L54.5,218.5A12,12,0,0,1,46,222a11.6,11.6,0,0,1-8.5-3.5,12,12,0,0,1,0-17l11.3-11.3A12,12,0,0,1,65.8,190.2ZM28,140H12a12,12,0,0,1,0-24H28a12,12,0,0,1,0,24Zm9.5-85.5a12,12,0,0,1,17-17L65.8,48.8a12,12,0,0,1,0,17,12.2,12.2,0,0,1-8.5,3.5,12,12,0,0,1-8.5-3.5Z"}"></path>` : `${weight === "duotone" ? `<g opacity="${"0.2"}"><circle cx="${"128"}" cy="${"128"}" r="${"60"}"></circle></g><path d="${"M128,60a68,68,0,1,0,68,68A68.1,68.1,0,0,0,128,60Zm0,120a52,52,0,1,1,52-52A52,52,0,0,1,128,180ZM120,36V16a8,8,0,0,1,16,0V36a8,8,0,0,1-16,0ZM43.1,54.5A8.1,8.1,0,1,1,54.5,43.1L68.6,57.3a8,8,0,0,1,0,11.3,8.1,8.1,0,0,1-11.3,0ZM36,136H16a8,8,0,0,1,0-16H36a8,8,0,0,1,0,16Zm32.6,51.4a8,8,0,0,1,0,11.3L54.5,212.9a8.3,8.3,0,0,1-5.7,2.3,8.5,8.5,0,0,1-5.7-2.3,8.1,8.1,0,0,1,0-11.4l14.2-14.1A8,8,0,0,1,68.6,187.4ZM136,220v20a8,8,0,0,1-16,0V220a8,8,0,0,1,16,0Zm76.9-18.5a8.1,8.1,0,0,1,0,11.4,8.5,8.5,0,0,1-5.7,2.3,8.3,8.3,0,0,1-5.7-2.3l-14.1-14.2a8,8,0,0,1,11.3-11.3ZM248,128a8,8,0,0,1-8,8H220a8,8,0,0,1,0-16h20A8,8,0,0,1,248,128ZM187.4,68.6a8,8,0,0,1,0-11.3l14.1-14.2a8.1,8.1,0,0,1,11.4,11.4L198.7,68.6a8.1,8.1,0,0,1-11.3,0Z"}"></path>` : `${weight === "fill" ? `<path d="${"M196,128a68,68,0,1,1-68-68A68.1,68.1,0,0,1,196,128ZM128,44a8,8,0,0,0,8-8V16a8,8,0,0,0-16,0V36A8,8,0,0,0,128,44ZM57.3,68.6a8.1,8.1,0,0,0,11.3,0,8,8,0,0,0,0-11.3L54.5,43.1A8.1,8.1,0,1,0,43.1,54.5ZM44,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H36A8,8,0,0,0,44,128Zm13.3,59.4L43.1,201.5a8.1,8.1,0,0,0,0,11.4,8.5,8.5,0,0,0,5.7,2.3,8.3,8.3,0,0,0,5.7-2.3l14.1-14.2a8,8,0,0,0-11.3-11.3ZM128,212a8,8,0,0,0-8,8v20a8,8,0,0,0,16,0V220A8,8,0,0,0,128,212Zm70.7-24.6a8,8,0,0,0-11.3,11.3l14.1,14.2a8.3,8.3,0,0,0,5.7,2.3,8.5,8.5,0,0,0,5.7-2.3,8.1,8.1,0,0,0,0-11.4ZM240,120H220a8,8,0,0,0,0,16h20a8,8,0,0,0,0-16ZM193.1,70.9a7.8,7.8,0,0,0,5.6-2.3l14.2-14.1a8.1,8.1,0,0,0-11.4-11.4L187.4,57.3a8,8,0,0,0,0,11.3A7.8,7.8,0,0,0,193.1,70.9Z"}"></path>` : `${weight === "light" ? `<path d="${"M128,62a66,66,0,1,0,66,66A66.1,66.1,0,0,0,128,62Zm0,120a54,54,0,1,1,54-54A54,54,0,0,1,128,182ZM122,36V16a6,6,0,0,1,12,0V36a6,6,0,0,1-12,0ZM44.6,53A5.9,5.9,0,1,1,53,44.6L67.2,58.7a6.1,6.1,0,0,1,0,8.5,5.9,5.9,0,0,1-4.3,1.7,5.8,5.8,0,0,1-4.2-1.7ZM42,128a6,6,0,0,1-6,6H16a6,6,0,0,1,0-12H36A6,6,0,0,1,42,128Zm25.2,60.8a6.1,6.1,0,0,1,0,8.5L53,211.4a5.9,5.9,0,0,1-8.4-8.4l14.1-14.2A6.1,6.1,0,0,1,67.2,188.8ZM134,220v20a6,6,0,0,1-12,0V220a6,6,0,0,1,12,0Zm77.4-17a5.9,5.9,0,1,1-8.4,8.4l-14.2-14.1a6,6,0,0,1,8.5-8.5ZM246,128a6,6,0,0,1-6,6H220a6,6,0,0,1,0-12h20A6,6,0,0,1,246,128ZM211.4,44.6a5.8,5.8,0,0,1,0,8.4L197.3,67.2a5.8,5.8,0,0,1-4.2,1.7,5.9,5.9,0,0,1-4.3-1.7,6.1,6.1,0,0,1,0-8.5L203,44.6A5.8,5.8,0,0,1,211.4,44.6Z"}"></path>` : `${weight === "thin" ? `<path d="${"M128,64a64,64,0,1,0,64,64A64.1,64.1,0,0,0,128,64Zm0,120a56,56,0,1,1,56-56A56,56,0,0,1,128,184ZM124,36V16a4,4,0,0,1,8,0V36a4,4,0,0,1-8,0ZM46,51.6A4,4,0,1,1,51.6,46L65.8,60.1a4.2,4.2,0,0,1,0,5.7,3.9,3.9,0,0,1-2.9,1.1,3.8,3.8,0,0,1-2.8-1.1ZM40,128a4,4,0,0,1-4,4H16a4,4,0,0,1,0-8H36A4,4,0,0,1,40,128Zm25.8,62.2a4.2,4.2,0,0,1,0,5.7L51.6,210a3.8,3.8,0,0,1-2.8,1.2A3.9,3.9,0,0,1,46,210a3.9,3.9,0,0,1,0-5.6l14.1-14.2A4.2,4.2,0,0,1,65.8,190.2ZM132,220v20a4,4,0,0,1-8,0V220a4,4,0,0,1,8,0Zm78-15.6a3.9,3.9,0,0,1,0,5.6,3.9,3.9,0,0,1-2.8,1.2,3.8,3.8,0,0,1-2.8-1.2l-14.2-14.1a4,4,0,0,1,5.7-5.7ZM244,128a4,4,0,0,1-4,4H220a4,4,0,0,1,0-8h20A4,4,0,0,1,244,128ZM210,46a3.9,3.9,0,0,1,0,5.6L195.9,65.8a3.8,3.8,0,0,1-2.8,1.1,3.9,3.9,0,0,1-2.9-1.1,4.2,4.2,0,0,1,0-5.7L204.4,46A3.9,3.9,0,0,1,210,46Z"}"></path>` : `${weight === "regular" ? `<path d="${"M128,60a68,68,0,1,0,68,68A68.1,68.1,0,0,0,128,60Zm0,120a52,52,0,1,1,52-52A52,52,0,0,1,128,180ZM120,36V16a8,8,0,0,1,16,0V36a8,8,0,0,1-16,0ZM43.1,54.5A8.1,8.1,0,1,1,54.5,43.1L68.6,57.3a8,8,0,0,1,0,11.3,8.1,8.1,0,0,1-11.3,0ZM36,136H16a8,8,0,0,1,0-16H36a8,8,0,0,1,0,16Zm32.6,51.4a8,8,0,0,1,0,11.3L54.5,212.9a8.3,8.3,0,0,1-5.7,2.3,8.5,8.5,0,0,1-5.7-2.3,8.1,8.1,0,0,1,0-11.4l14.2-14.1A8,8,0,0,1,68.6,187.4ZM136,220v20a8,8,0,0,1-16,0V220a8,8,0,0,1,16,0Zm76.9-18.5a8.1,8.1,0,0,1,0,11.4,8.5,8.5,0,0,1-5.7,2.3,8.3,8.3,0,0,1-5.7-2.3l-14.1-14.2a8,8,0,0,1,11.3-11.3ZM248,128a8,8,0,0,1-8,8H220a8,8,0,0,1,0-16h20A8,8,0,0,1,248,128ZM187.4,68.6a8,8,0,0,1,0-11.3l14.1-14.2a8.1,8.1,0,0,1,11.4,11.4L198.7,68.6a8.1,8.1,0,0,1-11.3,0Z"}"></path>` : `${(0, import_chunks.h)((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`}`}`}`}`}`}</svg>`;
});
const YinYang = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  var _a, _b, _c;
  let $$restProps = (0, import_chunks.b)($$props, ["weight", "color", "size", "mirrored"]);
  const ctx = (0, import_chunks.g)("iconCtx") || {};
  let { weight = (_a = ctx.weight) != null ? _a : "regular" } = $$props;
  let { color = (_b = ctx.color) != null ? _b : "currentColor" } = $$props;
  let { size = (_c = ctx.size) != null ? _c : "1em" } = $$props;
  let { mirrored = ctx.mirrored || false } = $$props;
  if ($$props.weight === void 0 && $$bindings.weight && weight !== void 0)
    $$bindings.weight(weight);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.mirrored === void 0 && $$bindings.mirrored && mirrored !== void 0)
    $$bindings.mirrored(mirrored);
  return `


<svg${(0, import_chunks.d)(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: (0, import_chunks.e)(size) },
      { height: (0, import_chunks.e)(size) },
      { fill: (0, import_chunks.e)(color) },
      {
        transform: (0, import_chunks.e)(mirrored ? "scale(-1, 1)" : void 0)
      },
      { viewBox: "0 0 256 256" },
      (0, import_chunks.f)($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}<rect width="${"256"}" height="${"256"}" fill="${"none"}"></rect>${weight === "bold" ? `<path d="${"M128,20A108,108,0,1,0,236,128,108.1,108.1,0,0,0,128,20ZM44,128a84.1,84.1,0,0,1,84-84,36,36,0,0,1,0,72,60,60,0,0,0-60,60,57.9,57.9,0,0,0,1.2,11.9A83.8,83.8,0,0,1,44,128Zm84,84a36,36,0,0,1,0-72,60,60,0,0,0,60-60,57.9,57.9,0,0,0-1.2-11.9A83.9,83.9,0,0,1,128,212Zm16-36a16,16,0,1,1-16-16A16,16,0,0,1,144,176ZM112,80a16,16,0,1,1,16,16A16,16,0,0,1,112,80Z"}"></path>` : `${weight === "duotone" ? `<path d="${"M224,128a96,96,0,0,1-96,96,48,48,0,0,1,0-96,48,48,0,0,0,0-96A96,96,0,0,1,224,128Z"}" opacity="${"0.2"}"></path><path d="${"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24ZM40,128a88.1,88.1,0,0,1,88-88,40,40,0,0,1,0,80,56,56,0,0,0-56,56,55.2,55.2,0,0,0,5.4,24A88.1,88.1,0,0,1,40,128Zm88,88a40,40,0,0,1,0-80,56,56,0,0,0,56-56,55.2,55.2,0,0,0-5.4-24A88,88,0,0,1,128,216Zm12-40a12,12,0,1,1-12-12A12,12,0,0,1,140,176ZM116,80a12,12,0,1,1,12,12A12,12,0,0,1,116,80Z"}"></path>` : `${weight === "fill" ? `<path d="${"M140,80a12,12,0,1,1-12-12A12,12,0,0,1,140,80Zm92,48A104,104,0,1,1,128,24,104.2,104.2,0,0,1,232,128Zm-92,48a12,12,0,1,0-12,12A12,12,0,0,0,140,176Zm32-92a44,44,0,0,0-44-44A88,88,0,0,0,81.1,202.4,51.1,51.1,0,0,1,76,180a52,52,0,0,1,52-52A44,44,0,0,0,172,84Z"}"></path>` : `${weight === "light" ? `<path d="${"M128,26A102,102,0,1,0,230,128,102.2,102.2,0,0,0,128,26ZM38,128a90.1,90.1,0,0,1,90-90,42,42,0,0,1,0,84,54,54,0,0,0-44.9,84A90.2,90.2,0,0,1,38,128Zm90,90a42,42,0,0,1,0-84,54,54,0,0,0,44.9-84A90,90,0,0,1,128,218Zm12-42a12,12,0,1,1-12-12A12,12,0,0,1,140,176ZM118,80a10,10,0,1,1,10,10A10,10,0,0,1,118,80Z"}"></path>` : `${weight === "thin" ? `<path d="${"M128,28A100,100,0,1,0,228,128,100.2,100.2,0,0,0,128,28ZM36,128a92.1,92.1,0,0,1,92-92,44,44,0,0,1,0,88,51.9,51.9,0,0,0-37.4,88A91.9,91.9,0,0,1,36,128Zm92,92a44,44,0,0,1,0-88,51.9,51.9,0,0,0,37.4-88A92,92,0,0,1,128,220Zm8-44a8,8,0,1,1-8-8A8,8,0,0,1,136,176ZM120,80a8,8,0,1,1,8,8A8,8,0,0,1,120,80Z"}"></path>` : `${weight === "regular" ? `<path d="${"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24ZM40,128a88.1,88.1,0,0,1,88-88,40,40,0,0,1,0,80,56,56,0,0,0-56,56,55.2,55.2,0,0,0,5.4,24A88.1,88.1,0,0,1,40,128Zm88,88a40,40,0,0,1,0-80,56,56,0,0,0,56-56,55.2,55.2,0,0,0-5.4-24A88,88,0,0,1,128,216Zm12-40a12,12,0,1,1-12-12A12,12,0,0,1,140,176ZM116,80a12,12,0,1,1,12,12A12,12,0,0,1,116,80Z"}"></path>` : `${(0, import_chunks.h)((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`}`}`}`}`}`}</svg>`;
});
const BackToTop_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: ".bck2top.svelte-3yclfz{background-color:var(--black);width:48px;height:48px;border-radius:100%;position:fixed;right:30px;bottom:30px;z-index:99;opacity:1;transition:opacity 0.3s, visibility 0.3s;user-select:none;line-height:normal}.bck2top.svelte-3yclfz:hover{cursor:pointer;transform:scale(1.5);transition:transform 0.3s;filter:brightness(1.5)}.bck2top.hidden.svelte-3yclfz{opacity:0;visibility:hidden}",
  map: null
};
const BackToTop = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let { showOnPx = 150 } = $$props;
  if ($$props.showOnPx === void 0 && $$bindings.showOnPx && showOnPx !== void 0)
    $$bindings.showOnPx(showOnPx);
  $$result.css.add(css$6);
  return `

<div class="${["bck2top svelte-3yclfz", "hidden"].join(" ").trim()}">${(0, import_chunks.v)(CaretCircleUp, "CaretCircleUp").$$render(
    $$result,
    {
      className: "red",
      color: "var(--primary)",
      size: "48",
      weight: "fill"
    },
    {},
    {}
  )}
</div>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".footer-container.svelte-kv5rpn{display:flex;flex-direction:column;color:var(--white) !important;font-weight:300}footer.svelte-kv5rpn{display:flex;flex-direction:column;justify-content:center;align-items:flex-start;font-weight:300;padding:2rem 17vw;position:relative;max-width:100vw;background-color:#000}footer.svelte-kv5rpn:before{background:url('/images/rhombus_line.png') repeat top center/49px 72px;content:'';position:absolute;top:0;left:0;width:100%;height:100%;opacity:0.12;z-index:1}.nav-list.svelte-kv5rpn{display:flex;flex-direction:row;justify-content:left;align-items:center;margin:0px;z-index:2;margin-bottom:1rem}.nav-list-item.svelte-kv5rpn{display:flex;padding-left:0;padding-right:1rem}",
  map: null
};
const Footer = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<footer class="${"svelte-kv5rpn"}"><div class="${"footer-container small-text svelte-kv5rpn"}"><ul class="${"nav-list svelte-kv5rpn"}"><li class="${"nav-list-item svelte-kv5rpn"}"><a href="${"/"}">Home</a></li>
			<li class="${"nav-list-item svelte-kv5rpn"}"><a href="${"/project"}">Project</a></li>
			<li class="${"nav-list-item svelte-kv5rpn"}"><a href="${"/resource"}">Resource</a></li>
			<li class="${"nav-list-item svelte-kv5rpn"}"><a href="${"/contact"}">Contact</a></li></ul>
		<div class="${""}">2022 - Made by Khoa with SvelteKit</div>
		<div class="${""}">wentallout@gmail.com</div></div>
</footer>`;
});
const navItems = [
  {
    title: "Home",
    path: "/"
  },
  {
    title: "Project",
    path: "/project"
  },
  {
    title: "Resource",
    path: "/resource"
  },
  {
    title: "Contact",
    path: "/contact"
  }
];
const Header_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".hidden-mobile.svelte-19ksgxf.svelte-19ksgxf{display:none}.main-header.svelte-19ksgxf.svelte-19ksgxf{max-width:100vw;color:var(--white);background-color:#000;width:100%}nav.svelte-19ksgxf ul li.svelte-19ksgxf{display:flex;min-height:3.5rem;margin-left:0;width:100%}.nav__list.svelte-19ksgxf.svelte-19ksgxf{display:flex;flex-direction:column;justify-content:center;align-items:center;margin:0}.nav__list-item.svelte-19ksgxf.svelte-19ksgxf{color:var(--white);background-color:#000;width:100%;display:flex;justify-content:center;align-items:center;border:0.1px solid var(--black)}@media(hover: hover){.nav__list-item.svelte-19ksgxf.svelte-19ksgxf:hover{color:var(--black);background-color:var(--primary);transition:0.3s}}@media(min-width: 768px){.hidden-mobile.svelte-19ksgxf.svelte-19ksgxf{display:flex}#burger-nav.svelte-19ksgxf.svelte-19ksgxf{display:none}.main-header.svelte-19ksgxf.svelte-19ksgxf{padding-left:17vw;padding-right:17vw}.nav__list.svelte-19ksgxf.svelte-19ksgxf{display:flex;flex-direction:row;justify-content:space-evenly;align-items:center}.nav__list-item.svelte-19ksgxf.svelte-19ksgxf{width:100%}}.active-page.svelte-19ksgxf.svelte-19ksgxf{color:var(--primary) !important;pointer-events:none}",
  map: null
};
const Header = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_chunks.i)(import_stores.p, (value) => $page = value);
  $$result.css.add(css$4);
  $$unsubscribe_page();
  return `<header class="${"main-header base-text svelte-19ksgxf"}"><nav class="${"svelte-19ksgxf"}"><ul class="${"nav__list svelte-19ksgxf"}"><li id="${"burger-nav"}" class="${"svelte-19ksgxf"}"><a class="${"nav__list-item svelte-19ksgxf"}"${(0, import_chunks.j)("href", "#", 0)}>${(0, import_chunks.v)(List, "List").$$render($$result, { color: "var(--white)", size: "32" }, {}, {})}</a></li>

			${(0, import_chunks.k)(navItems, (navItem) => {
    return `<li class="${(0, import_chunks.h)((0, import_chunks.l)(`navbar-list${" hidden-mobile"}`), true) + " svelte-19ksgxf"}">${$page.url.pathname === `${navItem.path}` ? `<a class="${"nav__list-item active-page svelte-19ksgxf"}"${(0, import_chunks.j)("href", navItem.path, 0)}>${(0, import_chunks.h)(navItem.title)}
						</a>` : `<a class="${"nav__list-item svelte-19ksgxf"}"${(0, import_chunks.j)("href", navItem.path, 0)}>${(0, import_chunks.h)(navItem.title)}
						</a>`}
				</li>`;
  })}</ul></nav>
</header>`;
});
const Breadcrumb_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".breadcrumb.svelte-2g7qdp{margin-bottom:2rem;font-weight:300;color:var(--gray)}.breadcrumb__unclickable.svelte-2g7qdp{display:inline-block;font-weight:500}.breadcrumb__clickable.svelte-2g7qdp{color:var(--primary)}.breadcrumb__clickable.svelte-2g7qdp:hover{color:var(--primary-hover)}",
  map: null
};
const Breadcrumb = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let { path } = $$props;
  var crumbs;
  if ($$props.path === void 0 && $$bindings.path && path !== void 0)
    $$bindings.path(path);
  $$result.css.add(css$3);
  {
    {
      const tokens = path.split("/").filter((t) => t !== "");
      let tokenPath = "";
      crumbs = tokens.map((t) => {
        tokenPath += "/" + t;
        return { label: t, href: tokenPath };
      });
      crumbs.unshift({ label: "home", href: "/" });
    }
  }
  return `<div class="${"breadcrumb small-text svelte-2g7qdp"}">${(0, import_chunks.k)(crumbs, (c, i) => {
    return `${i == crumbs.length - 1 ? `<div class="${"breadcrumb__unclickable svelte-2g7qdp"}">${(0, import_chunks.h)(c.label)}
			</div>` : `<a class="${"breadcrumb__clickable svelte-2g7qdp"}"${(0, import_chunks.j)("href", c.href, 0)}>${(0, import_chunks.h)(c.label)}</a> &gt;\xA0`}`;
  })}
</div>`;
});
const CoolFrame_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".frameWrap.svelte-1sfynh{display:none;pointer-events:none;position:fixed;z-index:3;top:0;left:0;width:100%;height:100%;transition:0.3s;opacity:0.5}@media(min-width: 768px){.frameWrap.svelte-1sfynh{display:block}}.frame2.svelte-1sfynh:before,.frame2.svelte-1sfynh:after,.corner.svelte-1sfynh:before,.corner.svelte-1sfynh:after{content:'';display:block;position:absolute;box-sizing:border-box;z-index:2}.frame2.svelte-1sfynh{z-index:1;top:0;bottom:0;left:0;right:0;position:absolute;box-sizing:border-box}.frame2.svelte-1sfynh:before{background:url('/images/frame2corner.png') no-repeat 0 0/100%;top:0;left:0;width:21px;height:21px}.frame2.svelte-1sfynh:after{background:url('/images/frame2corner.png') no-repeat 0 0/100%;top:0;right:0;transform:rotate(90deg);width:21px;height:21px}.corner.svelte-1sfynh:before{background:url('/images/frame2corner.png') no-repeat 0 0/100%;bottom:0;left:0;transform:rotate(-90deg);width:21px;height:21px}.corner.svelte-1sfynh:after{background:url('/images/frame2corner.png') no-repeat 0 0/100%;bottom:0;right:0;transform:rotate(180deg);width:21px;height:21px}.bar.svelte-1sfynh{position:absolute;top:4px;bottom:4px;left:21px;right:21px;border-top:1px solid var(--primary);border-bottom:1px solid var(--primary)}.bar.svelte-1sfynh:before{display:block;position:absolute;left:-17px;content:'';width:0.5px;top:16px;bottom:16px;background:var(--primary)}.bar.svelte-1sfynh:after{content:'';display:block;position:absolute;right:-17px;width:0.5px;top:16px;bottom:16px;background:var(--primary)}",
  map: null
};
const CoolFrame = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="${"frameWrap svelte-1sfynh"}"><div class="${"frame2 svelte-1sfynh"}"><div class="${"corner svelte-1sfynh"}"></div>
		<div class="${"bar svelte-1sfynh"}"></div></div>
</div>`;
});
const LogoContainer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".svg-container.svelte-1t1s132{display:flex;justify-content:center;align-items:center;width:60%;height:60%;background-color:transparent}@media(min-width: 768px){.svg-container.svelte-1t1s132{width:100%;height:100%}}.logo-container.svelte-1t1s132{position:relative;max-width:100vw;width:100%;display:flex;justify-content:center;align-items:center;background-color:#000}.side-buttons.svelte-1t1s132{position:absolute;right:30px;margin-top:auto;margin-bottom:auto;padding:4px;border:1px solid var(--black);border-radius:100%}.side-buttons.svelte-1t1s132:hover{background:var(--black);cursor:pointer}.darkmode-btn.svelte-1t1s132{width:32px;height:32px;transition:all 0.3s}",
  map: null
};
const LogoContainer = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let svgColor = "var(--white)";
  $$result.css.add(css$1);
  return `<div class="${"logo-container svelte-1t1s132"}"><div class="${"svg-container svelte-1t1s132"}">${(0, import_chunks.v)(YinYang, "YinYang").$$render(
    $$result,
    {
      class: "rotate",
      color: "var(--black)",
      size: "60"
    },
    {},
    {}
  )}</div>

	<div class="${"side-buttons svelte-1t1s132"}"><div class="${"darkmode-btn svelte-1t1s132"}">${`${(0, import_chunks.v)(Sun, "Sun").$$render($$result, { size: "32", color: svgColor }, {}, {})}`}</div></div>
</div>`;
});
const normalize = "";
const global = "";
const weird = "";
const atropos_min = "";
const nprogress = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".page-container.svelte-no8e5g{background-color:var(--background);display:flex;flex-direction:column}.main-content.svelte-no8e5g{min-height:calc(100vh - 70px);padding:2rem 10vw}@media(min-width: 768px){.main-content.svelte-no8e5g{padding:2rem 17vw}}",
  map: null
};
const Layout = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let $navigating, $$unsubscribe_navigating;
  let $page, $$unsubscribe_page;
  $$unsubscribe_navigating = (0, import_chunks.i)(import_stores.n, (value) => $navigating = value);
  $$unsubscribe_page = (0, import_chunks.i)(import_stores.p, (value) => $page = value);
  import_nprogress.default.configure({
    minimum: 0.1,
    showSpinner: false,
    trickle: false,
    easing: "ease",
    speed: 500
  });
  $$result.css.add(css);
  {
    {
      if ($navigating) {
        import_nprogress.default.start();
      }
      if (!$navigating) {
        import_nprogress.default.done();
      }
    }
  }
  $$unsubscribe_navigating();
  $$unsubscribe_page();
  return `${$$result.head += `<link rel="${"preconnect"}" href="${"https://fonts.googleapis.com"}" data-svelte="svelte-1go0kcm"><link rel="${"preconnect"}" href="${"https://fonts.gstatic.com"}" crossorigin data-svelte="svelte-1go0kcm"><link href="${"https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"}" rel="${"stylesheet"}" data-svelte="svelte-1go0kcm"><script data-svelte="svelte-1go0kcm">(function (h, o, t, j, a, r) {
			h.hj =
				h.hj ||
				function () {
					(h.hj.q = h.hj.q || []).push(arguments);
				};
			h._hjSettings = { hjid: 3069496, hjsv: 6 };
			a = o.getElementsByTagName('head')[0];
			r = o.createElement('script');
			r.async = 1;
			r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
			a.appendChild(r);
		})(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
	<\/script>`, ""}

${(0, import_chunks.v)(IconContext, "IconContext").$$render(
    $$result,
    {
      values: {
        color: "var(--black)",
        size: 32,
        mirrored: false,
        weight: "regular"
      }
    },
    {},
    {
      default: () => {
        return `<div class="${"page-container svelte-no8e5g"}">${(0, import_chunks.v)(CoolFrame, "CoolFrame").$$render($$result, {}, {}, {})}
		${(0, import_chunks.v)(BackToTop, "BackToTop").$$render($$result, {}, {}, {})}
		${(0, import_chunks.v)(LogoContainer, "LogoContainer").$$render($$result, {}, {}, {})}
		${(0, import_chunks.v)(Header, "Header").$$render($$result, {}, {}, {})}

		<main class="${"main-content svelte-no8e5g"}">${(0, import_chunks.v)(Breadcrumb, "Breadcrumb").$$render($$result, { path: $page.url.pathname }, {}, {})}
			${slots.default ? slots.default({}) : ``}</main>

		${(0, import_chunks.v)(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
      }
    }
  )}`;
});
