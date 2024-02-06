import express from 'express';
import { User, Tweet } from '../../../db/models';
import redirectIfNotAuth from '../../middlewares/redirectIfNotAuth';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('IndexPage');
});

router.get('/account', redirectIfNotAuth, async (req, res) => {
  const userWithTweets = await User.findOne({ where: { id: res.locals.user.id }, include: Tweet });
  res.render('AccountPage', { amountOfTweets: userWithTweets.Tweets.length });
});

router.get('/effect', (req, res) => res.render('EffectPage'));

router.get('*', (req, res) => res.render('NotFoundPage'));

export default router;
