import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ProfilePicEdit from '../ui/ProfilePicEdit';

export default function AccountPage({ user, amountOfTweets }) {
  return (
    <Row>
      <Col xs={4}>
        <ProfilePicEdit user={user} />
      </Col>
      <Col xs={8}>
        <Row>
          <Col xs={12}>
            <p>{user.name}</p>
          </Col>
          <Col xs={12}>
            <p>{user.email}</p>
          </Col>
          <Col xs={12}>
            <p>{amountOfTweets}</p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
