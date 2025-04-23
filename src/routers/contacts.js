import { Router } from "express";
import getAllContacts from "../services/contacts.js"
import getContactById from "../services/contactsById.js"
import allContactsController from "../controllers/contactsController.js";
import contactsByIdController from "../controllers/contactsByIdController.js";
import postContact from "../controllers/addContact.js"
import patchContactController from "../controllers/patchContactsController.js"
import delContact from "../controllers/deleteContactController.js"
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { schemeWrapper } from "../utils/schemeWrapper.js";
import { contactAddScheme, contactUpdateScheme } from "../validation/contacts.js";
import {isValidId} from "../middlewares/isValidId.js"
import { checkEmptyBody } from "../middlewares/emptyBody.js";

const contactsRouter = Router ();

    contactsRouter.get("/contacts", ctrlWrapper(allContactsController))

    contactsRouter.get("/contacts/:contactId", isValidId, ctrlWrapper(contactsByIdController))

    contactsRouter.post("/contacts", checkEmptyBody, schemeWrapper(contactAddScheme), ctrlWrapper(postContact) )

    contactsRouter.patch("/contacts/:contactId", checkEmptyBody, isValidId, schemeWrapper(contactUpdateScheme),ctrlWrapper(patchContactController))

    contactsRouter.delete("/contacts/:contactId", isValidId, ctrlWrapper(delContact))

    export default contactsRouter;