import Card from "react-bootstrap/Card";
import "./card.css";
function BodyOnlyExample(props) {
  return (
    <Card className="card-container-parent" style={{ maxWidth: "65rem", margin: "auto" }}>
      <Card.Body className="card-container">
        <div className="card-container-right-content">
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.data}</Card.Text>
        </div>
        {/* <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}
        <div className="card-container-right-content">
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.data}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

export default BodyOnlyExample;
