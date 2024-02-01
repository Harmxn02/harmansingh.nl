const CACHE_NAME = "my-site-cache-v1";
const start_url = "/";

caches.keys().then(function (names) {
	for (let name of names) caches.delete(name);
});

this.addEventListener("install", (event) => {
	event.waitUntil(
		caches.open(CACHE_NAME).then((cache) => cache.add(start_url)),
	);
});

this.addEventListener("fetch", (event) => {
	event.respondWith(
		caches
			.match(event.request)
			.then((response) => response || fetch(event.request)),
	);
});
