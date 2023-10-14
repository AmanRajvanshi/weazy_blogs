import React, { useEffect, useState } from 'react';
import Loader from './loader/Loader';

function Instagram() {
  const [instagramData, setInstagramData] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(global.api + 'fetch_instagram_pic', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        limit: 6,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          setInstagramData(data.data);
        } else {
          setInstagramData([]);
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
        <div className="instagram">
          <div className="container-xl">
            <div className="instagram-feed d-flex flex-wrap">
              {instagramData?.map((values, index) => {
                return (
                  <div
                    className="insta-item col-sm-2 col-6 col-md-2"
                    key={index}
                  >
                    <img
                      src={values.path}
                      alt={values.image}
                      style={{
                        width: '100%',
                        objectFit: 'fill',
                        height: '100%',
                        border: '1px solid #ddd',
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Instagram;
