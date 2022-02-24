import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import createEmotionServer from '@emotion/server/create-instance';
import NextDocument, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import React from 'react';

const enableEmotionCache = function (
  ctx: DocumentContext,
  initialProps: DocumentInitialProps,
): DocumentInitialProps {
  const originalRenderPage = ctx.renderPage;
  const emotionCache = createCache({ key: 'css' });
  const { extractCriticalToChunks } = createEmotionServer(emotionCache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) =>
        function EmotionEnhancedApp(props) {
          return (
            <CacheProvider value={emotionCache}>
              {/* eslint-disable-next-line react/jsx-props-no-spreading */}
              <App {...props} />
            </CacheProvider>
          );
        },
    });

  // Grab the CSS from emotion
  const emotionChunks = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionChunks.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    html: emotionChunks.html,
    styles: [...React.Children.toArray(initialProps.styles), ...emotionStyleTags],
  };
};

const Document = class extends NextDocument {
  render(): JSX.Element {
    // noinspection HtmlRequiredTitleElement
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
};

Document.getInitialProps = async function (ctx: DocumentContext): Promise<DocumentInitialProps> {
  const initialProps = await NextDocument.getInitialProps(ctx);
  return enableEmotionCache(ctx, initialProps);
};

export default Document;
