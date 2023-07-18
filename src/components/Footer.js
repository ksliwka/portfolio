import { Container, Row } from "react-bootstrap";
import "./Footer.css";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <section className="footer" id="footer" data-scroll-section>
      <Container className="op-class">
        <Row className="text-center footer-box">
          <h2 > 
            THANKS FOR <span className="outline-txt">SCROLLING</span> DOWN.
          </h2>
          <div>
            <a href="https://www.linkedin.com/in/katarzyna-śliwka-460660256/">
              <AiFillLinkedin className="social-icon" />
            </a>
            <a href="https://github.com/ksliwka">
              <AiFillGithub className="social-icon" />
            </a>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
