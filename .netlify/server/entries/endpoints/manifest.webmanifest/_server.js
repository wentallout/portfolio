import { w as website } from "../../../chunks/config.js";
const prerender = true;
const GET = function get({ setHeaders }) {
  const { backgroundColor, description, siteShortTitle, siteTitle, themeColor } = website;
  const manifest = {
    name: siteTitle,
    short_name: siteShortTitle,
    description,
    start_url: "/",
    background_color: backgroundColor,
    theme_color: themeColor,
    display: "standalone",
    icons: [
      { src: "/icon-192-any.png", type: "image/png", sizes: "192x192", purpose: "any" },
      { src: "/icon-512-any.png", type: "image/png", sizes: "512x512", purpose: "any" },
      { src: "/icon-192-maskable.png", type: "image/png", sizes: "192x192", purpose: "maskable" },
      { src: "/icon-512-maskable.png", type: "image/png", sizes: "512x512", purpose: "maskable" }
    ]
  };
  setHeaders({
    "content-type": "application/json"
  });
  return new Response(JSON.stringify(manifest));
};
export {
  GET,
  prerender
};
