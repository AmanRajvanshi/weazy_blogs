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
