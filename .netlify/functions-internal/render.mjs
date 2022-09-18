import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	assets: new Set(["apple-touch-icon.png","favicon.ico","favicon.svg","icon-192.png","icon-512.png","images/frame2corner.png","images/fuji.svg","images/khoa-biolink.png","images/mask_section-bg_top.png","images/rhombus_line.png","robots.txt","styles/markdown.css","service-worker.js"]),
	mimeTypes: {".png":"image/png",".ico":"image/vnd.microsoft.icon",".svg":"image/svg+xml",".txt":"text/plain",".css":"text/css"},
	_: {
		entry: {"file":"_app/immutable/start-2cb4949c.js","imports":["_app/immutable/start-2cb4949c.js","_app/immutable/chunks/preload-helper-aa6bc0ce.js","_app/immutable/chunks/index-8af63517.js","_app/immutable/chunks/singletons-ba49e395.js","_app/immutable/chunks/index-c3dc6353.js"],"stylesheets":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js'),
			() => import('../server/nodes/3.js'),
			() => import('../server/nodes/4.js'),
			() => import('../server/nodes/5.js'),
			() => import('../server/nodes/6.js'),
			() => import('../server/nodes/7.js'),
			() => import('../server/nodes/8.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
