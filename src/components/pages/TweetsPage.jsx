import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import axios from 'axios';
import TweetCard from '../ui/TweetCard';
import AddTweetForm from '../ui/AddTweetForm';

export default function TweetsPage() {
  const [tweets, setTweets] = useState([{ id: 1 }, { id: 2 }, { id: 3 }]);
  const handleSubmit = async (tweet) => {
    const res = await axios.post('/api/tweets', { body: tweet });
    if (res.status === 200) {
      setTweets([...tweets, res.data]);
    }
  };
  return (
    <Row>
      <Col xs={12}>
        <AddTweetForm handleSubmit={handleSubmit} />
      </Col>
      {tweets.map((tweet) => (
        <Col xs={12} key={tweet.id}>
          <TweetCard />
        </Col>
      ))}
    </Row>
  );
}
