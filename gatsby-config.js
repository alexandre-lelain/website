const path = require("path")
require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Alexandre Le Lain`,
    description: `My personal website. You can check out all of Alexandre Le Lain's projects here!`,
    author: `@a_lelain`,
    url: "https://alexandre-lelain.dev/",
    keywords: [
      "Alexandre Le Lain",
      "Website",
      "Portfolio",
      "Projects",
      "Open Source",
      "OSS",
    ],
    image: "https://alexandre-lelain.dev/icons/icon-512x512.png",
    google: process.env.GOOGLE || "",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          components: path.resolve(__dirname, "src/components"),
          styles: path.resolve(__dirname, "src/styles"),
          icons: path.resolve(__dirname, "src/components/Icons"),
          hooks: path.resolve(__dirname, "src/hooks"),
          translations: path.resolve(__dirname, "src/translations"),
          lodash: path.resolve(__dirname, "node_modules/lodash-es"),
          images: path.resolve(__dirname, "src/images"),
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
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        display: `minimal-ui`,
        name: `home`,
        short_name: `home`,
        start_url: `/`,
        background_color: `#404040`,
        theme_color: `#404040`,
        icon: `src/images/profile.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
