import express from 'express';
import redirectIfAuth from '../../middlewares/redirectIfAuth';

const authRouter = express.Router();

authRouter.get('/login', redirectIfAuth, (req, res) => res.render('LoginPage'));

authRouter.get('/signup', redirectIfAuth, (req, res) => res.render('SignupPage'));

export default authRouter;
