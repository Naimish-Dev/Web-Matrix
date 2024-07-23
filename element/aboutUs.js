import Link from "next/link";

function AboutUs() {
  return (
    <>
      <section className="content-inner">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 m-b30 wow fadeInLeft"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              <div className="dz-media">
                <img
                  src="images/about/img4.png"
                  className="move-1"
                  alt="Our Services"
                />
              </div>
            </div>
            <div
              className="col-lg-6 m-b30 wow fadeInRight"
              data-wow-duration="2s"
              data-wow-delay="0.4s"
            >
              <div className="section-head style-1 mb-4">
                <h6 className="sub-title bgl-primary m-b20 text-primary">
                  Our Services
                </h6>
                <h2 className="title">
                  Discover How Our Services Can Propel Your Business Forward
                </h2>
              </div>
              <p>
                We offer a range of services designed to help you achieve your
                business objectives. From innovative web design to robust
                development and comprehensive web solutions, we are dedicated to
                delivering results that make a difference.
              </p>
              <p className="m-b30">
                Our team of experts is here to understand your unique needs and
                provide tailored strategies to ensure your success. Explore our
                services to find out how we can work together to reach your
                goals.
              </p>

              <Link href="services">
                <a className="btn btn-link d-inline-flex align-items-center">
                  <i className="fa fa-angle-right m-r10"></i>Learn More
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
