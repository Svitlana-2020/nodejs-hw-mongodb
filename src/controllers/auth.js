import { loginUser, registerUser, logOutUser, refreshUser} from '../services/auth.js';

const setupSession = (res, session) => {
  res
    .cookie('refreshToken', session.refreshToken, {
      httpOnly: true,
      expires: session.refreshTokenValidUntil,
    })
    .cookie('sessionId', session._id.toString(), {
      httpOnly: true,
      expires: session.refreshTokenValidUntil,
    });
};

export const registerController = async (req, res) => {
  await registerUser(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfully registered a user!',
    // data: error.data,
  });
};

export const loginController = async (req, res) => {
  const session = await loginUser(req.body);

  setupSession(res, session);

  res.status(200).json({
    status: 200,
    message: 'Successfully logged in an user!',
    data: {
      accessToken: session.accessToken,
    },
  });
};

export const refreshController = async (req, res) => {
  const session = await refreshUser(req.cookies);

  setupSession(res, session);

  res.json({
    status: 200,
    message: 'Successfully refreshed a user!',
    data: {
      accessToken: session.accessToken,
    },
  });
};


export const logOutController = async (req, res) => {
  if (req.cookies.sessionId) {
    await logOutUser(req.cookies.sessionId);
  }

  res.clearCookie("sessionId");
  res.clearCookie("refreshToken")
  res.status(204).send();
};