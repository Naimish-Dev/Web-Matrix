import Footer from "../layout/footer";
import Header from "../layout/header";
import { useState } from "react";
import AllServices from "../element/all-services";
import Testimonial from "../element/testimonial";
import Link from "next/link";
import Quote from "../element/quote";
import Features from "../element/our-features";

function Services1() {
  const [open, setOpen] = useState("p2");
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
              <h1>Services</h1>
              {/* <!-- Breadcrumb Row --> */}
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Services
                  </li>
                </ul>
              </nav>
              {/* <!-- Breadcrumb Row End --> */}
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}

        {/* <!-- Services --> */}
        <AllServices />

        {/* <!-- Fetures --> */}
        <Features />
      </div>
      <Footer />
    </>
  );
}

export default Services1;
