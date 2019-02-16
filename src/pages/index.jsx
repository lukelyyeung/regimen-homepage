import React from 'react';

import Home from '../components/Home';
import GlobalLayout from '../layouts/GlobalLayout';

export default function Index(props) {
  return (
    <GlobalLayout {...props}>
      <Home />
    </GlobalLayout>
  );
}
