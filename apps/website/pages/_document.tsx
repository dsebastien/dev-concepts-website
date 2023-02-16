import React, { ReactElement } from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

/**
 * Custom HTML document
 */
export default class CustomDocument extends Document<{
  styleTags: ReactElement[];
}> {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          {this.props.styleTags}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap"
            rel="stylesheet"
          />
          {/* Preload the fonts */}
          <link rel="preload" href="/fonts/AvenirNext-Regular.woff2" as="font" crossOrigin="anonymous" />
          <link rel="preload" href="/fonts/AvenirNext-Bold.woff2" as="font" crossOrigin="anonymous" />
          <link rel="preload" href="/fonts/AvenirNext-BoldItalic.woff2" as="font" crossOrigin="anonymous" />
          <link rel="preload" href="/fonts/AvenirNext-DemiBold.woff2" as="font" crossOrigin="anonymous" />
          <link rel="preload" href="/fonts/AvenirNext-DemiBoldItalic.woff2" as="font" crossOrigin="anonymous" />
          <link rel="preload" href="/fonts/AvenirNext-Medium.woff2" as="font" crossOrigin="anonymous" />
          <link rel="preload" href="/fonts/AvenirNext-MediumItalic.woff2" as="font" crossOrigin="anonymous" />
          <link href="/static/favicons/favicon.ico" rel="shortcut icon" />
          {/* TODO add manifest */}
          {/*<link href="/static/site.webmanifest" rel="manifest" />*/}
          <meta content="#ffffff" name="theme-color" />
          <meta content="#ffffff" name="msapplication-TileColor" />
          <link href="/static/icons/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
          <link href="/static/icons/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
          <link href="/static/icons/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
          <link color="#4a9885" href="/static/icons/safari-pinned-tab.svg" rel="mask-icon" />
          <script
            defer
            data-domain="dev-concepts.dev"
            data-api="https://blue-bar-dsebastien-19fd.developassion.workers.dev/api/v1/event"
            src="https://blue-bar-dsebastien-19fd.developassion.workers.dev/content/script.js"
          ></script>
          <script defer src="https://gumroad.com/js/gumroad.js"></script>
          <meta content="/static/browserconfig.xml" name="msapplication-config" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
