const BLOG = {
  title: 'Rod Kisten | Rodolfo Costa',
  author: 'Rod Kisten | Rodolfo Costa | KSTN',
  email: 'hey@rodkisten.com',
  link: 'https://rodkisten.com',
  newsletter: 'Kisten Weekly',
  description: 'A static blog build on top of Notion and Next.js',
  lang: 'en-US',
  appearance: 'auto', // ['light', 'dark', 'auto'],
  font: [ 'sans-serif'], // ['sans-serif', 'serif']
  lightBackground: '#F6F8FA', // use hex value, don't forget '#' e.g #fffefc
  darkBackground: '#212936', // use hex value, don't forget '#'
  path: '', // leave this empty unless you want to deploy Notionic in a folder
  since: 2023, // If leave this empty, current year will be used.
  postsPerPage: 10,
  sortByDate: true,
  pagesShow: {
    newsletter: true,
    notes: true,
    projects: true,
    contact: true,
    books: true,
    friends: true,
  },
  showWeChatPay: false,
  previewImagesEnabled: true,
  autoCollapsedNavBar: false, // The automatically collapsed navigation bar
  ogImageGenerateHost: 'og-zl.vercel.app', // The link to generate OG image, don't end with a slash
  defaultCover: '/cover.jpg',
  socialLink: {
    twitter: 'https://twitter.com/kistenrod',
    github: 'https://github.com/oirodolfo',
    telegram: 'https://kisten.t.me',
  },
  seo: {
    keywords: ['Rodolfo Costa', 'Rod Kisten', 'Kisten', 'Blog'],
    googleSiteVerification: '', // Remove the value or replace it with your own google site verification code
  }, // https://rodkisten.notion.site/54bfcfa08cba4d3cbe9a19a71ca09372?v=e2e84c3d89544146af7e815d379105cc
  notionPageId: process.env.NOTION_PAGE_ID, // DO NOT CHANGE THIS! Edit .env file!
  notionSpacesId: process.env.NOTION_SPACES_ID, // DO NOT CHANGE THIS! Edit .env file!
  notionAccessToken: process.env.NOTION_ACCESS_TOKEN, // Useful if you prefer not to make your database public
  notionDomain: 'rodkisten.notion.site',
  telegramToken: process.env.TELEGRAM_TOKEN, // The token of your Telegram bot
  telegramChatId: '263895784', // The chat id of your Telegram bot
  telegramChannelUrl: 'https://channel.zuolan.me/', // The link of your Telegram channel
  telegramChannelName: 'rodkisten', // The name of your Telegram channel
  craftConfigShareUrl: 'https://www.craft.do/s/nKdMPH9mx1WjH3', // The link to share your craft config
  analytics: {
    provider: '', // Currently we support Google Analytics, Ackee, Umami and Cloudflare Insights, please fill with 'ga' or 'ackee' or 'umami' or 'cf', leave it empty to disable it.
    ackeeConfig: {
      tracker: '', // e.g 'https://ackee.example.com/tracker.js'
      dataAckeeServer: '', // e.g https://ackee.example.com , don't end with a slash
      domainId: '', // e.g '0e2257a8-54d4-4847-91a1-0311ea48cc7b'
    },
    cfConfig: {
      scriptUrl: 'https://static.cloudflareinsights.com/beacon.min.js', // Default
      token: '', // Like '{"token": "xxxxxxxxxxxxxxxxxx"}'
    },
    gaConfig: {
      measurementId: '', // e.g: G-XXXXXXXXXX
    },
    umamiConfig: {
      scriptUrl: '', // The url of your Umami script
      websiteId: '', // The website id of your Umami instance
    },
  },
  comment: {
    // support provider: utterances, supacomments
    provider: '', // leave it empty if you don't need any comment plugin
    supaCommentsConfig: {
      supabaseUrl: '', // The url of your Supabase instance
      supabaseAnonKey: '', // The anonymous key of your Supabase instance
    },
    utterancesConfig: {
      repo: '',
    },
  },
  isProd: process.env.VERCEL_ENV === 'production', // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
// export default BLOG
module.exports = BLOG
