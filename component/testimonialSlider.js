import { useState } from "react";
import Slider from "react-slick";

function TestimonialSlider() {
  const [asd, setAsd] = useState();
  const settings = {
    dots: true,
    arrows: false,
    centerMode: true,
    slidesToShow: 3,
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: false,
        },
      },
    ],
  };
  const renderArrows = () => {
    return (
      <div className="owl-nav">
        <div className="owl-prev" onClick={() => asd.slickPrev()}>
          <i className="fa fa-arrow-left"></i>
        </div>
        <div className="owl-next" onClick={() => asd.slickNext()}>
          <i className="fa fa-arrow-right"></i>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="testimonials-carousel1 owl-carousel owl-theme owl-btn-2 owl-btn-white owl-btn-center">
        <Slider ref={(c) => setAsd(c)} {...settings}>
          <div
            className="item wow fadeInUp"
            data-wow-duration="2s"
            data-wow-delay="0.2s"
          >
            <div className="testimonial-1">
              <div className="testimonial-text">
                <p>
                  "Working with WebMatrix has been a game-changer for our online
                  presence. Their innovative web design and development skills
                  helped us revamp our site into a sleek, user-friendly platform
                  that has increased our engagement and client satisfaction.
                  Highly recommend!"
                </p>
              </div>
              <div className="testimonial-detail">
                <div className="clearfix">
                  <strong className="testimonial-name">Sarah Mitchell</strong>
                  <span className="testimonial-position">
                    GreenLeaf Ventures
                  </span>
                  <ul className="star-rating">
                    <li>
                      <i className="fa fa-star text-warning"></i>
                    </li>
                    <li>
                      <i className="fa fa-star text-warning"></i>
                    </li>
                    <li>
                      <i className="fa fa-star text-warning"></i>
                    </li>
                    <li>
                      <i className="fa fa-star text-warning"></i>
                    </li>
                    <li>
                      <i className="fa fa-star text-warning"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            className="item wow fadeInUp"
            data-wow-duration="2s"
            data-wow-delay="0.4s"
          >
            <div className="testimonial-1">
              <div className="testimonial-text">
                <p>
                  "The team at WebMatrix exceeded our expectations. Their
                  attention to detail and commitment to delivering a
                  high-quality product was evident throughout the project. Our
                  new website looks fantastic and works flawlessly. Thanks for a
                  job well done!"
                </p>
              </div>
              <div className="testimonial-detail">
                <div className="clearfix">
                  <strong className="testimonial-name">David Roberts</strong>
                  <span className="testimonial-position">
                    TechFusion Solutions
                  </span>
                  <ul className="star-rating">
                    <li>
                      <i className="fa fa-star text-warning"></i>
                    </li>
                    <li>
                      <i className="fa fa-star text-warning"></i>
                    </li>
                    <li>
                      <i className="fa fa-star text-warning"></i>
                    </li>
                    <li>
                      <i className="fa fa-star text-warning"></i>
                    </li>
                    <li>
                      <i className="fa fa-star text-warning"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            className="item wow fadeInUp"
            data-wow-duration="2s"
            data-wow-delay="0.6s"
          >
            <div className="testimonial-1">
              <div className="testimonial-text">
                <p>
                  "We are thrilled with the website designed by WebMatrix. They
                  understood our vision and brought it to life with creativity
                  and professionalism. The process was smooth, and the results
                  speak for themselves. We're already planning our next project
                  with them!"
                </p>
              </div>
              <div className="testimonial-detail">
                <div className="clearfix">
                  <strong className="testimonial-name">Emma Johnson</strong>
                  <span className="testimonial-position">
                    Bright Horizons Agency
                  </span>
                  <ul className="star-rating">
                    <li>
                      <i className="fa fa-star text-warning"></i>
                    </li>
                    <li>
                      <i className="fa fa-star text-warning"></i>
                    </li>
                    <li>
                      <i className="fa fa-star text-warning"></i>
                    </li>
                    <li>
                      <i className="fa fa-star text-warning"></i>
                    </li>
                    <li>
                      <i className="fa fa-star text-warning"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            className="item wow fadeInUp"
            data-wow-duration="2s"
            data-wow-delay="0.6s"
          >
            <div className="testimonial-1">
              <div className="testimonial-text">
                <p>
                  "From start to finish, WebMatrix provided exceptional service.
                  Their expertise in web development and design transformed our
                  outdated site into a modern, functional, and visually
                  appealing platform. We look forward to working with them
                  again!"
                </p>
              </div>
              <div className="testimonial-detail">
                <div className="clearfix">
                  <strong className="testimonial-name">Mark Thompson</strong>
                  <span className="testimonial-position">Apex Innovations</span>
                  <ul className="star-rating">
                    <li>
                      <i className="fa fa-star text-warning"></i>
                    </li>
                    <li>
                      <i className="fa fa-star text-warning"></i>
                    </li>
                    <li>
                      <i className="fa fa-star text-warning"></i>
                    </li>
                    <li>
                      <i className="fa fa-star text-warning"></i>
                    </li>
                    <li>
                      <i className="fa fa-star text-warning"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Slider>
        {renderArrows()}
      </div>
    </>
  );
}

export default TestimonialSlider;
