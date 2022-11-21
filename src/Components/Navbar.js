import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";

function ColorSchemesExample() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
      ></link>
      <Navbar variant="white" className="square border-bottom border-5">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://www.pannamagazine.com/images/ball.png"
              width="40"
              height="40"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="Wedstrijden"> Wedstrijden</Nav.Link>
            <Nav.Link href="Uitslagen">Uitslagen</Nav.Link>
            <Nav.Link href="Stand">Stand</Nav.Link>
            <Nav.Link href="Teams">Teams</Nav.Link>
            <Nav.Link href="Speler">Spelers</Nav.Link>
            <Nav.Link href="Stadion">Stadions</Nav.Link>
          </Nav>
          <Nav className="me-right">
            <Nav.Link href="Gebruiker">Gebruiker</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
