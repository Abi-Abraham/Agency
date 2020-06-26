import React, { useEffect } from "react";
import { gsap } from "gsap";
let gTl = gsap.timeline();

function PageTitles({ headerImageName, pageTitleContent1, pageTitleContent2 }) {
  const listenerScroll = () => {
    var scroll = window.scrollY - 1500;
    gsap.to(".header-img-inner", {
      y: window.innerWidth < 767 ? 0 : 0.1 * scroll,
      ease: "power.out",
    });
  };

  useEffect(() => {
    gTl
      .to(".header-img-overlay", {
        delay: 3,
        duration: 1.5,
        height: 0,
        ease: "power4.out",
      })
      .to(".header-img-inner img", {
        delay: -1.6,
        duration: 1,
        scale: 1,
        ease: "power4.out",
      })
      .to(".header-title-tag div", {
        delay: -1.3,
        duration: 1,
        y: 0,
        ease: "power4.out",
        stagger: 0.15,
      });

    window.addEventListener("scroll", listenerScroll);
    return () => {
      window.removeEventListener("scroll", listenerScroll);
    };
  }, []);

  return (
    <>
      <section className="workpage-header">
        <div className="container">
          <div className="row">
            <div className="header-full-area">
              <div className="header-img-overlay"></div>
              <div className="header-img">
                <div className="header-img-inner">
                  <img src={headerImageName} alt="" />
                </div>
              </div>
              <div className="header-title">
                <h1 className="header-title-inner">
                  <div className="header-title-tag">
                    <div>{pageTitleContent1}</div>
                  </div>
                  <div className="header-title-tag">
                    <div>{pageTitleContent2}</div>
                  </div>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PageTitles;
