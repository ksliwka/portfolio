import React, {  useRef } from "react";

import useOnScreen from "./Hooks/useOnScreen";
import cn from "classnames";
import { AiFillGithub, AiOutlineArrowRight } from "react-icons/ai";
import {Row, Col, Container} from 'react-bootstrap'


import "./Projects.css";

function GalleryItem({
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
  }

  const ref = useRef();

  const onScreen = useOnScreen(ref);

  return (


    <div
      className={cn("gallery-item-wrapper", { "is-reveal": onScreen })}
      ref={ref}
      style={styles}
    >
      
      <div></div>
      
      <Container className="gallery-item " >

      
      <h1 className="project-background-title">{title}</h1>
      
        <div className="gallery-item-info">
        <h2 className="project-number "    >{number}</h2>
       
        <Row>
        <Col md={8}>
        
          <div className="project-text" id='project-description'>
            
          
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
        </div>
        <div
          className="gallery-item-image"
          style={{ backgroundImage: `url(${src})` }}
        ></div>
      </Container>
      <div></div>
    </div>
  );
}

export default GalleryItem