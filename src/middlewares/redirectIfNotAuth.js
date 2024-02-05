export default function redirectIfNotAuth(req, res, next) {
  if (res.locals?.user?.id) return next();
  return res.redirect('/');
}
