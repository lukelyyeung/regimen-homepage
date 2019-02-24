import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import HoverContainer from './common/HoverContainer';
import Overlay from './common/Overlay';
import getImageLabelByFileName from '../utils/getImageLabelByFileName';

function ImageOverlay(name) {
  return (
    <Overlay>
      <h3 style={{ color: 'white' }}>{getImageLabelByFileName(name)}</h3>
    </Overlay>
  );
}

function GridGallery({ images, isMobile, ...props }) {
  return (
    <div {...props}>
      <h2 className="section__header">活動紀錄</h2>
      <div className="flex-center flex-center--stretch">
        {images.map(({ node: { name, childImageSharp: { fluid } } }) => (
          <HoverContainer
            key={name}
            overlay={ImageOverlay(name)}
            style={{ width: isMobile ? '100%' : '33%', margin: isMobile ? '0.5rem' : '0.1rem' }}
          >
            <Img
              fluid={fluid}
              alt={getImageLabelByFileName(name)}
              style={{ width: '100%', height: '300px', objectFit: 'cover' }}
            />
          </HoverContainer>
        ))}
      </div>
    </div>
  );
}

GridGallery.propTypes = {
  images: PropTypes.array.isRequired,
  isMobile: PropTypes.bool,
};

GridGallery.defaultProps = {
  isMobile: false,
};

export default GridGallery;
