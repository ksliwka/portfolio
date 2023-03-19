import { Fragment, useEffect, useState, useRef } from "react";
import Spinner from 'react-bootstrap/Spinner';

import Tools from "./components/Tools";
import NavBar from "./components/NavBar";
import HomePage from "./components/Home";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer"
import useLocoScroll from "./components/Hooks/useLocoScroll";

function App() {
  const ref = useRef(null);
  const [preloader, setPreload] = useState(true);


  useLocoScroll(!preloader)

  useEffect(() => {
    if (!preloader && ref) {
      if (typeof window === "undefined" || !window.document) {
        return;
      }
    }
  }, [preloader]);

  const [timer, setTimer] = useState(3);

  const id = useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreload(false);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
    return () => clear();
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  // if (typeof window === "undefined" || !window.document) {
  //   return null;
  // }

  return (<>
    {preloader 
    ? <div className='loader-wrapper absolute'><Spinner animation="grow" variant="light" /></div> :
    <div data-scroll-container ref={ref} id='main-container' className="main-container">
      <NavBar />
      <HomePage />
      <Tools />
      <Projects />
      <Contact />
      <Footer/>
    </div>
  }
  </>
  );
}

export default App;
