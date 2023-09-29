require('dotenv').config();

module.exports = {
  siteMetadata: {
    name: 'Inmost®',
    links: [
      {
        name: 'Inmost®',
        slug: '/',
      },
      {
        name: 'Servizi',
        slug: '/servizi/',
      },
      {
        name: 'Risorse',
        slug: '/risorse/',
      },
      {
        name: 'Contatti',
        slug: '/contatti/',
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
    'gatsby-transformer-remark',
    'gatsby-plugin-sharp',
    {
      resolve: 'inmost-ui',
      options: {
        mailchimpEndpoint: process.env.MAILCHIMP_ENDPOINT,
      },
    },
    'inmost-helpers',
    {
      resolve: 'inmost-blog',
      options: {
        basePath: '/articoli/',
      },
    },
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
