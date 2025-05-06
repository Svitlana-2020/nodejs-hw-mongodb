import { Router } from 'express';
import getAllContacts from '../services/contacts.js';
import getContactById from '../services/contactsById.js';
import allContactsController from '../controllers/contactsController.js';
import contactsByIdController from '../controllers/contactsByIdController.js';
import postContact from '../controllers/addContact.js';
import patchContactController from '../controllers/patchContactsController.js';
import delContact from '../controllers/deleteContactController.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { schemeWrapper } from '../utils/schemeWrapper.js';
import {
  contactAddScheme,
  contactUpdateScheme,
} from '../validation/contacts.js';
import { isValidId } from '../middlewares/isValidId.js';
import { authenticate } from '../middlewares/authenticate.js';
import { upload } from '../middlewares/multer.js';

const contactsRouter = Router();

contactsRouter.use(authenticate);

contactsRouter.get('/', ctrlWrapper(allContactsController));

contactsRouter.get(
  '/:contactId',
  isValidId,
  ctrlWrapper(contactsByIdController),
);

contactsRouter.post(
  '/', upload.single('photo'),
  schemeWrapper(contactAddScheme),
  ctrlWrapper(postContact),
);

contactsRouter.patch(
  '/:contactId',
  isValidId,
  upload.single('photo'),
  schemeWrapper(contactUpdateScheme),
  ctrlWrapper(patchContactController),
);

contactsRouter.delete(
  '/:contactId',
  isValidId,
  ctrlWrapper(delContact),
);

export default contactsRouter;
