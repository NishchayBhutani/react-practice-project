import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./headerContent.css";
const HeaderContent = () => {
  return (
    <Card
      className="header-content-card text-center bg-transparent"
      style={{ maxWidth: "18rem" }}
    >
      <Card.Img
        className="header-content-card-img mx-auto"
        variant="top"
        src="https://media.istockphoto.com/id/953870332/photo/beautiful-colorful-mountain-peak-watercolor-painting-background.jpg?b=1&s=170667a&w=0&k=20&c=Fr03f9Mo6Ja0kXPxZot9eDd7k1B31lNIwWRBgJmMhHs="
      />
      <Card.Body>
        <Card.Title>Nishchay Bhutani</Card.Title>
        <Card.Text>CSE YEAR-4, CHITKARA UNIVERSITY PUNJAB</Card.Text>
        <div className="header-content-btn-container">
          <Button className="header-content-card-btn-0" >
            Hire Me
          </Button>
          <Button className="header-content-card-btn-1" variant="info">
            Download CV
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default HeaderContent;
