import { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Contact.css";
import gsap from "gsap";
import SplitText from "../utils/Split3.min.js";
import useOnScreen from "./Hooks/useOnScreen";
import cn from "classnames";

// import emailjs from "@emailjs/browser";

// dotenv.config();

function Contact() {

  const ref = useRef();
  const [reveal, setReveal] = useState(false);

  // const form = useRef();

  const onScreen = useOnScreen(ref, 0.5);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  // const formInitialDetails = {
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   phone: "",
  //   message: "",
  // };

  // const [formDetails, setFormDetails] = useState(formInitialDetails);
  // const [buttonText, setButtonText] = useState("Send");
  // const [status, setStatus] = useState({});

  // const onFormUpdate = (category, value) => {
  //   setFormDetails({
  //     ...formDetails,
  //     [category]: value,
  //   });
  // };


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
            <Col>

            </Col>
            <Col sm={12} md={6}>
            <h4 className="d-md-block d-none mb-4 ps-2">Let's connect</h4>
            <p>Email: <div className='new-line'>sliwkakatarzyna12@gmail.com</div></p>
            <p>Linkedin: <div className='new-line'>https://www.linkedin.com/in/katarzyna-śliwka-460660256/</div></p>
            <p>Github: <div className='new-line'>https://github.com/ksliwka</div></p>
            </Col>

            {/* <Col sm={12} md={6}>
              <form onSubmit={handleSubmit} ref={form}>
                <Col className="px-1">
                  <input
                    name="firstName"
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  ></input>
                </Col>
                <Col className="px-1">
                  <input
                    name="lastName"
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  ></input>
                </Col>
                <Col className="px-1">
                  <input
                    name="email"
                    type="email"
                    value={formDetails.email}
                    placeholder="Email Address"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  ></input>
                </Col>

                <Col>
                  <textarea
                    name="message"
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  ></textarea>
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {status.message && (
                  <Col>
                    <p
                      className={
                        status.success === false ? "danger" : "success"
                      }
                    >
                      {status.message}
                    </p>
                  </Col>
                )}
              </form>
            </Col> */}
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
