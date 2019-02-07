import React from 'react';
import get from 'lodash-es/get';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

function PreviewableImage({ imageInfo, className, ...otherProps }) {
  const classSet = classnames('image', className);
  const { alt = '', childImageSharp, image } = imageInfo;

  const fluid = get(childImageSharp, 'fluid') || get(image, 'childImageSharp.fluid');

  if (fluid) {
    return <Img {...otherProps} className={classSet} fluid={fluid} alt={alt} />;
  }

  const fixed = get(childImageSharp, 'fixed') || get(image, 'childImageSharp.fixed');

  if (fixed) {
    return <Img {...otherProps} className={classSet} fixed={fixed} alt={alt} />;
  }

  if (typeof image === 'string') {
    return <img {...otherProps} className={classSet} src={image} alt={alt} />;
  }

  return null;
}

PreviewableImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  className: PropTypes.string,
};

PreviewableImage.defaultProps = {
  className: '',
  imageInfo: {},
};

export default PreviewableImage;
