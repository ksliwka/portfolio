import  "./Home.css";
import Circle from "./Circle";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { useState, useEffect } from "react";

import { Container, Row, Col } from "react-bootstrap";

function HomePage() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ['KATARZYNA ŚLIWKA'];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

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
      <div id="home" classname="home-container">
        <Container >
          <Row className="align-items-center home-row">
            <Col xs={12} md={6} xl={7}>
              <h1 className='header'>
                Hi! My name is Katarzyna and I am Front-End Developer.
              </h1>
              <p className='header-p'>
                PORTFOLIO BY <span className="wrap">{text}</span>{" "}
              </p>
              <a>
                <AiFillLinkedin className="social-icon" />
              </a>

              <a className="icon ms-2">
                <AiFillGithub className="social-icon" />
              </a>

              <a className="icon ms-2">
                <AiOutlineMail className="social-icon" />
              </a>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <Circle className="circle" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default HomePage;
