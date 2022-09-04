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
  n: () => navItems,
  w: () => website
});
module.exports = __toCommonJS(stdin_exports);
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
const facebookPageName = "wentallout";
const facebookAuthorPageName = "wentallout.uiux";
const website = {
  siteUrl: "www.wentallout.tech",
  author: "Nguyen Dang Khoa",
  ogLanguage: "en_US",
  siteLanguage: "en-US",
  contactEmail: "wentallout@gmail.com",
  siteTitle: "Khoa Portfolio",
  icon: "static/android-chrome-512x512.png",
  siteShortTitle: "Portfolio",
  backgroundColor: "#1b1b1d",
  themeColor: "#b4883c",
  facebookAuthorPage: `https://www.facebook.com/${facebookAuthorPageName}`,
  facebookAuthorPageName,
  facebookPage: `https://www.facebook.com/${facebookPageName}`,
  facebookPageName,
  githubPage: "wentallout",
  linkedinProfile: "wentallout",
  telegramUsername: "wentallout",
  tiktokUsername: "@wentallout",
  twitterUsername: "wentallout",
  twitterUserId: "1391413398286471168"
};
