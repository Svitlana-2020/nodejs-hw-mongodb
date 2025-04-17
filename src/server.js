import express from 'express';
import cors from 'cors';
import pinohttpv from 'pino-http';
import dotenv from 'dotenv';
// import Contacts from "./db/models/Contacts.js";
// import { allContactsController } from "./controllers/contactsController.js";
// import { contactsByIdController } from "./controllers/contactsByIdController.js";
import getAllContacts from './services/contacts.js';
import getContactById from './services/contactsById.js';

import { getEnvVar } from './utils/getEnvVar.js';

// dotenv.config();

export const setupServer = () => {
  const app = express();

  app.use(cors());
  app.use(express.json());

  const logger = pinohttpv({
    transport: {
      target: 'pino-pretty',
    },
  });

  app.use(logger);

  app.get('/contacts', async (req, res) => {
    const data = await getAllContacts();
    res.json({
      status: 200,
      message: 'Successfully found contacts!',
      data,
    });
  });

  app.get('/contacts/:contactId', async (req, res) => {
    const { contactId } = req.params;
    const data = await getContactById(contactId);

    if (!data) {
      return res.status(404).json({
        status: 404,
        message: 'Contact not found!',
      });
    }

    res.json({
      status: 200,
      message: `Successfully found contact with id: ${contactId}!`,
      data: data,
    });
  });

  const port = Number(getEnvVar('PORT', 3000));

  app.listen(port, () => console.log(`Server running on ${port} PORT`));
};
