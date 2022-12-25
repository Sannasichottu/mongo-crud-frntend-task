import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
    return(
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand >Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/createForm">CreateUser</Nav.Link>
            <Nav.Link href="/updateForm">UpdateUser</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default Navigation;