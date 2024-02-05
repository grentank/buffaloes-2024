import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NavBar from './ui/NavBar';

export default function App({ children, user }) {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12}><NavBar user={user} /></Col>
        <Col xs={10}>{children}</Col>
      </Row>
    </Container>
  );
}
