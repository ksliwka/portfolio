// import "./Projects.css";
// import ProjectCard from "./ProjectCard";
// import { useEffect, useState } from "react";

// import mockup from "../Assets/mockup.png";

// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

// const projectsArray = [
//   {
//     number: "01",
//     title: "Plant app",
//     description:
//       "The application is created for people, who wamts to sell or buy plants from others. Plant app allows you to create your own account, sell plants by adding an advertisement about it and add reviews to other profiles.",
//     tools: "JS",
//     image: mockup,
//     gitHub: "https://github.com/ksliwka",
//     website: "sth",
//   },
//   {
//     number: "02",
//     title: "Portfolio",
//     description:
//       "The application uses a gamification system to activate and motivate the user to learn English, who, as a reward for learning and overcoming challenges, wins trophies and gains access to the next levels of the game. The application has a built-in test creation mechanism and in addition to overcoming story challenges, it offers the user to create their own challenges based on the provided materials.",
//     tools: "JS",
//     image: mockup,
//     gitHub: "https://github.com/ksliwka",
//     website: "sth",
//   },
//   {
//     number: "03",
//     title: "Portfolio",
//     description:
//       "The application uses a gamification system to activate and motivate the user to learn English, who, as a reward for learning and overcoming challenges, wins trophies and gains access to the next levels of the game. The application has a built-in test creation mechanism and in addition to overcoming story challenges, it offers the user to create their own challenges based on the provided materials.",
//     tools: "JS",
//     image: mockup,
//     gitHub: "https://github.com/ksliwka",
//     website: "sth",
//   },
// ];

// export const Projects = () => {

//   const [color, setColor] = useState('blue')

//   const click = color => {
//     setColor(color)
//   }

//   useEffect(() => {
//     document.body.style.backgroundColor = color
//   }, [color])

//   const responsive = {
//     superLargeDesktop: {
//       // the naming can be any, depends on you.
//       breakpoint: { max: 4000, min: 3000 },
//       items: 1,
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 1,
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 1,
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1,
//     },
//   };

//   return (
//     <section id="projects" className="projects" data-scroll-section>
//       <h2 className="projects-heading">Projects</h2>
//       <div className="project-box">
//         <Carousel
//           responsive={responsive}
//           infinite={true}
//           showDots
//           renderDotsOutside
//           className="project-slider"
//           onClick = {()=> click('yellow')}

//         >
//           {projectsArray.map((project, index) => {
//             return <ProjectCard key={index} {...project} />;
//           })}
//         </Carousel>
//       </div>
//     </section>
//   );
// };

// export default Projects;

// import "./Projects.css";
// import ProjectCard from "./ProjectCard";
// import { useEffect, useState } from "react";

// import gsap from 'gsap'
// import ScrollTrigger from "gsap/ScrollTrigger";
// import cn from 'classnames'

// import mockup from "../Assets/mockup.png";

// // import "react-multi-carousel/lib/styles.css";

// const projectsArray = [
//   {
//     number: "01",
//     title: "Plant app",
//     description:
//       "The application is created for people, who wamts to sell or buy plants from others. Plant app allows you to create your own account, sell plants by adding an advertisement about it and add reviews to other profiles.",
//     tools: "JS",
//     image: mockup,
//     gitHub: "https://github.com/ksliwka",
//     website: "sth",
//   },
//   {
//     number: "02",
//     title: "Portfolio",
//     description:
//       "The application uses a gamification system to activate and motivate the user to learn English, who, as a reward for learning and overcoming challenges, wins trophies and gains access to the next levels of the game. The application has a built-in test creation mechanism and in addition to overcoming story challenges, it offers the user to create their own challenges based on the provided materials.",
//     tools: "JS",
//     image: mockup,
//     gitHub: "https://github.com/ksliwka",
//     website: "sth",
//   },
//   {
//     number: "03",
//     title: "Portfolio",
//     description:
//       "The application uses a gamification system to activate and motivate the user to learn English, who, as a reward for learning and overcoming challenges, wins trophies and gains access to the next levels of the game. The application has a built-in test creation mechanism and in addition to overcoming story challenges, it offers the user to create their own challenges based on the provided materials.",
//     tools: "JS",
//     image: mockup,
//     gitHub: "https://github.com/ksliwka",
//     website: "sth",
//   },
// ];

