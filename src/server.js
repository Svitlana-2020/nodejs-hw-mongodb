import express from 'express';
import cors from 'cors';
// import pino from 'pino-http';
import dotenv from 'dotenv';
// import Contacts from "./db/models/Contacts.js";
import allContactsController from './controllers/contactsController.js';
import contactsByIdController from './controllers/contactsByIdController.js';

import { getEnvVar } from './utils/getEnvVar.js';
import { logger } from './middlewares/logger.js';
import contactsRouter from './routers/contacts.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { errorHandler } from './middlewares/errorHandler.js';

export const setupServer = () => {
  const app = express();

  app.use(cors());
  app.use(express.json());
  // app.use(logger);
  app.use("/", contactsRouter);
  app.use(notFoundHandler);
  app.use(errorHandler);

  const port = Number(getEnvVar('PORT', 3000));

  app.listen(port, () => console.log(`Server running on ${port} PORT`));
};
