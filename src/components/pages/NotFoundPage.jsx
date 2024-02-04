import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';

export default function NotFoundPage() {
  return (
    <Row>
      <Col xs={12} className="text-center"><h2>404 Resource not found</h2></Col>
      <Col xs={12} className="justify-content-center"><Image src="/images/404-not-found.jpg" style={{ width: '100%' }} /></Col>
    </Row>
  );
}
