import "./Home.css";
// import Circle from "./Circle";
import Scroll from "./Scroll";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "../utils/Split3.min.js";

import { Container, Row, Col } from "react-bootstrap";

function HomePage() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["KATARZYNA ŚLIWKA"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    const split = new SplitText("#header-text", {
      type: "lines",
      linesClass: "lineChildren",
    });
    const splitParent = new SplitText("#header-text", {
      type: "lines",
      linesClass: "lineParent",
    });
    gsap.to(split.lines, {
      duration: 1.5,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "back",
    });
  }, []);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

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
                  PORTFOLIO BY <span className="wrap">{text}</span>{" "}
                </p>
                <a>
                  <AiFillLinkedin className="home-icon" />
                </a>

                <a className="icon ms-2">
                  <AiFillGithub className="home-icon" />
                </a>

                <a className="icon ms-2">
                  <AiOutlineMail className="home-icon" />
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
