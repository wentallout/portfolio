export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["apple-touch-icon.png","favicon.ico","favicon.svg","fonts/Mona-Sans.woff2","fonts/RecoletaAlt-SemiBold.woff","fonts/RecoletaAlt-SemiBold.woff2","icon-192-any.png","icon-192-maskable.png","icon-512-any.png","icon-512-maskable.png","images/bg-title.jpg","images/bg_pattern_rhombus_beta.webp","images/dot.svg","images/error.gif","images/exp.webp","images/headerBottom.svg","images/khoa-biolink.png","images/mask_section-bg_top.png","images/music.webp","images/portrait.png","images/rhombus_line.png","robots.txt","service-worker.js"]),
	mimeTypes: {".png":"image/png",".ico":"image/vnd.microsoft.icon",".svg":"image/svg+xml",".woff2":"font/woff2",".woff":"font/woff",".jpg":"image/jpeg",".webp":"image/webp",".gif":"image/gif",".txt":"text/plain"},
	_: {
		entry: {"file":"_app/immutable/start-3330919c.js","imports":["_app/immutable/start-3330919c.js","_app/immutable/chunks/index-c4c52311.js","_app/immutable/chunks/singletons-d68e3acd.js","_app/immutable/chunks/index-ff4de04e.js","_app/immutable/chunks/preload-helper-9b728935.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
