import createHttpError from 'http-errors';
import { findSession, findUser } from '../services/auth.js';

export const authenticate = async (req, res, next) => {
  if (req.path === '/auth/refresh') {
    return next();
  }

  const authorization = req.get('Authorization');
  if (!authorization) {
    return next(createHttpError(401, 'Bearer token is missing'));
  }

  const [bearer, accessToken] = authorization.split(' ');

  

  const session = await findSession({ accessToken });

  if (!session) {
    return next(createHttpError(401, 'Session is not found'));
  }
  
  req.session = session;

  if (session.accessTokenValidUntil < Date.now()) {
    return next(createHttpError(401, 'Access token expired'));
  }

  const user = await findUser({ _id: session.userId });
  if (!user) {
    return next(createHttpError(401, 'No user found'));
  }

  req.user = user;

  next();
};
