import { useState, useEffect, useRef } from "react";

import gsap from "gsap";
import SplitText from "../utils/Split3.min.js";
import useOnScreen from "./Hooks/useOnScreen";

import { Container, Row, Col } from "react-bootstrap";
import "./Contact.css";
import cn from "classnames";

function Contact() {
  const ref = useRef();
  const [reveal, setReveal] = useState(false);

  const onScreen = useOnScreen(ref, 0.5);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {
    if (reveal) {
      const split = new SplitText("#contact-text", {
        type: "lines",
        linesClass: "lineChildren",
      });

      gsap.to(split.lines, {
        duration: 2,
        y: 0,
        opacity: 1,
        stagger: 0.1,
        ease: "back",
      });
    }
  }, [reveal]);

  return (
    <section className="contact" id="contact" data-scroll-section>
      <Container>
        <div
          id="contact-text"
          className={cn({ "is-reveal": reveal })}
          data-scroll
          ref={ref}
        >
          <Row>
            <h2>CONTACT</h2>
            <Col></Col>
            <Col sm={12} md={6}>
              <h4 className="d-md-block d-none mb-4 ps-2">Let's connect</h4>
              <p>
                Email:{" "}
                <div className="new-line">sliwkakatarzyna12@gmail.com</div>
              </p>
              <p>
                Linkedin:{" "}
                <div className="new-line">
                  https://www.linkedin.com/in/katarzyna-śliwka-460660256/
                </div>
              </p>
              <p>
                Github:{" "}
                <div className="new-line">https://github.com/ksliwka</div>
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
