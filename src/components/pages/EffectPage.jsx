import React, { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import EffectCard from '../ui/EffectCard';

export default function EffectPage() {
  const [isShown, setIsShown] = useState(false);
  const [joke, setJoke] = useState(null);
  return (
    <Row>
      <Col xs={3}>
        <Button onClick={() => setIsShown((prev) => !prev)}>Show</Button>
      </Col>
      <Col xs={9}>
        {isShown && <EffectCard joke={joke} setJoke={setJoke} />}
      </Col>
      <Col xs={12} className="text-center">
        {joke || 'Push the button'}
      </Col>
    </Row>
  );
}
