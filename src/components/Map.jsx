import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const DEFAULT_CENTER = { lat: 22.28552, lng: 114.15769 };

const LoadingContainer = () => <div className="google-map google-map--loading"/>;

class MapContainer extends Component {
  render() {
    const { children, ...otherProps } = this.props;
    return (
      <Map
        google={this.props.google}
        zoom={12}
        initialCenter={DEFAULT_CENTER}
        {...otherProps}
      >
        {children}
      </Map>
    );
  }
}

const WrappedMapContainer = GoogleApiWrapper({
	apiKey: process.env.GATSBY_GOOGLE_MAP_API_KEY,
	LoadingContainer,
})(MapContainer);

export default function({ className = '', id, ...props }) {
  return (
    <div className={`google-map ${className}`} id={id}>
      <WrappedMapContainer {...props} />
    </div>
  );
}
