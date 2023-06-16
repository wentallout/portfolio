// vite.config.js
import { sveltekit } from "file:///D:/portfolio/node_modules/@sveltejs/kit/src/exports/vite/index.js";
import Icons from "file:///D:/portfolio/node_modules/unplugin-icons/dist/vite.mjs";
import { imagetools } from "file:///D:/portfolio/node_modules/vite-imagetools/dist/index.mjs";
import svg from "file:///D:/portfolio/node_modules/@poppanator/sveltekit-svg/dist/index.js";
var config = {
  plugins: [
    sveltekit(),
    svg({
      includePaths: ["./src/lib/assets/images/"],
      svgoOptions: {
        multipass: true,
        plugins: [
          {
            name: "preset-default",
            params: { overrides: { removeViewBox: false } }
          }
          // { name: 'removeAttrs', params: { attrs: '(fill|stroke)' } }
        ]
      }
    }),
    Icons({ compiler: "svelte" }),
    imagetools({
      defaultDirectives: () => {
        return new URLSearchParams({
          format: "webp"
        });
      }
    })
  ],
  ssr: {
    noExternal: ["three", "troika-three-text"]
  },
  server: {
    port: "3000"
  },
  preview: {
    port: "4000"
  }
};
var vite_config_default = config;
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxwb3J0Zm9saW9cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXHBvcnRmb2xpb1xcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovcG9ydGZvbGlvL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgc3ZlbHRla2l0IH0gZnJvbSAnQHN2ZWx0ZWpzL2tpdC92aXRlJztcblxuaW1wb3J0IEljb25zIGZyb20gJ3VucGx1Z2luLWljb25zL3ZpdGUnO1xuaW1wb3J0IHsgaW1hZ2V0b29scyB9IGZyb20gJ3ZpdGUtaW1hZ2V0b29scyc7XG5pbXBvcnQgc3ZnIGZyb20gJ0Bwb3BwYW5hdG9yL3N2ZWx0ZWtpdC1zdmcnO1xuXG4vKiogQHR5cGUge2ltcG9ydCgndml0ZScpLlVzZXJDb25maWd9ICovXG5jb25zdCBjb25maWcgPSB7XG5cdHBsdWdpbnM6IFtcblx0XHRzdmVsdGVraXQoKSxcblxuXHRcdHN2Zyh7XG5cdFx0XHRpbmNsdWRlUGF0aHM6IFsnLi9zcmMvbGliL2Fzc2V0cy9pbWFnZXMvJ10sXG5cdFx0XHRzdmdvT3B0aW9uczoge1xuXHRcdFx0XHRtdWx0aXBhc3M6IHRydWUsXG5cdFx0XHRcdHBsdWdpbnM6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRuYW1lOiAncHJlc2V0LWRlZmF1bHQnLFxuXHRcdFx0XHRcdFx0cGFyYW1zOiB7IG92ZXJyaWRlczogeyByZW1vdmVWaWV3Qm94OiBmYWxzZSB9IH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8geyBuYW1lOiAncmVtb3ZlQXR0cnMnLCBwYXJhbXM6IHsgYXR0cnM6ICcoZmlsbHxzdHJva2UpJyB9IH1cblx0XHRcdFx0XVxuXHRcdFx0fVxuXHRcdH0pLFxuXHRcdEljb25zKHsgY29tcGlsZXI6ICdzdmVsdGUnIH0pLFxuXHRcdGltYWdldG9vbHMoe1xuXHRcdFx0ZGVmYXVsdERpcmVjdGl2ZXM6ICgpID0+IHtcblx0XHRcdFx0cmV0dXJuIG5ldyBVUkxTZWFyY2hQYXJhbXMoe1xuXHRcdFx0XHRcdGZvcm1hdDogJ3dlYnAnXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0pXG5cdF0sXG5cdHNzcjoge1xuXHRcdG5vRXh0ZXJuYWw6IFsndGhyZWUnLCAndHJvaWthLXRocmVlLXRleHQnXVxuXHR9LFxuXHRzZXJ2ZXI6IHtcblx0XHRwb3J0OiAnMzAwMCdcblx0fSxcblx0cHJldmlldzoge1xuXHRcdHBvcnQ6ICc0MDAwJ1xuXHR9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25maWc7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTBOLFNBQVMsaUJBQWlCO0FBRXBQLE9BQU8sV0FBVztBQUNsQixTQUFTLGtCQUFrQjtBQUMzQixPQUFPLFNBQVM7QUFHaEIsSUFBTSxTQUFTO0FBQUEsRUFDZCxTQUFTO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFFVixJQUFJO0FBQUEsTUFDSCxjQUFjLENBQUMsMEJBQTBCO0FBQUEsTUFDekMsYUFBYTtBQUFBLFFBQ1osV0FBVztBQUFBLFFBQ1gsU0FBUztBQUFBLFVBQ1I7QUFBQSxZQUNDLE1BQU07QUFBQSxZQUNOLFFBQVEsRUFBRSxXQUFXLEVBQUUsZUFBZSxNQUFNLEVBQUU7QUFBQSxVQUMvQztBQUFBO0FBQUEsUUFFRDtBQUFBLE1BQ0Q7QUFBQSxJQUNELENBQUM7QUFBQSxJQUNELE1BQU0sRUFBRSxVQUFVLFNBQVMsQ0FBQztBQUFBLElBQzVCLFdBQVc7QUFBQSxNQUNWLG1CQUFtQixNQUFNO0FBQ3hCLGVBQU8sSUFBSSxnQkFBZ0I7QUFBQSxVQUMxQixRQUFRO0FBQUEsUUFDVCxDQUFDO0FBQUEsTUFDRjtBQUFBLElBQ0QsQ0FBQztBQUFBLEVBQ0Y7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNKLFlBQVksQ0FBQyxTQUFTLG1CQUFtQjtBQUFBLEVBQzFDO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDUCxNQUFNO0FBQUEsRUFDUDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1IsTUFBTTtBQUFBLEVBQ1A7QUFDRDtBQUVBLElBQU8sc0JBQVE7IiwKICAibmFtZXMiOiBbXQp9Cg==
