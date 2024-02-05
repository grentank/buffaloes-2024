import { Tweet } from '../../db/models';

export default async function checkAuthor(req, res, next) {
  const { id } = req.params;
  const tweet = await Tweet.findOne({ where: { id } });
  if (tweet.authorId !== res.locals.user.id) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  return next();
}