// export const Projects = () => {

//   return (
//     <section id="projects" className="projects" data-scroll-section>
//       <h2 className="projects-heading">Projects</h2>
//       <div className="project-box">

//           {projectsArray.map((project, index) => {
//             return <ProjectCard key={index} {...project} />;
//           })}

//       </div>
//     </section>
//   );
// };

// // export default Projects;

// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import mockup from "../Assets/mockup.png";
// import { Col, Container, Row } from "react-bootstrap";
// import "./ProjectCard.css";
// import { AiFillGithub, AiOutlineArrowRight } from "react-icons/ai";

// import cn from "classnames";

// import "./Projects.css";

// const images = [
//   {
//       number: "01",
//          title: "Plant app",
//          description:
//            "The application is created for people, who wamts to sell or buy plants from others. Plant app allows you to create your own account, sell plants by adding an advertisement about it and add reviews to other profiles.",
//         tools: "JS",
//         src: mockup,
//         gitHub: "https://github.com/ksliwka",
//         website: "sth",
//       },
//       {
//         number: "02",
//         title: "Portfolio",
//         description:
//           "The application uses a gamification system to activate and motivate the user to learn English, who, as a reward for learning and overcoming challenges, wins trophies and gains access to the next levels of the game. The application has a built-in test creation mechanism and in addition to overcoming story challenges, it offers the user to create their own challenges based on the provided materials.",
//         tools: "JS",
//         src: mockup,
//         gitHub: "https://github.com/ksliwka",
//         website: "sth",
//       },
//       {
//         number: "03",
//         title: "Portfolio",
//         description:
//           "The application uses a gamification system to activate and motivate the user to learn English, who, as a reward for learning and overcoming challenges, wins trophies and gains access to the next levels of the game. The application has a built-in test creation mechanism and in addition to overcoming story challenges, it offers the user to create their own challenges based on the provided materials.",
//         tools: "JS",
//         src: mockup,
//         gitHub: "https://github.com/ksliwka",
//         website: "sth",
//       },
// ];

// function ProjectCard ({
//   number,
//   title,
//   description,
//   src,
//   gitHub,
//   website,
//   tools,
// }) {
//   const ref = useRef(null);
//   return (
//    <div className={cn("gallery-item-wrapper")} ref={ref} >

//     <Container className="">
//       <h2 className="project-number">-{number}</h2>
//       <h1 className="project-background-title">{title}</h1>
//       <Row className="justify-content-center  d-flex align-items-center">
//         <Col className="">
//           <img src={src} />
//         </Col>
//       </Row>

//       <Row className="mx-5">
//         <Col md={8}>
//           <div className="project-text">
//             {/* <h4 className="project-title">{title}</h4> */}
//             <h3>About</h3>
//             <p className="project-description">{description}</p>

//             <p className="project-tools">{tools}</p>
//           </div>
//         </Col>
//         <Col md={4} >
//           <div className="project-buttons d-grid gap-3">
//             <a href={gitHub} type="button">
//               Code <AiOutlineArrowRight />
//             </a>

//             <a href={website} type="button">
//               Webiste <AiOutlineArrowRight />
//             </a>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//     </div>
//   );
// };

// // function GalleryItem({
// //   src,
// //   tools,
// //   description,
// //   title,
// //   number,
// //   updateActiveImage,
// //   index,
// // }) {
// //   const ref = useRef(null);

// //   return (
// //     <div
// //       className={cn("gallery-item-wrapper")}
// //       ref={ref}
// //     >
// //       <div></div>
// //       <div className={"gallery-item"}>
// //         <div className="gallery-item-info">
// //           <h1 className="gallery-info-title">{title}</h1>
// //           <h2 className="gallery-info-subtitle">{description}</h2>
// //           <p className="gallery-info-category">{tools}</p>
// //           <p className="gallery-info-category">{number}</p>
// //         </div>
// //         <div
// //           className="gallery-item-image"
// //           style={{ backgroundImage: `url(${src})` }}
// //         ></div>
// //       </div>
// //       <div></div>
// //     </div>
// //   );
// // }

