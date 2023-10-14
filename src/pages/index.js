import Sidebar from '@/components/common/Sidebar';
import Singlepost from '@/components/common/Singlepost';
import Instagram from '@/components/Instagram';
import Loader from '@/components/loader/Loader';
import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function Home() {
  const [blogData, setBlogData] = useState([]);
  const [data, setData] = useState({});
  const [loader, setLoader] = useState(true);
  const [count, setCount] = useState(1);
  const [buttonLoader, setButtonLoader] = useState(false);

  useEffect(() => {
    fetchData(count);
  }, []);

  const fetchData = (e) => {
    setButtonLoader(true);
    fetch(global.api + 'fetch_category_post?page=' + e)
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          setData(data.data);
          setBlogData([...blogData, ...data.data.data]);
        } else {
          setData({});
          setBlogData([]);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoader(false);
        setButtonLoader(false);
      });
  };

  const updateData = () => {
    setCount(count + 1);
    fetchData(count + 1);
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
          <section className="main-content">
            <div className="container-xl">
              <div className="row gy-4">
                <div className="col-lg-8">
                  {blogData.map((values) => {
                    return <Singlepost item={values} />;
                  })}
                  {data.next_page_url != null &&
                    (buttonLoader ? (
                      <div className="d-flex align-item-center justify-content-center">
                        <button className="btn btn-default " disabled>
                          Loading...
                        </button>
                      </div>
                    ) : (
                      <div className="d-flex align-item-center justify-content-center">
                        <button
                          className="btn btn-default"
                          onClick={() => updateData()}
                        >
                          Load More
                        </button>
                      </div>
                    ))}
                </div>
                <div className="col-lg-4">
                  <Sidebar />
                </div>
              </div>
            </div>
          </section>
        </>
      )}
      {/* <HomePageContent data={data} /> */}
      <Instagram />
    </>
  );
}
