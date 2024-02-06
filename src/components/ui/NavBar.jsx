import axios from 'axios';
import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar({ user }) {
  const logoutHandler = async () => {
    const res = await axios.post('/api/auth/logout');
    if (res.status === 200) {
      window.location.href = '/';
    }
  };
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">{user?.id ? user.name : 'Guest'}</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/effect">Effect</Nav.Link>
          {user?.id ? (
            <>
              <Nav.Link href="/tweets">Tweets</Nav.Link>
              <Nav.Link href="/tweets/client">Client Tweets</Nav.Link>
              <Nav.Link href="/account">Account</Nav.Link>
              <Nav.Link as={Button} onClick={logoutHandler}>Logout</Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link href="/auth/login">Login</Nav.Link>
              <Nav.Link href="/auth/signup">Signup</Nav.Link>
            </>
          )}

        </Nav>
      </Container>
    </Navbar>
  );
}
