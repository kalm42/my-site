/* eslint template-curly-spacing: 0 */
require('dotenv').config({
  path: `.env.production`,
})
module.exports = {
  siteMetadata: {
    title: `kalm42`,
    description: `I am a professional web developer located in Idaho Falls. I make one of a kind 
    websites, progressive web aps that match your business or personal needs.`,
    author: `@kalm42`,
    siteUrl: 'https://kalm42.com',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-sitemap',
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kyle Alexander Lafayette Melton 42`,
        short_name: `kalm42`,
        start_url: `/`,
        background_color: `#FFF41E`,
        theme_color: `#FFF41E`,
        display: `minimal-ui`,
        icon: `src/images/icons/favicon-32x32.png`, // This path is relative to the root of the site
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts',
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Roboto'],
        },
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-sentry',
      options: {
        dsn: process.env.GATSBY_SENTRY_DSN,
        environment: process.env.NODE_ENV,
        enabled: (() => ['production', 'stage'].indexOf(process.env.NODE_ENV) !== -1)(),
      },
    },
    `gatsby-transformer-sharp`,
    'gatsby-transformer-remark',

    // Must be last in the array
    'gatsby-plugin-netlify',
  ],
}
