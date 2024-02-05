import jwt from 'jsonwebtoken';
import 'dotenv/config';

export default function resLocals(req, res, next) {
  try {
    const { refreshToken } = req.cookies;
    const { user } = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    res.locals.user = user;
  } catch (error) {
    console.log('ResLocals cannot parse refresh token');
  } finally {
    next();
  }
}
