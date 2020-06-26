import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { withRouter } from "react-router-dom";
let hamTimeline = gsap.timeline();

function Hambureger({ history }) {
  const [menuBurger, setMenuBurger] = useState(false);

  useEffect(() => {
    history.listen(() => {
      setMenuBurger(false);
      window.scrollTo(0, 0);
    });
  }, [history]);

  const changeMenu = () => {
    setMenuBurger((prev) => !prev);
  };

  useEffect(() => {
    if (menuBurger === false) {
      hamTimeline
        .to(".link-tag", {
          duration: 0.5,
          y: "-100px",
          stagger: 0.15,
          ease: "power4.in",
        })
        .to(".location-box", {
          delay: -0.5,
          duration: 0.5,
          opacity: 0,
          y: "-50px",
          ease: "power4.in",
          stagger: 0.2,
        })
        .to(".nav-social-media a", {
          delay: -0.6,
          duration: 0.5,
          opacity: 0,
          ease: "power4.in",
          stagger: 0.15,
        })
        .to(".nav-bar", {
          duration: 1,
          height: 0,
          ease: "power4.in",
        })
        .to(".hamburger-line span", {
          duration: 0.5,
          background: "black",
          ease: "power4.out",
        });
    }

    if (menuBurger === true) {
      hamTimeline
        .to(".nav-bar", {
          duration: 1.5,
          height: "101vh",
          ease: "power4.out",
        })
        .to(".hamburger-line span", {
          delay: -1.6,
          duration: 0.5,
          background: "white",
          ease: "power4.out",
        })
        .to(".link-tag", {
          delay: -0.5,
          duration: 0.5,
          y: 0,
          stagger: 0.15,
          ease: "power4.out",
        })
        .to(".location-box", {
          duration: 0.5,
          opacity: 1,
          y: 0,
          ease: "power4.out",
          stagger: 0.2,
        })
        .to(".nav-social-media a", {
          duration: 0.5,
          opacity: 1,
          ease: "power4.out",
          stagger: 0.15,
        });
    }
  }, [menuBurger]);

  return (
    <div className="hamburger-main">
      <div className="hamburger-line" onClick={changeMenu}>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default withRouter(Hambureger);
