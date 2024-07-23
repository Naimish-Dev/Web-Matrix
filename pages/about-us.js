import { useState } from "react";
import Header from "../layout/header";
import Footer from "../layout/footer";
import Counter from "../element/counter";
import Link from "next/link";

function AboutUs1() {
  return (
    <>
      <Header />
      <div className="page-content bg-white">
        {/* <!-- Banner  --> */}
        <div
          className="dlab-bnr-inr overlay-primary-dark"
          style={{ backgroundImage: "url(images/banner/bnr1.jpg)" }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>About us</h1>
              {/* <!-- Breadcrumb Row --> */}
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    About us
                  </li>
                </ul>
              </nav>
              {/* <!-- Breadcrumb Row End --> */}
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}

        {/* <!-- About Us --> */}
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
                    className="move-3"
                    alt="About Us Image"
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
                    About Us
                  </h6>
                  <h2 className="title">
                    How We Can Help You Achieve Your Business Goals
                  </h2>
                </div>
                <p>
                  At WebMatrix, we are committed to helping you
                  achieve your business objectives through innovative web design
                  and development solutions. Our team combines creativity with
                  technical expertise to create websites that not only look
                  great but also drive results. Whether you're looking to
                  enhance your online presence or launch a new digital product,
                  we have the skills and experience to make your vision a
                  reality.
                </p>
                <p className="m-b30">
                  Our approach is centered on understanding your unique needs
                  and delivering tailored solutions that exceed your
                  expectations. From strategic planning to execution, we are
                  here to support you every step of the way.
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul className="list-arrow primary">
                      <li>
                        Customized web design solutions to fit your business
                        needs.
                      </li>
                      <li>Expert development for seamless user experiences.</li>
                      <li>
                        Data-driven strategies to boost your online presence.
                      </li>
                      <li>
                        Ongoing support and maintenance for long-term success.
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul className="list-arrow primary">
                      <li>
                        Innovative approaches to solving your web challenges.
                      </li>
                      <li>
                        Collaborative process to ensure your goals are met.
                      </li>
                      <li>
                        Focus on delivering measurable results and growth.
                      </li>
                      <li>Passionate team dedicated to your success.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Counter --> */}
        <Counter />

        {/* <!-- About Us --> */}
        <section className="content-inner-2">
          <div className="container">
            <div className="row align-items-center">
              <div
                className="col-lg-6 wow fadeInLeft"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
              >
                <div className="section-head style-1">
                  <h6 className="sub-title bgl-primary m-b20 text-primary">
                    Support
                  </h6>
                  <h2 className="title m-b15">
                    Discover How Our Team Can Help You
                  </h2>
                  <p>
                    We are passionate about helping you succeed. Through
                    dedicated efforts and expert strategies, we work to deliver
                    exceptional results for your business. Learn more about our
                    process and team through this visual representation of our
                    commitment to your success.
                  </p>
                </div>
                <div className="row">
                  <div className="col-lg-12 col-md-6">
                    <div className="icon-bx-wraper style-6 left p-0 m-b30 icon-up">
                      <div className="icon-bx-sm bg-white">
                        <a
                          href="javascript:void(0);"
                          className="icon-cell text-primary"
                        >
                          <i className="flaticon-chat"></i>
                        </a>
                      </div>
                      <div className="icon-content">
                        <h4 className="dlab-title m-b5">24/7 Online Support</h4>
                        <p>
                          Our dedicated team provides round-the-clock support to
                          assist you with any questions or issues you might
                          have.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-6">
                    <div className="icon-bx-wraper style-6 left p-0 m-b30 icon-up">
                      <div className="icon-bx-sm bg-white">
                        <a
                          href="javascript:void(0);"
                          className="icon-cell text-primary"
                        >
                          <i className="flaticon-bullhorn"></i>
                        </a>
                      </div>
                      <div className="icon-content">
                        <h4 className="dlab-title m-b5">
                          Global Marketing Strategies
                        </h4>
                        <p>
                          We develop and implement effective marketing
                          strategies to help you reach a global audience and
                          expand your market presence.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 m-b30 wow fadeInRight"
                data-wow-duration="2s"
                data-wow-delay="0.4s"
              >
                <div className="image-bx style-3">
                  <img
                    src="images/about/img2.png"
                    alt="Our Team Helping You Achieve Your Goals"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs1;
