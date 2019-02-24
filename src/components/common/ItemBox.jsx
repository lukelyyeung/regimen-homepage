import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import classnames from 'classnames';

function ItemBox({ children, className, ...props }) {
  return (
    <Card className={classnames('item-box', className)} {...props}>
      {children}
    </Card>
  );
}

ItemBox.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

ItemBox.defaultProps = {
  className: '',
};

export default ItemBox;
