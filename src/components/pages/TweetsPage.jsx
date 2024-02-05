import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import axios from 'axios';
import TweetCard from '../ui/TweetCard';
import AddTweetForm from '../ui/AddTweetForm';

export default function TweetsPage({ tweets: initTweets, user }) {
  const [tweets, setTweets] = useState(initTweets);
  const handleSubmit = async (tweet) => {
    const res = await axios.post('/api/tweets', { body: tweet });
    if (res.status === 200) {
      setTweets([...tweets, res.data]);
    }
  };
  const deleteHandler = async (tweetId) => {
    const res = await axios.delete(`/api/tweets/${tweetId}`);
    if (res.status === 200) {
      setTweets(tweets.filter((tweet) => tweet.id !== tweetId));
    }
  };
  return (
    <Row>
      <Col xs={12}>
        <AddTweetForm handleSubmit={handleSubmit} />
      </Col>
      {tweets.map((tweet) => (
        <Col xs={12} key={tweet.id}>
          <TweetCard user={user} tweet={tweet} deleteHandler={deleteHandler} />
        </Col>
      ))}
    </Row>
  );
}
