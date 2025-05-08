import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { authLoginScheme, authRegisterScheme, requestResetEmailSchema, resetPasswordSchema } from '../validation/auth.js';
import { schemeWrapper } from '../utils/schemeWrapper.js';
import {
  loginController,
  registerController,
  refreshController,
  logOutController,
  requestResetEmailController,
  resetPasswordController,
} from '../controllers/auth.js';
import { authenticate } from '../middlewares/authenticate.js';

const authRouter = Router();

authRouter.post(
  '/register',
  schemeWrapper(authRegisterScheme),
  ctrlWrapper(registerController),
);
authRouter.post(
  '/login',
  schemeWrapper(authLoginScheme),
  ctrlWrapper(loginController),
);
authRouter.post('/refresh', refreshController);
authRouter.post('/logout', ctrlWrapper(logOutController))

authRouter.post(
  '/send-reset-email',
  schemeWrapper(requestResetEmailSchema),
  ctrlWrapper(requestResetEmailController),
);

authRouter.post(
  '/reset-pwd',
  schemeWrapper(resetPasswordSchema),
  ctrlWrapper(resetPasswordController),
);

export default authRouter;
