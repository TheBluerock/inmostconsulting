require('dotenv').config();

module.exports = {
  flags: {
    DEV_SSR: false,
  },
  siteMetadata: {
    locale: 'it',
    name: 'Inmost®',
    siteUrl: 'https://inmostconsulting.com',
    podcast:
      'https://open.spotify.com/show/4Biam7fzH5KOEchby5Uw5C?si=fc880c8ffa4b4f3f',
    links: [
      {
        name: 'Inmost®',
        slug: '/',
      },
      {
        name: 'About',
        slug: '/about/matteo-albini/',
      },
      {
        name: 'Articoli',
        slug: '/risorse/articoli/',
      },
      {
        name: 'Podcast',
        slug: '/risorse/podcast/inmost-talks/',
      },
    ],
    cta: {
      title: 'test',
      name: 'test',
      link: '/test/',
    },
    footerLinks: {
      links: [],
      risorse: [],
      legal: [],
    },
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    //Create appropriate query
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        createLinkInHead: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Inmost®`,
        short_name: `Inmost®`,
        start_url: `/`,
        background_color: '#fcfcfa',
        theme_color: '#b80808',
        orientation: 'portrait',
        lang: 'it',
        scope: '/',
        display: `standalone`,
        icon: `src/images/icon.png`,
        icon_options: {
          purpose: `any maskable`,
        },
        shortcuts: [
          {
            name: 'Leggi',
            short_name: 'Articoli',
            description: 'View the list of podcasts you saved for later',
            url: '/risorse/articoli/',
            icons: [{ src: '/images/layers.png', sizes: '192x192' }],
          },
          {
            name: 'Ascolta',
            short_name: 'Inmost® Talks',
            description: 'View the list of podcasts you listen to',
            url: '/risorse/podcast/inmost-talks/',
            icons: [{ src: '/images/stereo.png', sizes: '192x192' }],
          },
        ],
      },
    },
    {
      resolve: 'inmost-ui',
      options: {
        mailchimpEndpoint: process.env.MAILCHIMP_ENDPOINT,
      },
    },
    'inmost-helpers',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@sections': './src/sections',
        },
      },
    },
  ],
};
