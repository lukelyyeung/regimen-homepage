import React from 'react';
import Layout from './src/layouts/GlobalLayout';
import PageTransition from './src/layouts/PageTransition';

const isAppStyle = plugin => /app/i.test(plugin.props['data-href'] || '');

// eslint-disable-next-line import/prefer-default-export
export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>
    <PageTransition {...props}>{element}</PageTransition>
  </Layout>
);

export const onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
	const headComponents = getHeadComponents();
	const appStyle = headComponents.splice(headComponents.findIndex((component) => {
		return component.type === 'style' && isAppStyle(component);
	}), 1);

	const reorderedHeadComponent = [...headComponents, appStyle];

  replaceHeadComponents(reorderedHeadComponent);
};
