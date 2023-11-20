require('dotenv').config();

module.exports = {
  flags: {
    DEV_SSR: true,
  },
  siteMetadata: {
    locale: 'it',
    name: 'Inmost®',
    links: [
      // {
      //   name: 'Inmost®',
      //   slug: '/',
      // },
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Inmost®`,
        short_name: `Inmost®`,
        start_url: `/`,
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
            icons: [{ src: 'src/images/layers.png', sizes: '192x192' }],
          },
          {
            name: 'Ascolta',
            short_name: 'Inmost® Talks',
            description: 'View the list of podcasts you listen to',
            url: '/risorse/podcast/inmost-talks/',
            icons: [{ src: 'src/images/stereo.png', sizes: '192x192' }],
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
