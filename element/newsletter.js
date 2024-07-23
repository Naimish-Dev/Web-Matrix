function Newsletter() {
  return (
    <>
      <section
        className="content-inner-3 bg-primary"
        style={{
          backgroundImage: "url(images/background/bg13.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-4 col-md-5 wow fadeInLeft"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              <div className="dlab-media m-b30">
                <img
                  src="images/about/img9.png"
                  className="move-2"
                  alt="Contact Us"
                />
              </div>
            </div>
            <div
              className="col-lg-8 col-md-7 wow fadeInRight"
              data-wow-duration="2s"
              data-wow-delay="0.4s"
            >
              <div className="section-head style-1 text-white">
                <h6 className="sub-title bgl-light m-b20">Contact Us</h6>
                <h2 className="title m-b15">
                  Get in Touch With Us for Any Inquiries or Support
                </h2>
                <p>
                  If you have any questions or need assistance, feel free to
                  reach out to us. We’re here to help you with your web design
                  and development needs, and we look forward to hearing from
                  you!
                </p>
              </div>
              <div className="dlab-subscribe style-2 max-w500">
                <form
                  className="dzSubscribe"
                  action="script/mailchamp.php"
                  method="post"
                >
                  <div className="dzSubscribeMsg"></div>
                  <div className="form-group">
                    <div className="input-group">
                      <input
                        name="dzEmail"
                        required="required"
                        type="email"
                        className="form-control"
                        placeholder="Your Email Address"
                      />
                      <div className="input-group-addon">
                        <button
                          name="submit"
                          value="Submit"
                          type="submit"
                          className="btn rounded-xl shadow btn-primary"
                        >
                          Contact Us
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Newsletter;
