import React, { Component } from 'react';
import classname from 'classnames';
import PropTypes from 'prop-types';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const DEFAULT_CENTER = { lat: 22.28552, lng: 114.15769 };

const LoadingContainer = () => <div className="google-map google-map--loading" />;

// Must use class component to provide ref here
class MapContainer extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children, ...otherProps } = this.props;
    return (
      <Map {...otherProps} zoom={12} initialCenter={DEFAULT_CENTER}>
        {children}
      </Map>
    );
  }
}

const WrappedMapContainer = GoogleApiWrapper({
  apiKey: process.env.GATSBY_GOOGLE_MAP_API_KEY,
  LoadingContainer,
})(MapContainer);

export default function GoogleMap({ className, ...props }) {
  return (
    <div {...props} className={classname('google-map', className)}>
      <WrappedMapContainer {...props} />
    </div>
  );
}

GoogleMap.propTypes = {
  className: PropTypes.string,
};

GoogleMap.defaultProps = {
  className: '',
};
