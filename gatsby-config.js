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
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/assets`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/blog`,
        name: 'blog',
      },
    },
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
        icon: `src/images/kalm-icon.png`, // This path is relative to the root of the site
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['EB Garamond:400,500,600,700,800', 'Roboto Mono:400'],
        },
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-sentry',
      options: {
        dsn: process.env.GATSBY_SENTRY_DSN,
        environment: process.env.NODE_ENV,
        enabled: (() => ['production', 'stage'].indexOf(process.env.NODE_ENV) !== -1)(),
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GATSBY_GOOGLE_ANALYTICS_TRACKING_ID,
        head: false,
        anonymize: true,
        respectDNT: true,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: 'kalm42.com',
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700,
            },
          },
        ],
      },
    },
    `gatsby-plugin-robots-txt`,

    // Must be last in the array
    'gatsby-plugin-netlify',
  ],
}
