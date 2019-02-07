module.exports = {
  siteMetadata: {
    title: 'JoekChong homepage',
  },
  plugins: [
    'gatsby-plugin-antd',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-polyfill-io',
      options: {
        features: 'IntersectionObserver',
        flags: 'gated',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/images`,
        name: 'images',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ],
};
