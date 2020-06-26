import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
function SideNav() {
  useEffect(() => {
    gsap.from(".brand-name,.contact-click", 0.8, {
      opacity: 0,
      y: -20,
      ease: "Power4.InOut",
    });
  }, []);
  return (
    <div className="side-nav">
      <div className="brand">
        <Link to="/">
          <div className="brand-name">Hermitz.</div>
        </Link>
      </div>
      <div className="contact-link">
        <div className="contact-click">Say Hello</div>
      </div>
    </div>
  );
}

export default SideNav;
