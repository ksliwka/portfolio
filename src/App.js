import {  useRef } from "react";

import Tools from "./components/Tools";
import NavBar from "./components/NavBar";
import HomePage from "./components/Home";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
function App() {
  const ref = useRef(null);

  let container = useRef(null);

  return (
    <div data-scroll-container ref={(el) => (container = el)}>
      <NavBar />
      <HomePage />
      <Tools />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
