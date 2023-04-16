import { Container, Col, Row } from "react-bootstrap";
import "./ToolCardSmall.css";

const ToolCardSmall = (props) => {
  const toolsArray = props.toolsArray;

  const getToolTitlesByField = (toolsArray, field) => {
    return toolsArray
      .filter((tool) => tool.field === field)
      .map((tool) => tool.title);
  };

  const frontEndTitles = getToolTitlesByField(toolsArray, "Front-End");
  const backEndTitles = getToolTitlesByField(toolsArray, "Back-End");
  const databaseTitles = getToolTitlesByField(toolsArray, "Database");
  const designTitles = getToolTitlesByField(toolsArray, "Design");
  const otherTitles = getToolTitlesByField(toolsArray, "Other");

  return (
    <Container className="ToolCardSmall">
      <Row className="ToolCardSmall2 justify-content-center align-items-center mb-2">
        <Col xs={4} className="field">
          <h2>Front-End</h2>
        </Col>
        <Col className="titles">
          {frontEndTitles.map((title) => (
            <span key={title}>{title} </span>
          ))}
        </Col>
      </Row>
      <Row className="ToolCardSmall2 justify-content-center align-items-center mb-2">
        <Col xs={4} className="field">
          <h2>Back-End</h2>
        </Col>
        <Col className="titles">
          {backEndTitles.map((title) => (
            <span key={title}>{title} </span>
          ))}
        </Col>
      </Row>
      <Row className="ToolCardSmall2 justify-content-center align-items-center mb-2">
        <Col xs={4} className="field">
          <h2>Database</h2>
        </Col>
        <Col className="titles">
          {databaseTitles.map((title) => (
            <span key={title}>{title} </span>
          ))}
        </Col>
      </Row>
      <Row className="ToolCardSmall2 justify-content-center align-items-center mb-2">
        <Col xs={4} className="field">
          <h2>Design</h2>
        </Col>
        <Col className="titles">
          {designTitles.map((title) => (
            <span key={title}>{title} </span>
          ))}
        </Col>
      </Row>
      <Row className="ToolCardSmall2 justify-content-center align-items-center mb-2">
        <Col xs={4} className="field">
          <h2>Other</h2>
        </Col>
        <Col className="titles">
          {otherTitles.map((title) => (
            <span key={title}>{title} </span>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default ToolCardSmall;
