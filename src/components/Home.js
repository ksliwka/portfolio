import "./Home.css";
import Scroll from "./Scroll";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { useEffect } from "react";
import gsap from "gsap";
import SplitText from "../utils/Split3.min.js";

import { Container, Row, Col } from "react-bootstrap";

function HomePage() {
  useEffect(() => {
    const split = new SplitText("#header-text", {
      type: "lines",
      linesClass: "lineChildren",
    });

    gsap.to(split.lines, {
      duration: 1.5,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "back",
    });
  }, []);

  return (
    <>
      <section id="home" className="home-container">
        <div className="scroll">
          <Scroll />
        </div>
        <Container>
          <div className="home-circle "></div>
          <div className="home-circle-2 "></div>
          <Row className="align-items-sm-center  home-row">
            <Col xs={10} md={9} xl={10}>
              <div id="header-text">
                <h1 className="header">
                  Hello, My name is <span>Katarzyna </span>and I am Front-End
                  Developer.
                </h1>
                <p className="header-p d-none d-sm-block">
                  PORTFOLIO BY KATARZYNA ŚLIWKA{" "}
                </p>
                <a href="https://www.linkedin.com/in/katarzyna-śliwka-460660256/">
                  <AiFillLinkedin className="home-icon" />
                </a>

                <a className="ms-2" href="https://github.com/ksliwka">
                  <AiFillGithub className="home-icon" />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default HomePage;
