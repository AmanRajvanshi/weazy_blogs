import Layout from '@/Layout';
import Head from 'next/head';
// import NextTopLoader from 'nextjs-toploader';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Toaster } from 'sonner';

global.api = 'https://blogsadmin.weazy.in/api/';
// global.api = 'http://127.0.0.1:8000/api/';

global.img_link = 'https://blogadmin.eamagz.com/images/';
// global.img_link = 'http://127.0.0.1:8000/images/';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        {/* <NextTopLoader
          color="#0d87a1"
          initialPosition={0.08}
          crawlSpeed={200}
          height={4}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
        /> */}
        <Head>
          <title>Weazy Blogs</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/images/fav.png" />
          {/* meta tags */}
          <meta name="description" content="Weazy Blogs" />
          <meta name="keywords" content="Weazy Blogs" />
          <meta name="author" content="Weazy Blogs" />
          {/* ogtags */}
          <meta property="og:locale" content="en_US" />
          <meta property="og:title" content="Weazy Blogs" />
          <meta property="og:type" content="article" />
          <meta property="og:url" content="https://blogs.weazy.in" />
          <meta
            property="og:image"
            content="https://blogs.weazy.in/images/fav.png"
          />
          <meta property="og:site_name" content="Weazy Blogs" />
          <meta property="og:description" content="Weazy Blogs" />
          {/* twitter tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="https://blogs.weazy.in" />
          <meta name="twitter:creator" content="Weazy Blogs" />
          <meta name="twitter:title" content="Weazy Blogs" />
          <meta name="twitter:description" content="Weazy Blogs" />
          <meta
            name="twitter:image"
            content="https://blogs.weazy.in/images/fav.png"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
      <Toaster position="bottom-left" />
    </>
  );
}
