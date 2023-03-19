import {useRef} from 'react'
import { Col, Container, Row } from "react-bootstrap";
import "./ProjectCard.css";
import { AiFillGithub, AiOutlineArrowRight } from "react-icons/ai";




export const ProjectCard = ({
  number,
  title,
  description,
  image,
  gitHub,
  website,
  tools,
}) => {
  const ref = useRef(null);
  return (
    <Container className="project-container">
      <h2 className="project-number">-{number}</h2>
      <h1 className="project-background-title">{title}</h1>
      <Row className="justify-content-center  d-flex align-items-center">
        <Col className="">
          <img src={image} />
        </Col>
      </Row>

      <Row className="mx-5">
        <Col md={8}>
          <div className="project-text">
            {/* <h4 className="project-title">{title}</h4> */}
            <h3>About</h3>
            <p className="project-description">{description}</p>

            <p className="project-tools">{tools}</p>
          </div>
        </Col>
        <Col md={4} >
          <div className="project-buttons d-grid gap-3">
            <a href={gitHub} type="button">
              Code <AiOutlineArrowRight />
            </a>

            <a href={website} type="button">
              Webiste <AiOutlineArrowRight />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};


export default ProjectCard