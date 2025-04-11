/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Ketan Shukla | Portfolio',
  author: 'Ketan Shukla',
  headerTitle: 'Ketan Shukla Portfolio',
  description: 'Python Full Stack Engineer specializing in Django and FastAPI development',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://ketanshukla.com',
  siteRepo: 'https://github.com/ketankshukla/portfolio-new',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  email: 'resume@ketankshukla.com',
  github: 'https://github.com/ketankshukla',
  linkedin: 'https://www.linkedin.com/in/ketankshukla/',
  locale: 'en-US',
  // set to true if you want a navbar fixed to the top
  stickyNav: false,
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports Plausible, Simple Analytics, Umami, Posthog or Google Analytics.
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
    posthogAnalyticsId: '', // posthog.init e.g. phc_5yXvArzvRdqtZIsHkEm3Fkkhm3d0bEYUXCaFISzqPSQ
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus
    // Please add your .env file and modify it according to your selection
    provider: '',
  },
  comments: {
    provider: 'giscus',
    giscusConfig: {
      repo: 'ketankshukla/ketan-portfolio',
      repositoryId: 'R_kgDONbPxKA',
      category: 'General',
      categoryId: 'DIC_kwDONbPxKM4ClEyF',
      mapping: 'title',
      strict: '0',
      reactions: '0',
      emitMetadata: false,
      metadata: false,
      inputPosition: 'bottom',
      theme: 'dark',
      lang: 'en',
    },
    utterancesConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://utteranc.es/
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO,
      issueTerm: '', // supported options: pathname, url, title
      label: '', // label (optional): Comment 💬
      // theme example: github-light, github-dark, preferred-color-scheme
      // github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light
      theme: '',
      // theme when dark mode
      darkTheme: '',
    },
    disqusConfig: {
      // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
      shortname: process.env.NEXT_PUBLIC_DISQUS_SHORTNAME,
    },
  },
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: 'search.json', // path to load documents to search
    },
    // provider: 'algolia',
    // algoliaConfig: {
    //   // The application ID provided by Algolia
    //   appId: 'R2IYF7ETH7',
    //   // Public API key: it is safe to commit it
    //   apiKey: '599cec31baffa4868cae4e79f180729b',
    //   indexName: 'docsearch',
    // },
  },
}

module.exports = siteMetadata
