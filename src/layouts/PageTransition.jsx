import React from 'react';
import PropTypes from 'prop-types';
import posed, { PoseGroup } from 'react-pose';

const Transition = posed.div({
  enter: {
    opacity: 1,
    x: 0,
    transition: { duration: 250, ease: 'easeIn' },
  },
  exit: {
    opacity: 0,
    x: 100,
    transition: { duration: 250, ease: 'easeOut' },
  },
});

export default function PageTransition({ children, location }) {
  return (
    <PoseGroup>
      <Transition key={location.pathname}>{children}</Transition>
    </PoseGroup>
  );
}

PageTransition.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};
