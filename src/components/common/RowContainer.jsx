import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'antd';

function RowContainer({ children, className, ...props }) {
  const classSets = `row-container ${className || ''}`;
  return (
    <Row className={classSets} {...props}>
      {children}
    </Row>
  );
}

RowContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

RowContainer.defaultProps = {
  className: '',
};

export default RowContainer;
