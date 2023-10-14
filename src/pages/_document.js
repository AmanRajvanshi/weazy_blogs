import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="robots" content="noindex, follow" />
        <link rel="shortcut icon" href="/images/fav.png" type="image/x-icon" />
        <link
          rel="stylesheet"
          href="/css/bootstrap.min.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="/css/all.min.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="/css/simple-line-icons.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="/css/style.css"
          type="text/css"
          media="all"
        />
      </Head>
      <body className="site-wrapper">
        <Main />
        <NextScript />
        <script src="/js/jquery.min.js"></script>
        <script src="/js/bootstrap.min.js"></script>
        <script src="/js/custom.js"></script>
      </body>
    </Html>
  );
}
