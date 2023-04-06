import { Fragment, useEffect, useState, useRef } from "react";
import Spinner from 'react-bootstrap/Spinner';

import Tools from "./components/Tools";
import NavBar from "./components/NavBar";
import HomePage from "./components/Home";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer"
// import useLocoScroll from "./components/Hooks/useLocoScroll";
import LocomotiveScroll from 'locomotive-scroll';
function App() {
  const ref = useRef(null);

  // useLocoScroll()



  // if (typeof window === "undefined" || !window.document) {
  //   return null;
  // }
  // const options = {
  //   smooth: true,
  // } 

  let container = useRef(null);
    
  useEffect(() => {
     
     new LocomotiveScroll({
        el: container,
        smooth: true,
        lerp: .06,
        multiplier: .5
     });

  }, []);

  return (

      // <LocomotiveScrollProvider options={options} containerRef={ref}>
      <div  data-scroll-container  ref={el => container = el} >
      <NavBar />
      <HomePage />
      <Tools />
      <Projects />
      <Contact />
      <Footer/>
      </div>
      // </LocomotiveScrollProvider>

      
   
  );
}

export default App;
