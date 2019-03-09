import React from 'react';
import PropTypes from 'prop-types';
import { BlogPostTemplate } from '../../templates/blog-post';

const BlogPostPreview = ({ entry, widgetFor }) => {
  const templeProps = {
    content: widgetFor('body'),
    description: entry.getIn(['data', 'description']),
    tags: entry.getIn(['data', 'tags']),
    title: entry.getIn(['data', 'title']),
  };

  return (
    <BlogPostTemplate {...templeProps} />
  );
};

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }).isRequired,
  widgetFor: PropTypes.func.isRequired,
};

export default BlogPostPreview;
