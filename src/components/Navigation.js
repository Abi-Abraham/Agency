import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <>
      <section className="nav-bar">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="main-links">
                <NavLink to="/" activeClassName="nav-active" exact>
                  <h3>
                    <div className="link-tag">Home</div>
                  </h3>
                </NavLink>
                <NavLink to="/works" activeClassName="nav-active" exact>
                  <h3>
                    <div className="link-tag">Work</div>
                  </h3>
                </NavLink>
                <NavLink to="/about" activeClassName="nav-active" exact>
                  <h3>
                    <div className="link-tag">About</div>
                  </h3>
                </NavLink>
                <NavLink to="/contact" activeClassName="nav-active" exact>
                  <h3>
                    <div className="link-tag">Contact</div>
                  </h3>
                </NavLink>
              </div>
            </div>
            <div className="col-md-5">
              <div className="location-box">
                <h6 className="location-title">Location</h6>
                <p className="address">
                  24th Main Road, HSR Layout Sector 3,Bengaluru 560102
                </p>
                <h6 className="contact-num">
                  Call us : <span>+91 95380 88478</span>
                </h6>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-7">
              <div className="nav-social-media">
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

export default Navigation;
