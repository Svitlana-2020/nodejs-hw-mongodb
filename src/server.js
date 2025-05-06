import express from 'express';
import cors from 'cors';
// import pino from 'pino-http';
import dotenv from 'dotenv';
// import Contacts from "./db/models/Contacts.js";
import allContactsController from './controllers/contactsController.js';
import contactsByIdController from './controllers/contactsByIdController.js';
import authRouter from './routers/auth.js';
import cookieParser from 'cookie-parser';

import { getEnvVar } from './utils/getEnvVar.js';
import { logger } from './middlewares/logger.js';
import contactsRouter from './routers/contacts.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { UPLOAD_DIR } from './constants/index.js';



export const setupServer = () => {
  const app = express();

  app.use(cors());
  app.use(cookieParser());
  app.use(express.json());
  // app.use(logger);
  app.use("/auth", authRouter);
  app.use('/uploads', express.static(UPLOAD_DIR));

  app.use("/contacts", contactsRouter);
  app.use(notFoundHandler);
  app.use(errorHandler);

  const port = Number(getEnvVar('PORT', 3000));

  app.listen(port, () => console.log(`Server running on ${port} PORT`));
};
