import React from 'react';
import Layout from './src/layouts/GlobalLayout';

export const wrapPageElement = ({ element, props }) => <Layout {...props}>{element}</Layout>;
