import classes from "./Home.module.css";
import Circle from "./Circle";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";

import { Container, Row, Col } from "react-bootstrap";

function HomePage() {
  return (
    <>
      <div className="banner" id="home">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <h1 className="tagline">
                Hi! My name is Katarzyna and I am Frontend Developer.
              </h1>
              <p className="fs-6 mt-3">
                PORTFOLIO BY <span className="wrap">KATARZYNA ŚLIWKA</span>{" "}
              </p>
              <a>
                <AiFillLinkedin className="icon" />
              </a>

              <a className="icon">
                <AiFillGithub className="icon" />
              </a>

              <a className="icon">
                <AiOutlineMail className="icon" />
              </a>
            </Col>
            <Col>
              <Circle className="img-fluid" />
            </Col>
          </Row>
        </Container>

        <a className={classes.scroll_down}>Scroll Down</a>
      </div>
    </>
  );
}

export default HomePage;
