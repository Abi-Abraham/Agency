import React, { useEffect } from "react";
import { ReactComponent as Insta } from "../assets/icons/insta.svg";
import { ReactComponent as Fb } from "../assets/icons/fb.svg";
import { ReactComponent as Linkedin } from "../assets/icons/linkedin.svg";
import ContactForm from "../components/ContactForm";
import { gsap } from "gsap";
let contactTl = gsap.timeline();

function Contact() {
  useEffect(() => {
    document.title = "H E R M I T Z. | Contact";
    contactTl
      .to(".contact-title-tag div", {
        duration: 1.5,
        delay: 2,
        y: 0,
        ease: "power4.out",
        stagger: 0.15,
      })
      .to(".contact-form", {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: "power4.out",
      });
  }, []);
  return (
    <>
      <section className="contact-us">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h2 className="contact-title">
                <div className="contact-title-inner">
                  <div className="contact-title-tag">
                    <div>Say</div>
                  </div>
                  <div className="contact-title-tag">
                    <div>Hello</div>
                  </div>
                </div>
              </h2>
            </div>
            <div className="col-md-8">
              <div className="contact-form">
                <h5 className="sub-title">Now, About your project...</h5>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
        <div className="social-side-icons">
          <div className="side-icons">
            <div className="icon">
              <a href="https://www.instagram.com/hermitzmedia/">
                <Insta />
              </a>
            </div>
            <div className="icon">
              <a href="https://www.facebook.com/hermitzdesigns">
                <Fb />
              </a>
            </div>
            <div className="icon">
              <a href="https://www.linkedin.com/company/hermitzmedia/">
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
