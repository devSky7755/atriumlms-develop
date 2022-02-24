import { NextPage } from 'next';
import React from 'react';

import { Page } from '../components';

const Page404: NextPage = function () {
  return (
    <Page title="Internal server error">
      <h1>404 - Page Not Found</h1>
    </Page>
  );
};

// noinspection JSUnusedGlobalSymbols
export default Page404;
