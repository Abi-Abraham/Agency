import React, { useEffect } from "react";
import Header from "../components/Header";
import WeDo from "../components/WeDo";
import OurWorks from "../components/OurWorks";
import Testimonial from "../components/Testimonial";
import Team from "../components/Team";

function Home() {
  useEffect(() => {
    document.title = "H E R M I T Z.";
  }, []);
  return (
    <>
      <Header />
      <WeDo />
      <OurWorks />
      <Team />
      <Testimonial />
    </>
  );
}

export default Home;
