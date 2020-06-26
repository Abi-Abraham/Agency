import React, { useRef, useEffect } from "react";
import workOne from "../assets/works/design-agency.jpg";
import workTwo from "../assets/works/Hognation.jpg";
import workThree from "../assets/works/yogivedh.jpg";
import workFour from "../assets/works/yogivedh.jpg";
import workFive from "../assets/works/Hognation.jpg";
import { useIntersection } from "react-use";
import { gsap } from "gsap";

let tl = gsap.timeline();

export const ourAllWork = [
  {
    workTitle: "Design Agencey",
    imgName: workOne,
    workDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ut optio repudiandae, quam quod unde. Sit ratione pariatur nobis provident iure, porro nesciunt ipsum eius est ipsa accusantium deserunt quo!",
  },
  {
    workTitle: "Hog Nation",
    imgName: workTwo,
    workDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ut optio repudiandae, quam quod unde. Sit ratione pariatur nobis provident iure, porro nesciunt ipsum eius est ipsa accusantium deserunt quo!",
  },
  {
    workTitle: "Yogi Vedh",
    imgName: workThree,
    workDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ut optio repudiandae, quam quod unde. Sit ratione pariatur nobis provident iure, porro nesciunt ipsum eius est ipsa accusantium deserunt quo!",
  },
  {
    workTitle: "Fashion World",
    imgName: workOne,
    workDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ut optio repudiandae, quam quod unde. Sit ratione pariatur nobis provident iure, porro nesciunt ipsum eius est ipsa accusantium deserunt quo!",
  },
  {
    workTitle: "Food Agencey",
    imgName: workFour,
    workDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ut optio repudiandae, quam quod unde. Sit ratione pariatur nobis provident iure, porro nesciunt ipsum eius est ipsa accusantium deserunt quo!",
  },
  {
    workTitle: "College",
    imgName: workFive,
    workDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ut optio repudiandae, quam quod unde. Sit ratione pariatur nobis provident iure, porro nesciunt ipsum eius est ipsa accusantium deserunt quo!",
  },
];

function OurWorks() {
  let worksSection = useRef(null);
  const workInterSection = useIntersection(worksSection, {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });

  const listenerScroll = () => {
    var scroll = window.scrollY - 1500;
    gsap.to(".even", {
      y: window.innerWidth < 767 ? 0 : -0.2 * scroll,
      ease: "power.out",
    });
  };

  useEffect(() => {
    if (workInterSection && workInterSection.intersectionRatio >= 0.1) {
      tl.to(".work-section", 0, { css: { visibility: "visible" } })
        .to(".title-tag-inner", {
          duration: 1.5,
          delay: 0,
          opacity: 1,
          y: 0,
          ease: "expo.out",
          stagger: {
            amount: 0.15,
          },
        })
        .to(".work-overlay", {
          delay: -1,
          duration: 2,
          height: 0,
          ease: "power4.out",
          stagger: {
            amount: 2,
          },
        })
        .to(".work-img img", {
          delay: -3,
          duration: 2,
          scale: 1,
          ease: "power4.out",
          stagger: {
            amount: 1,
          },
        })
        .to(".work-img", {
          delay: -1.5,
          duration: 0,
          overflow: "visible",
          ease: "power4.out",
        })
        .to(".work-content-inner", {
          delay: -2,
          duration: 1,
          x: 0,
          opacity: 1,
          ease: "back.in",
          stagger: {
            amount: 2,
          },
        });
      window.addEventListener("scroll", listenerScroll);
    }
    return () => {
      window.removeEventListener("scroll", listenerScroll);
    };
  }, [workInterSection]);

  return (
    <>
      <section className="work-section" ref={worksSection}>
        <div className="container">
          <div className="work-title">
            <h2>
              <div className="title-tag-inner">Selected Work</div>
            </h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="work-details">
                <div className="work-img">
                  <div className="work-overlay"></div>
                  <img src={ourAllWork[0].imgName} alt="" />
                  <div className="work-content">
                    <div className="work-content-inner">
                      <h4 className="did-work-title">
                        {ourAllWork[0].workTitle}
                      </h4>
                      <p className="work-description">
                        {ourAllWork[0].workDescription}
                      </p>
                      <div className="work-deatils-button">
                        <button>Details</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="work-details even">
                <div className="work-img">
                  <div className="work-overlay"></div>
                  <img src={ourAllWork[1].imgName} alt="" />
                  <div className="work-content">
                    <div className="work-content-inner">
                      <h4 className="did-work-title">
                        {ourAllWork[1].workTitle}
                      </h4>
                      <p className="work-description">
                        {ourAllWork[1].workDescription}
                      </p>
                      <div className="work-deatils-button">
                        <button>Details</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="work-details">
                <div className="work-img">
                  <div className="work-overlay"></div>
                  <img src={ourAllWork[2].imgName} alt="" />
                  <div className="work-content">
                    <div className="work-content-inner">
                      <h4 className="did-work-title">
                        {ourAllWork[2].workTitle}
                      </h4>
                      <p className="work-description">
                        {ourAllWork[2].workDescription}
                      </p>
                      <div className="work-deatils-button">
                        <button>Details</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="work-details even">
                <div className="work-img">
                  <div className="work-overlay"></div>
                  <img src={ourAllWork[0].imgName} alt="" />
                  <div className="work-content">
                    <div className="work-content-inner">
                      <h4 className="did-work-title">
                        {ourAllWork[0].workTitle}
                      </h4>
                      <p className="work-description">
                        {ourAllWork[0].workDescription}
                      </p>
                      <div className="work-deatils-button">
                        <button>Details</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurWorks;
