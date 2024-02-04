import express from 'express';

const tweetsRouter = express.Router();

tweetsRouter.get('/', (req, res) => res.render('TweetsPage'));

tweetsRouter.get('/:id', (req, res) => res.render('NotFoundPage'));

export default tweetsRouter;
