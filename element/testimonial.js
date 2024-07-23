import TestimonialSlider from "./../component/testimonialSlider";

function Testimonial() {
  return (
    <>
      <section
        className="content-inner bg-primary"
        style={{ backgroundImage: "url(images/background/bg3.png)" }}
      >
        <div className="px-xl-5 px-md-4 px-3">
          <div className="row testimonials-wraper-1">
            <div className="col-lg-9">
              <TestimonialSlider />
            </div>
            <div
              className="col-lg-3 wow fadeInRight"
              data-wow-duration="2s"
              data-wow-delay="0.8s"
            >
              <div className="section-head style-1 text-white p-t15">
                <h6 className="sub-title bgl-light m-b20">What Clients Say</h6>
                <h2 className="title m-b10">We’d Love to Hear From You!</h2>
                <p>
                  Have questions or want to start a project? Reach out to us and
                  let’s discuss how we can work together to achieve your goals.
                  We’re here to help with all your web design and development
                  needs.
                </p>
                <a href="/contact-us" className="btn btn-light rounded-xl mt-3">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonial;
