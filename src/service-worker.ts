/// <reference lib="WebWorker" />
import { manifest, version } from '@parcel/service-worker'
declare const self: ServiceWorkerGlobalScope

const cacheName = `taptoroll-${version}`

const install = async () => {
    const cache = await caches.open(cacheName)
    await cache.addAll(manifest)
}
self.addEventListener('install', (e) => e.waitUntil(install()))

const activate = async () => {
    const keys = await caches.keys()
    await Promise.all(keys.map(key => {
        if (key === cacheName) return;
        return caches.delete(key)
    }))
}
self.addEventListener('activate', (e) => e.waitUntil(activate()))

self.addEventListener('fetch', (e) => {
    e.respondWith((async () => {
        const cached = await caches.match(e.request)
        if (cached) return cached

        return await fetch(e.request)
    })())
})
