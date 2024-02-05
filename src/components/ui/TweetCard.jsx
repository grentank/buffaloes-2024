import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function TweetCard({ tweet, deleteHandler, user }) {
  return (
    <Card className="m-2">
      <Card.Header>DATE</Card.Header>
      <Card.Body>
        <Row>
          <Col xs={2} className="d-flex justify-content-center align-items-start">
            <Image src={tweet?.User?.img || '/images/no-profile-pic.jpg'} alt="profile" style={{ borderRadius: '50%', width: '40%' }} />
          </Col>
          <Col xs={10}>
            <Card.Title>{tweet?.User?.name || 'DELETED'}</Card.Title>
            <Card.Text>
              {tweet.body}
            </Card.Text>
            {user?.id === tweet.authorId && <Button variant="danger" onClick={() => deleteHandler(tweet.id)}>Delete</Button>}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
