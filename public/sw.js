if (!self.define) {
  let e, a = {}
  const i = (i, s) => (i = new URL(i + '.js', s).href, a[i] || new Promise((a => {
    if ('document' in self) {
      const e = document.createElement('script')
      e.src = i, e.onload = a, document.head.appendChild(e)
    } else {
      e = i, importScripts(i), a()
    }
  })).then((() => {
    let e = a[i]
    if (!e) throw new Error(`Module ${i} didn’t register its module`)
    return e
  })))
  self.define = (s, t) => {
    const n = e || ('document' in self ? document.currentScript.src : '') || location.href
    if (a[n]) return
    let c = {}
    const r = e => i(e, n), f = {
      module: { uri: n },
      exports: c,
      require: r
    }
    a[n] = Promise.all(s.map((e => f[e] || r(e)))).then((e => (t(...e), c)))
  }
}
define(['./workbox-7028bf80'], (function (e) {
  'use strict'
  importScripts('fallback-wNKJrfn_J9YiSbz79Q2gs.js'), self.skipWaiting(), e.clientsClaim(), e.precacheAndRoute([{
    url: '/_next/static/chunks/11c78089.7175ab23b2bcc42e.js',
    revision: '7175ab23b2bcc42e'
  }, {
    url: '/_next/static/chunks/1619.d20bf3cfd1cd3d93.js',
    revision: 'd20bf3cfd1cd3d93'
  }, {
    url: '/_next/static/chunks/1687.c9637ff9eca2f242.js',
    revision: 'c9637ff9eca2f242'
  }, {
    url: '/_next/static/chunks/1773.4d23b0d9fd3ac603.js',
    revision: '4d23b0d9fd3ac603'
  }, {
    url: '/_next/static/chunks/1970-8db95e20d03bfca5.js',
    revision: 'wNKJrfn_J9YiSbz79Q2gs'
  }, {
    url: '/_next/static/chunks/2508.df8d0a717274d48d.js',
    revision: 'df8d0a717274d48d'
  }, {
    url: '/_next/static/chunks/2619.941302915f1feef4.js',
    revision: '941302915f1feef4'
  }, {
    url: '/_next/static/chunks/292.ab9614b0b22561fd.js',
    revision: 'ab9614b0b22561fd'
  }, {
    url: '/_next/static/chunks/3209.6fee54769c4a1d8a.js',
    revision: '6fee54769c4a1d8a'
  }, {
    url: '/_next/static/chunks/3328-190d3467a6941226.js',
    revision: 'wNKJrfn_J9YiSbz79Q2gs'
  }, {
    url: '/_next/static/chunks/3492.ef2a1d801666f07c.js',
    revision: 'ef2a1d801666f07c'
  }, {
    url: '/_next/static/chunks/3729.a224c34097859a36.js',
    revision: 'a224c34097859a36'
  }, {
    url: '/_next/static/chunks/3931.35c1e3126320fb27.js',
    revision: '35c1e3126320fb27'
  }, {
    url: '/_next/static/chunks/3974-77bebc62c24f8964.js',
    revision: 'wNKJrfn_J9YiSbz79Q2gs'
  }, {
    url: '/_next/static/chunks/3e415cce.a7c8cc122abe23f3.js',
    revision: 'a7c8cc122abe23f3'
  }, {
    url: '/_next/static/chunks/422-24a5ea78703d5fdf.js',
    revision: 'wNKJrfn_J9YiSbz79Q2gs'
  }, {
    url: '/_next/static/chunks/4326.8d1bcdf84ed8c847.js',
    revision: '8d1bcdf84ed8c847'
  }, {
    url: '/_next/static/chunks/4450.46d9e5b30100fce7.js',
    revision: '46d9e5b30100fce7'
  }, {
    url: '/_next/static/chunks/457.ca344daff7131624.js',
    revision: 'ca344daff7131624'
  }, {
    url: '/_next/static/chunks/4981-4789ce1be10b6cf8.js',
    revision: 'wNKJrfn_J9YiSbz79Q2gs'
  }, {
    url: '/_next/static/chunks/54535dae-53d0070ed6d9f519.js',
    revision: 'wNKJrfn_J9YiSbz79Q2gs'
  }, {
    url: '/_next/static/chunks/56358907-b6b0c2d2373f2337.js',
    revision: 'wNKJrfn_J9YiSbz79Q2gs'
  }, {
    url: '/_next/static/chunks/6381.b930fb4bc1f3425c.js',
    revision: 'b930fb4bc1f3425c'
  }, {
    url: '/_next/static/chunks/6649.d02b4d9a89bbff53.js',
    revision: 'd02b4d9a89bbff53'
  }, {
    url: '/_next/static/chunks/6811.b6b6d5e5cf2aad48.js',
    revision: 'b6b6d5e5cf2aad48'
  }, {
    url: '/_next/static/chunks/7010.3fc05eb189eab705.js',
    revision: '3fc05eb189eab705'
  }, {
    url: '/_next/static/chunks/7494.ab23a7f6df41097f.js',
    revision: 'ab23a7f6df41097f'
  }, {
    url: '/_next/static/chunks/7815.d324a179870a5206.js',
    revision: 'd324a179870a5206'
  }, {
    url: '/_next/static/chunks/890.40cc830c63556d74.js',
    revision: '40cc830c63556d74'
  }, {
    url: '/_next/static/chunks/9258.c270e4a19f73a6cf.js',
    revision: 'c270e4a19f73a6cf'
  }, {
    url: '/_next/static/chunks/9319-3650ba00c48e5ac7.js',
    revision: 'wNKJrfn_J9YiSbz79Q2gs'
  }, {
    url: '/_next/static/chunks/95a87477-9bc391bf22b037dd.js',
    revision: 'wNKJrfn_J9YiSbz79Q2gs'
  }, {
    url: '/_next/static/chunks/9812-e15aa8eb61741610.js',
    revision: 'wNKJrfn_J9YiSbz79Q2gs'
  }, {
    url: '/_next/static/chunks/9857.81771161363486ee.js',
    revision: '81771161363486ee'
  }, {
    url: '/_next/static/chunks/a96dc062-e45c2847f3e709fc.js',
    revision: 'wNKJrfn_J9YiSbz79Q2gs'
  }, {
    url: '/_next/static/chunks/app/layout-e5bb5c28b7c58a13.js',
    revision: 'wNKJrfn_J9YiSbz79Q2gs'
  }, {
    url: '/_next/static/chunks/app/studio/layout-5d23c122ba903dfc.js',
    revision: 'wNKJrfn_J9YiSbz79Q2gs'
  }, {
    url: '/_next/static/chunks/app/studio/page-db046c2bcf204722.js',
    revision: 'wNKJrfn_J9YiSbz79Q2gs'
  }, {
    url: '/_next/static/chunks/d3a2d874-556c42d4207418f0.js',
    revision: 'wNKJrfn_J9YiSbz79Q2gs'
  }, {
    url: '/_next/static/chunks/ddc0ec07-696b1070784c4092.js',
    revision: 'wNKJrfn_J9YiSbz79Q2gs'
  }, {
    url: '/_next/static/chunks/f20e5933.d2a093144fe85362.js',
    revision: 'd2a093144fe85362'
  }, {
    url: '/_next/static/chunks/main-1b14a0cde82f79f9.js',
    revision: 'wNKJrfn_J9YiSbz79Q2gs'
  }, {
    url: '/_next/static/chunks/main-app-d5b9cc63ecbc41ed.js',
    revision: 'wNKJrfn_J9YiSbz79Q2gs'
  }, {
    url: '/_next/static/chunks/pages/%5Bslug%5D-58e3e3b1c7f1eaef.js',
    revision: 'wNKJrfn_J9YiSbz79Q2gs'
  }, {
    url: '/_next/static/chunks/pages/404-9dcead8647b90c2d.js',
    revision: 'wNKJrfn_J9YiSbz79Q2gs'
  }, {
    url: '/_next/static/chunks/pages/_app-6af972d4760ecb90.js',
    revision: 'wNKJrfn_J9YiSbz79Q2gs'
  }, {
    url: '/_next/static/chunks/pages/_error-e9a0dae3d2af800d.js',
    revision: 'wNKJrfn_J9YiSbz79Q2gs'
  }, {
    url: '/_next/static/chunks/pages/_offline-903b93112f34ae6e.js',
    revision: 'wNKJrfn_J9YiSbz79Q2gs'
  }, {
    url: '/_next/static/chunks/pages/contact-b3cfd2fe6d384bf3.js',
    revision: 'wNKJrfn_J9YiSbz79Q2gs'
  }, {
    url: '/_next/static/chunks/pages/feed-22dc61618cda3853.js',
    revision: 'wNKJrfn_J9YiSbz79Q2gs'
  }, {
    url: '/_next/static/chunks/pages/index-cd0c149ad8a23f47.js',
    revision: 'wNKJrfn_J9YiSbz79Q2gs'
  }, {
    url: '/_next/static/chunks/pages/newsletter-660724443e32c404.js',
    revision: 'wNKJrfn_J9YiSbz79Q2gs'
  }, {
    url: '/_next/static/chunks/pages/notes-fd0e3b7bc4c8cb8a.js',
    revision: 'wNKJrfn_J9YiSbz79Q2gs'
  }, {
    url: '/_next/static/chunks/pages/page/%5Bpage%5D-1db5469ebd206fec.js',
    revision: 'wNKJrfn_J9YiSbz79Q2gs'
  }, {
    url: '/_next/static/chunks/pages/s/%5Bsubpage%5D-ad9618e49b097841.js',
    revision: 'wNKJrfn_J9YiSbz79Q2gs'
  }, {
    url: '/_next/static/chunks/pages/search-ca024535a4897431.js',
    revision: 'wNKJrfn_J9YiSbz79Q2gs'
  }, {
    url: '/_next/static/chunks/pages/tag/%5Btag%5D-d444ec6e6e153084.js',
    revision: 'wNKJrfn_J9YiSbz79Q2gs'
  }, {
    url: '/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js',
    revision: '837c0df77fd5009c9e46d446188ecfd0'
  }, {
    url: '/_next/static/chunks/webpack-f44a6103f7dee5bb.js',
    revision: 'wNKJrfn_J9YiSbz79Q2gs'
  }, {
    url: '/_next/static/css/1636e632706c10ef.css',
    revision: '1636e632706c10ef'
  }, {
    url: '/_next/static/media/2aaf0723e720e8b9.p.woff2',
    revision: 'e1b9f0ecaaebb12c93064cd3c406f82b'
  }, {
    url: '/_next/static/media/9c4f34569c9b36ca.woff2',
    revision: '2c1fc211bf5cca7ae7e7396dc9e4c824'
  }, {
    url: '/_next/static/media/KaTeX_AMS-Regular.1608a09b.woff',
    revision: '1608a09b'
  }, {
    url: '/_next/static/media/KaTeX_AMS-Regular.4aafdb68.ttf',
    revision: '4aafdb68'
  }, {
    url: '/_next/static/media/KaTeX_AMS-Regular.a79f1c31.woff2',
    revision: 'a79f1c31'
  }, {
    url: '/_next/static/media/KaTeX_Caligraphic-Bold.b6770918.woff',
    revision: 'b6770918'
  }, {
    url: '/_next/static/media/KaTeX_Caligraphic-Bold.cce5b8ec.ttf',
    revision: 'cce5b8ec'
  }, {
    url: '/_next/static/media/KaTeX_Caligraphic-Bold.ec17d132.woff2',
    revision: 'ec17d132'
  }, {
    url: '/_next/static/media/KaTeX_Caligraphic-Regular.07ef19e7.ttf',
    revision: '07ef19e7'
  }, {
    url: '/_next/static/media/KaTeX_Caligraphic-Regular.55fac258.woff2',
    revision: '55fac258'
  }, {
    url: '/_next/static/media/KaTeX_Caligraphic-Regular.dad44a7f.woff',
    revision: 'dad44a7f'
  }, {
    url: '/_next/static/media/KaTeX_Fraktur-Bold.9f256b85.woff',
    revision: '9f256b85'
  }, {
    url: '/_next/static/media/KaTeX_Fraktur-Bold.b18f59e1.ttf',
    revision: 'b18f59e1'
  }, {
    url: '/_next/static/media/KaTeX_Fraktur-Bold.d42a5579.woff2',
    revision: 'd42a5579'
  }, {
    url: '/_next/static/media/KaTeX_Fraktur-Regular.7c187121.woff',
    revision: '7c187121'
  }, {
    url: '/_next/static/media/KaTeX_Fraktur-Regular.d3c882a6.woff2',
    revision: 'd3c882a6'
  }, {
    url: '/_next/static/media/KaTeX_Fraktur-Regular.ed38e79f.ttf',
    revision: 'ed38e79f'
  }, {
    url: '/_next/static/media/KaTeX_Main-Bold.b74a1a8b.ttf',
    revision: 'b74a1a8b'
  }, {
    url: '/_next/static/media/KaTeX_Main-Bold.c3fb5ac2.woff2',
    revision: 'c3fb5ac2'
  }, {
    url: '/_next/static/media/KaTeX_Main-Bold.d181c465.woff',
    revision: 'd181c465'
  }, {
    url: '/_next/static/media/KaTeX_Main-BoldItalic.6f2bb1df.woff2',
    revision: '6f2bb1df'
  }, {
    url: '/_next/static/media/KaTeX_Main-BoldItalic.70d8b0a5.ttf',
    revision: '70d8b0a5'
  }, {
    url: '/_next/static/media/KaTeX_Main-BoldItalic.e3f82f9d.woff',
    revision: 'e3f82f9d'
  }, {
    url: '/_next/static/media/KaTeX_Main-Italic.47373d1e.ttf',
    revision: '47373d1e'
  }, {
    url: '/_next/static/media/KaTeX_Main-Italic.8916142b.woff2',
    revision: '8916142b'
  }, {
    url: '/_next/static/media/KaTeX_Main-Italic.9024d815.woff',
    revision: '9024d815'
  }, {
    url: '/_next/static/media/KaTeX_Main-Regular.0462f03b.woff2',
    revision: '0462f03b'
  }, {
    url: '/_next/static/media/KaTeX_Main-Regular.7f51fe03.woff',
    revision: '7f51fe03'
  }, {
    url: '/_next/static/media/KaTeX_Main-Regular.b7f8fe9b.ttf',
    revision: 'b7f8fe9b'
  }, {
    url: '/_next/static/media/KaTeX_Math-BoldItalic.572d331f.woff2',
    revision: '572d331f'
  }, {
    url: '/_next/static/media/KaTeX_Math-BoldItalic.a879cf83.ttf',
    revision: 'a879cf83'
  }, {
    url: '/_next/static/media/KaTeX_Math-BoldItalic.f1035d8d.woff',
    revision: 'f1035d8d'
  }, {
    url: '/_next/static/media/KaTeX_Math-Italic.5295ba48.woff',
    revision: '5295ba48'
  }, {
    url: '/_next/static/media/KaTeX_Math-Italic.939bc644.ttf',
    revision: '939bc644'
  }, {
    url: '/_next/static/media/KaTeX_Math-Italic.f28c23ac.woff2',
    revision: 'f28c23ac'
  }, {
    url: '/_next/static/media/KaTeX_SansSerif-Bold.8c5b5494.woff2',
    revision: '8c5b5494'
  }, {
    url: '/_next/static/media/KaTeX_SansSerif-Bold.94e1e8dc.ttf',
    revision: '94e1e8dc'
  }, {
    url: '/_next/static/media/KaTeX_SansSerif-Bold.bf59d231.woff',
    revision: 'bf59d231'
  }, {
    url: '/_next/static/media/KaTeX_SansSerif-Italic.3b1e59b3.woff2',
    revision: '3b1e59b3'
  }, {
    url: '/_next/static/media/KaTeX_SansSerif-Italic.7c9bc82b.woff',
    revision: '7c9bc82b'
  }, {
    url: '/_next/static/media/KaTeX_SansSerif-Italic.b4c20c84.ttf',
    revision: 'b4c20c84'
  }, {
    url: '/_next/static/media/KaTeX_SansSerif-Regular.74048478.woff',
    revision: '74048478'
  }, {
    url: '/_next/static/media/KaTeX_SansSerif-Regular.ba21ed5f.woff2',
    revision: 'ba21ed5f'
  }, {
    url: '/_next/static/media/KaTeX_SansSerif-Regular.d4d7ba48.ttf',
    revision: 'd4d7ba48'
  }, {
    url: '/_next/static/media/KaTeX_Script-Regular.03e9641d.woff2',
    revision: '03e9641d'
  }, {
    url: '/_next/static/media/KaTeX_Script-Regular.07505710.woff',
    revision: '07505710'
  }, {
    url: '/_next/static/media/KaTeX_Script-Regular.fe9cbbe1.ttf',
    revision: 'fe9cbbe1'
  }, {
    url: '/_next/static/media/KaTeX_Size1-Regular.e1e279cb.woff',
    revision: 'e1e279cb'
  }, {
    url: '/_next/static/media/KaTeX_Size1-Regular.eae34984.woff2',
    revision: 'eae34984'
  }, {
    url: '/_next/static/media/KaTeX_Size1-Regular.fabc004a.ttf',
    revision: 'fabc004a'
  }, {
    url: '/_next/static/media/KaTeX_Size2-Regular.57727022.woff',
    revision: '57727022'
  }, {
    url: '/_next/static/media/KaTeX_Size2-Regular.5916a24f.woff2',
    revision: '5916a24f'
  }, {
    url: '/_next/static/media/KaTeX_Size2-Regular.d6b476ec.ttf',
    revision: 'd6b476ec'
  }, {
    url: '/_next/static/media/KaTeX_Size3-Regular.9acaf01c.woff',
    revision: '9acaf01c'
  }, {
    url: '/_next/static/media/KaTeX_Size3-Regular.a144ef58.ttf',
    revision: 'a144ef58'
  }, {
    url: '/_next/static/media/KaTeX_Size3-Regular.b4230e7e.woff2',
    revision: 'b4230e7e'
  }, {
    url: '/_next/static/media/KaTeX_Size4-Regular.10d95fd3.woff2',
    revision: '10d95fd3'
  }, {
    url: '/_next/static/media/KaTeX_Size4-Regular.7a996c9d.woff',
    revision: '7a996c9d'
  }, {
    url: '/_next/static/media/KaTeX_Size4-Regular.fbccdabe.ttf',
    revision: 'fbccdabe'
  }, {
    url: '/_next/static/media/KaTeX_Typewriter-Regular.6258592b.woff',
    revision: '6258592b'
  }, {
    url: '/_next/static/media/KaTeX_Typewriter-Regular.a8709e36.woff2',
    revision: 'a8709e36'
  }, {
    url: '/_next/static/media/KaTeX_Typewriter-Regular.d97aaf4a.ttf',
    revision: 'd97aaf4a'
  }, {
    url: '/_next/static/media/ae9ae6716d4f8bf8.woff2',
    revision: 'b0c49a041e15bdbca22833f1ed5cfb19'
  }, {
    url: '/_next/static/media/b1db3e28af9ef94a.woff2',
    revision: '70afeea69c7f52ffccde29e1ea470838'
  }, {
    url: '/_next/static/media/b967158bc7d7a9fb.woff2',
    revision: '08ccb2a3cfc83cf18d4a3ec64dd7c11b'
  }, {
    url: '/_next/static/media/c0f5ec5bbf5913b7.woff2',
    revision: '8ca5bc1cd1579933b73e51ec9354eec9'
  }, {
    url: '/_next/static/media/d1d9458b69004127.woff2',
    revision: '9885d5da3e4dfffab0b4b1f4a259ca27'
  }, {
    url: '/_next/static/wNKJrfn_J9YiSbz79Q2gs/_buildManifest.js',
    revision: 'fb6c1adffa5dda73a44ec6cb5af8eb8a'
  }, {
    url: '/_next/static/wNKJrfn_J9YiSbz79Q2gs/_ssgManifest.js',
    revision: 'b6652df95db52feb4daf4eca35380933'
  }, {
    url: '/_offline',
    revision: 'wNKJrfn_J9YiSbz79Q2gs'
  }], { ignoreURLParametersMatching: [] }), e.cleanupOutdatedCaches(), e.registerRoute('/', new e.NetworkFirst({
    cacheName: 'start-url',
    plugins: [{
      cacheWillUpdate: async ({ response: e }) => e && 'opaqueredirect' === e.type ? new Response(e.body, {
        status: 200,
        statusText: 'OK',
        headers: e.headers
      }) : e
    }, { handlerDidError: async ({ request: e }) => 'undefined' != typeof self ? self.fallback(e) : Response.error() }]
  }), 'GET'), e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i, new e.CacheFirst({
    cacheName: 'google-fonts-webfonts',
    plugins: [new e.ExpirationPlugin({
      maxEntries: 4,
      maxAgeSeconds: 31536e3
    }), { handlerDidError: async ({ request: e }) => 'undefined' != typeof self ? self.fallback(e) : Response.error() }]
  }), 'GET'), e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i, new e.StaleWhileRevalidate({
    cacheName: 'google-fonts-stylesheets',
    plugins: [new e.ExpirationPlugin({
      maxEntries: 4,
      maxAgeSeconds: 604800
    }), { handlerDidError: async ({ request: e }) => 'undefined' != typeof self ? self.fallback(e) : Response.error() }]
  }), 'GET'), e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i, new e.StaleWhileRevalidate({
    cacheName: 'static-font-assets',
    plugins: [new e.ExpirationPlugin({
      maxEntries: 4,
      maxAgeSeconds: 604800
    }), { handlerDidError: async ({ request: e }) => 'undefined' != typeof self ? self.fallback(e) : Response.error() }]
  }), 'GET'), e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i, new e.StaleWhileRevalidate({
    cacheName: 'static-image-assets',
    plugins: [new e.ExpirationPlugin({
      maxEntries: 64,
      maxAgeSeconds: 86400
    }), { handlerDidError: async ({ request: e }) => 'undefined' != typeof self ? self.fallback(e) : Response.error() }]
  }), 'GET'), e.registerRoute(/\/_next\/image\?url=.+$/i, new e.StaleWhileRevalidate({
    cacheName: 'next-image',
    plugins: [new e.ExpirationPlugin({
      maxEntries: 64,
      maxAgeSeconds: 86400
    }), { handlerDidError: async ({ request: e }) => 'undefined' != typeof self ? self.fallback(e) : Response.error() }]
  }), 'GET'), e.registerRoute(/\.(?:mp3|wav|ogg)$/i, new e.CacheFirst({
    cacheName: 'static-audio-assets',
    plugins: [new e.RangeRequestsPlugin, new e.ExpirationPlugin({
      maxEntries: 32,
      maxAgeSeconds: 86400
    }), { handlerDidError: async ({ request: e }) => 'undefined' != typeof self ? self.fallback(e) : Response.error() }]
  }), 'GET'), e.registerRoute(/\.(?:mp4)$/i, new e.CacheFirst({
    cacheName: 'static-video-assets',
    plugins: [new e.RangeRequestsPlugin, new e.ExpirationPlugin({
      maxEntries: 32,
      maxAgeSeconds: 86400
    }), { handlerDidError: async ({ request: e }) => 'undefined' != typeof self ? self.fallback(e) : Response.error() }]
  }), 'GET'), e.registerRoute(/\.(?:js)$/i, new e.StaleWhileRevalidate({
    cacheName: 'static-js-assets',
    plugins: [new e.ExpirationPlugin({
      maxEntries: 32,
      maxAgeSeconds: 86400
    }), { handlerDidError: async ({ request: e }) => 'undefined' != typeof self ? self.fallback(e) : Response.error() }]
  }), 'GET'), e.registerRoute(/\.(?:css|less)$/i, new e.StaleWhileRevalidate({
    cacheName: 'static-style-assets',
    plugins: [new e.ExpirationPlugin({
      maxEntries: 32,
      maxAgeSeconds: 86400
    }), { handlerDidError: async ({ request: e }) => 'undefined' != typeof self ? self.fallback(e) : Response.error() }]
  }), 'GET'), e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i, new e.StaleWhileRevalidate({
    cacheName: 'next-data',
    plugins: [new e.ExpirationPlugin({
      maxEntries: 32,
      maxAgeSeconds: 86400
    }), { handlerDidError: async ({ request: e }) => 'undefined' != typeof self ? self.fallback(e) : Response.error() }]
  }), 'GET'), e.registerRoute(/\.(?:json|xml|csv)$/i, new e.NetworkFirst({
    cacheName: 'static-data-assets',
    plugins: [new e.ExpirationPlugin({
      maxEntries: 32,
      maxAgeSeconds: 86400
    }), { handlerDidError: async ({ request: e }) => 'undefined' != typeof self ? self.fallback(e) : Response.error() }]
  }), 'GET'), e.registerRoute((({ url: e }) => {
    if (self.origin !== e.origin) return !1
    const a = e.pathname
    return !a.startsWith('/api/auth/') && !!a.startsWith('/api/')
  }), new e.NetworkFirst({
    cacheName: 'apis',
    networkTimeoutSeconds: 10,
    plugins: [new e.ExpirationPlugin({
      maxEntries: 16,
      maxAgeSeconds: 86400
    }), { handlerDidError: async ({ request: e }) => 'undefined' != typeof self ? self.fallback(e) : Response.error() }]
  }), 'GET'), e.registerRoute((({ url: e }) => self.origin === e.origin && !e.pathname.startsWith('/api/')), new e.NetworkFirst({
    cacheName: 'others',
    networkTimeoutSeconds: 10,
    plugins: [new e.ExpirationPlugin({
      maxEntries: 32,
      maxAgeSeconds: 86400
    }), { handlerDidError: async ({ request: e }) => 'undefined' != typeof self ? self.fallback(e) : Response.error() }]
  }), 'GET'), e.registerRoute((({ url: e }) => !(self.origin === e.origin)), new e.NetworkFirst({
    cacheName: 'cross-origin',
    networkTimeoutSeconds: 10,
    plugins: [new e.ExpirationPlugin({
      maxEntries: 32,
      maxAgeSeconds: 3600
    }), { handlerDidError: async ({ request: e }) => 'undefined' != typeof self ? self.fallback(e) : Response.error() }]
  }), "GET")
}));
