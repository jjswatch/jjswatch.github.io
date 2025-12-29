const CACHE_NAME = "gooddeal-v1";
const CACHE_FILES = [
  "/",
  "/index.html",
  "/search.html",
  "/scan.html",
  "/manifest.json",
  "/assets/placeholder.png"
];

// 安裝：快取必要檔案
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(CACHE_FILES))
  );
});

// 啟用：清除舊快取
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    )
  );
});

// 攔截請求（離線可用）
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(res => res || fetch(event.request))
  );
});
