import React from 'react';

import NetWorkSearch from '../../components/NetWorkSearch';
import GlobalLayout from '../../layouts/GlobalLayout';

export default function Index(props) {
  return (
    <GlobalLayout {...props}>
      <NetWorkSearch />
    </GlobalLayout>
  );
}
