import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

// Slide Items
const headItems = [
  {
    title: "Branding",
    para:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus reiciendis numquam, nihil quo molestiae repellat delectus totam quisquam, ad voluptate eum inventore hic libero dignissimos sequi ab placeat, animi quis?",
    photo: "branding",
  },
  {
    title: "Marketing",
    para:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus reiciendis numquam, nihil quo molestiae  ad voluptate eum inventore hic libero dignissimos sequi ab placeat, animi quis?",
    photo: "marketing",
  },
  {
    title: "UI / UX",
    para:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus reiciendis numquam, nihil quo molestiae repellat delectus totam quisquam, ad voluptate eum inventore hic libero dignissimos sequi ab placeat, ",
    photo: "ui-ux",
  },
];

// gsap functions
const tl = gsap.timeline();

const fadeOut = (el, dur) => {
  tl.to(el, dur, {
    css: { visibility: "hidden" },
    ease: "Power4.Out",
    delay: 0,
  })
    .to(el.children[0], {
      duration: 1,
      delay: -1,
      opacity: 0,
      ease: "Power.Out",
    })
    .to(el.children[0].children[0], {
      duration: 1,
      delay: -1,
      y: 60,
      ease: "Power.Out",
    })
    .to(el.children[0].children[1], {
      duration: 1,
      delay: -1,
      y: 60,
      ease: "Power.Out",
    })
    .to(el.children[1].children[1], {
      duration: 1.2,
      delay: -1,
      ease: "Power.Out",
    })
    .to(el.children[1].children[0], {
      duration: 1,
      delay: -1,
      width: "100%",
      ease: "Power.Out",
    });
};

const fadeIn = (el, dur, delay = -0.5) => {
  tl.to(el, dur, {
    css: { visibility: "visible" },
    delay: -0.2,
    ease: "Power4.In",
  })
    .to(el.children[0], {
      duration: 1,
      delay: -1,
      opacity: 1,
      ease: "Power.In",
    })
    .fromTo(
      el.children[0].children[0],
      { y: -90 },
      {
        y: 0,
        duration: 1,
        delay: -1,
        ease: "Power.In",
        stagger: {
          amount: 0.3,
        },
      }
    )
    .fromTo(
      el.children[0].children[1],
      { y: 90, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: -1, ease: "Power.In" }
    )
    .fromTo(
      el.children[1].children[0],
      { width: "100%" },
      { width: "0", duration: 1, delay: -1, ease: "Power.Out" }
    )
    .from(el.children[1].children[1], {
      duration: 1.2,
      delay: -1,
      opacity: 0,
      scale: 1.4,
      ease: "Power.In",
    });
};

// Function start here...
function Header() {
  let mainSlide = useRef(null);
  const [slides, setSlides] = useState({ title: "" });

  useEffect(() => {
    fadeIn(mainSlide.children[0], 1);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (slides.title === "" || slides.title === headItems[2].title) {
        setSlides({ title: headItems[0].title });
      } else if (slides.title === headItems[0].title) {
        setSlides({ title: headItems[1].title });
      } else if (slides.title === headItems[1].title) {
        setSlides({ title: headItems[2].title });
      }
    }, 8000);
    if (slides.title === headItems[0].title) {
      fadeOut(mainSlide.children[0], 1);
      fadeOut(mainSlide.children[2], 1);
      fadeIn(mainSlide.children[1], 1);
    } else if (slides.title === headItems[1].title) {
      fadeOut(mainSlide.children[0], 1);
      fadeOut(mainSlide.children[1], 1);
      fadeIn(mainSlide.children[2], 1);
    } else if (slides.title === headItems[2].title) {
      fadeOut(mainSlide.children[2], 1);
      fadeOut(mainSlide.children[1], 1);
      fadeIn(mainSlide.children[0], 1);
    }
    return () => clearTimeout(timer);
  }, [slides.title]);

  return (
    <div className="container">
      <div className="slides" ref={(el) => (mainSlide = el)}>
        {headItems.map(({ title, para, photo }) => (
          <div className="slide" key={title}>
            <div className="text-div">
              <h1>
                <div className="title-in">{title}</div>
              </h1>
              <p>{para}</p>
            </div>
            <div className="img-div">
              <div className="overlay-img"></div>
              <img src={require(`../assets/header/${photo}.jpg`)} alt={title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default React.memo(Header);
