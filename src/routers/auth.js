import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { authLoginScheme, authRegisterScheme, requestResetEmailSchema, resetPasswordSchema } from '../validation/auth.js';
import { schemeWrapper } from '../utils/schemeWrapper.js';
import { getGoogleOAuthUrlController } from '../controllers/auth.js';
import {
  loginController,
  registerController,
  refreshController,
  logOutController,
  requestResetEmailController,
  resetPasswordController,
} from '../controllers/auth.js';
import { authenticate } from '../middlewares/authenticate.js';
import { loginWithGoogleOAuthSchema} from '../validation/auth.js';
import { loginWithGoogleController } from '../controllers/auth.js';

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
  '/sent-reset-email',
  schemeWrapper(requestResetEmailSchema),
  ctrlWrapper(requestResetEmailController),
);

authRouter.post(
  '/reset-password',
  schemeWrapper(resetPasswordSchema),
  ctrlWrapper(resetPasswordController),
);

authRouter.get('/get-oauth-url', ctrlWrapper(getGoogleOAuthUrlController));

authRouter.post(
  '/confirm-oauth',
  schemeWrapper(loginWithGoogleOAuthSchema),
  ctrlWrapper(loginWithGoogleController),
);

export default authRouter;
