import { useState } from "react";

function Accordion1() {
  const [activeDefault, setActiveDefault] = useState(0);
  const defaultAccordion = [
    {
      title: "What web development services do you offer?",
      text: "We offer a comprehensive range of web development services, including website design, front-end and back-end development, e-commerce solutions, CMS integration, and custom web applications.",
      bg: "primary",
    },
    {
      title: "How long does it take to develop a website?",
      text: "The timeline for website development depends on the complexity and requirements of your project. Typically, a basic website can be completed in 4-6 weeks, while more complex projects may take longer.",
      bg: "info",
    },
    {
      title: "Do you provide ongoing website maintenance and support?",
      text: "Yes, we offer ongoing website maintenance and support packages to ensure your site remains up-to-date, secure, and performs optimally.",
      bg: "success",
    },
    {
      title: "Can you redesign my existing website?",
      text: "Absolutely! We can give your existing website a fresh and modern look, improve its performance, and ensure it meets the latest web standards and best practices.",
      bg: "success",
    },
    {
      title: "Will my website be mobile-friendly and responsive?",
      text: "Yes, all the websites we develop are fully responsive and optimized for all devices, ensuring a seamless user experience across desktops, tablets, and smartphones.",
      bg: "success",
    },
    {
      title: "How much does a website cost?",
      text: "The cost of a website varies based on its complexity and specific requirements. We provide customized quotes after discussing your project details. Contact us for a free consultation and estimate.",
      bg: "success",
    },
    {
      title: "Do you offer SEO services?",
      text: "Yes, we provide SEO services to help improve your website's visibility in search engine results, driving more traffic and potential customers to your site.",
      bg: "success",
    },
    {
      title: "Can you integrate third-party services and APIs into my website?",
      text: "Yes, we have experience integrating various third-party services and APIs, such as payment gateways, social media platforms, and marketing tools, to enhance your website's functionality.",
      bg: "success",
    },
  ];

  return (
    <>
      <div className="dlab-accordion" id="accordionFaq" defaultActiveKey="0">
        {defaultAccordion.map((d, i) => (
          <div className="card" key={i}>
            <div
              eventKey={`${i}`}
              className="card-header"
              onClick={() => setActiveDefault(activeDefault === i ? -1 : i)}
            >
              <h5 className="dlab-title">
                <a
                  href="javascript:void(0);"
                  className={`${activeDefault === i ? "" : "collapsed"}`}
                  onClick={() => setActiveDefault(activeDefault === i ? -1 : i)}
                >
                  {" "}
                  {d.title}
                </a>
              </h5>
            </div>

            <div
              className={`${
                activeDefault === i ? "collapsed show" : "collapsed"
              }`}
              eventKey={`${i}`}
              onClick={() => setActiveDefault(activeDefault === i ? -1 : i)}
            >
              <div className="card-body">
                <p className="m-b0">{d.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Accordion1;
