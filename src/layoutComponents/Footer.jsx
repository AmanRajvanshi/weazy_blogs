import moment from 'moment';

function Footer() {
  return (
    <footer>
      <div className="container-xl">
        <div className="footer-inner">
          <div className="row d-flex align-items-center gy-4">
            <div className="col-md-6">
              <span className="copyright">
                © 2022 - {moment().format('YYYY')} Weazy Infotech. All Rights
                Reserved.
              </span>
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
