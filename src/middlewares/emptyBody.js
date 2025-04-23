import createHttpError from 'http-errors';

export const checkEmptyBody = (req, res, next) => {
  if (!req.body) {
    return next(createHttpError(400, 'no content'));
  }
  next();
};