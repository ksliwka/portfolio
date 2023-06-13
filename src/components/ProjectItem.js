import React, { useRef } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import cn from "classnames";
import "./Projects.css";
import { Row, Col } from "react-bootstrap";
import TextCollapse from "./Hooks/TextCollapse";
import useOnScreen from "./Hooks/useOnScreen";

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
      <div className="project-small-title  d-block d-lg-none">{title}</div>
      <div></div>
      <div className="project-item  ">
        <div
          className="project-image d-none d-lg-block"
          style={{ backgroundImage: `url(${src})` }}
        ></div>
        <h1 className="project-background-title d-none d-lg-block">{title}</h1>

        <div className="project-info">
          <h2 className="project-number d-none d-lg-block">{number}</h2>
          <Row>
            <Col lg={8}>
              <div className="project-text " id="project-description">
                <h3 className="d-none d-lg-block">About</h3>

                <p className="project-description  d-none d-lg-block">
                  {description}
                </p>
                <div className="d-block d-lg-none">
                  <TextCollapse
                    text={description}
                    maxLength={10}
                  ></TextCollapse>
                </div>
                <p className="project-tools">{tools}</p>
              </div>
            </Col>
            <Col lg={4}>
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
