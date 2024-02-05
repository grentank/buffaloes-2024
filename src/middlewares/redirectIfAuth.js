export default function redirectIfAuth(req, res, next) {
  if (!res.locals?.user?.id) return next();
  return res.redirect('/');
}
