import { Container, Col, Card, ListGroup } from "react-bootstrap";

const ToolCard = ({ icon, title, field }) => {
  return (
    <Container className="mt-5">
      <Col>
        <Card border="dark " className="tool-card">
          <ListGroup >
            <ListGroup.Item className="item">{icon}</ListGroup.Item>
            <ListGroup.Item>{title}</ListGroup.Item>
            <ListGroup.Item>{field}</ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Container>
  );
};

export default ToolCard;
