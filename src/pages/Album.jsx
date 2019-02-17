import React from 'react';

import GridGallery from '../components/GridGallery';
import { LayoutContext } from '../store';
export default function Album(props) {
  return <LayoutContext.Consumer>{context => <GridGallery {...context} />}</LayoutContext.Consumer>;
}
