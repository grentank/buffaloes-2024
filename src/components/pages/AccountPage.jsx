import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ProfilePicEdit from '../ui/ProfilePicEdit';

export default function AccountPage() {
  return (
    <Row>
      <Col xs={4}>
        <ProfilePicEdit />
      </Col>
      <Col xs={8}>
        <Row>
          <Col xs={12}>
            <p>Name</p>
          </Col>
          <Col xs={12}>
            <p>Email</p>
          </Col>
          <Col xs={12}>
            <p>Total tweets</p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
