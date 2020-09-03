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
    siteUrl: "https://alexandre-lelain.dev/",
    github: "https://github.com/alexandre-lelain",
    twitter: "https://mobile.twitter.com/a_lelain",
    linkedIn: "https://www.linkedin.com/in/alexandre-lelain",
    mail: "mailto:lelain.alexandre@gmail.com",
    keywords: [
      "Alexandre Le Lain",
      "Website",
      "Portfolio",
      "Projects",
      "Open Source",
      "OSS",
    ],
    image: "https://alexandre-lelain.dev/icons/favicon.png",
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
          lodash: path.resolve(__dirname, "node_modules/lodash-es"),
          images: path.resolve(__dirname, "src/images"),
          utils: path.resolve(__dirname, "src/utils"),
          locales: path.resolve(__dirname, "src/locales"),
          react: path.resolve(__dirname, "node_modules/react"),
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
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: path.resolve(`./src/components/Layout.js`),
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
        name: `Alexandre Le Lain - Portfolio`,
        short_name: `Alexandre Le Lain`,
        start_url: `/`,
        background_color: `#264d73`,
        theme_color: `#264d73`,
        icon: `src/images/profile.png`,
        icons: [
          {
            src: "/icons/favicon.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-robots-txt`,
  ],
}
