import React from 'react';
import classnames from 'classnames';
import { Icon } from 'antd';
import PropType from 'prop-types';

export default function Tag({ children, className, ...otherProps }) {
  return (
    <div {...otherProps} className={classnames('tag', className)}>
      <Icon type="tag" />
      {children}
    </div>
  );
}

Tag.propTypes = {
  children: PropType.node.isRequired,
  className: PropType.string,
};

Tag.defaultProps = {
  className: '',
};
