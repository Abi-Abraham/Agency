import React, { useEffect } from "react";
import "./App.scss";
import { gsap } from "gsap";
import SideNav from "./components/SideNav";
import Hambureger from "./components/Hambureger";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { Route, Switch } from "react-router-dom";
import AllWOrks from "./pages/AllWOrks";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Navigation from "./components/Navigation";
import CaseStudy from "./pages/CaseStudy";

const routingPages = [
  { path: "/", name: "Home", Component: Home },
  { path: "/works", name: "All Works", Component: AllWOrks },
  { path: "/works/:id", name: "Case Studies", Component: CaseStudy },
  { path: "/about", name: "About", Component: About },
  { path: "/contact", name: "Contact", Component: Contact },
  { path: "/service", name: "Service", Component: Service },
];

function App() {
  useEffect(() => {
    // mobile exact height
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    // css visibility
    gsap.to("body", 0, { css: { visibility: "visible" } });
  }, []);
  return (
    <>
      <Navigation />
      <SideNav />
      <Hambureger />
      <div className="">
        {routingPages.map(({ path, name, Component }) => (
          <Switch key={name}>
            <Route path={path} exact strict>
              <Component />
            </Route>
          </Switch>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default App;
