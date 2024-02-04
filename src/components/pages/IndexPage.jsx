import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';

export default function IndexPage() {
  return (
    <Row>
      <Col xs={12}>
        <h1>Twitter</h1>
      </Col>
      <Col xs={12}>
        <Image src="/images/start-logo.jpg" style={{ width: '100%' }} />
      </Col>
    </Row>
  );
}
