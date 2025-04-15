import express from "express";
import cors from "cors";
import pino from "pino-http";
import dotenv from "dotenv";
// import Contacts from "./db/models/Contacts.js";
import { allContactsController } from "./controllers/contactsController.js";
import { contactsByIdController } from "./controllers/contactsByIdController.js";

dotenv.config();

export const setupServer = () => {
    const app = express ();

    app.use(cors());
    app.use(express.json())

    app.get("/api/contacts", allContactsController)

    app.get("/api/contacts/:id", contactsByIdController)

    const port = Number(process.env.PORT) || 3000;

    app.listen(port, () => console.log(`Server running on ${port} PORT`))

}