import express from 'express';
import { Tweet } from '../../../db/models';

const apiTweetsRouter = express.Router();

apiTweetsRouter
  .route('/')
  .get((req, res) => {
    res.json([]);
  })
  .post(async (req, res) => {
    const newTweet = await Tweet.create(req.body);
    res.json(newTweet);
  });

export default apiTweetsRouter;
