import React from 'react';
import PropTypes from 'prop-types';

export function HTMLContent({ content, className }) {
  return <div className={className} dangerouslySetInnerHTML={{ __html: content }} />;
}

export default function Content({ content, className }) {
  return <div className={className}>{content}</div>;
}

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
};

Content.defaultProps = {
  className: '',
  content: '',
};

HTMLContent.propTypes = Content.propTypes;
HTMLContent.defaultProps = Content.defualtProps;
