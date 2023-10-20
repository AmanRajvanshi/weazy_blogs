import Sidebar from '@/components/common/Sidebar';
import Singlepost from '@/components/common/Singlepost';
import Breadcrumb from '@/layoutComponents/Breadcrumb';
import Head from 'next/head';

function Category({ metadata }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/package/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/package/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/package/favicon-16x16.png"
        />
        <link rel="manifest" href="/images/package/site.webmanifest" />
        <title>{metadata.category_name.name + ' | Weazy Blogs'}</title>
        <meta charSet="utf-8" />
        {/* meta tags */}
        <meta
          name="description"
          content={metadata.category_name.meta_description}
        />
        <meta
          name="keywords"
          content={metadata.category_name.meta_keyword + ', Weazy Blogs'}
        />
        <meta name="author" content="Weazy Infotech Pvt. Ltd," />
        {/* ogtags */}
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:title"
          content={metadata.category_name.name + ' | Weazy Blogs'}
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={
            'https://blogs.weazy.in/category/' + metadata.category_name.path
          }
        />
        <meta
          property="og:image"
          content="https://blogs.weazy.in/images/package/favicon-192x192.png"
        />
        <meta property="og:site_name" content="Weazy Blogs" />
        <meta
          property="og:description"
          content={metadata.category_name.meta_description}
        />
        {/* twitter tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="https://blogs.weazy.in" />
        <meta name="twitter:creator" content="Weazy Blogs" />
        <meta
          name="twitter:title"
          content={metadata.category_name.name + ' | Weazy Blogs'}
        />
        <meta
          name="twitter:description"
          content={metadata.category_name.meta_description}
        />
        <meta
          name="twitter:image"
          content="https://blogs.weazy.in/images/package/favicon-192x192.png"
        />
      </Head>
      <Breadcrumb pageName={metadata.category_name.name} />
      <section className="main-content">
        <div className="container-xl">
          <div className="row gy-4">
            <div className="col-lg-8">
              <div className="row gy-4">
                {metadata.data.length > 0 ? (
                  metadata.data.map((item, index) => (
                    <Singlepost item={item} key={index} />
                  ))
                ) : (
                  <div className="d-flex justify-content-center align-items-center flex-column">
                    <img
                      src="/images/no_blogs.png"
                      alt="No Blogs Found"
                      className="no_blogs_img"
                    />
                    <h5 className="text-center my-4 text-muted">
                      No posts found for this category.
                    </h5>
                  </div>
                )}
              </div>
            </div>
            <div className="col-lg-4">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps(context) {
  const { categoryLink } = context.query;
  const res = await fetch(
    global.api + 'fetch_blogs_category?category=' + categoryLink
  );
  const data = await res.json();
  if (!data.status) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      metadata: data,
    },
  };
}

export default Category;
