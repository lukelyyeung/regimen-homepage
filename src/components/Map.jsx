import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const points = [
	{ lat: 22.299895, lng: 114.172569 },
	{ lat: 42.03, lng: -77.02 },
	{ lat: 41.03, lng: -77.04 },
	{ lat: 42.05, lng: -77.02 },
];

class MapContainer extends Component {
	state = {
		selectedPlace: {
			name: 'hello',
		},
	};
	render() {
		const bounds = new this.props.google.maps.LatLngBounds();
		for (let i = 0; i < points.length; i++) {
			bounds.extend(points[i]);
		}

		return (
				<Map
					google={this.props.google}
					zoom={11}
					bound={bounds}
					initialCenter={points[0]}
					{...this.props}
					>
					<Marker position={points[0]} name={'Current location'} />
				</Map>
		);
	}
}

const WrappedMapContainer = GoogleApiWrapper({
	apiKey: process.env.GATSBY_GOOGLE_MAP_API_KEY,
})(MapContainer);

export default function({className="", id, ...props }) {
	return (
		<div className={`google-map ${className}`} id={id}>
			<WrappedMapContainer {...props} />
		</div>
	)
}
