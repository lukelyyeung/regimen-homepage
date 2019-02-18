module.exports = {
  siteMetadata: {
    title: 'JoekChong homepage',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-less',
      options: {
				modifyVars: require('./src/theme'),
        javascriptEnabled: true,
      },
    },
    {
      resolve: 'gatsby-plugin-antd',
      options: {
        style: true,
      },
    },
    {
      resolve: 'gatsby-plugin-polyfill-io',
      options: {
        features: 'IntersectionObserver',
        flags: 'gated',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/images`,
        name: 'images',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ],
};