// export default function Gallery({ src, index, columnOffset }) {
//   const [activeImage, setActiveImage] = useState(1);

//   const ref = useRef(null);

//   useEffect(() => {
//     // This does not seem to work without a settimeout
//     setTimeout(() => {
//       console.log(ref.current.offsetWidth);
//       console.log(ref.current.clientWidth);
//       console.log({ current: ref.current });
//       let sections = gsap.utils.toArray(".gallery-item-wrapper");

//       gsap.to(sections, {
//         xPercent: -100 * (sections.length - 1),
//         ease: "none",
//         scrollTrigger: {
//           start: "top top",
//           trigger: ref.current,
//           scroller: "#main-container",
//           pin: true,
//           scrub: 0.5,
//           snap: 1 / (sections.length - 1),
//           end: () => `+=${ref.current.offsetWidth}`,
//         },
//       });
//       ScrollTrigger.refresh();
//     });
//   }, []);

//   const handleUpdateActiveImage = (index) => {
//     setActiveImage(index + 1);
//   };

//   return (
//     <section data-scroll-section className="section-wrapper gallery-wrap">

//       <div className="gallery" ref={ref}>
//         <div className="gallery-counter">
//           <span>{activeImage}</span>
//           <span className="divider" />
//           <span>{images.length}</span>
//         </div>
//         {images.map((image, index) => (
//           <ProjectCard
//             key={src}
//             index={index}
//             {...image}
//             updateActiveImage={handleUpdateActiveImage}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

// new idea

// import { useCallback, useEffect, useRef, useState } from "react";

// import mockup from "../Assets/mockup.png";

// import ProjectCard from './ProjectCard'

// const projectsArray = [
//   {
//     number: "01",
//     title: "Plant app",
//     description:
//       "The application is created for people, who wamts to sell or buy plants from others. Plant app allows you to create your own account, sell plants by adding an advertisement about it and add reviews to other profiles.",
//     tools: "JS",
//     image: mockup,
//     gitHub: "https://github.com/ksliwka",
//     website: "sth",
//     color: "yellow",
//   },
//   {
//     number: "02",
//     title: "Portfolio",
//     description:
//       "The application uses a gamification system to activate and motivate the user to learn English, who, as a reward for learning and overcoming challenges, wins trophies and gains access to the next levels of the game. The application has a built-in test creation mechanism and in addition to overcoming story challenges, it offers the user to create their own challenges based on the provided materials.",
//     tools: "JS",
//     image: mockup,
//     gitHub: "https://github.com/ksliwka",
//     website: "sth",
//     color: "red",
//   },
//   {
//     number: "03",
//     title: "Portfolio",
//     description:
//       "The application uses a gamification system to activate and motivate the user to learn English, who, as a reward for learning and overcoming challenges, wins trophies and gains access to the next levels of the game. The application has a built-in test creation mechanism and in addition to overcoming story challenges, it offers the user to create their own challenges based on the provided materials.",
//     tools: "JS",
//     image: mockup,
//     gitHub: "https://github.com/ksliwka",
//     website: "sth",
//     color: "blue",
//   },
// ];

// const slideStyles = {
//   width: "100%",
//   height: "100%",
//   borderRadius: "10px",
//   backgroundSize: "cover",
//   backgroundPosition: "center",
// };

// const rightArrowStyles = {
//   position: "absolute",
//   top: "50%",
//   transform: "translate(0, -50%)",
//   right: "32px",
//   fontSize: "45px",
//   color: "#fff",
//   zIndex: 1,
//   cursor: "pointer",
// };

// const leftArrowStyles = {
//   position: "absolute",
//   top: "50%",
//   transform: "translate(0, -50%)",
//   left: "32px",
//   fontSize: "45px",
//   color: "#fff",
//   zIndex: 1,
//   cursor: "pointer",
// };

// const sliderStyles = {
//   position: "relative",
//   height: "100%",
// };

// const dotsContainerStyles = {
//   display: "flex",
//   justifyContent: "center",
// };

// const dotStyle = {
//   margin: "0 3px",
//   cursor: "pointer",
//   fontSize: "20px",
// };

