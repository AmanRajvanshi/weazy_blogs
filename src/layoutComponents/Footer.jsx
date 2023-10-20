import moment from 'moment';

function Footer() {
  return (
    <footer>
      <div className="container-xl">
        <div className="footer-inner">
          <div className="row d-flex align-items-center gy-4">
            <div className="col-md-6">
              <span className="copyright">
                © 2022 - {moment().format('YYYY')} Weazy Infotech Pvt. Ltd. All
                Rights Reserved.
              </span>
            </div>
            <div className="col-md-6 text-end">
              <ul className="social-icons list-unstyled list-inline mb-0">
                <li className="list-inline-item">
                  <a href="https://www.facebook.com/weazyplus" target="_blank">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://www.instagram.com/weazyplus/"
                    target="_blank"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://www.linkedin.com/company/weazyplus/"
                    target="_blank"
                  >
                    <i class="fab fa-linkedin-in" />
                  </a>
                </li>
              </ul>
            </div>
            {/* <div className="col-md-6">
              <a href="#" id="return-to-top" className="float-md-end">
                <i className="icon-arrow-up" />
                Back to Top
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
