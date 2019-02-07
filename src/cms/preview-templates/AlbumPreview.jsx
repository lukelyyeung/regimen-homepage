import React from 'react';
import PropTypes from 'prop-types';
import AlbumTemplate from '../../components/GridGallery';

const AlbumPreview = ({ entry }) => {
  const entryImages = entry.getIn(['data', 'images']);
  const images = entryImages ? entryImages.toJS() : [];
  return <AlbumTemplate images={images} />;
};

AlbumPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }).isRequired,
};

export default AlbumPreview;
