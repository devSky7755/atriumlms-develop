const { withPlugins, optional } = require('next-compose-plugins');
const { PHASE_PRODUCTION_BUILD, PHASE_PRODUCTION_SERVER } = require('next/constants');

// eslint-disable-next-line no-unused-vars
module.exports = (phase, { defaultConfig }) => {
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    reactStrictMode: true,
    pageExtensions: ['ts', 'tsx', 'mdx'],
    swcMinify: false,
    trailingSlash: false,
    i18n: {
      locales: ['en-US'],
      defaultLocale: 'en-US',
    },
    env: (() => {
      return {};
    })(),
    headers: async () => [
      // TODO: Add security headers
      // TODO: Add CSP headers as described below
      // https://stackoverflow.com/questions/65551212/using-csp-in-nextjs-nginx-and-material-uissr
      // {
      //   key: 'X-DNS-Prefetch-Control',
      //   value: 'on',
      // },
      // {
      //   key: 'X-Content-Type-Options',
      //   value: 'nosniff',
      // },
    ],
    // eslint-disable-next-line no-unused-vars
    webpack: (webpackConfig, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      if (!isServer) {
        // Reduce Sentry bundle size (just a bit)
        Object.assign(webpackConfig.resolve.alias, {
          ...webpackConfig.resolve.alias,
          '@sentry/browser': '@sentry/browser/esm',
        });
      }

      // Replace React with Preact only in client production build
      if (!dev && !isServer) {
        Object.assign(webpackConfig.resolve.alias, {
          ...webpackConfig.resolve.alias,
          react: 'preact/compat',
          'react-dom': 'preact/compat',
          'react-dom/test-utils': 'preact/test-utils',
        });
      }

      return webpackConfig;
    },
    experimental: {
      outputStandalone: true,
    },
  };

  return withPlugins(
    [
      [require('next-transpile-modules')([]), [PHASE_PRODUCTION_BUILD, PHASE_PRODUCTION_SERVER]],
      [
        require('@next/mdx'),
        {
          extension: /\.mdx$/,
          options: {
            remarkPlugins: [],
            rehypePlugins: [],
          },
        },
      ],
      [
        optional(() =>
          require('@next/bundle-analyzer')({
            enabled: process.env.ANALYZE === 'true',
          }),
        ),
        [PHASE_PRODUCTION_BUILD, PHASE_PRODUCTION_SERVER],
      ],
      [optional(() => require('next-pwa')), [PHASE_PRODUCTION_BUILD, PHASE_PRODUCTION_SERVER]],
      [optional(() => require('next-offline')), [PHASE_PRODUCTION_BUILD, PHASE_PRODUCTION_SERVER]],
      [
        optional(() => require('@sentry/nextjs').withSentryConfig),
        {
          sentry: {
            silent: true,
            disableServerWebpackPlugin: true,
            disableClientWebpackPlugin: true,
          },
        },
        [PHASE_PRODUCTION_BUILD, PHASE_PRODUCTION_SERVER],
      ],
    ],
    nextConfig,
  )(phase, { defaultConfig });
};
