import "./Tools.css";
import ToolCard from "./ToolCard";
import { Container, Row, Col, Card } from "react-bootstrap";

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

const toolsArray = [
  {
    icon: <DiHtml5 className="icon" />,
    title: "HTML",
    field: "Front-End",
  },
  {
    icon: <DiCss3 className="icon" />,
    title: "CSS",
    field: "Front-End",
  },
  {
    icon: <DiJavascript1 className="icon" />,
    title: "JavaScript",
    field: "Front-End",
  },
  {
    icon: <DiReact className="icon" />,
    title: "React",
    field: "Front-End",
  },
  {
    icon: <SiRedux className="icon" />,
    title: "React Redux",
    field: "Front-End",
  },
  {
    icon: <DiBootstrap className="icon" />,
    title: "Bootstrap",
    field: "Front-End",
  },
  {
    icon: <SiReactrouter className="icon" />,
    title: "React Router",
    field: "Front-End",
  },
  {
    icon: <DiNodejsSmall className="icon" />,
    title: "Node",
    field: "Back-End",
  },
  {
    icon: <DiNpm className="icon" />,
    title: "NPM",
    field: "Back-End",
  },
  {
    icon: <SiExpress className="icon" />,
    title: "Express",
    field: "Back-End",
  },
  {
    icon: <DiMongodb className="icon" />,
    title: "MongoDB",
    field: "Database",
  },
  {
    icon: <DiGithubBadge className="icon" />,
    title: "Git/GitHub",
    field: "Other",
  },
  {
    icon: <SiAdobeillustrator className="icon" />,
    title: "Adobe Illustrator",
    field: "Design",
  },
  {
    icon: <SiAdobephotoshop className="icon" />,
    title: "Adobe Photoshop",
    field: "Design",
  },
  {
    icon: <SiAdobeindesign className="icon" />,
    title: "Adobe Indesign",
    field: "Design",
  },
];

export const Tools = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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
    <section className="tools" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="tool-circle1"></div>
            <div className="tool-bx">
              <h2 className="mb-5">Experience with:</h2>

              <Carousel
                responsive={responsive}
                infinite={true}
                className="tool-slider"
              >
                {toolsArray.map((tool, index) => {
                  return <ToolCard key={index} {...tool} />;
                })}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Tools;
