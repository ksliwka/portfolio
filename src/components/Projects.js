import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ProjectItem from "./ProjectCard";
import "./Projects.css";
import mockup from "../Assets/mockup.png";

gsap.registerPlugin(ScrollTrigger);

const images = [
  {
    number: "01",
    title: "Plant app",
    description:
      "The application is created for people, who wamts to sell or buy plants from others. Plant app allows you to create your own account, sell plants by adding an advertisement about it and add reviews to other profiles.",
    tools: "JS",
    srclg: mockup,
    srcmd: 'https://images.unsplash.com/photo-1672217617440-1dd3e9417ce1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    gitHub: "https://github.com/ksliwka",
    website: "sth",
    color: "#87a2ff",
  },
  {
    number: "02",
    title: "Portfolio website",
    description:
      "The application is created for people, who wamts to sell or buy plants from others. Plant app allows you to create your own account, sell plants by adding an advertisement about it and add reviews to other profiles.",
    tools: "JS",
    srclg: mockup,
    srcmd: 'https://images.unsplash.com/photo-1669905910914-b475d82683b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    gitHub: "https://github.com/ksliwka",
    website: "#87a2ff",
    color: "#C28CFF",
  },
  {
    number: "03",
    title: "Food order app",
    description:
      "The application is created for people, who wamts to sell or buy plants from others. Plant app allows you to create your own account, sell plants by adding an advertisement about it and add reviews to other profiles.",
    tools: "JS",
    srclg: mockup,
    srcmd: 'https://images.unsplash.com/photo-1669905910914-b475d82683b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    gitHub: "https://github.com/ksliwka",
    website: "sth",
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
          // start: 'top top',
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
    <section className="project-wrap" id="#project-container" ref={component}>
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
