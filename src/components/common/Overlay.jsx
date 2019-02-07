import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

export default function Overlay({ children, className = '', ...props }) {
  return (
    <div className={classnames('overlay', className)} {...props}>
      {children}
    </div>
  );
}

Overlay.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
