import express from 'express';

const authRouter = express.Router();

authRouter.get('/login', (req, res) => res.render('LoginPage'));

authRouter.get('/signup', (req, res) => res.render('SignupPage'));

export default authRouter;