// const slidesContainerStyles = {
//   display: "flex",
//   height: "100%",
//   transition: "transform ease-out 0.3s",
// };

// const slidesContainerOverflowStyles = {
//   overflow: "hidden",
//   height: "100%",
// };

// const Projects = ({ parentWidth }) => {
//   const timerRef = useRef(null);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const goToPrevious = () => {
//     const isFirstSlide = currentIndex === 0;
//     const newIndex = isFirstSlide ? projectsArray.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };
//   const goToNext = useCallback(() => {
//     const isLastSlide = currentIndex === projectsArray.length - 1;
//     const newIndex = isLastSlide ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   }, [currentIndex, projectsArray]);
//   const goToSlide = (slideIndex) => {
//     setCurrentIndex(slideIndex);
//   };
//   const getSlideStylesWithBackground = (slideIndex) => ({
//     ...slideStyles,
//     backgroundColor: `url(${projectsArray[slideIndex].color})`,
//     width: `${parentWidth}px`,
//   });
//   const getSlidesContainerStylesWithWidth = () => ({
//     ...slidesContainerStyles,
//     width: parentWidth * projectsArray.length,
//     transform: `translateX(${-(currentIndex * parentWidth)}px)`,
//   });

//   useEffect(() => {
//     if (timerRef.current) {
//       clearTimeout(timerRef.current);
//     }
//     timerRef.current = setTimeout(() => {
//       goToNext();
//     }, 2000);

//     return () => clearTimeout(timerRef.current);
//   }, [goToNext]);

//   return (
//     <section id="projects" className="projects">
//       <div>
//         <div onClick={goToPrevious} style={leftArrowStyles}>
//           ❰
//         </div>
//         <div onClick={goToNext} style={rightArrowStyles}>
//           ❱
//         </div>
//       </div>
//       <div style={slidesContainerOverflowStyles}>
//         <div style={getSlidesContainerStylesWithWidth()}>
//           {projectsArray.map((project, slideIndex) => {
//             return <ProjectCard key={slideIndex} {...project} />;
//           })}
//         </div>
//       </div>
//       <div style={dotsContainerStyles}>
//         {projectsArray.map((project, slideIndex) => (
//           <div
//             style={dotStyle}
//             key={slideIndex}
//             onClick={() => goToSlide(slideIndex)}
//           >
//             ●
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;

// yt project

// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import useOnScreen from "./Hooks/useOnScreen";
// import cn from "classnames";

// import "./Projects.css";

// const images = [
//   {
//     src:
//       "https://images.unsplash.com/photo-1566204773863-cf63e6d4ab88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1345&q=100",
//     title: "Dracaena Trifasciata",
//     subtitle: "Live the Beauty",
//     category: "Shooting / Adv.Campaing",
//   },
//   {
//     src:
//       "https://images.unsplash.com/photo-1558603668-6570496b66f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=100",
//     title: "Cereus Penuvianus",
//     subtitle: "Live the Beauty",
//     category: "Shooting / Adv.Campaing",
//   },
//   {
//     src:
//       "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=100",
//     title: "Calliope",
//     subtitle: "Live the Beauty",
//     category: "Shooting / Adv.Campaing",
//   },
//   {
//     src:
//       "https://images.unsplash.com/photo-1611145367651-6303b46e4040?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2006&q=100",
//     title: "Golden Pothos",
//     subtitle: "Living Room",
//     category: "Shooting / Adv.Campaing",
//   },
// ];
// function GalleryItem({
//   src,
//   category,
//   subtitle,
//   title,
//   updateActiveImage,
//   index,
// }) {
//   const ref = useRef(null);

//   const onScreen = useOnScreen(ref, 0.5);

//   useEffect(() => {
//     if (onScreen) {
//       updateActiveImage(index);
//     }
//   }, [onScreen, index]);

//   return (
//     <div
//       className={cn("gallery-item-wrapper", { "is-reveal": onScreen })}
//       ref={ref}
//     >
//       <div></div>
//       <div className={"gallery-item"}>
//         <div className="gallery-item-info">
//           <h1 className="gallery-info-title">{title}</h1>
//           <h2 className="gallery-info-subtitle">{subtitle}</h2>
//           <p className="gallery-info-category">{category}</p>
//         </div>
//         <div
//           className="gallery-item-image"
//           style={{ backgroundImage: `url(${src})` }}
//         ></div>
//       </div>
//       <div></div>
//     </div>
//   );
// }

