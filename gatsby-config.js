const theme = require('./src/theme');

module.exports = {
  siteMetadata: {
    title: 'Regimen homepage',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-less',
      options: {
        modifyVars: theme,
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
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Regimen',
        short_name: 'Regimen',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'standalone',
        icon: 'static/images/logo.png',
        include_favicon: true,
      },
    },
  ],
};
