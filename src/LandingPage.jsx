import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/main');
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100">
      <div className="w-100">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">My App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
              <Button variant="outline-success" onClick={handleButtonClick}>
                Go to Main Page
              </Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container className="mt-3">
          <h1>Welcome to My App</h1>
          <p>This is the landing page.</p>
        </Container>
      </div>
    </div>
  );
};

export default LandingPage;
