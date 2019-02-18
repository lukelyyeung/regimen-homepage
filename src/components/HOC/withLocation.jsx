import React from 'react';
import { Location } from '@reach/router';

export default function withLocation(Component) {
  return props => (
    <Location>{locationProps => <Component {...locationProps} {...props} />}</Location>
  );
}
