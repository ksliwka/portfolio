import React, { useEffect, useRef, useState } from "react";
import gsap  from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import GalleryItem from "./ProjectCard";
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
      src: mockup,
      gitHub: "https://github.com/ksliwka",
      website: "sth",
      color: '#87a2ff'
    },
  {
         number: "02",
       title: "Portfolio website",
         description:
           "The application is created for people, who wamts to sell or buy plants from others. Plant app allows you to create your own account, sell plants by adding an advertisement about it and add reviews to other profiles.",
     tools: "JS",
      src: mockup,
      gitHub: "https://github.com/ksliwka",
      website: "#87a2ff",
      color:'#C28CFF'
    },
  {
         number: "03",
       title: "Food order app",
         description:
           "The application is created for people, who wamts to sell or buy plants from others. Plant app allows you to create your own account, sell plants by adding an advertisement about it and add reviews to other profiles.",
     tools: "JS",
      src: mockup,
      gitHub: "https://github.com/ksliwka",
      website: "sth",
      color: '#006663'
    },
];


export default function Projects({ src, index, columnOffset }) {

  const component = useRef();
  const slider = useRef();



 

  useEffect(() => {
    let ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".gallery-item-wrapper");
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

        }
      });

   
    }, component);
    return () => ctx.revert();
  })





  return (
    <section   className="gallery-wrap" id="#project-container" ref={component}>

      <div className="gallery" ref={slider}>
        <div className="gallery-counter">
      

          <p>Projects</p>

     

          
        </div>
        
        {images.map((image, index) => (
          <GalleryItem
            key={image.number}
            index={index}
            {...image}
          />
        ))}
      </div>
    </section>
  );
}