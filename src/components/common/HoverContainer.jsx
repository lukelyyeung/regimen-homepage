import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function HoverContainer({ className, overlay, overlayClassName, children, ...props }) {
  const classSets = classNames('hover-container', className);
  const overlayClassSets = classNames('hover-container__overlay', overlayClassName);
  return (
    <div className={classSets} {...props}>
      {children}
      <div className={overlayClassSets}>{overlay}</div>
    </div>
  );
}

HoverContainer.propTypes = {
  className: PropTypes.string,
  overlay: PropTypes.node.isRequired,
  overlayClassName: PropTypes.string,
  children: PropTypes.node.isRequired,
};

HoverContainer.defaultProps = {
  className: '',
  overlayClassName: '',
};

export default HoverContainer;
