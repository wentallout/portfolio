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
  manifest: () => manifest
});
module.exports = __toCommonJS(stdin_exports);
const manifest = {
  appDir: "_app",
  assets: /* @__PURE__ */ new Set(["apple-touch-icon.png", "favicon.ico", "favicon.svg", "icon-192.png", "icon-512.png", "images/frame2corner.png", "images/fuji.svg", "images/khoa-biolink.png", "images/rhombus_line.png", "robots.txt", "service-worker.js"]),
  mimeTypes: { ".png": "image/png", ".ico": "image/vnd.microsoft.icon", ".svg": "image/svg+xml", ".txt": "text/plain" },
  _: {
    entry: { "file": "_app/immutable/start-197b04e9.js", "imports": ["_app/immutable/start-197b04e9.js", "_app/immutable/chunks/index-b513d948.js", "_app/immutable/chunks/singletons-39e4142d.js", "_app/immutable/chunks/index-5b584455.js", "_app/immutable/chunks/preload-helper-aa6bc0ce.js"], "stylesheets": [] },
    nodes: [
      () => Promise.resolve().then(() => __toESM(require("./nodes/0.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/1.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/2.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/3.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/4.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/5.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/6.js")))
    ],
    routes: [
      {
        id: "",
        pattern: /^\/$/,
        names: [],
        types: [],
        page: { "layouts": [0], "errors": [1], "leaf": 2 },
        endpoint: null
      },
      {
        id: "manifest.webmanifest",
        pattern: /^\/manifest\.webmanifest$/,
        names: [],
        types: [],
        page: null,
        endpoint: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/manifest.webmanifest/_server.js")))
      },
      {
        id: "contact",
        pattern: /^\/contact\/?$/,
        names: [],
        types: [],
        page: { "layouts": [0], "errors": [1], "leaf": 3 },
        endpoint: null
      },
      {
        id: "project",
        pattern: /^\/project\/?$/,
        names: [],
        types: [],
        page: { "layouts": [0], "errors": [1], "leaf": 4 },
        endpoint: null
      },
      {
        id: "resource",
        pattern: /^\/resource\/?$/,
        names: [],
        types: [],
        page: { "layouts": [0], "errors": [1], "leaf": 5 },
        endpoint: null
      },
      {
        id: "resource/tool",
        pattern: /^\/resource\/tool\/?$/,
        names: [],
        types: [],
        page: { "layouts": [0], "errors": [1], "leaf": 6 },
        endpoint: null
      }
    ],
    matchers: async () => {
      return {};
    }
  }
};
