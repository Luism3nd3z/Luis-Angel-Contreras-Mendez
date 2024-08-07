const staticCurriculum = "curriculum";
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/profile.jpg",
  // Agrega más recursos aquí si es necesario
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticCurriculum).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
<script>
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/serviceWorker.js')
        .then((registration) => {
            console.log('Service Worker registrado con éxito:', registration);
        })
        .catch((error) => {
            console.error('Error al registrar el Service Worker:', error);
        });
}
</script>
