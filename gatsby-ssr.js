import React from 'react';
import Layout from './src/layouts/GlobalLayout';
import PageTransition from './src/layouts/PageTransition';

// eslint-disable-next-line import/prefer-default-export
export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>
    <PageTransition {...props}>{element}</PageTransition>
  </Layout>
);
