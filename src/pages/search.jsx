import Sidebar from '@/components/common/Sidebar';
import Singlepost from '@/components/common/Singlepost';
import Loader from '@/components/loader/Loader';
import Breadcrumb from '@/layoutComponents/Breadcrumb';
import Head from 'next/head';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

function search() {
  const searchParams = useSearchParams();
  const search = searchParams.get('search');
  const [data, setData] = useState([]);
  const [is_loading, setIsLoading] = useState(true);

  useEffect(() => {
    searchData(search);
  }, [search]);

  const searchData = (search) => {
    setIsLoading(true);
    fetch(global.api + 'search/' + search, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        if (!json.status) {
          setData([]);
        } else {
          setData(json.data);
        }
        setIsLoading(false);
        return json;
      })
      .catch((error) => console.error(error))
      .finally(() => {});
  };

  return (
    <>
      <Head>
        <title>Weazy Blogs: Nurturing Knowledge and Ideas</title>
        <meta charSet="utf-8" />
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
        {/* meta tags */}
        <meta
          name="description"
          content="Weazy Blogs: Diverse, insightful platform with engaging content on tech, lifestyle, and more. Foster intellectual growth and community enrichment."
        />
        <meta
          name="keywords"
          content="Weazy Blogs, Weazy Infotech, Technology, Weazy Infotech Pvt. Ltd.,Innovation,Lifestyle,Education,Health,Travel,Science,Entertainment,Reviews,Insights,Blogging,Trends,Opinions,Ideas,Inspiration"
        />
        <meta name="author" content="Weazy Infotech Pvt. Ltd," />
        {/* ogtags */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content="Weazy Blogs" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://blogs.weazy.in" />
        <meta
          property="og:image"
          content="https://blogs.weazy.in/images/package/favicon-192x192.png"
        />
        <meta property="og:site_name" content="Weazy Blogs" />
        <meta
          property="og:description"
          content="Weazy Blogs: Diverse, insightful platform with engaging content on tech, lifestyle, and more. Foster intellectual growth and community enrichment."
        />
        {/* twitter tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="https://blogs.weazy.in" />
        <meta name="twitter:creator" content="Weazy Blogs" />
        <meta name="twitter:title" content="Weazy Blogs" />
        <meta
          name="twitter:description"
          content="Weazy Blogs: Diverse, insightful platform with engaging content on tech, lifestyle, and more. Foster intellectual growth and community enrichment."
        />
        <meta
          name="twitter:image"
          content="https://blogs.weazy.in/images/package/favicon-192x192.png"
        />
      </Head>
      {is_loading ? (
        <Loader />
      ) : (
        <>
          <Breadcrumb pageName="Search" />
          <section className="main-content">
            <div className="container-xl">
              <div className="row gy-4">
                <div className="col-lg-8">
                  <div className="row gy-4">
                    {/* {category.map((item, index) => (
                      <Singlepost item={item} key={index} />
                    ))} */}
                    {data.length > 0 ? (
                      data.map((item, index) => (
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
                          No posts found for this search result - [{search}]
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
      )}
    </>
  );
}

export default search;
