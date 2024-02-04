import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function AddTweetForm({ handleSubmit }) {
  const [tweetBody, setTweetBody] = useState('');
  return (
    <Form
      className="m-3"
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit(tweetBody);
      }}
    >
      <InputGroup>
        <Form.Control value={tweetBody} onChange={(e) => setTweetBody(e.target.value)} as="textarea" aria-label="With textarea" />
        <Button type="submit">Tweet!</Button>
      </InputGroup>
    </Form>
  );
}
