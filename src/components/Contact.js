import { Container, Row, Col } from "react-bootstrap";
import "./Contact.css";

function Contact() {


  return (
    <section className="contact" id="contact" data-scroll-section>
      <Container>
        <div
          id="contact-text"
          data-scroll
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
