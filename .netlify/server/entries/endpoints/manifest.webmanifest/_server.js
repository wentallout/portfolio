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
  GET: () => GET,
  prerender: () => prerender
});
module.exports = __toCommonJS(stdin_exports);
var import_config = require("../../../chunks/config.js");
const prerender = true;
const GET = function get({ setHeaders }) {
  const { backgroundColor, description, siteShortTitle, siteTitle, themeColor } = import_config.w;
  const manifest = {
    name: siteTitle,
    short_name: siteShortTitle,
    description,
    start_url: "/",
    background_color: backgroundColor,
    theme_color: themeColor,
    display: "standalone",
    icons: [
      { src: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { src: "/icon-512.png", type: "image/png", sizes: "512x512" }
    ]
  };
  setHeaders({
    "content-type": "application/json"
  });
  return new Response(JSON.stringify(manifest));
};
