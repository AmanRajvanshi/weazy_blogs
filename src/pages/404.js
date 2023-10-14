import Link from 'next/link';
import React from 'react';

function Custom404() {
  return (
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
  );
}

export default Custom404;