// export default function Gallery({ src, index, columnOffset }) {
//   const [activeImage, setActiveImage] = useState(1);

//   const ref = useRef(null);

//   useEffect(() => {
//     // This does not seem to work without a settimeout
//     setTimeout(() => {
//       console.log(ref.current.offsetWidth);
//       console.log(ref.current.clientWidth);
//       console.log({ current: ref.current });
//       let sections = gsap.utils.toArray(".gallery-item-wrapper");

//       gsap.to(sections, {
//         xPercent: -100 * (sections.length - 1),
//         ease: "none",
//         scrollTrigger: {
//           start: "top top",
//           trigger: ref.current,
//           scroller: "#main-container",
//           pin: true,
//           scrub: 0.5,
//           snap: 1 / (sections.length - 1),
//           end: () => `+=${ref.current.offsetWidth}`,
//         },
//       });
//       ScrollTrigger.refresh();
//     });
//   }, []);

//   const handleUpdateActiveImage = (index) => {
//     setActiveImage(index + 1);
//   };

//   return (
//     <section data-scroll-section className="section-wrapper gallery-wrap">

//       <div className="gallery" ref={ref}>
//         <div className="gallery-counter">
//           <span>{activeImage}</span>
//           <span className="divider" />
//           <span>{images.length}</span>
//         </div>
//         {images.map((image, index) => (
//           <GalleryItem
//             key={src}
//             index={index}
//             {...image}
//             updateActiveImage={handleUpdateActiveImage}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

// import "./Projects.css";
// import { useRef, useState, useEffect } from "react";
// import gsap from "gsap";
// import ScrollTriger from "gsap/ScrollTrigger";
// import cn from "classnames";
// import { Col, Container, Row } from "react-bootstrap";
// import { AiFillGithub, AiOutlineArrowRight } from "react-icons/ai";
// import useOnScreen from './Hooks/useOnScreen'

// import mockup from "../Assets/mockup.png";

// const projectsArray = [
//   {
//     number: "01",
//     title: "Plant app",
//     description:
//       "The application is created for people, who wamts to sell or buy plants from others. Plant app allows you to create your own account, sell plants by adding an advertisement about it and add reviews to other profiles.",
//     tools: "JS",
//     image: mockup,
//     gitHub: "https://github.com/ksliwka",
//     website: "sth",
//   },
//   {
//     number: "02",
//     title: "Portfolio",
//     description:
//       "The application uses a gamification system to activate and motivate the user to learn English, who, as a reward for learning and overcoming challenges, wins trophies and gains access to the next levels of the game. The application has a built-in test creation mechanism and in addition to overcoming story challenges, it offers the user to create their own challenges based on the provided materials.",
//     tools: "JS",
//     image: mockup,
//     gitHub: "https://github.com/ksliwka",
//     website: "sth",
//   },
//   {
//     number: "03",
//     title: "Portfolio",
//     description:
//       "The application uses a gamification system to activate and motivate the user to learn English, who, as a reward for learning and overcoming challenges, wins trophies and gains access to the next levels of the game. The application has a built-in test creation mechanism and in addition to overcoming story challenges, it offers the user to create their own challenges based on the provided materials.",
//     tools: "JS",
//     image: mockup,
//     gitHub: "https://github.com/ksliwka",
//     website: "sth",
//   },
// ];

// export const ProjectCard = ({
//   number,
//   title,
//   description,
//   image,
//   gitHub,
//   website,
//   tools,
//   updateActiveImage,
//   index
// }) => {
//   const ref = useRef(null);
//   const onScreen = useOnScreen(ref, 0.5)

//   useEffect(()=> {
//     if(onScreen){
//       updateActiveImage(index);
//     }
//   }, [onScreen, index])

//   return (
//     <div classname={cn('project-item-wrapper', {'is-reveal': onScreen})} ref={ref}>
//       <div></div>
//     <Container className="project-container">
//       <h2 className="project-number">-{number}</h2>
//       <h1 className="project-background-title">{title}</h1>
//       <Row className="justify-content-center  d-flex align-items-center">
//         <Col className="">
//           <img src={image} />
//         </Col>
//       </Row>

