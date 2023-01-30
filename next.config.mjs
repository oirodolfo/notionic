// import runtimeCaching from 'next-pwa/cache.js'
// import nextPWA from 'next-pwa'
import withPWAInit from '@ducanh2912/next-pwa'
// const withPWAInit = require('@ducanh2912/next-pwa').default();

const withPWA = withPWAInit({
  disable: process.env.NODE_ENV === 'development',
  dest: 'public'
  // register: true,
  // skipWaiting: true,
  // runtimeCaching,
  // buildExcludes: [/middleware-manifest.json$/]
})

const nextBaseConfig = {
  // webpack5: true,
  // eslint: {
  //   dirs: ['components', 'layouts', 'lib', 'pages', 'app']
  // },
  webpack: (config, { dev, isServer }) => {
    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat'
      })
    }
    return config
  }

  // async headers() {
  //   return [
  //     {
  //       source: '/:path*{/}?',
  //       headers: [
  //         {
  //           key: 'Permissions-Policy',
  //           value: 'interest-cohort=()'
  //         }
  //       ]
  //     }
  //   ]
  // },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/notes/:pathname',
  //       destination: '/api/htmlrewrite?pathname=:pathname'
  //     },
  //     {
  //       source: '/notes/:pathname/b/:slug*',
  //       destination: '/api/htmlrewrite?pathname=:pathname&slug=/b/:slug*'
  //     },
  //     {
  //       source: '/notes/:pathname/x/:slug*',
  //       destination: '/api/htmlrewrite?pathname=:pathname&slug=/x/:slug*'
  //     },
  //     {
  //       source: '/api/:slug*',
  //       destination: 'https://www.craft.do/api/:slug*'
  //     },
  //     {
  //       source: '/share/static/js/:slug*',
  //       destination:
  //         '/api/jsrewrite?url=https://www.craft.do/share/static/js/:slug*'
  //     },
  //     {
  //       source: '/share/static/css/:slug*',
  //       destination: 'https://www.craft.do/share/static/css/:slug*'
  //     },
  //     {
  //       source: '/share/static/fonts/:slug*',
  //       destination: 'https://www.craft.do/share/static/fonts/:slug*'
  //     },
  //     {
  //       source: '/share/static/media/:slug*',
  //       destination: 'https://www.craft.do/share/static/media/:slug*'
  //     },
  //     {
  //       source: '/share/static/craft.webmanifest',
  //       destination: 'https://www.craft.do/share/static/craft.webmanifest'
  //     },
  //     {
  //       source: '/assets/js/analytics2.js',
  //       destination: 'https://www.craft.do/404'
  //     }
  //   ]
  // }
}

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  // ...nextBaseConfig,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
    localeDetection: false
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: [
      'api.craft.do',
      'www.notion.so',
      'images.unsplash.com',
      's3.us-west-2.amazonaws.com',
      'd1fdloi71mui9q.cloudfront.net',
      'onuniverse-assets.imgix.net'
    ]
  },
  experimental: {
    appDir: true
    // swcMinify: true,
  }
  // typescript: {
  //   // !! WARN !!
  //   // Dangerously allow production builds to successfully complete even if
  //   // your project has type errors.
  //   // !! WARN !!
  //   ignoreBuildErrors: true
  // }
})

// export default nextConfig
export default nextConfig

// module.exports = withPWA(nextConfig)
