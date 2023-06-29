require('react-icons');

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    trailingSlash: `always`,
    siteMetadata: {
          title: `berta.codes`,
          titleTemplate: 'berta.codes',
          description: `PORTFOLIO. Front-end software developer.`,
          author: `@berta.codes`,
          url: 'https://www.berta.codes',
          menuLinks: [
              {
                  name: 'HOME',
                  link: '/',
              },
              {
                  name: 'ABOUT',
                  link: '/about',
              },
              {
                  name: 'PROJECTS',
                  link: '/projects',
              },
              {
                  name: 'GALLERY',
                  link: '/gallery',
              },
              {
                  name: 'BLOG',
                  link: '/blog',
              },
              {
                  name: 'LINKS',
                  link: '/links',
              },
              {
                  name: 'SETUP',
                  link: '/setup',
              },
              {
                name: 'SUPPORT',
                link: '/support',
              },
              {
                  name: 'CONTACT',
                  link: '/contact',
              },
          ],
    },
    plugins: [
        {
          resolve: `gatsby-plugin-google-gtag`,
          options: {
            trackingIds: [ 
              process.env.GATSBY_GA4
            ],
            pluginConfig: {
              head: true,
            },
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
                path: `${__dirname}/src/data/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `berta.codes`,
                short_name: `berta.codes`,
                description: `berta.codes portfolio website does cool things and makes your life better.`,
                lang: `en`,
                start_url: `/`,
                display: `standalone`,
                icon: `src/data/images/gifs/giphy_work.gif`,
            },
        },
        {
            resolve: `gatsby-plugin-styled-components`,
            options: {},
        },
        {
            resolve: `gatsby-plugin-typescript`,
            options: {
                isTSX: true,
                jsxPragma: `jsx`,
                allExtensions: true,
            },
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    'Fuggles',
                    'Roboto',
                    'Special Elite',
                    'Abril Fatface',
                    'Libre Barcode 39 Text',
                    'Chonburi',
                    'Yeseva One',
                    'Vidaloka',
                    'Major Mono Display',
                    'Oswald'
                ],
                display: 'swap',
            },
        },
    ],
    trailingSlash: `always`,
};
