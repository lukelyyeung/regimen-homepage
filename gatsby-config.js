module.exports = {
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
  ],
};
