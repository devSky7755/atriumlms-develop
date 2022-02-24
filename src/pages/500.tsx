import { NextPage } from 'next';
import React from 'react';

import { Page } from '../components';

const Page500: NextPage = function () {
  return (
    <Page title="Not found">
      <h1>500 - Internal server error</h1>
    </Page>
  );
};

// noinspection JSUnusedGlobalSymbols
export default Page500;
