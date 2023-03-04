import "./Tools.css";
import { Container, Row, Col } from "react-bootstrap";
import Circle from "./Circle";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import {
  DiJavascript1,
  DiReact,
  DiCss3,
  DiHtml5,
  DiMongodb,
  DiBootstrap,
  DiGithubBadge,
  DiNodejsSmall,
  DiNpm,
} from "react-icons/di";

import {
  SiRedux,
  SiExpress,
  SiReactrouter,
  SiAdobeillustrator,
  SiAdobeindesign,
  SiAdobephotoshop,
} from "react-icons/si";

export const Tools = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="tools" id="tools">
      <Container>
        <Row>
          <Col>
            <div className="tool-bx">
              <h2 className="mb-5">Experience with:</h2>
              <Circle className="tool-circle"/>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="tool-slider"
              >
                <div className="item">
                  <DiHtml5 className="icon"/>
                  <h5>HTML</h5>
                  <p>Front-End</p>
                </div>
                <div className="item">
                  <DiCss3 className="icon"/>
                  <h5>CSS</h5>
                  <p>Front-End</p>
                </div>
                <div className="item">
                  <DiJavascript1 className="icon"/>
                  <h5>JavaScript</h5>
                  <p>Front-End</p>
                </div>
                <div className="item">
                  <DiReact className="icon"/>
                  <h5>React</h5>
                  <p>Front-End</p>
                </div>
                <div className="item">
                  <SiRedux className="icon"/>
                  <h5>React Redux</h5>
                  <p>Front-End</p>
                </div>
                <div className="item">
                  <DiBootstrap className="icon"/>
                  <h5>Bootstrap</h5>
                  <p>Front-End</p>
                </div>
                <div className="item">
                  <SiReactrouter className="icon"/>
                  <h5>React Router</h5>
                  <p>Front-End</p>
                </div>
                <div className="item">
                  <DiNodejsSmall className="icon"/>
                  <h5>Node</h5>
                  <p>Back-End</p>
                </div>
                <div className="item">
                  <DiNpm className="icon"/>
                  <h5>NPM</h5>
                  <p>Back-End</p>
                </div>
                <div className="item">
                  <SiExpress className="icon"/>
                  <h5>Express</h5>
                  <p>Back-End</p>
                </div>
                <div className="item">
                  <DiMongodb className="icon"/>
                  <h5>MongoDB</h5>
                  <p>Database</p>
                </div>
                <div className="item">
                  <DiGithubBadge className="icon"/>
                  <h5>Git/GitHub</h5>
                  <p>Other</p>
                </div>
                <div className="item">
                  <SiAdobeillustrator className="icon"/>
                  <h5>Adobe Illustrator</h5>
                  <p>Design</p>
                </div>
                <div className="item">
                  <SiAdobephotoshop className="icon"/>
                  <h5>Adobe Photoshop</h5>
                  <p>Design</p>
                </div>
                <div className="item">
                  <SiAdobeindesign className="icon"/>
                  <h5>Adobe Indesign</h5>
                  <p>Design</p>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Tools;
