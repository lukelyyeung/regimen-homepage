import React, { Fragment } from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';

import GlobalLayout from '../layouts/GlobalLayout';
export default function Index() {
  return (
    <Fragment>
      <GlobalLayout />
      <MessengerCustomerChat pageId="1603230056485437" appId="2192516717732736" />
    </Fragment>
  );
}
