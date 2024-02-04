import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">Buffalitter</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/tweets">Tweets</Nav.Link>
          <Nav.Link href="/account">Account</Nav.Link>
          <Nav.Link href="/auth/login">Login</Nav.Link>
          <Nav.Link href="/auth/signup">Signup</Nav.Link>
          <Nav.Link href="/logout">Logout</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
