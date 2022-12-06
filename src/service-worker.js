import { build, files, version } from '$service-worker';

const worker = self;
const CACHE_NAME = `static-cache-${version}`;

const to_cache = build.concat(files);

worker.addEventListener('install', (event) => {
	event.waitUntil(
		caches.open(CACHE_NAME).then((cache) => {
			return cache.addAll(to_cache).then(() => {
				worker.skipWaiting();
			});
		})
	);
});

worker.addEventListener('activate', (event) => {
	event.waitUntil(
		caches.keys().then(async (keys) =>
			Promise.all(
				keys.map((key) => {
					if (key !== CACHE_NAME) {
						console.log('[ServiceWorker] Removing old cache', key);
						return caches.delete(key);
					}
				})
			)
		)
	);
	worker.clients.claim();
});

self.addEventListener('fetch', (event) => {
	if (event.request.mode !== 'navigate') {
		return;
	}
	event.respondWith(
		fetch(event.request).catch(() => {
			return caches.open(CACHE_NAME).then((cache) => {
				return cache.match('offline.html');
			});
		})
	);
});
