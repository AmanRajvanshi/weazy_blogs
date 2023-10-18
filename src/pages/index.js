import Sidebar from '@/components/common/Sidebar';
import Singlepost from '@/components/common/Singlepost';
import Instagram from '@/components/Instagram';
import Loader from '@/components/loader/Loader';
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
