require('react-icons');

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
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
                link: '/About',
            },
            {
                name: 'PROJECTS',
                link: '/Projects',
            },
            {
                name: 'GALLERY',
                link: '/Gallery',
            },
            {
                name: 'BLOG',
                link: '/Blog',
            },
            {
                name: 'LINKS',
                link: '/Links',
            },
            {
                name: 'CONTACT',
                link: '/Contact',
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
                path: `${__dirname}/src/data/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
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
    ],
};
