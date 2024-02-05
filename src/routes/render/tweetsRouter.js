import express from 'express';
import { Tweet, User } from '../../../db/models';
import redirectIfNotAuth from '../../middlewares/redirectIfNotAuth';

const tweetsRouter = express.Router();

tweetsRouter.get('/', redirectIfNotAuth, async (req, res) => {
  const tweets = await Tweet.findAll({ include: User });
  res.render('TweetsPage', { tweets });
});

tweetsRouter.get('/:id', (req, res) => res.render('NotFoundPage'));

export default tweetsRouter;
