import React, { useRef, useEffect } from "react";
import { useIntersection } from "react-use";
import { gsap } from "gsap";
import BubbleChartSharpIcon from "@material-ui/icons/BubbleChartSharp";
import PhoneIphoneSharpIcon from "@material-ui/icons/PhoneIphoneSharp";
import DesktopMacSharpIcon from "@material-ui/icons/DesktopMacSharp";
import SpeedSharpIcon from "@material-ui/icons/SpeedSharp";
import YoutubeSearchedForSharpIcon from "@material-ui/icons/YoutubeSearchedForSharp";
import appImg from "../assets/wedo/app.jpg";
import fastImg from "../assets/wedo/fast.jpg";
import ideaImg from "../assets/wedo/idea.jpg";
import seoImg from "../assets/wedo/seo.jpg";
import webImg from "../assets/wedo/web.jpg";

function WeDo() {
  const weDoSection = useRef(null);

  const interSection = useIntersection(weDoSection, {
    root: null,
    rootMargin: "0px",
    threshold: 0.7,
  });

  useEffect(() => {
    if (interSection && interSection.intersectionRatio > 0.7) {
      gsap.to(".wedo-row", 0, { css: { visibility: "visible" } });
      gsap.to(".title-tag .title-inner", 1.3, {
        x: 0,
        ease: "back.out",
        stagger: 0.1,
        delay: 0.5,
      });
      gsap.to(".wedo-box-overlay", 1, {
        height: 0,
        delay: 1.3,
        stagger: { amount: window.innerWidth <= 767 ? "1.5" : ".5" },
      });
      gsap.to(".wedo-box", 1.4, {
        y: 0,
        opacity: 1,
        delay: 1.1,
        stagger: { amount: window.innerWidth <= 767 ? "2.5" : "1" },
      });
      gsap.to(".wedo-bgimg-div img", 1, {
        scale: 1,
        delay: 1.3,
        stagger: { amount: 0.5 },
      });
    }
    return () => {};
  }, [interSection]);

  return (
    <>
      <div className="container wedo-container">
        <div className="row wedo-row" ref={weDoSection}>
          <div className="col-lg-4 col-sm-1 mb-3 mt-5 mt-md-0 mb-md-0 col-md-3">
            <div className="title-main">
              <h2 className="title-tag">
                <div className="title-inner">What</div>
                <div className="title-inner">We Do </div>
              </h2>
            </div>
          </div>
          <div className="col-lg-4 col-sm-1 mb-3 mb-md-0 col-md-3">
            <div className="wedo-box-overlay"></div>
            <div className="wedo-box">
              <div className="wedo-bgimg-div">
                <img src={ideaImg} alt="" />
              </div>
              <div className="wedo-box-icon">
                <span>
                  <BubbleChartSharpIcon />
                </span>
              </div>
              <div className="wedo-box-title">
                <h4>Original Ideas</h4>
              </div>
              <div className="wedo-box-hover-content">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Omnis minus modi repudiandae laboriosam non assumenda numquam
                  nemo aut eaque, facere ipsa!
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-1 mb-3 mb-md-0 col-md-3">
            <div className="wedo-box-overlay"></div>
            <div className="wedo-box">
              <div className="wedo-bgimg-div">
                <img src={appImg} alt="" />
              </div>
              <div className="wedo-box-icon">
                <span>
                  <PhoneIphoneSharpIcon />
                </span>
              </div>
              <div className="wedo-box-title">
                <h4>Great Apps</h4>
              </div>
              <div className="wedo-box-hover-content">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Omnis minus modi repudiandae laboriosam non assumenda numquam
                  nemo aut eaque, facere ipsa!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row  wedo-row">
          <div className="col-lg-4 col-sm-1 mb-3 mb-md-0 col-md-3">
            <div className="wedo-box-overlay"></div>
            <div className="wedo-box">
              <div className="wedo-bgimg-div">
                <img src={webImg} alt="" />
              </div>
              <div className="wedo-box-icon">
                <span>
                  <DesktopMacSharpIcon />
                </span>
              </div>
              <div className="wedo-box-title">
                <h4>Web Apps</h4>
              </div>
              <div className="wedo-box-hover-content">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Omnis minus modi repudiandae laboriosam non assumenda numquam
                  nemo aut eaque, facere ipsa!
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-1 mb-3 mb-md-0 col-md-3">
            <div className="wedo-box-overlay"></div>
            <div className="wedo-box">
              <div className="wedo-bgimg-div">
                <img src={seoImg} alt="" />
              </div>
              <div className="wedo-box-icon">
                <span>
                  <YoutubeSearchedForSharpIcon />
                </span>
              </div>
              <div className="wedo-box-title">
                <h4>SEO</h4>
              </div>
              <div className="wedo-box-hover-content">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Omnis minus modi repudiandae laboriosam non assumenda numquam
                  nemo aut eaque, facere ipsa!
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-1 mb-3 mb-md-0 col-md-3">
            <div className="wedo-box-overlay"></div>
            <div className="wedo-box">
              <div className="wedo-bgimg-div">
                <img src={fastImg} alt="" />
              </div>
              <div className="wedo-box-icon">
                <span>
                  <SpeedSharpIcon />
                </span>
              </div>
              <div className="wedo-box-title">
                <h4>Fast Loading</h4>
              </div>
              <div className="wedo-box-hover-content">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Omnis minus modi repudiandae laboriosam non assumenda numquam
                  nemo aut eaque, facere ipsa!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WeDo;
