import React, { useEffect } from "react";
import PageTitles from "../components/PageTitles";
import aboutHeaderImg from "../assets/about/about-header.jpg";
import WeDo from "../components/WeDo";

function About() {
  useEffect(() => {
    document.title = "H E R M I T Z. | About";
  }, []);

  return (
    <>
      <PageTitles
        headerImageName={aboutHeaderImg}
        pageTitleContent1={"Hermitz"}
        pageTitleContent2={"Media"}
      />
      <section className="about-paragraph">
        <div className="container">
          <div className="row">
            <p className="about-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur sunt ipsa neque maxime voluptate sed veritatis minima
              commodi vel deserunt dignissimos totam aliquid dicta, excepturi
              laboriosam voluptatum ratione quisquam odit aut temporibus minus
              iusto? Assumenda, repellat? Inventore incidunt at quaerat sed
              cumque harum possimus maxime officia, saepe, maiores quod optio
              expedita voluptatum molestiae ipsam consequuntur minima sapiente
              odio quae? Voluptatibus.
            </p>
          </div>
        </div>
      </section>
      <WeDo />
    </>
  );
}

export default About;
