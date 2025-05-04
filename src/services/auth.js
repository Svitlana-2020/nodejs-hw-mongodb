import bcrypt from 'bcrypt';
import userCollection from '../db/models/users.js';
import createHttpError from 'http-errors';
import { randomBytes } from 'node:crypto';
import {
  accessTokenLifeTime,
  refreshTokenLifeTime,
} from '../constants/auth.js';
import { SessionCollection } from '../db/models/Session.js';

export const findSession = (query) => {
  return SessionCollection.findOne(query);
};

export const findUser = (query) => {
  return userCollection.findOne(query);
};

export const registerUser = async (payload) => {
  const { email, password } = payload;
  const user = await userCollection.findOne({ email });
  if (user) {
    throw createHttpError(409, 'Email in use');
  }

  const hashPassword = await bcrypt.hash(password, 10);
  return await userCollection.create({ ...payload, password: hashPassword });
};

const createSession = () => {
  const accessToken = randomBytes(30).toString('base64');
  const refreshToken = randomBytes(30).toString('base64');
  const accessTokenValidUntil = Date.now() + accessTokenLifeTime;
  const refreshTokenValidUntil = Date.now() + refreshTokenLifeTime;

  return {
    
    accessToken,
    refreshToken,
    accessTokenValidUntil,
    refreshTokenValidUntil,
  };
};

export const loginUser = async (payload) => {
  const { email, password } = payload;
  const user = await userCollection.findOne({ email });
  if (!user) {
    throw createHttpError(401, 'email or password is incorrect');
  }
  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw createHttpError(401, 'email or password is incorrect');
  }

  const session = createSession();

  await SessionCollection.findOneAndDelete({ userId: user._id });

  return SessionCollection.create({
    userId: user._id,
    ...session,
  });
};

export const refreshUser = async ({ refreshToken, sessionId }) => {
  const session = await findSession({ refreshToken, _id: sessionId });
  if (!session) {
    throw createHttpError(401, 'Session is not found');
  }
  if (session.refreshTokenValidUntil < Date.now()) {
    await SessionCollection.deleteOne({ _id: sessionId });
    throw createHttpError(401, 'Session token expired');
  }
  await SessionCollection.deleteOne({ _id: sessionId });

  const newSession = createSession();

  return SessionCollection.create({
    userId: session.userId,
    ...newSession,
  });
};

export const logOutUser = sessionId => {
    SessionCollection.findOneAndDelete({_id: sessionId})
}
