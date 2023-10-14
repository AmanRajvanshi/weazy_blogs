import dynamic from 'next/dynamic';
import Sidebar from '../common/Sidebar';
import Singlepost from '../common/Singlepost';
const OwlCarousel = dynamic(import('react-owl-carousel'), {
  ssr: false,
});

const props = {
  loop: true,
  margin: 10,
  nav: false,
  autoplay: false,
  autoplayTimeout: 3500,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 2,
    },
  },
};

function HomePageContent({ data }) {
  return (
    <>
      <section className="main-content">
        <div className="container-xl">
          <div className="row gy-4">
            {/* <Hero data={data} />
            <div className="col-lg-8">
              {data.length > 0 &&
                data?.map((item, index) => {
                  if (index == 3) {
                    return (
                      <>
                        <div className="section-header">
                          <h3 className="section-title">Editor’s Pick</h3>
                          <img
                            src="images/wave.svg"
                            className="wave"
                            alt="wave"
                          />
                        </div>
                        <div className="padding-30 rounded bordered">
                          <div className="row gy-5">
                            <div className="col-sm-6">
                              <div className="post">
                                <div className="thumb rounded">
                                  <a
                                    href="category.html"
                                    className="category-badge position-absolute"
                                  >
                                    Lifestyle
                                  </a>
                                  <span className="post-format">
                                    <i className="icon-picture" />
                                  </span>
                                  <a href="blog-single.html">
                                    <div className="inner">
                                      <img
                                        src="images/posts/editor-lg.jpg"
                                        alt="post-title"
                                      />
                                    </div>
                                  </a>
                                </div>
                                <ul className="meta list-inline mt-4 mb-0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <img
                                        src="images/other/author-sm.png"
                                        className="author"
                                        alt="author"
                                      />
                                      Katen Doe
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    29 March 2021
                                  </li>
                                </ul>
                                <h5 className="post-title mb-3 mt-3">
                                  <a href="blog-single.html">
                                    15 Unheard Ways To Achieve Greater Walker
                                  </a>
                                </h5>
                                <p className="excerpt mb-0">
                                  A wonderful serenity has taken possession of
                                  my entire soul, like these sweet mornings of
                                  spring which I enjoy
                                </p>
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="post post-list-sm square">
                                <div className="thumb rounded">
                                  <a href="blog-single.html">
                                    <div className="inner">
                                      <img
                                        src="images/posts/editor-sm-1.jpg"
                                        alt="post-title"
                                      />
                                    </div>
                                  </a>
                                </div>
                                <div className="details clearfix">
                                  <h6 className="post-title my-0">
                                    <a href="blog-single.html">
                                      3 Easy Ways To Make Your iPhone Faster
                                    </a>
                                  </h6>
                                  <ul className="meta list-inline mt-1 mb-0">
                                    <li className="list-inline-item">
                                      29 March 2021
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="post post-list-sm square">
                                <div className="thumb rounded">
                                  <a href="blog-single.html">
                                    <div className="inner">
                                      <img
                                        src="images/posts/editor-sm-2.jpg"
                                        alt="post-title"
                                      />
                                    </div>
                                  </a>
                                </div>
                                <div className="details clearfix">
                                  <h6 className="post-title my-0">
                                    <a href="blog-single.html">
                                      An Incredibly Easy Method That Works For
                                      All
                                    </a>
                                  </h6>
                                  <ul className="meta list-inline mt-1 mb-0">
                                    <li className="list-inline-item">
                                      29 March 2021
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="post post-list-sm square">
                                <div className="thumb rounded">
                                  <a href="blog-single.html">
                                    <div className="inner">
                                      <img
                                        src="images/posts/editor-sm-3.jpg"
                                        alt="post-title"
                                      />
                                    </div>
                                  </a>
                                </div>
                                <div className="details clearfix">
                                  <h6 className="post-title my-0">
                                    <a href="blog-single.html">
                                      10 Ways To Immediately Start Selling
                                      Furniture
                                    </a>
                                  </h6>
                                  <ul className="meta list-inline mt-1 mb-0">
                                    <li className="list-inline-item">
                                      29 March 2021
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="post post-list-sm square">
                                <div className="thumb rounded">
                                  <a href="blog-single.html">
                                    <div className="inner">
                                      <img
                                        src="images/posts/editor-sm-4.jpg"
                                        alt="post-title"
                                      />
                                    </div>
                                  </a>
                                </div>
                                <div className="details clearfix">
                                  <h6 className="post-title my-0">
                                    <a href="blog-single.html">
                                      15 Unheard Ways To Achieve Greater Walker
                                    </a>
                                  </h6>
                                  <ul className="meta list-inline mt-1 mb-0">
                                    <li className="list-inline-item">
                                      29 March 2021
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  } else if (index == 4) {
                    return (
                      <>
                        <div className="section-header">
                          <h3 className="section-title">Trending</h3>
                          <img
                            src="images/wave.svg"
                            className="wave"
                            alt="wave"
                          />
                        </div>
                        <div className="padding-30 rounded bordered">
                          <div className="row gy-5">
                            <div className="col-sm-6">
                              <div className="post">
                                <div className="thumb rounded">
                                  <a
                                    href="category.html"
                                    className="category-badge position-absolute"
                                  >
                                    Culture
                                  </a>
                                  <span className="post-format">
                                    <i className="icon-picture" />
                                  </span>
                                  <a href="blog-single.html">
                                    <div className="inner">
                                      <img
                                        src="images/posts/trending-lg-1.jpg"
                                        alt="post-title"
                                      />
                                    </div>
                                  </a>
                                </div>
                                <ul className="meta list-inline mt-4 mb-0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <img
                                        src="images/other/author-sm.png"
                                        className="author"
                                        alt="author"
                                      />
                                      Katen Doe
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    29 March 2021
                                  </li>
                                </ul>
                                <h5 className="post-title mb-3 mt-3">
                                  <a href="blog-single.html">
                                    Facts About Business That Will Help You
                                    Success
                                  </a>
                                </h5>
                                <p className="excerpt mb-0">
                                  A wonderful serenity has taken possession of
                                  my entire soul, like these sweet mornings of
                                  spring which I enjoy
                                </p>
                              </div>
                              <div className="post post-list-sm square before-seperator">
                                <div className="thumb rounded">
                                  <a href="blog-single.html">
                                    <div className="inner">
                                      <img
                                        src="images/posts/trending-sm-1.jpg"
                                        alt="post-title"
                                      />
                                    </div>
                                  </a>
                                </div>
                                <div className="details clearfix">
                                  <h6 className="post-title my-0">
                                    <a href="blog-single.html">
                                      3 Easy Ways To Make Your iPhone Faster
                                    </a>
                                  </h6>
                                  <ul className="meta list-inline mt-1 mb-0">
                                    <li className="list-inline-item">
                                      29 March 2021
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="post post-list-sm square before-seperator">
                                <div className="thumb rounded">
                                  <a href="blog-single.html">
                                    <div className="inner">
                                      <img
                                        src="images/posts/trending-sm-2.jpg"
                                        alt="post-title"
                                      />
                                    </div>
                                  </a>
                                </div>
                                <div className="details clearfix">
                                  <h6 className="post-title my-0">
                                    <a href="blog-single.html">
                                      An Incredibly Easy Method That Works For
                                      All
                                    </a>
                                  </h6>
                                  <ul className="meta list-inline mt-1 mb-0">
                                    <li className="list-inline-item">
                                      29 March 2021
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="post">
                                <div className="thumb rounded">
                                  <a
                                    href="category.html"
                                    className="category-badge position-absolute"
                                  >
                                    Inspiration
                                  </a>
                                  <span className="post-format">
                                    <i className="icon-earphones" />
                                  </span>
                                  <a href="blog-single.html">
                                    <div className="inner">
                                      <img
                                        src="images/posts/trending-lg-2.jpg"
                                        alt="post-title"
                                      />
                                    </div>
                                  </a>
                                </div>
                                <ul className="meta list-inline mt-4 mb-0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <img
                                        src="images/other/author-sm.png"
                                        className="author"
                                        alt="author"
                                      />
                                      Katen Doe
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    29 March 2021
                                  </li>
                                </ul>
                                <h5 className="post-title mb-3 mt-3">
                                  <a href="blog-single.html">
                                    5 Easy Ways You Can Turn Future Into Success
                                  </a>
                                </h5>
                                <p className="excerpt mb-0">
                                  A wonderful serenity has taken possession of
                                  my entire soul, like these sweet mornings of
                                  spring which I enjoy
                                </p>
                              </div>
                              <div className="post post-list-sm square before-seperator">
                                <div className="thumb rounded">
                                  <a href="blog-single.html">
                                    <div className="inner">
                                      <img
                                        src="images/posts/trending-sm-3.jpg"
                                        alt="post-title"
                                      />
                                    </div>
                                  </a>
                                </div>
                                <div className="details clearfix">
                                  <h6 className="post-title my-0">
                                    <a href="blog-single.html">
                                      Here Are 8 Ways To Success Faster
                                    </a>
                                  </h6>
                                  <ul className="meta list-inline mt-1 mb-0">
                                    <li className="list-inline-item">
                                      29 March 2021
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="post post-list-sm square before-seperator">
                                <div className="thumb rounded">
                                  <a href="blog-single.html">
                                    <div className="inner">
                                      <img
                                        src="images/posts/trending-sm-4.jpg"
                                        alt="post-title"
                                      />
                                    </div>
                                  </a>
                                </div>
                                <div className="details clearfix">
                                  <h6 className="post-title my-0">
                                    <a href="blog-single.html">
                                      Master The Art Of Nature With These 7 Tips
                                    </a>
                                  </h6>
                                  <ul className="meta list-inline mt-1 mb-0">
                                    <li className="list-inline-item">
                                      29 March 2021
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  } else if (index == 5) {
                    return (
                      <>
                        <div className="section-header">
                          <h3 className="section-title">Inspiration</h3>
                          <img
                            src="images/wave.svg"
                            className="wave"
                            alt="wave"
                          />
                        </div>
                        <div className="row ">
                          <OwlCarousel className="owl-theme" {...props}>
                            <div className="post post-over-content">
                              <div className="details clearfix">
                                <a
                                  href="category.html"
                                  className="category-badge"
                                >
                                  Inspiration
                                </a>
                                <h4 className="post-title">
                                  <a href="blog-single.html">
                                    Want To Have A More Appealing Tattoo?
                                  </a>
                                </h4>
                                <ul className="meta list-inline mb-0">
                                  <li className="list-inline-item">
                                    <a href="#">Katen Doe</a>
                                  </li>
                                  <li className="list-inline-item">
                                    29 March 2021
                                  </li>
                                </ul>
                              </div>
                              <a href="blog-single.html">
                                <div className="thumb rounded">
                                  <div className="inner">
                                    <img
                                      src="images/posts/inspiration-1.jpg"
                                      alt="thumb"
                                    />
                                  </div>
                                </div>
                              </a>
                            </div>
                            <div className="post post-over-content">
                              <div className="details clearfix">
                                <a
                                  href="category.html"
                                  className="category-badge"
                                >
                                  Inspiration
                                </a>
                                <h4 className="post-title">
                                  <a href="blog-single.html">
                                    Feel Like A Pro With The Help Of These 7
                                    Tips
                                  </a>
                                </h4>
                                <ul className="meta list-inline mb-0">
                                  <li className="list-inline-item">
                                    <a href="#">Katen Doe</a>
                                  </li>
                                  <li className="list-inline-item">
                                    29 March 2021
                                  </li>
                                </ul>
                              </div>
                              <a href="blog-single.html">
                                <div className="thumb rounded">
                                  <div className="inner">
                                    <img
                                      src="images/posts/inspiration-2.jpg"
                                      alt="thumb"
                                    />
                                  </div>
                                </div>
                              </a>
                            </div>
                            <div className="post post-over-content">
                              <div className="details clearfix">
                                <a
                                  href="category.html"
                                  className="category-badge"
                                >
                                  Inspiration
                                </a>
                                <h4 className="post-title">
                                  <a href="blog-single.html">
                                    Your Light Is About To Stop Being Relevant
                                  </a>
                                </h4>
                                <ul className="meta list-inline mb-0">
                                  <li className="list-inline-item">
                                    <a href="#">Katen Doe</a>
                                  </li>
                                  <li className="list-inline-item">
                                    29 March 2021
                                  </li>
                                </ul>
                              </div>
                              <a href="blog-single.html">
                                <div className="thumb rounded">
                                  <div className="inner">
                                    <img
                                      src="images/posts/inspiration-3.jpg"
                                      alt="thumb"
                                    />
                                  </div>
                                </div>
                              </a>
                            </div>
                          </OwlCarousel>
                        </div>
                      </>
                    );
                  } else if (index == 6) {
                    return (
                      <>
                        <div className="section-header">
                          <h3 className="section-title">Latest Posts</h3>
                          <img
                            src="images/wave.svg"
                            className="wave"
                            alt="wave"
                          />
                        </div>
                        <div className="padding-30 rounded bordered">
                          <div className="row">
                            <div className="col-md-12 col-sm-6">
                              <div className="post post-list clearfix">
                                <div className="thumb rounded">
                                  <span className="post-format-sm">
                                    <i className="icon-picture" />
                                  </span>
                                  <a href="blog-single.html">
                                    <div className="inner">
                                      <img
                                        src="images/posts/latest-sm-1.jpg"
                                        alt="post-title"
                                      />
                                    </div>
                                  </a>
                                </div>
                                <div className="details">
                                  <ul className="meta list-inline mb-3">
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <img
                                          src="images/other/author-sm.png"
                                          className="author"
                                          alt="author"
                                        />
                                        Katen Doe
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">Trending</a>
                                    </li>
                                    <li className="list-inline-item">
                                      29 March 2021
                                    </li>
                                  </ul>
                                  <h5 className="post-title">
                                    <a href="blog-single.html">
                                      The Next 60 Things To Immediately Do About
                                      Building
                                    </a>
                                  </h5>
                                  <p className="excerpt mb-0">
                                    A wonderful serenity has taken possession of
                                    my entire soul, like these sweet mornings
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12 col-sm-6">
                              <div className="post post-list clearfix">
                                <div className="thumb rounded">
                                  <a href="blog-single.html">
                                    <div className="inner">
                                      <img
                                        src="images/posts/latest-sm-2.jpg"
                                        alt="post-title"
                                      />
                                    </div>
                                  </a>
                                </div>
                                <div className="details">
                                  <ul className="meta list-inline mb-3">
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <img
                                          src="images/other/author-sm.png"
                                          className="author"
                                          alt="author"
                                        />
                                        Katen Doe
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">Lifestyle</a>
                                    </li>
                                    <li className="list-inline-item">
                                      29 March 2021
                                    </li>
                                  </ul>
                                  <h5 className="post-title">
                                    <a href="blog-single.html">
                                      Master The Art Of Nature With These 7 Tips
                                    </a>
                                  </h5>
                                  <p className="excerpt mb-0">
                                    A wonderful serenity has taken possession of
                                    my entire soul, like these sweet mornings
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12 col-sm-6">
                              <div className="post post-list clearfix">
                                <div className="thumb rounded">
                                  <span className="post-format-sm">
                                    <i className="icon-camrecorder" />
                                  </span>
                                  <a href="blog-single.html">
                                    <div className="inner">
                                      <img
                                        src="images/posts/latest-sm-3.jpg"
                                        alt="post-title"
                                      />
                                    </div>
                                  </a>
                                </div>
                                <div className="details">
                                  <ul className="meta list-inline mb-3">
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <img
                                          src="images/other/author-sm.png"
                                          className="author"
                                          alt="author"
                                        />
                                        Katen Doe
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">Fashion</a>
                                    </li>
                                    <li className="list-inline-item">
                                      29 March 2021
                                    </li>
                                  </ul>
                                  <h5 className="post-title">
                                    <a href="blog-single.html">
                                      Facts About Business That Will Help You
                                      Success
                                    </a>
                                  </h5>
                                  <p className="excerpt mb-0">
                                    A wonderful serenity has taken possession of
                                    my entire soul, like these sweet mornings
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12 col-sm-6">
                              <div className="post post-list clearfix">
                                <div className="thumb rounded">
                                  <a href="blog-single.html">
                                    <div className="inner">
                                      <img
                                        src="images/posts/latest-sm-4.jpg"
                                        alt="post-title"
                                      />
                                    </div>
                                  </a>
                                </div>
                                <div className="details">
                                  <ul className="meta list-inline mb-3">
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <img
                                          src="images/other/author-sm.png"
                                          className="author"
                                          alt="author"
                                        />
                                        Katen Doe
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">Politic</a>
                                    </li>
                                    <li className="list-inline-item">
                                      29 March 2021
                                    </li>
                                  </ul>
                                  <h5 className="post-title">
                                    <a href="blog-single.html">
                                      Your Light Is About To Stop Being Relevant
                                    </a>
                                  </h5>
                                  <p className="excerpt mb-0">
                                    A wonderful serenity has taken possession of
                                    my entire soul, like these sweet mornings
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  }
                })}
            </div> */}
            {data.map((values) => {
              return <Singlepost item={values} />;
            })}
            <div className="col-lg-4">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePageContent;
