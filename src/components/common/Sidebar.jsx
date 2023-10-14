import moment from 'moment';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';

function Sidebar() {
  const [subscriptionEmail, setSubscriptionEmail] = useState('');
  const [buttonLoading, setButtonLoading] = React.useState(false);
  const [popular_post, setPopular_post] = React.useState([]);
  const [featured_post, setFeatured_post] = React.useState([]);

  useEffect(() => {
    featured_post_data();
    fetch_latest_update();
  }, []);

  const featured_post_data = () => {
    fetch(global.api + 'fetch_popular_post', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((json) => {
        if (!json.status) {
        } else {
          setPopular_post(json.data);
        }
        return json;
      })
      .catch((error) => console.error(error))
      .finally(() => {});
  };

  const fetch_latest_update = () => {
    fetch(global.api + 'fetch_latest_update', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((json) => {
        if (!json.status) {
        } else {
          setFeatured_post(json.data);
        }
        return json;
      })
      .catch((error) => console.error(error))
      .finally(() => {});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var emailValidation = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (subscriptionEmail === '') {
      toast.error('Please enter email address');
      return;
    } else if (!emailValidation.test(subscriptionEmail)) {
      toast.error('Please enter a valid email address');
      return;
    }
    setButtonLoading(true);
    fetch(global.api + 'newsletters_add', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: subscriptionEmail,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (!json.status) {
          setButtonLoading(false);
          toast.error(json.message);
        } else {
          setButtonLoading(false);
          toast.success(json.msg);
          setSubscriptionEmail('');
        }
        return json;
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setButtonLoading(false);
      });
  };
  return (
    <div className="sidebar">
      {popular_post.length > 0 && (
        <div className="widget rounded">
          <div className="widget-header text-center">
            <h3 className="widget-title">Popular Posts</h3>
            <img src="/images/wave.svg" className="wave" alt="wave" />
          </div>
          <div className="widget-content">
            {popular_post.slice(0, 5).map((values, index) => {
              return (
                <div className="post post-list-sm circle" key={index}>
                  <div className="thumb circle">
                    <Link href={'/singleBlogDetails/' + values.path}>
                      <div className="inner">
                        <img
                          src={global.img_link + values.upload_image}
                          alt="post-title"
                          style={{
                            height: '60px',
                            width: '60px',
                          }}
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="details clearfix">
                    <Link href={'/singleBlogDetails/' + values.path}>
                      <h6 className="post-title my-0 text-black">
                        {values.page_title}
                      </h6>
                    </Link>
                    <ul className="meta list-inline mt-1 mb-0">
                      <li className="list-inline-item">
                        {moment(values.created_at).format('MMM DD, YYYY')}
                      </li>
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      <div className="widget rounded">
        <div className="widget-header text-center">
          <h3 className="widget-title">Newsletter</h3>
          <img src="/images/wave.svg" className="wave" alt="wave" />
        </div>
        <div className="widget-content">
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <input
                className="form-control w-100 text-center"
                placeholder="Email address…"
                type="email"
                value={subscriptionEmail}
                onChange={(e) => setSubscriptionEmail(e.target.value)}
              />
            </div>
            {buttonLoading ? (
              <button className="btn btn-default btn-full disabled">
                Signing Up...
              </button>
            ) : (
              <button className="btn btn-default btn-full" type="submit">
                Sign Up
              </button>
            )}
          </form>
          <span className="newsletter-privacy text-center mt-3">
            By signing up, you agree to our Terms.
          </span>
        </div>
      </div>
      {featured_post.length > 0 && (
        <div className="widget rounded">
          <div className="widget-header text-center">
            <h3 className="widget-title">Featured Posts</h3>
            <img src="/images/wave.svg" className="wave" alt="wave" />
          </div>
          <div className="widget-content">
            <div className="post-carousel-widget">
              {featured_post.slice(0, 5).map((values, index) => {
                return (
                  <div className="post post-carousel mb-3" key={index}>
                    <div className="thumb rounded">
                      <Link
                        href={'/category/' + values.category.path}
                        className="category-badge position-absolute"
                      >
                        {values.category.name}
                      </Link>
                      <Link href={'/singleBlogDetails/' + values.path}>
                        <div className="inner">
                          <img
                            src={global.img_link + values.upload_image}
                            alt="post-title"
                            style={{
                              height: '200px',
                              width: '300px',
                            }}
                          />
                        </div>
                      </Link>
                    </div>
                    <h5 className="post-title mb-0 mt-4">
                      <Link href={'/singleBlogDetails/' + values.path}>
                        {values.page_title}
                      </Link>
                    </h5>
                    <ul className="meta list-inline mt-2 mb-0">
                      <li className="list-inline-item">
                        <Link href={'/authorDetails/' + values.author.path}>
                          {values.author.author_name}
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        {moment(values.created_at).format('MMM DD, YYYY')}
                      </li>
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
