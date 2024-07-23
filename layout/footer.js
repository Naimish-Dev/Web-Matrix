import Link from "next/link";

function Footer() {
  return (
    <>
      {/* <!-- Footer --> */}
      <footer
        className="site-footer style-1"
        id="footer"
        style={{ backgroundImage: "url(images/background/bg10.png)" }}
      >
        <div className="footer-top">
          <div className="container">
            <div
              className="footer-info wow fadeIn"
              data-wow-duration="2s"
              data-wow-delay="0.8s"
            >
              <div className="row align-items-center">
                <div className="col-xl-6 col-md-4">
                  <div className="footer-logo">
                    <Link href="/">WebMatrix</Link>
                  </div>
                </div>
                <div className="col-xl-3 col-md-4 col-sm-12"></div>
                <div className="col-xl-3 col-md-4 col-sm-12">
                  <div className="icon-bx-wraper left m-b10">
                    <div className="icon-lg">
                      <a href="javascript:void(0);" className="icon-cell">
                        <i className="flaticon-email"></i>
                      </a>
                    </div>
                    <div className="icon-content">
                      <p>
                        +91 987-654-3210
                        <br />
                        info@webmatrix.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="col-xl-4 col-lg-4 col-sm-6 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
              >
                <div className="widget widget_about">
                  <h5 className="footer-title">About Us</h5>
                  <p>
                    With years of experience in web design and development, our
                    team brings expertise and creativity to every project. We
                    work closely with you to create stunning, user-friendly
                    websites that achieve your goals. Find out more about our
                    approach and services.
                  </p>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-4 col-sm-6 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.4s"
              >
                <div className="widget widget_services">
                  <h5 className="footer-title">Our links</h5>
                  <ul>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="about-us">About Us</Link>
                    </li>
                    <li>
                      <Link href="faq">Faq</Link>
                    </li>
                    <li>
                      <Link href="/services">Service</Link>
                    </li>
                    <li>
                      <Link href="/contact-us">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-4 col-sm-6 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.6s"
              >
                <div className="widget widget_services">
                  <h5 className="footer-title">Our Services</h5>
                  <ul>
                    <li>
                      <a href="javascript:void(0);">Web Designing</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Web Development</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Web Application</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Web Solution</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Seo </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- footer bottom part --> */}
        <div
          className="footer-bottom wow fadeIn"
          data-wow-duration="2s"
          data-wow-delay="0.2s"
        >
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center">
                <span className="copyright-text">
                  Copyright © 2024 WebMatrix . All rights reserved.
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- Footer End --> */}
    </>
  );
}

export default Footer;
