import React, { useEffect } from "react";
import { ourAllWork } from "../components/OurWorks";
import { gsap } from "gsap";
import PageTitles from "../components/PageTitles";
import workHeaderImg from "../assets/works/works-header.jpg";
import { Link } from "react-router-dom";

ourAllWork.push();

function AllWOrks() {
  const listenerScroll = () => {
    var scroll = window.scrollY - 1500;
    gsap.to(".even", {
      y: window.innerWidth < 767 ? 0 : -0.1 * scroll,
      ease: "power.out",
    });
  };

  useEffect(() => {
    document.title = "H E R M I T Z. | Works";
    window.addEventListener("scroll", listenerScroll);
    return () => {
      window.removeEventListener("scroll", listenerScroll);
    };
  }, []);
  return (
    <>
      <PageTitles
        headerImageName={workHeaderImg}
        pageTitleContent1={"Adventures in"}
        pageTitleContent2={"creative age"}
      />
      <section className="our-all-works">
        <div className="container">
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
                        <Link to={`/works/${ourAllWork[0].workTitle}`}>
                          <button>Details</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 ">
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
                        <Link to={`/works/${ourAllWork[1].workTitle}`}>
                          <button>Details</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
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
                        <Link to={`/works/${ourAllWork[2].workTitle}`}>
                          <button>Details</button>
                        </Link>
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
                        <Link to={`/works/${ourAllWork[0].workTitle}`}>
                          <button>Details</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="work-details">
                <div className="work-img">
                  <div className="work-overlay"></div>
                  <img src={ourAllWork[4].imgName} alt="" />
                  <div className="work-content">
                    <div className="work-content-inner">
                      <h4 className="did-work-title">
                        {ourAllWork[4].workTitle}
                      </h4>
                      <p className="work-description">
                        {ourAllWork[4].workDescription}
                      </p>
                      <div className="work-deatils-button">
                        <Link to={`/works/${ourAllWork[4].workTitle}`}>
                          <button>Details</button>
                        </Link>
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
                  <img src={ourAllWork[5].imgName} alt="" />
                  <div className="work-content">
                    <div className="work-content-inner">
                      <h4 className="did-work-title">
                        {ourAllWork[5].workTitle}
                      </h4>
                      <p className="work-description">
                        {ourAllWork[5].workDescription}
                      </p>
                      <div className="work-deatils-button">
                        <Link to={`/works/${ourAllWork[5].workTitle}`}>
                          <button>Details</button>
                        </Link>
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

export default AllWOrks;
