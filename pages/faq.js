import Accordion1 from "../element/accordion";
import Footer from "../layout/footer";
import Header from "../layout/header";
import Link from "next/link";

function FAQ1() {
  return (
    <>
      <Header />
      <div className="page-content bg-white">
        <div
          className="dlab-bnr-inr overlay-primary-dark"
          style={{ backgroundImage: "url(images/banner/bnr1.jpg)" }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>Faq</h1>
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Faq
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}

        {/* <!-- Faq --> */}
        <section
          className="content-inner"
          style={{ backgroundImage: "url(images/background/bg1.png)" }}
        >
          <div className="container">
            <div className="row">
              <div
                className="col-lg-8 m-auto wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
              >
                <Accordion1 />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default FAQ1;
