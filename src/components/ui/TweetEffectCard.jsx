import React, { useEffect, useState } from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function TweetEffectCard({ tweet, deleteHandler }) {
  const [timerCount, setTimerCount] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimerCount((prev) => prev + 1);
      console.log('Id:', tweet.id);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <Card className="m-2">
      <Card.Header>
        Seconds Passed:
        {timerCount}
      </Card.Header>
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
            <Button variant="danger" onClick={() => deleteHandler(tweet.id)}>Delete</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
