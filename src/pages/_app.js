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
        <Component {...pageProps} />
      </Layout>
      <Toaster position="bottom-left" />
    </>
  );
}
