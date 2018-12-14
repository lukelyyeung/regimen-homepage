import React from 'react';

const GOOGLE_MAP_STREET_PREFIX =
	'https://maps.googleapis.com/maps/api/streetview';

const generateGoogleStreetImageUrl = ({ lat, lng, size, apiKey }) =>
	`${GOOGLE_MAP_STREET_PREFIX}?location=${lat},${lng}&size=${size}x${size}&key=${apiKey}`;

function GoogleStreetImage({ lat, lng, size, apiKey, ...props }) {
	return (
		<img
			{...props}
			src={generateGoogleStreetImageUrl({ lat, lng, size, apiKey })}
		/>
	);
}

export default GoogleStreetImage;
