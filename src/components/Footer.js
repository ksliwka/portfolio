import { Container, Row } from "react-bootstrap";
import "./Footer.css";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <section className="footer" id="footer">
      <Container>
        <Row className="text-center footer-box">
          <h2>
            THANKS FOR <span className="outline-txt">SCROLLING</span> DOWN.
          </h2>
          <div>
            <a>
              <AiFillLinkedin className="social-icon" />
            </a>
            <a>
              <AiFillGithub className="social-icon" />
            </a>
            <a>
              <AiOutlineMail className="social-icon" />
            </a>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
