import React from 'react';
import PropTypes from 'prop-types';

import PreviewableImage from './common/PreviewableImage';
import HoverContainer from './common/HoverContainer';
import Overlay from './common/Overlay';

function ImageOverlay(caption) {
  return (
    <Overlay>
      <h3 style={{ color: 'white' }}>{caption}</h3>
    </Overlay>
  );
}

function GridGallery({ images, isMobile, ...props }) {
  return (
    <div {...props}>
      <h2 className="section__header">活動紀錄</h2>
      <div className="flex-center flex-center--stretch">
        {images.map(({ caption, alt, ...imageProps }) => (
          <HoverContainer
            key={alt}
            overlay={ImageOverlay(caption)}
            style={{ width: isMobile ? '100%' : '33%', margin: isMobile ? '0.5rem' : '0.1rem' }}
          >
            <PreviewableImage
              imageInfo={imageProps}
              alt={alt}
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
