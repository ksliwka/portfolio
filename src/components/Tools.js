import "./Tools.css";
import ToolCard from "./ToolCard";
import ToolCardSmall from "./ToolCardSmall";
import { Container, Row, Col } from "react-bootstrap";

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
  SiNextdotjs,
  SiTypescript,
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
    icon: <SiTypescript className="icon" />,
    title: "TypeScript",
    field: "Front-End",
  },
  {
    icon: <SiNextdotjs className="icon" />,
    title: "Next.js",
    field: "Front-End, Back-End",
  },
  {
    icon: <DiNodejsSmall className="icon" />,
    title: "Node.js",
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
      breakpoint: { max: 3000, min: 992 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 992, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 767, min: 576 },
      items: 0,
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 0,
    },
  };

  return (
    <section className="tools" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="home-circle "></div>
            <div className="tool-bx">
              <h1 className="tools-title">About</h1>
              <p data-scroll className="text-start text-md-center">
                Hello and welcome to my portfolio website! My name is Katarzyna
                Śliwka and I am a passionate front-end developer who is eager to
                start their career in the industry. I am excited to share my
                portfolio with you and demonstrate my ability to build dynamic,
                user-friendly web applications. Thank you for taking the time to
                explore my work. If you're interested in working with me or have
                any questions, feel free to reach out. Let's create something
                amazing together!
              </p>
              <div className="d-block d-md-none mb-5">
                <ToolCardSmall toolsArray={toolsArray} />
              </div>
              <h5 className="mb-5 d-none d-lg-block skills-text">Skills</h5>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="tool-slider "
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
