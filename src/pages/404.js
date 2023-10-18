import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Weazy Blogs</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/fav.png" />
        {/* meta tags */}
        <meta
          name="description"
          content="Weazy Blogs is a platform that offers a diverse range of insightful and engaging blog posts. Covering various topics and interests, Weazy Blogs provides readers with valuable content, informed perspectives, and a platform for sharing knowledge on subjects spanning from technology and innovation to lifestyle, fostering intellectual growth and enriching online communities."
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
          content="https://blogs.weazy.in/images/fav.png"
        />
        <meta property="og:site_name" content="Weazy Blogs" />
        <meta
          property="og:description"
          content="Weazy Blogs is a platform that offers a diverse range of insightful and engaging blog posts. Covering various topics and interests, Weazy Blogs provides readers with valuable content, informed perspectives, and a platform for sharing knowledge on subjects spanning from technology and innovation to lifestyle, fostering intellectual growth and enriching online communities."
        />
        {/* twitter tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="https://blogs.weazy.in" />
        <meta name="twitter:creator" content="Weazy Blogs" />
        <meta name="twitter:title" content="Weazy Blogs" />
        <meta
          name="twitter:description"
          content="Weazy Blogs is a platform that offers a diverse range of insightful and engaging blog posts. Covering various topics and interests, Weazy Blogs provides readers with valuable content, informed perspectives, and a platform for sharing knowledge on subjects spanning from technology and innovation to lifestyle, fostering intellectual growth and enriching online communities."
        />
        <meta
          name="twitter:image"
          content="https://blogs.weazy.in/images/fav.png"
        />
      </Head>
      <section className="main-content">
        <div className="container-xl">
          <div className="row gy-4">
            <div className="col-lg-12 text-center text-lg-start text-white py-4">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 d-flex align-items-center justify-content-center">
                  <img
                    src="/images/notFound.svg"
                    alt="404"
                    className="img-fluid"
                  />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  <h1 className="display-1 fw-bold">Error : 404</h1>
                  <h1 className="display-1 fw-bold">Page Not Found</h1>
                  <p className="lead">
                    The page you are looking for does not exist.
                  </p>
                  <Link href="/" className="btn btn-default me-2">
                    Go Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Custom404;
