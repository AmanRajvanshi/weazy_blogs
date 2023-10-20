import Layout from '@/Layout';
import Loader from '@/components/loader/Loader';
import { Router } from 'next/router';
// import NextTopLoader from 'nextjs-toploader';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import React from 'react';
import { Toaster } from 'sonner';

global.api = 'https://blogsadmin.weazy.in/api/';
// global.api = 'http://127.0.0.1:8000/api/';

global.img_link = 'https://blogsadmin.weazy.in/images/';
// global.img_link = 'http://127.0.0.1:8000/images/';

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);
    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, []);

  return loading ? (
    <Loader />
  ) : (
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
        <Component {...pageProps} />
      </Layout>
      <Toaster position="bottom-left" />
    </>
  );
}
