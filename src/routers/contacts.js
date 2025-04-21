import { Router } from "express";
import getAllContacts from "../services/contacts.js"
import getContactById from "../services/contactsById.js"
import allContactsController from "../controllers/contactsController.js";
import contactsByIdController from "../controllers/contactsByIdController.js";
import postContact from "../controllers/addContact.js"
import patchContactController from "../controllers/patchContactsController.js"
import delContact from "../controllers/deleteContactController.js"
import { ctrlWrapper } from "../utils/ctrlWrapper.js";

const contactsRouter = Router ();

    contactsRouter.get("/contacts", ctrlWrapper(allContactsController))

    contactsRouter.get("/contacts/:contactId", ctrlWrapper(contactsByIdController))

    contactsRouter.post("/contacts", ctrlWrapper(postContact) )

    contactsRouter.patch("/contacts/:contactId", ctrlWrapper(patchContactController))

    contactsRouter.delete("/contacts/:contactId", ctrlWrapper(delContact))

    export default contactsRouter;