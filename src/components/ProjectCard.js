import React, { useRef } from "react";

import useOnScreen from "./Hooks/useOnScreen";
import cn from "classnames";
import { AiFillGithub, AiOutlineArrowRight } from "react-icons/ai";
import { Row, Col, Container } from "react-bootstrap";
import TextCollapse from "./Hooks/TextCollapse";
import "./Projects.css";

function ProjectItem({
  srclg,
  srcmd,
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

      <div className="project-item  ">
        <div
          className="project-image d-none d-md-block"
          style={{ backgroundImage: `url(${srclg})` }}
        ></div>
        <div
          className="project-image project-image-title d-block d-md-none"
          // style={{ backgroundImage: `url(${srcmd})` }}
        >
          {title}
          </div>
        <h1 className="project-background-title d-none d-lg-block">{title}</h1>

        <div className="project-info">
          <h2 className="project-number d-none d-lg-block">{number}</h2>

          <Row >
            <Col md={8}>
              <div className="project-text " id="project-description">
                <h3 className="d-none d-lg-block">About</h3>
                <h3 className="d-block d-lg-none">{title}</h3>

                
                <p className="project-description  d-none d-md-block">
                  {description}
                </p>
                <div className="d-block d-md-none">
                  <TextCollapse
                    text={description}
                    maxLength={10}
                  ></TextCollapse>
                </div>
                <p className="project-tools">{tools}</p>
              </div>
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
      </div>
      <div></div>
    </div>
  );
}

export default ProjectItem;
