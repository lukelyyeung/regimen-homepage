import React from 'react';

const GOOGLE_MAP_STREET_PREFIX =
	'https://maps.googleapis.com/maps/api/streetview';

const generateGoogleStreetImageUrl = ({ lat, int, size, key }) =>
	`${GOOGLE_MAP_STREET_PREFIX}?location=${lat},${int}&size=${size}x${size}&key=${key}`;

function GoogleStreetImage({ lat, int, size, key, ...props }) {
	return (
		<img
			{...props}
			src={generateGoogleStreetImageUrl({ lat, int, size, key })}
		/>
	);
}

export default GoogleStreetImage;