//       <Row className="mx-5">
//         <Col md={8}>
//           <div className="project-text">
//             {/* <h4 className="project-title">{title}</h4> */}
//             <h3>About</h3>
//             <p className="project-description">{description}</p>

//             <p className="project-tools">{tools}</p>
//           </div>
//         </Col>
//         <Col md={4}>
//           <div className="project-buttons d-grid gap-3">
//             <a href={gitHub} type="button">
//               Code <AiOutlineArrowRight />
//             </a>

//             <a href={website} type="button">
//               Webiste <AiOutlineArrowRight />
//             </a>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//     <div></div>
//     </div>
//   );
// };

// export const Projects = () => {
//   const [activeImage, setActiveImage] = useState(1)
//   const ref = useRef(null)

//   useEffect(()=> {
// setTimeout(()=> {


//     const sections = gsap.utils.toArray('.project-item-wrapper')
//     gsap.to(sections,{
//       xPercent: -100 * (sections.length-1),
//       ease: 'none',
//       scrollTrigger: {
//         start: 'top top',
//         triger: ref.current,
//         scroll: '#main-container',
//         pin: true,
//         scrub: 0.5,
//         span: 1/(sections.length-1),
//         end: () => `+=${ref.current.offsetWidth}`
//       }


//     })
//     // ScrollTriger.refresh()
//   })
//   }, [])

//   return (
//     <section id="projects" className="projects" data-scroll-section >
//        <div className="gallery" ref={ref}>
//          <div className="gallery-counter">
//            <span>{activeImage}</span>
//            <span className="divider" />
//            <span>{projectsArray.length}</span>
//          </div>
//       <div className="project-box">
//         {projectsArray.map((project, index) => {
//           return <ProjectCard key={project.image} index={index} {...project} updateActiveImage={(image) => setActiveImage(index + 1)} />;
//         })}
//       </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;


// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import useOnScreen from "./Hooks/useOnScreen";
// import cn from "classnames";

// import "./Projects.css";

// const images = [
//   {
//     src:
//       "https://images.unsplash.com/photo-1566204773863-cf63e6d4ab88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1345&q=100",
//     title: "Dracaena Trifasciata",
//     subtitle: "Live the Beauty",
//     category: "Shooting / Adv.Campaing",
//   },
//   {
//     src:
//       "https://images.unsplash.com/photo-1558603668-6570496b66f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=100",
//     title: "Cereus Penuvianus",
//     subtitle: "Live the Beauty",
//     category: "Shooting / Adv.Campaing",
//   },
//   {
//     src:
//       "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=100",
//     title: "Calliope",
//     subtitle: "Live the Beauty",
//     category: "Shooting / Adv.Campaing",
//   },
//   {
//     src:
//       "https://images.unsplash.com/photo-1611145367651-6303b46e4040?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2006&q=100",
//     title: "Golden Pothos",
//     subtitle: "Living Room",
//     category: "Shooting / Adv.Campaing",
//   },
// ];
// function GalleryItem({
//   src,
//   category,
//   subtitle,
//   title,
//   updateActiveImage,
//   index,
// }) {
//   const ref = useRef(null);

//   const onScreen = useOnScreen(ref, 0.5);
  
//   useEffect(() => {
//     if (onScreen) {
//       updateActiveImage(index);
//     }
//   }, [onScreen, index]);

//   return (
//     <div
//       className={cn("gallery-item-wrapper", { "is-reveal": onScreen })}
//       ref={ref}
//     >
//       <div></div>
//       <div className={"gallery-item"}>
//         <div className="gallery-item-info">
//           <h1 className="gallery-info-title">{title}</h1>
//           <h2 className="gallery-info-subtitle">{subtitle}</h2>
//           <p className="gallery-info-category">{category}</p>
//         </div>
//         <div
//           className="gallery-item-image"
//           style={{ backgroundImage: `url(${src})` }}
//         ></div>
//       </div>
//       <div></div>
//     </div>
//   );
// }

// export default function Projects({ src, index, columnOffset }) {
//   const [activeImage, setActiveImage] = useState(1);

