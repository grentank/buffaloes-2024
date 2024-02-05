import express from 'express';
import bcrypt from 'bcrypt';
import { User } from '../../../db/models';
import generateTokens from '../../utils/generateTokens';
import cookiesConfig from '../../config/cookiesConfig';

const apiAuthRouter = express.Router();

apiAuthRouter.post('/signup', async (req, res) => {
  const { email, name, password } = req.body;
  if (!email || !name || !password) {
    return res.status(400).json({
      message: 'Please provide email, name and password',
    });
  }
  const hashPass = await bcrypt.hash(password, 10);
  const [newUser, created] = await User.findOrCreate({
    where: { email },
    defaults: { name, hashpass: hashPass },
  });
  if (!created) {
    return res.status(400).json({
      message: 'User already exists',
    });
  }
  // Юзер содан, записать куки
  const user = {
    img: newUser.img, id: newUser.id, name: newUser.name, email: newUser.email,
  };
  const { accessToken, refreshToken } = generateTokens({ user });
  res
    .cookie('accessToken', accessToken, cookiesConfig.access)
    .cookie('refreshToken', refreshToken, cookiesConfig.refresh)
    .sendStatus(200);
});

apiAuthRouter.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      message: 'Please provide email, name and password',
    });
  }
  const targetUser = await User.findOne({ where: { email } });
  if (!targetUser) {
    return res.status(400).json({
      message: 'No such email',
    });
  }

  const isValidPassword = await bcrypt.compare(password, targetUser.hashpass);
  if (!isValidPassword) {
    return res.status(400).json({
      message: 'Invalid password',
    });
  }

  // Юзер залогинен, записать куки
  const user = {
    img: targetUser.img, id: targetUser.id, name: targetUser.name, email: targetUser.email,
  };
  const { accessToken, refreshToken } = generateTokens({ user });
  res
    .cookie('accessToken', accessToken, cookiesConfig.access)
    .cookie('refreshToken', refreshToken, cookiesConfig.refresh)
    .sendStatus(200);
});

apiAuthRouter.post('/logout', (req, res) => {
  res
    .clearCookie('accessToken')
    .clearCookie('refreshToken')
    .sendStatus(200);
});

export default apiAuthRouter;
