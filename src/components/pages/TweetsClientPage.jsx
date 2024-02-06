import React, { useEffect, useState } from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import axios from 'axios';
import AddTweetForm from '../ui/AddTweetForm';
import TweetEffectCard from '../ui/TweetEffectCard';

export default function TweetsClientPage() {
  const [tweets, setTweets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const handleSubmit = (tweet) => {
    setTweets([...tweets, { body: tweet, id: Math.random(), User: null }]);
  };
  const deleteHandler = (tweetId) => {
    setTweets(tweets.filter((tweet) => tweet.id !== tweetId));
  };
  useEffect(() => {
    axios('/api/tweets')
      .then((res) => {
        setTweets(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Row>
      {isLoading ? (
        <Col xs={12}>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Col>
      ) : (
        <>
          <Col xs={12}>
            <AddTweetForm handleSubmit={handleSubmit} />
          </Col>
          {tweets.map((tweet) => (
            <Col xs={12} key={tweet.id}>
              <TweetEffectCard user={null} tweet={tweet} deleteHandler={deleteHandler} />
            </Col>
          ))}
        </>
      )}

    </Row>
  );
}
