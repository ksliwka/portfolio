import { Fragment } from "react";

import Tools from "./components/Tools";
import NavBar from "./components/NavBar";
import HomePage from "./components/Home";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer"

function App() {
  return (
    <Fragment>
      <NavBar />
      <HomePage />
      <Tools />
      <Projects />
      <Contact />
      <Footer/>
    </Fragment>
  );
}

export default App;
