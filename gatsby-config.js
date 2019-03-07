/* eslint template-curly-spacing: 0 */
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
    `gatsby-plugin-styled-components`,
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
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
    `gatsby-transformer-sharp`,
    'gatsby-transformer-remark',

    // Must be last in the array
    'gatsby-plugin-netlify',
  ],
}
