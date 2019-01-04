module.exports = {
  siteMetadata: {
    title: `Olivier's website`,
    description: `Olivier's personal website`,
    author: `@euskal64500`,
    menuLinks: [
      {
        name: 'HOME',
        link: '/',
      },
      {
        name: 'BLOG',
        link: '/blog',
      },
      {
        name: 'GAMES',
        link: '/games',
      },
      {
        name: 'ABOUT ME',
        link: '/about',
      },
    ],
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/blog/`,
        name: 'markdown-pages',
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `olivier's personal website`,
        short_name: `olivier's`,
        start_url: `/`,
        background_color: `#393f4d`,
        theme_color: `#393f4d`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: './static',
            },
          },
          `gatsby-remark-prismjs`,
        ],
      },
    },
    {
      resolve: `gatsby-remark-images`,
      options: {
        // It's important to specify the maxWidth (in pixels) of
        // the content container as this plugin uses this as the
        // base for generating different widths of each image.
        maxWidth: 650,
        showCaptions: true,
        wrapperStyle: 'margin: 1rem 1rem 1rem 1rem; background: #feda6a',
        backgroundColor: '#feda6a',
        withWebp: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout.js`),
      },
    },
    // 'gatsby-plugin-eslint',
  ],
}
