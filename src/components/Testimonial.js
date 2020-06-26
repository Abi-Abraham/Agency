import React, { useRef, useEffect } from "react";
import { useIntersection } from "react-use";
import { gsap } from "gsap";
import firstClient from "../assets/reviews/1.jpg";
import secondClient from "../assets/reviews/2.jpg";
import thirdClient from "../assets/reviews/3.jpg";
import reviewBg from "../assets/reviews/review-bg.png";

function Testimonial() {
  const testimonialSection = useRef(null);
  const testimonialInterSection = useIntersection(testimonialSection, {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });

  const scrollListener = () => {
    var scroll = window.scrollY - 3500;
    gsap.to(".testimonial-bg", {
      y: -0.2 * scroll,
      opacity: 0.1,
      ease: "power.out",
    });
  };

  useEffect(() => {
    if (
      testimonialInterSection &&
      testimonialInterSection.intersectionRatio >= 0.1
    ) {
      gsap.to(".testimonial-section", 0, { css: { visibility: "visible" } });
      gsap.to(".testimonial-title-tag-inner", 1.8, {
        delay: 1,
        y: 0,
        opacity: 1,
        ease: "back.out",
        stagger: {
          amount: 1,
        },
      });
      gsap.to(".test-monial-box", 2, {
        delay: 1.4,
        opacity: 1,
        y: "-60px",
        ease: "back.out",
        stagger: {
          amount: 2,
        },
      });
      gsap.to(".test-monial-box img", 2, {
        delay: 1.1,
        scale: 1,
        ease: "power.out",
        stagger: {
          amount: 2,
        },
      });

      gsap.to([".test-monial-box p", ".test-monial-box .reviewer-name"], 2, {
        delay: 1.4,
        y: 0,
        opacity: 1,
        ease: "power.in",
        stagger: {
          amount: 1,
        },
      });

      window.addEventListener("scroll", scrollListener);
    }
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, [testimonialInterSection]);

  return (
    <>
      <section className="testimonial-section" ref={testimonialSection}>
        <div className="container">
          <div className="testimonial-title">
            <h2 className="testimonial-title-tag">
              <div className="testimonial-title-tag-inner">
                What Our Clients Say
              </div>
            </h2>
          </div>
          <div className="row testimonial-row">
            <div className="testimonial-bg">
              <img src={reviewBg} alt="" />
            </div>
            <div className="col-lg-6 col-12 offset-lg-5 tesitimonial-column">
              <div className="test-monial-box">
                <div className="reaviewer-img">
                  <img src={firstClient} alt="" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
                  ullam libero dignissimos. Ducimus, obcaecati ratione sed
                  pariatur accusantium, veniam, consectetur libero debitis optio
                  perferendis veritatis. Ea totam eum unde neque!
                </p>
                <div className="reviewer-name">
                  <small>Sandra Tom</small>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12 offset-lg-2  tesitimonial-column">
              <div className="test-monial-box">
                <div className="reaviewer-img left-one">
                  <img src={secondClient} alt="" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
                  ullam libero dignissimos. Ducimus, obcaecati ratione sed
                  pariatur accusantium, veniam, consectetur libero debitis optio
                  perferendis veritatis. Ea totam eum unde neque!
                </p>
                <div className="reviewer-name">
                  <small>Cheriyan Jose</small>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12 offset-lg-5 tesitimonial-column">
              <div className="test-monial-box">
                <div className="reaviewer-img">
                  <img src={thirdClient} alt="" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
                  ullam libero dignissimos. Ducimus, obcaecati ratione sed
                  pariatur accusantium, veniam, consectetur libero debitis optio
                  perferendis veritatis. Ea totam eum unde neque!
                </p>
                <div className="reviewer-name">
                  <small>Aleena Elz</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default React.memo(Testimonial);
