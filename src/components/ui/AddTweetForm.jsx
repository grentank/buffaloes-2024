import React, {
  useState,
} from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function AddTweetForm({ handleSubmit }) {
  const [tweetBody, setTweetBody] = useState('');
  const changeHandler = (e) => setTweetBody(e.target.value);
  return (
    <Form
      className="m-3"
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit(tweetBody);
        setTweetBody('');
      }}
    >
      <InputGroup>
        <Form.Control value={tweetBody} onChange={changeHandler} as="textarea" aria-label="With textarea" />
        <Button type="submit">Tweet!</Button>
      </InputGroup>
    </Form>
  );
}
