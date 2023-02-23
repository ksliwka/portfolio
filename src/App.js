import { Fragment } from "react";

import MainNavigation from "./components/Header";
import HomePage from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <Fragment>
      <MainNavigation />
      <HomePage />
      <About />
      <Projects />
      <Contact />
    </Fragment>
  );
}

export default App;
