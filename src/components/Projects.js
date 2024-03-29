import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ProjectItem from "./ProjectItem";
import "./Projects.css";
import plantsMockup from "../Assets/plants-mockup.png";
import portfolioMockup from "../Assets/portfolio-mockup.png";
import propertyMockup from "../Assets/property-mockup.png";

gsap.registerPlugin(ScrollTrigger);

const images = [
  {
    number: "01",
    title: "Plant app",
    description:
      "This platform was designed to allow individuals to easily exchange or sell plants to others. By creating an account, users can sell their own plants, participate in plant exchanges, and provide and receive reviews. Application aims to offer a secure and user-friendly marketplace for plant enthusiasts to connect and share their knowledge.",
    tools: "JS, Express, Node.js, EJS, MongoDB, Bootstrap, CSS",
    src: plantsMockup,
    gitHub: "https://github.com/ksliwka/ecommerce_plant",
    website: "https://plants-qeo1.onrender.com/",
    color: "#87a2ff",
  },
  {
    number: "02",
    title: "Portfolio",
    description:
      "The portfolio website was built with React and features learned skills with additional animations for a visually engaging experience.",
    tools: "React, Bootstrap, CSS",
    src: portfolioMockup,
    gitHub: "https://github.com/ksliwka/portfolio",
    website: "https://ksliwka.github.io/portfolio/",
    color: "#C28CFF",
  },
  {
    number: "03",
    title: "Property rental",
    description:
      " The propert rental website allows to discover available properties, share your own, and favorite the ones that catch your eye. With an interactive map, you can visually explore the locations of the properties and easily find the perfect rental. Whether you're searching for a cozy apartment or a spacious house, our platform makes it simple to filter through options.",
    tools: "React, NextJS, MongoDB, Bootstrap, CSS",
    src: propertyMockup,
    gitHub: "https://github.com/ksliwka/property_rental",
    website: "https://property-rental-pak8hj32o-ksliwka.vercel.app",
    color: "#006663",
  },
];

export default function Projects({ src, index, columnOffset }) {
  const component = useRef();
  const slider = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".project-item-wrapper");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",

        scrollTrigger: {
          start: "center center",
          trigger: slider.current,
          pin: true,
          scrub: true,
          snap: 1 / (panels.length - 1),

          end: () => "+=" + slider.current.offsetWidth,
        },
      });
    }, component);
    return () => ctx.revert();
  });

  return (
    <section className="project-wrap" id="projects" ref={component}>
      <div className="projects" ref={slider}>
        <div className="project-section-title d-none d-md-block">
          <p>Projects</p>
        </div>
        {images.map((image, index) => (
          <ProjectItem key={image.number} index={index} {...image} />
        ))}
      </div>
    </section>
  );
}
