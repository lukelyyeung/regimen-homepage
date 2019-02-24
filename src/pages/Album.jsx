import React from 'react';

import GridGallery from '../components/GridGallery';
import { LayoutContext } from '../store';

export default function Album() {
  return (
    <section className="section">
      <LayoutContext.Consumer>{context => <GridGallery {...context} />}</LayoutContext.Consumer>
    </section>
  );
}
