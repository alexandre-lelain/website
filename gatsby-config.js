const path = require("path")

module.exports = {
  siteMetadata: {
    title: `My projects portfolio`,
    description: `Check out all of Alexandre Le Lain's projects on this website!`,
    author: `@a_lelain`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          icons: path.resolve(__dirname, "src/components/Icons"),
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `home`,
        short_name: `home`,
        start_url: `/`,
        icon: `src/images/profile.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
