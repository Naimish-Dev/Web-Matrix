import { useEffect } from "react";
import AboutUs from "../element/aboutUs";
import Clients from "../element/clients";
import Counter from "../element/counter";
import Newsletter from "../element/newsletter";
import Features from "../element/our-features";
import Projects from "../element/projects";
import Quote from "../element/quote";
import Service from "../element/service";
import Slider1 from "../element/slider-1";
import Testimonial from "../element/testimonial";
import Footer from "../layout/footer";
import Header from "../layout/header";
import Technology from "../element/technology";
import TechnologySlider from "../component/technologySlider";
function Home() {
  useEffect(() => {
    document.querySelector("body").setAttribute("color", "color_1");
  }, []);
  return (
    <>
      <Header />
      <div className="page-content bg-white" id="top">
        <Slider1 />
        <Clients />
        <Service />
        <AboutUs />
        <Counter />
        <Features />
        <Newsletter />
        <Testimonial />
        <Quote />
      </div>
      <Footer />
    </>
  );
}

export default Home;
