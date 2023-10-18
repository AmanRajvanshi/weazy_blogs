import Sidebar from '@/components/common/Sidebar';
import Singlepost from '@/components/common/Singlepost';
import Loader from '@/components/loader/Loader';
import Breadcrumb from '@/layoutComponents/Breadcrumb';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function Category() {
  const router = useRouter();
  const { categoryLink, page } = router.query;
  const [data, setData] = useState([]);
  const [links, setLinks] = useState([]);
  const [catData, setCatData] = useState({});
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetchCategoryPosts(categoryLink, page);
  }, [categoryLink, page]);

  const fetchCategoryPosts = (category, page) => {
    const apiUrl = global.api + 'fetch_blogs_category';
    const query = {
      category: category || '',
      page: page || 1,
    };
    const queryString = new URLSearchParams(query).toString();
    fetch(`${apiUrl}?${queryString}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === true) {
          setData(data.data.data);
          setCatData(data.category_name);
          setLinks(data.data.links);
        } else {
          setData([]);
          setCatData({});
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoader(false);
      });
  };

  const handlePageChange = (newPage) => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, page: newPage },
    });
  };

  // Filter out the first and last page links
  const filteredLinks = links.slice(1, -1);

  const isSinglePage = links.length <= 3; // Consider 3 links (Previous, Page 1, Next) as a single page

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <>
          <Breadcrumb pageName={catData.name} />
          <section className="main-content">
            <div className="container-xl">
              <div className="row gy-4">
                <div className="col-lg-8">
                  <div className="row gy-4">
                    {data.length > 0 ? (
                      data.map((item, index) => <Singlepost item={item} />)
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
                  {!isSinglePage && (
                    <nav>
                      <ul className="pagination justify-content-center">
                        {/* <li
                          className={`page-item ${
                            parseInt(page) === 1 ? 'disabled' : ''
                          }`}
                        >
                          <a
                            className="page-link"
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              if (parseInt(page) > 1) {
                                handlePageChange(parseInt(page) - 1);
                              }
                            }}
                          >
                            &laquo;
                          </a>
                        </li> */}
                        {filteredLinks.map((pageInfo, index) => (
                          <li
                            className={`page-item ${
                              parseInt(page) === parseInt(pageInfo.label)
                                ? 'active'
                                : ''
                            }`}
                            key={index}
                          >
                            <a
                              className="page-link"
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();
                                handlePageChange(pageInfo.label);
                              }}
                            >
                              {pageInfo.label}
                            </a>
                          </li>
                        ))}
                        {/* <li
                          className={`page-item ${
                            parseInt(page) === parseInt(links.length)
                              ? 'disabled'
                              : ''
                          }`}
                        >
                          <a
                            className="page-link"
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              if (parseInt(page) < parseInt(links.length)) {
                                handlePageChange(parseInt(page) + 1);
                              }
                            }}
                          >
                            &raquo;
                          </a>
                        </li> */}
                      </ul>
                    </nav>
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

export default Category;
