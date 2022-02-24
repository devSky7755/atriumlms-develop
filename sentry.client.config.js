// This file configures the initialization of Sentry on the browser.
// The config you add here will be used whenever a page is visited.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
  dsn: SENTRY_DSN || 'https://e1ff9635f06b4b56890e8afb0bca6b3b@o767617.ingest.sentry.io/6152712',
  tracesSampleRate: 1,
  // https://github.com/getsentry/sentry-javascript/issues/1552#issuecomment-457800641
  integrations: (integrations) => {
    return integrations.filter((integration) => integration.name !== 'GlobalHandlers');
  },
});
