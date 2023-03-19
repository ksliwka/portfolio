import { Container, Col} from "react-bootstrap";
import './ToolCard.css'

const ToolCard = ({ icon, title, field }) => {
  return (
    <Container className="mt-5">
      <Col>
        <div className="card-bx">
          <ul>
            <li className="item">{icon}</li>
            <li>{title}</li>
            <li>{field}</li>
          </ul>
        </div>
      </Col>
    </Container>
  );
};

export default ToolCard;