//   const ref = useRef(null);

//   useEffect(() => {
//     // This does not seem to work without a settimeout
//     setTimeout(() => {
//       console.log(ref.current.offsetWidth);
//       console.log(ref.current.clientWidth);
//       console.log({ current: ref.current });
//       const sections = gsap.utils.toArray(".gallery-item-wrapper");

//       gsap.to(sections, {
//         xPercent: -100 * (sections.length - 1),
//         ease: "none",
//         scrollTrigger: {
          
//           trigger: '#main-container',
//           scroller: "#project-container",
//           pin: true,
//           scrub: 1,
//           end: '+=3000'
//         },
//       });
//       ScrollTrigger.refresh();
//     });
//   }, []);

//   const handleUpdateActiveImage = (index) => {
//     setActiveImage(index + 1);
//   };

//   return (
//     <section data-scroll-section  className="section-wrapper gallery-wrap" id="#project-container">

//       <div className="gallery" ref={ref}>
//         <div className="gallery-counter">
//           <span>{activeImage}</span>
//           <span className="divider" />
//           <span>{images.length}</span>
//         </div>
//         {images.map((image, index) => (
//           <GalleryItem
//             key={src}
//             index={index}
//             {...image}
//             updateActiveImage={handleUpdateActiveImage}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap  from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import useOnScreen from "./Hooks/useOnScreen";
import cn from "classnames";

import "./Projects.css";
import mockup from "../Assets/mockup.png";

gsap.registerPlugin(ScrollTrigger);

const images = [
  {
    id: 1,
    src: mockup,
    title: "Dracaena Trifasciata",
    subtitle: "Live the Beauty",
    category: "Shooting / Adv.Campaing",
  },
  {
    id: 2,
    src: mockup,
    title: "Cereus Penuvianus",
    subtitle: "Live the Beauty",
    category: "Shooting / Adv.Campaing",
  },
  {
    id: 3,
    src: mockup,
    title: "Calliope",
    subtitle: "Live the Beauty",
    category: "Shooting / Adv.Campaing",
  },
  {
    id: 4,
    src: mockup,
    title: "Golden Pothos",
    subtitle: "Living Room",
    category: "Shooting / Adv.Campaing",
  },
];
function GalleryItem({
  src,
  category,
  subtitle,
  title,
  // updateActiveImage,
  index,
}) {
  const ref = useRef(null);

  const onScreen = useOnScreen(ref, 0.5);
  
  // useEffect(() => {
  //   if (onScreen) {
  //     updateActiveImage(index);
  //   }
  // }, [onScreen, index]);

  return (
    <div
      className={cn("gallery-item-wrapper", { "is-reveal": onScreen })}
      ref={ref}
    >
      <div></div>
      <div className="gallery-item">
        <div className="gallery-item-info">
          <h1 className="gallery-info-title">{title}</h1>
          <h2 className="gallery-info-subtitle">{subtitle}</h2>
          <p className="gallery-info-category">{category}</p>
        </div>
        <div
          className="gallery-item-image"
          style={{ backgroundImage: `url(${src})` }}
        ></div>
      </div>
      <div></div>
    </div>
  );
}

export default function Projects({ src, index, columnOffset }) {
  const [activeImage, setActiveImage] = useState(1);


  const component = useRef();
  const slider = useRef();



  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".gallery-item-wrapper");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          start: 'top top',
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.current.offsetWidth,
          markers: {startColor: "green", endColor: "red", fontSize: "12px"}
        }
      });
    }, component);
    return () => ctx.revert();
  });

  // const handleUpdateActiveImage = (index) => {
  //   setActiveImage(index + 1);
  // };

  return (
    <section   className="section-wrapper gallery-wrap" id="#project-container" ref={component}>

      <div className="gallery" ref={slider}>
        <div className="gallery-counter">
          <span>{activeImage}</span>
          <span className="divider" />
          <span>{images.length}</span>
        </div>
        {images.map((image, index) => (
          <GalleryItem
            key={image.id}
            index={index}
            {...image}
            // updateActiveImage={handleUpdateActiveImage}
          />
        ))}
      </div>
    </section>
  );
}