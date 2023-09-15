require('dotenv').config();

module.exports = {
    siteMetadata: {
        name: 'Inmost®'
    },
    plugins: [
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        'inmost-ui',
        'inmost-helpers',
        {
            resolve: 'inmost-blog',
            options: {
                basePath: '/blog',

            }
        },
        {
            resolve: 'gatsby-source-contentful',
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
            }
        },
        {
            resolve: 'gatsby-plugin-alias-imports',
            options: {
                alias: {
                    '@sections': './src/sections'
                }
            }
        }
    ]
}