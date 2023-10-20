import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
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
