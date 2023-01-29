export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["3d/plastic_monobloc_chair_01.bin","3d/plastic_monobloc_chair_01_4k.gltf","3d/textures/plastic_monobloc_chair_01_arm_4k.jpg","3d/textures/plastic_monobloc_chair_01_diff_4k.jpg","3d/textures/plastic_monobloc_chair_01_nor_gl_4k.jpg","apple-touch-icon.png","favicon.ico","favicon.svg","fonts/Beaufort.woff2","fonts/Mona-Sans.woff2","icon-192-any.png","icon-192-maskable.png","icon-512-any.png","icon-512-maskable.png","images/bg_decor_flower_l.png","images/bg_decor_flower_r.png","images/bg_decor_line_l.png","images/bg_decor_line_r.png","images/diamonds.svg","images/dot.svg","images/error.gif","images/exp.webp","images/headerBottom.svg","images/music.webp","images/wall.svg","robots.txt","service-worker.js"]),
	mimeTypes: {".bin":"application/octet-stream",".gltf":"model/gltf+json",".jpg":"image/jpeg",".png":"image/png",".ico":"image/vnd.microsoft.icon",".svg":"image/svg+xml",".woff2":"font/woff2",".gif":"image/gif",".webp":"image/webp",".txt":"text/plain"},
	_: {
		entry: {"file":"_app/immutable/start-c775b703.js","imports":["_app/immutable/start-c775b703.js","_app/immutable/chunks/index-9b2adc1a.js","_app/immutable/chunks/singletons-dd063cbb.js","_app/immutable/chunks/index-7b9d3f1d.js","_app/immutable/chunks/preload-helper-41c905a7.js"],"stylesheets":[],"fonts":[]},
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
