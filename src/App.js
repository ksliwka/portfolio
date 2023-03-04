import { Fragment } from "react";

import Tools from "./components/Tools";
import NavBar from "./components/NavBar";
import HomePage from "./components/Home";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  return (
    <Fragment>
      <NavBar />
      <HomePage />
      <Tools />
      <Projects />
      <Contact />
    </Fragment>
  );
}

export default App;
