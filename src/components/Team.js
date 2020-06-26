import React, { useRef, useEffect } from "react";
import team from "../assets/about/team.jpg";
import { useIntersection } from "react-use";
import { gsap } from "gsap";

function Team() {
  const teamSection = useRef(null);
  const teamInterSection = useIntersection(teamSection, {
    root: null,
    rootMargin: "0px",
    threshold: 0.7,
  });

  const listenerScroll = () => {
    var scroll = window.scrollY - 2000;
    gsap.to(".team-img-main img", {
      y: window.innerWidth < 767 ? 0 : -0.3 * scroll,
      ease: "power.out",
    });
  };

  useEffect(() => {
    if (teamInterSection && teamInterSection.intersectionRatio >= 0.7) {
      gsap.to(".team-section", 0, {
        opacity: 1,
      });
      gsap.to(".team-img-overlay", 1, {
        width: "0%",
      });
      gsap.to(".team-img-main", 1.5, {
        delay: 1,
        opacity: 1,
        x: "0px",
        width: window.innerWidth <= 767 ? "100%" : "55%",
        ease: "power.in",
      });
      gsap.to(".team-img-main img", 1.5, {
        delay: 2.5,
        scale: 1.1,
        ease: "power.out",
      });
      gsap.to(".team-content", 1, {
        opacity: 1,
        ease: "power4.out",
        delay: 2,
      });
      gsap.to(".team-title-inner", 1, {
        x: 0,
        opacity: 1,
        ease: "back.out",
        delay: 2,
        stagger: {
          amount: 0.3,
        },
      });
      gsap.to(".team-content p", 1, {
        opacity: 1,
        y: 0,
        delay: 2.5,
        ease: "power.out",
      });
      gsap.to(".about-button", 1, {
        delay: 4,
        opacity: 1,
        x: 0,
        ease: "back.out",
        stagger: {
          amount: 0.5,
        },
      });
      window.addEventListener("scroll", listenerScroll);
    }
    return () => {
      window.removeEventListener("scroll", listenerScroll);
    };
  }, [teamInterSection]);

  return (
    <>
      <section className="team-section" ref={teamSection}>
        <div className="container">
          <div className="row">
            <div className="team-img-overlay"></div>
            <div className="team-img-main">
              <div className="team-img">
                <img src={team} alt="" />
              </div>
            </div>
            <div className="team-content">
              <h2 className="team-title">
                <div className="team-title-inner">Who are</div>
                <div className="team-title-inner">We </div>
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
                fugiat molestiae, unde aperiam nesciunt provident totam, modi
                cum fuga saepe laudantium nisi cumque officiis reprehenderit hic
                quidem atque expedita consequuntur.
              </p>
              <div className="about-button">
                <button>About us</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;
