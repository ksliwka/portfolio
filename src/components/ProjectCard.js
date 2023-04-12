import React, { useRef } from "react";

import useOnScreen from "./Hooks/useOnScreen";
import cn from "classnames";
import { AiFillGithub, AiOutlineArrowRight } from "react-icons/ai";
import { Row, Col, Container, Image } from "react-bootstrap";
import TextCollapse from "./Hooks/TextCollapse";
import "./Projects.css";

function ProjectItem({
  src,
  tools,
  title,
  description,
  number,
  gitHub,
  website,
  color,
}) {
  const styles = {
    backgroundColor: `${color}`,
  };

  const ref = useRef();

  const onScreen = useOnScreen(ref);

  return (
    <div
      className={cn("project-item-wrapper", { "is-reveal": onScreen })}
      ref={ref}
      style={styles}
    >
      <div></div>

      <Container className="project-item  ">
         <Image
          className="project-image "
          style={{ backgroundImage: `url(${src})` }}
        ></Image>
        <h1 className="project-background-title d-none d-lg-block">{title}</h1>

        <div className="project-info">
          <h2 className="project-number d-none d-lg-block">{number}</h2>

          <Row className="">
            <Col md={8}>
              <div className="project-text " id="project-description">
                <h3 className="d-none d-lg-block">About</h3>
                <h3 className="d-block d-lg-none">{title}</h3>
                {/* <button className="d-block d-md-none open-description-btn" >About</button> */}
                {/* <div className="d-none d-md-block"> */}
                <TextCollapse text={description} maxLength={10}></TextCollapse>
                <p className="project-description  d-none d-md-block">{description}</p>

                <p className="project-tools">{tools}</p>
                </div>
              {/* </div> */}
            </Col>
            <Col md={4}>
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
        </div>
       
      </Container>
      <div></div>
    </div>
  );
}

export default ProjectItem;
