import Sidebar from '@/components/common/Sidebar';
import Singlepost from '@/components/common/Singlepost';
import Loader from '@/components/loader/Loader';
import Breadcrumb from '@/layoutComponents/Breadcrumb';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function authorDetails() {
  const router = useRouter();
  const [loader, setLoader] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const [authorDetails, setAuthorDetails] = useState([]);

  useEffect(() => {
    fetchData(router.query.authorLink);
  }, [router.query.authorLink]);

  const fetchData = (e) => {
    fetch(global.api + 'fetch_author?blog_path=' + e)
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          setAuthorDetails(data.data[0]);
          setBlogs(data.data[0].blogs);
        } else {
          setAuthorDetails([]);
          setBlogs([]);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoader(false);
      });
  };

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <>
          <Head>
            <meta charSet="utf-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/images/fav.png" />
            <title>Weazy Blogs</title>
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
          <Breadcrumb pageName={authorDetails.author_name} />
          <section className="main-content">
            <div className="container-xl">
              <div className="row gy-4">
                <div className="col-lg-12">
                  <div className="about-author mb-4 padding-30 rounded row">
                    {authorDetails.upload_image != null && (
                      <div className="col-md-2 col-sm-2 thumb d-flex justify-content-center align-items-center">
                        <img
                          src={global.img_link + authorDetails.upload_image}
                          className="author"
                          alt="author"
                        />
                      </div>
                    )}
                    <div
                      className={
                        authorDetails.upload_image != null
                          ? 'col-md-10 col-sm-10 details'
                          : 'col-md-12 col-sm-12 details'
                      }
                    >
                      <h4 className="name mb-0">{authorDetails.author_name}</h4>
                      {authorDetails.description != null && (
                        <p
                          className="mt-2"
                          dangerouslySetInnerHTML={{
                            __html: authorDetails.description,
                          }}
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  {blogs.length > 0 && (
                    <div className="row gy-4">
                      {blogs.map((item, index) => (
                        <Singlepost item={item} />
                      ))}
                    </div>
                  )}
                </div>
                <div className="col-lg-4">
                  <Sidebar />
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}

export default authorDetails;
