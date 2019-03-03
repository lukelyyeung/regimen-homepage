const theme = require('./src/theme');

module.exports = {
  siteMetadata: {
    title: 'Regimen homepage',
    description: 'This page is about Chinese medicine based cosmetic product',
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
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/media`,
        name: 'media',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-polyfill-io',
      options: {
        features: 'IntersectionObserver',
        flags: 'gated',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Regimen',
        short_name: 'Regimen',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#39bfbe',
        display: 'standalone',
        icon: 'static/media/logo.svg',
        include_favicon: true,
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
        enableIdentityWidget: true,
        publicPath: 'admin',
        htmlTitle: 'Content Manager',
      },
    },
    'gatsby-plugin-netlify',
  ],
};
