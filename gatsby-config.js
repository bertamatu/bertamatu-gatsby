const { icons } = require("react-icons")

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `BERTA.codes`,
    titleTemplate: "BERTA.codes",
    description: `PORTFOLIO. Junior front-end developer.`,
    author: `@berta.codes`,
    url: "https://www.bertamatu.com",
    menuLinks: [
      {
        name: "HOME",
        link: "/",
      },
      {
        name: "ABOUT",
        link: "/about",
      },
      {
        name: "WORK",
        link: "/work",
      },
      {
        name: "BLOG",
        link: "/blog",
      },
      {
        name: "LINKS",
        link: "/links",
      },
      {
        name: "CONTACT",
        link: "/contact",
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GATSBY_G_A,
        head: true,
        anonymize: true,
        respectDNT: true,
        pageTransitionDelay: 0,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: `posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/projects`,
        name: `projects`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
  ],
}
