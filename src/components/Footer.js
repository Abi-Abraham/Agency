import React, { useRef } from "react";
import { useIntersection } from "react-use";
import { gsap } from "gsap";

function Footer() {
  const footerSection = useRef(null);
  const footerInterSection = useIntersection(footerSection, {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });

  if (footerInterSection && footerInterSection.intersectionRatio >= 0.1) {
    gsap.to(".footer-section", 0.3, { opacity: 1 });
    gsap.to(".footer-overlay", 1, {
      delay: 1,
      height: "0px",
      ease: "power4.out",
    });
    gsap.to(".footer-logo-inner span", 1, {
      delay: 1.5,
      opacity: 1,
      ease: "power4.in",
      stagger: {
        amount: 0.5,
      },
    });
    gsap.to(".footer-content p", 1, {
      delay: 2.3,
      y: 0,
      opacity: 1,
      ease: "power4.out",
      stagger: {
        amount: 0.2,
      },
    });
    gsap.to(".social-media a", 1, {
      delay: 2.5,
      opacity: 1,
      ease: "power4.out",
      stagger: {
        amount: 0.5,
      },
    });
  }

  return (
    <>
      <section className="footer-section" ref={footerSection}>
        <div className="container">
          <div className="row ">
            <div className="footer-content">
              <div className="footer-overlay"></div>
              <h1>
                <div className="footer-logo-inner">
                  <span>H</span>
                  <span>e</span>
                  <span>r</span>
                  <span>m</span>
                  <span>i</span>
                  <span>t</span>
                  <span>z</span>
                  <span>.</span>
                </div>
              </h1>
              <p>© 2018 Hermitz. All Rights Reserved.</p>
              <div className="social-media">
                <a href="https://www.facebook.com/hermitzdesigns">Facebook</a>
                <a href="https://www.instagram.com/hermitzmedia/">Instagram</a>
                <a href="https://www.linkedin.com/company/hermitzmedia/">
                  Linkedin
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
