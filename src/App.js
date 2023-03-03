import { Fragment } from "react";


import NavBar from "./components/NavBar";
import HomePage from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <Fragment>
      <NavBar />
      <HomePage />
      <About />
      <Projects />
      <Contact />
    </Fragment>
  );
}

export default App;
