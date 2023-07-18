import Tools from "./components/Tools";
import NavBar from "./components/NavBar";
import HomePage from "./components/Home";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ScrollTopButton from "./components/ScrollTopButton";

function App() {
  return (
    <div data-scroll-container>
      <NavBar />
      <HomePage />
      <Tools />
      <Projects />
      <Contact />
      <Footer />
      <ScrollTopButton />
    </div>
  );
}

export default App;
