import React from 'react';
import PropTypes from 'prop-types';

function Jumbotron({ background, videoSrc, children }) {
  const containerClassName = `jumbotron ${videoSrc ? 'jumbotron--with-video' : ''}`;
  return (
    <div className={containerClassName} style={{ backgroundImage: `url(${background})` }}>
      {videoSrc ? (
        <video className="jumbotron__video" preload="true" muted="true" autoPlay="true" loop="true">
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : null}
      <div className="jumbotron__overlay" />
      <div className="jumbotron__inner">{children}</div>
    </div>
  );
}

Jumbotron.propTypes = {
  background: PropTypes.string,
  videoSrc: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Jumbotron.defaultProps = {
  background: '',
  videoSrc: undefined,
};

export default Jumbotron;
